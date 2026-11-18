const furnitureItems = [
  {
    id: "wall_cabinet", name: "厨房吊柜", room: "kitchen", x: 14, y: 20, marker: true,
    intro: "柜门背后是把碗碟收纳起来的木质箱体。",
    principle: "侧板、顶板和底板组成承重箱体，隔板分担重量，铰链让柜门绕固定轴转动。",
    parts: [["柜体板材", "侧板、顶板和底板共同组成柜子的骨架。"], ["隔板", "将柜体空间分层并承托碗碟。"], ["柜门", "遮挡灰尘，也让储物空间保持整洁。"], ["铰链与把手", "铰链连接门和柜体，把手方便开启。"]]
  },
  {
    id: "base_cabinet", name: "厨房地柜", room: "kitchen", x: 14, y: 64, marker: true,
    intro: "厨房里的低矮柜子藏着锅具和储藏品。",
    principle: "地柜箱体将台面的重量传到地面，柜门通过铰链连接；柜体通常会避开水管和电线。",
    parts: [["箱体", "侧板与底板构成支撑台面的柜体。"], ["隔板", "把柜内空间分开，承托日常用品。"], ["柜门", "保护柜内物品并遮挡灰尘。"], ["铰链与把手", "使柜门可以开合。"]]
  },
  {
    id: "counter", name: "厨房台面", room: "kitchen", x: 5, y: 55, marker: true,
    intro: "做饭时的工作台面，下面由地柜支撑。",
    principle: "台面板将锅具和食材的重量分散到柜体；表面涂层或饰面帮助抵御水和污渍。",
    parts: [["台面板", "提供平整的操作表面并分散重量。"], ["防水饰面", "减少水和污渍进入基材。"], ["支撑柜体", "将台面及物品的重量传向地面。"], ["连接件", "把台面固定在柜体上。"]]
  },
  {
    id: "dining_table", name: "餐桌", room: "kitchen", x: 46, y: 70, marker: true,
    intro: "杯子和盘子停靠的地方，是一张小小餐桌。",
    principle: "桌面承托物品，桌腿将重量传到地面，横撑和连接件帮助防止桌子摇晃。",
    parts: [["桌面", "提供放置食物和餐具的平面。"], ["桌腿", "将桌面承受的重量传到地面。"], ["横撑", "连接桌腿，提高整体稳定性。"], ["连接件", "把桌面、桌腿和横撑固定起来。"]]
  },
  {
    id: "kitchen_window", name: "厨房窗户", room: "kitchen", x: 50, y: 24, marker: true,
    intro: "窗子让午后的光照进厨房，也能挡住外面的风雨。",
    principle: "窗框固定玻璃，密封条填补缝隙；能开启的窗扇通过五金件与窗框连接。",
    parts: [["窗框", "固定在墙洞内，承托窗扇和玻璃。"], ["玻璃", "透光并隔开室内外空气。"], ["窗扇", "将玻璃和窗框连接成可开启的部分。"], ["密封条与五金", "填补缝隙，帮助窗扇开合和锁定。"]]
  },
  {
    id: "sofa", name: "沙发", room: "living", x: 50, y: 62, marker: true,
    intro: "看起来软乎乎的沙发，里面有结实的骨架。",
    principle: "骨架承受重量，弹簧或织带提供支撑，泡棉和布套决定坐感与外观。",
    parts: [["沙发骨架", "木材或金属框架承受身体重量。"], ["弹簧与织带", "在骨架上提供有弹性的支撑。"], ["坐垫填充", "泡棉或纤维分散压力，让坐感柔软。"], ["外层布套", "包裹填充物，保护内部结构。"]]
  },
  {
    id: "shelf", name: "墙上搁板", room: "living", x: 72, y: 26, marker: true,
    intro: "几本书和小物件在墙上的搁板上排队。",
    principle: "搁板由托架支撑，托架和固定件把重量传给墙体；载重取决于材料和墙体条件。",
    parts: [["搁板", "承托书籍和摆件的水平板材。"], ["托架", "从下方支撑搁板并传递重量。"], ["固定螺丝", "将托架与搁板、墙体连接。"], ["墙体锚固件", "配合合适的墙体固定方式分散拉力。"]]
  },
  {
    id: "side_table", name: "边桌", room: "living", x: 10, y: 67, marker: true,
    intro: "台灯旁的小边桌，有桌面、支架和脚。",
    principle: "桌面将重量传递到桌腿，横向连接结构帮助桌子保持稳定。",
    parts: [["桌面", "承托台灯和书本。"], ["桌腿", "支撑桌面并传递重量。"], ["横撑", "连接桌腿并减少晃动。"], ["连接件", "固定木板和支架。"]]
  },
  {
    id: "living_window", name: "客厅窗户", room: "living", x: 50, y: 24, marker: true,
    intro: "客厅窗户把森林和湖边的光带进屋子。",
    principle: "窗框承托玻璃和窗扇，密封条减少缝隙漏风，五金件负责开合。",
    parts: [["窗框", "固定在墙洞中并支撑窗扇。"], ["玻璃", "透过自然光，隔开室内外空气。"], ["窗扇", "承托玻璃，可根据结构开启。"], ["密封条与五金", "减少缝隙漏风并辅助开关窗。"]]
  },
  {
    id: "plant", name: "盆栽", room: "living", x: 91, y: 55, marker: true,
    intro: "一盆植物不只是绿叶，还有根、土和一个家。",
    principle: "根系从土壤吸收水分与养分，叶片利用光合作用制造有机物；花盆承托土壤。",
    parts: [["花盆", "容纳土壤并承托植物。"], ["土壤", "支撑根系，储存水分和养分。"], ["根与茎", "根吸收水分，茎支撑并运输物质。"], ["叶片", "利用光、水和二氧化碳进行光合作用。"]]
  },
  {
    id: "rug", name: "地毯", room: "living", x: 50, y: 91, marker: true,
    intro: "阿斑脚下的地毯，由纤维和底层结合而成。",
    principle: "表层纤维提供脚感，底布固定纤维；部分地毯还带防滑背层。",
    parts: [["表层纤维", "形成触感和图案。"], ["底布", "固定纤维并维持地毯形状。"], ["防滑背层", "帮助地毯在地面保持位置。"], ["包边", "保护边缘，减少磨损和散线。"]]
  },
  {
    id: "kitchen_curtain", name: "厨房窗帘", room: "kitchen", x: 33, y: 15, marker: true,
    intro: "窗边的布帘把光线变得柔和。",
    principle: "织物由经纬纱线交织而成，挂钩或帘环将布帘固定到窗帘杆。",
    parts: [["帘布", "由纱线织成，遮挡部分光线。"], ["窗帘杆", "承托整幅窗帘。"], ["挂环", "连接帘布和窗帘杆。"], ["固定支架", "把窗帘杆固定在墙上。"]]
  },
  {
    id: "living_curtain", name: "客厅窗帘", room: "living", x: 33, y: 15, marker: true,
    intro: "布帘遮挡光线，也为屋子增加一层隐私。",
    principle: "帘布通过挂环连接杆体，移动布帘可以改变遮光范围。",
    parts: [["帘布", "由纱线织成，遮挡部分光线。"], ["窗帘杆", "承托整幅窗帘。"], ["挂环", "连接帘布和窗帘杆。"], ["固定支架", "把窗帘杆固定在墙上。"]]
  },
  {
    id: "picture", name: "墙上画框", room: "living", x: 9, y: 36, marker: true,
    intro: "画框把一张风景留在墙上。",
    principle: "框条围住画芯，背板提供支撑，挂件将整个画框固定在墙上。",
    parts: [["外框", "保护画芯边缘并提供装饰。"], ["画芯", "承载图像的纸张或画布。"], ["背板", "从背面固定画芯。"], ["挂件", "把画框悬挂在墙面上。"]]
  },
  {
    id: "books", name: "书本", room: "living", x: 65, y: 18, marker: true,
    intro: "书架上的书，纸张被装订成可以翻开的整体。",
    principle: "书页折叠或裁切后，通过胶粘或缝线与书脊连接，封面保护内页。",
    parts: [["封面", "保护书页并标识内容。"], ["书页", "印刷或书写文字和图像。"], ["书脊", "连接封面并保护装订处。"], ["装订材料", "胶或缝线将书页连接在一起。"]]
  },
  {
    id: "jars", name: "调味罐", room: "kitchen", x: 76, y: 34, marker: true,
    intro: "小罐子把调料收好，做饭时伸手就能拿到。",
    principle: "罐身容纳内容物，盖子和密封结构减少空气与水分进入。",
    parts: [["罐身", "容纳并保护调料。"], ["罐盖", "遮住开口，方便取用。"], ["密封圈", "填补盖与罐口之间的缝隙。"], ["标签", "记录罐内调料的名称。"]]
  },
  {
    id: "dish", name: "碗与餐具", room: "kitchen", x: 61, y: 59, marker: true,
    intro: "餐桌上的碗和餐具，是每天吃饭的好帮手。",
    principle: "碗的凹面容纳食物；瓷器表面釉层使表面更平滑，便于清洁。",
    parts: [["碗身", "承托和盛放食物。"], ["釉层", "覆盖瓷胎，形成平滑表面。"], ["碗底", "支撑碗身并减少直接接触桌面。"], ["餐具", "帮助夹取或舀取食物。"]]
  }
];

const furnitureArt = {
  panel: `<path d="M14 20 H82 V76 H14Z" fill="#c39060" stroke="#755139" stroke-width="3"/><path d="M19 27 H77 M19 38 H77 M19 51 H77 M19 64 H77" stroke="#a9774e" stroke-width="2"/>`,
  shelf: `<path d="M13 36 H83 V57 H13Z" fill="#bd8c5f" stroke="#73503b" stroke-width="3"/><path d="M18 42 H78 M18 48 H78" stroke="#d5ad7c" stroke-width="2"/>`,
  door: `<path d="M22 13 H74 V83 H22Z" fill="#cea373" stroke="#755139" stroke-width="3"/><path d="M28 19 H68 V77 H28Z" fill="none" stroke="#ae7d51" stroke-width="2"/><circle cx="61" cy="49" r="3" fill="#584535"/>`,
  hardware: `<path d="M24 23 H43 V66 H24Z M53 23 H72 V66 H53Z" fill="#a5afa2" stroke="#e1dcc7" stroke-width="2"/><path d="M43 28 H53 V61 H43Z" fill="#6d8176"/><circle cx="33" cy="33" r="3" fill="#53665d"/><circle cx="63" cy="56" r="3" fill="#53665d"/>`,
  legs: `<path d="M19 19 H28 V76 H19Z M68 19 H77 V76 H68Z M28 28 H68 V36 H28Z" fill="#b88254" stroke="#745039" stroke-width="3"/>`,
  brace: `<path d="M16 26 H80 V34 H16Z M25 58 H71 V66 H25Z" fill="#b88c60" stroke="#73543d" stroke-width="3"/><path d="M22 32 L70 60 M74 32 L26 60" stroke="#d9b282" stroke-width="4"/>`,
  screws: `<path d="M25 20 L33 28 L63 58 L55 66 L25 36Z M64 20 L72 28 L42 58 L34 50Z" fill="#b9c7b9" stroke="#70867b" stroke-width="2"/><path d="M23 18 L35 30 M62 18 L74 30" stroke="#e1d7b9" stroke-width="4"/>`,
  glass: `<path d="M18 15 H78 V81 H18Z" fill="#a7c8c3" fill-opacity=".7" stroke="#d9e6d8" stroke-width="3"/><path d="M25 72 L67 22 M39 73 L74 31" stroke="#eff5e5" stroke-width="3" opacity=".8"/>`,
  frame: `<path d="M15 14 H81 V82 H15Z M24 23 V73 H72 V23Z" fill="#cba479" fill-rule="evenodd" stroke="#7a5942" stroke-width="3"/><path d="M45 23 H51 V73 H45Z M24 45 H72 V51 H24Z" fill="#eee2c7"/>`,
  seal: `<path d="M20 17 H76 V79 H20Z M27 24 V72 H69 V24Z" fill="#9aad9d" fill-rule="evenodd" stroke="#d7e0d0" stroke-width="2"/><path d="M35 47 H61 V52 H35Z" fill="#d4b77b"/>`,
  sofa_frame: `<path d="M14 43 H82 V72 H14Z M18 27 H78 V43 H18Z M14 72 H23 V80 H14Z M73 72 H82 V80 H73Z" fill="#b68a61" stroke="#79593e" stroke-width="3"/><path d="M25 34 V67 M48 34 V67 M71 34 V67" stroke="#d7ad7f" stroke-width="3"/>`,
  springs: `<path d="M15 27 Q24 17 33 27 Q42 37 51 27 Q60 17 69 27 Q76 34 82 27 M15 47 Q24 37 33 47 Q42 57 51 47 Q60 37 69 47 Q76 54 82 47 M15 67 Q24 57 33 67 Q42 77 51 67 Q60 57 69 67 Q76 74 82 67" fill="none" stroke="#c5d0c1" stroke-width="4"/>`,
  cushion: `<rect x="14" y="25" width="68" height="47" rx="12" fill="#e3c995" stroke="#b89b70" stroke-width="3"/><path d="M20 48 H76 M48 30 V67" stroke="#c4ab7a" stroke-width="2"/>`,
  fabric: `<path d="M20 20 H76 L83 72 H13Z" fill="#8bab87" stroke="#54715c" stroke-width="3"/><path d="M23 34 H73 M20 47 H76 M17 60 H79" stroke="#afc8a3" stroke-width="2"/>`,
  bracket: `<path d="M22 18 H30 V67 H77 V75 H22Z" fill="#9caea1" stroke="#d7ddd0" stroke-width="3"/><path d="M30 60 L61 30" stroke="#9caea1" stroke-width="6"/>`,
  anchor: `<path d="M30 15 H66 L62 73 H34Z" fill="#d5c4a3" stroke="#efe0c2" stroke-width="3"/><path d="M36 28 H60 M36 38 H60 M37 48 H59 M38 58 H58" stroke="#9b8b70" stroke-width="3"/>`,
  pot: `<path d="M17 28 H79 L72 78 H24Z" fill="#b96e55" stroke="#794b3d" stroke-width="3"/><path d="M14 25 H82 V34 H14Z" fill="#d18b6a"/><path d="M25 43 H72" stroke="#d99a7c" stroke-width="2"/>`,
  soil: `<ellipse cx="48" cy="50" rx="32" ry="17" fill="#856348" stroke="#c6a47a" stroke-width="3"/><circle cx="35" cy="48" r="3" fill="#d2b48a"/><circle cx="57" cy="54" r="3" fill="#d2b48a"/><circle cx="61" cy="43" r="2" fill="#d2b48a"/>`,
  roots: `<path d="M48 15 V55 M48 55 L29 75 M48 55 L66 76 M48 55 L46 82 M29 75 L18 79 M66 76 L78 81" fill="none" stroke="#d1bc94" stroke-width="4"/><path d="M48 43 Q32 39 26 27 M48 35 Q63 31 69 21" fill="none" stroke="#82a880" stroke-width="4"/>`,
  leaves: `<path d="M48 78 V42 M48 55 Q27 55 21 34 Q44 31 48 55 M48 44 Q51 18 75 18 Q75 41 48 44 M48 64 Q67 60 78 48 Q77 68 48 70" fill="#86ad84" stroke="#c1d1a6" stroke-width="2"/>`,
  fibers: `<path d="M15 67 Q21 38 26 67 Q30 22 36 67 Q42 31 48 67 Q53 17 59 67 Q64 31 70 67 Q75 39 81 67" fill="none" stroke="#d7b577" stroke-width="5"/><path d="M12 69 H84" stroke="#a77b50" stroke-width="5"/>`,
  backing: `<path d="M14 22 H82 V74 H14Z" fill="#b99c75" stroke="#e3d2ae" stroke-width="3"/><path d="M19 29 H77 M19 39 H77 M19 49 H77 M19 59 H77 M25 25 V70 M38 25 V70 M51 25 V70 M64 25 V70" stroke="#d5bf98" stroke-width="2"/>`
};

const furniturePieces = {
  wall_cabinet: ["panel", "shelf", "door", "hardware"],
  base_cabinet: ["panel", "shelf", "door", "hardware"],
  counter: ["shelf", "backing", "panel", "screws"],
  dining_table: ["shelf", "legs", "brace", "screws"],
  kitchen_window: ["frame", "glass", "frame", "seal"],
  sofa: ["sofa_frame", "springs", "cushion", "fabric"],
  shelf: ["shelf", "bracket", "screws", "anchor"],
  side_table: ["shelf", "legs", "brace", "screws"],
  living_window: ["frame", "glass", "frame", "seal"],
  plant: ["pot", "soil", "roots", "leaves"],
  rug: ["fibers", "backing", "backing", "seal"],
  kitchen_curtain: ["fabric", "legs", "seal", "bracket"],
  living_curtain: ["fabric", "legs", "seal", "bracket"],
  picture: ["frame", "backing", "panel", "hardware"],
  books: ["door", "backing", "shelf", "seal"],
  jars: ["pot", "door", "seal", "backing"],
  dish: ["pot", "glass", "seal", "screws"]
};

for (const item of furnitureItems) {
  item.icon = "furniture";
  item.color = "#bf9065";
  partArtwork[item.id] = furniturePieces[item.id].map((name) => furnitureArt[name]);
}
