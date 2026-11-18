import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE_PATH = ROOT / "assets" / "room-seven-items-v3.png"
OUTPUT_DIR = ROOT / "assets" / "items"
SCALE = 4


ITEMS = {
    "photo": {
        "polygons": [[(111, 1014), (267, 981), (279, 989), (307, 1150), (298, 1164), (164, 1195), (145, 1185), (111, 1040)]]
    },
    "cup": {
        "polygons": [[(537, 851), (584, 851), (585, 869), (584, 890), (579, 900), (549, 902), (541, 897), (537, 862)]],
        "ellipses": [(536, 845, 586, 864)],
        "handle_outer": (576, 858, 604, 898),
        "handle_inner": (583, 867, 596, 887)
    },
    "key": {
        "polygons": [[(202, 633), (211, 631), (218, 636), (230, 634), (239, 637), (241, 646), (237, 653), (220, 651), (213, 646), (204, 645), (200, 640)]],
        "ellipses": [(200, 631, 216, 646)]
    },
    "box": {
        "polygons": [[(788, 1105), (944, 1075), (970, 1080), (1023, 1098), (1023, 1468), (947, 1490), (840, 1484), (813, 1465), (792, 1210), (742, 1172), (748, 1160), (784, 1118)]]
    },
    "medicine": {
        "polygons": [
            [(132, 1218), (221, 1180), (263, 1194), (278, 1216), (274, 1244), (224, 1264), (215, 1285), (132, 1254)],
            [(221, 1180), (253, 1186), (268, 1180), (284, 1190), (298, 1210), (293, 1232), (277, 1244), (270, 1210)],
            [(278, 1222), (324, 1218), (347, 1240), (346, 1254), (320, 1267), (277, 1263), (264, 1247)]
        ]
    },
    "playlist": {
        "polygons": [[(389, 906), (412, 897), (438, 902), (470, 925), (470, 935), (425, 948), (410, 945), (389, 920)]],
        "ellipses": [(497, 925, 513, 944), (603, 936, 620, 954)],
        "lines": [
            [(460, 932), (486, 948), (530, 957), (566, 952), (600, 940), (624, 925), (637, 910), (638, 898), (630, 891), (620, 896), (619, 910), (626, 926)],
            [(506, 929), (516, 917), (528, 916), (538, 925), (544, 938), (567, 946), (595, 942)],
            [(607, 944), (594, 937), (576, 934), (553, 936), (532, 940), (512, 938)]
        ],
        "screen": [(399, 908), (415, 902), (436, 907), (460, 924), (459, 931), (426, 940), (414, 936), (400, 919)]
    },
    "rent": {
        "polygons": [[(334, 1145), (358, 1132), (383, 1124), (401, 1127), (471, 1184), (484, 1200), (485, 1214), (466, 1226), (441, 1234), (421, 1235), (398, 1227), (348, 1182), (330, 1161), (328, 1153)]],
        "screen": [(345, 1148), (365, 1137), (385, 1131), (398, 1134), (464, 1187), (475, 1200), (473, 1208), (452, 1217), (433, 1220), (416, 1216), (355, 1168), (341, 1156)]
    }
}


def scaled_points(points):
    return [(round(x * SCALE), round(y * SCALE)) for x, y in points]


def scaled_box(box):
    return tuple(round(value * SCALE) for value in box)


def extract_item(source, item_id, definition):
    canvas_size = (source.width * SCALE, source.height * SCALE)
    mask = Image.new("L", canvas_size, 0)
    mask_draw = ImageDraw.Draw(mask)

    if "handle_outer" in definition:
        mask_draw.ellipse(scaled_box(definition["handle_outer"]), fill=255)
        mask_draw.ellipse(scaled_box(definition["handle_inner"]), fill=0)

    for polygon in definition.get("polygons", []):
        mask_draw.polygon(scaled_points(polygon), fill=255)

    for ellipse in definition.get("ellipses", []):
        mask_draw.ellipse(scaled_box(ellipse), fill=255)

    for line in definition.get("lines", []):
        mask_draw.line(scaled_points(line), fill=255, width=3 * SCALE, joint="curve")

    mask = mask.filter(ImageFilter.GaussianBlur(0.45 * SCALE))
    source_large = source.resize(canvas_size, Image.Resampling.LANCZOS).convert("RGBA")

    if "screen" in definition:
        screen_draw = ImageDraw.Draw(source_large)
        screen_draw.polygon(scaled_points(definition["screen"]), fill=(25, 31, 38, 255))
        screen_draw.line(scaled_points(definition["screen"][:3]), fill=(60, 69, 77, 255), width=SCALE)

    source_large.putalpha(mask)
    alpha_box = mask.getbbox()
    if not alpha_box:
        raise RuntimeError(f"Empty mask for {item_id}")

    margin = 5 * SCALE
    crop_box = (
        max(0, alpha_box[0] - margin),
        max(0, alpha_box[1] - margin),
        min(canvas_size[0], alpha_box[2] + margin),
        min(canvas_size[1], alpha_box[3] + margin)
    )
    extracted = source_large.crop(crop_box)
    output_size = (round(extracted.width / SCALE), round(extracted.height / SCALE))
    extracted = extracted.resize(output_size, Image.Resampling.LANCZOS)
    output_path = OUTPUT_DIR / f"{item_id}-scene.png"
    extracted.save(output_path)

    original_box = tuple(round(value / SCALE) for value in crop_box)
    return {
        "id": item_id,
        "src": f"./assets/items/{item_id}-scene.png",
        "x": original_box[0],
        "y": original_box[1],
        "width": original_box[2] - original_box[0],
        "height": original_box[3] - original_box[1],
        "anchorX": 0.5,
        "anchorY": 0.5
    }


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE_PATH).convert("RGB")
    metadata = []
    for item_id, definition in ITEMS.items():
        metadata.append(extract_item(source, item_id, definition))
    (OUTPUT_DIR / "scene-items.json").write_text(json.dumps({
        "sourceWidth": source.width,
        "sourceHeight": source.height,
        "items": metadata
    }, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
