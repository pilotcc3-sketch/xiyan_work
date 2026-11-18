const items = [
  {
    id: "kettle", name: "电热水壶", room: "kitchen", x: 10.5, y: 43, color: "#dc8760", icon: "kettle",
    intro: "每天早上，它把冷水变成热水，水沸后又自己停下。",
    principle: "常见电热水壶靠加热盘加热。水沸腾后，蒸汽到达温控器，使双金属片弯曲并断开电路。",
    parts: [
      ["壶盖", "阻挡热水和蒸汽外溢，同时方便加水。", "lid"],
      ["壶身与内胆", "盛装饮用水；外层或手柄帮助隔开高温。", "vessel"],
      ["加热盘", "通电后产生热量，并将热量传给壶底的水。", "coil"],
      ["温控器", "双金属片感受温度变化，驱动开关断电。", "switch"]
    ]
  },
  {
    id: "toaster", name: "吐司机", room: "kitchen", x: 27.5, y: 44, color: "#c96750", icon: "toaster",
    intro: "面包在里面变得酥脆，然后被弹簧推回你的面前。",
    principle: "电热丝发热，主要通过热辐射烘烤面包。计时机构到点后释放卡扣，弹簧将托架弹起。",
    parts: [
      ["面包槽与外壳", "固定内部部件，顶部开槽供面包放入。", "case"],
      ["电热丝", "具有较大电阻，通电后发热并辐射热量。", "coil"],
      ["升降托架", "托住面包，使它上下移动。", "rack"],
      ["弹簧与卡扣", "储存弹力并在计时结束时释放托架。", "spring"]
    ]
  },
  {
    id: "cup", name: "保温杯", room: "kitchen", x: 53, y: 60, color: "#be6650", icon: "cup",
    intro: "它不制造热量，只尽力让杯中的温度保持更久。",
    principle: "双层内胆之间的真空减少热传导和对流；杯盖和密封圈则减少杯口的热量交换。",
    parts: [
      ["杯盖", "盖住杯口，减少热量从开口散失。", "lid"],
      ["密封圈", "柔软的硅胶填充缝隙，帮助防漏。", "ring"],
      ["双层内胆", "内外层之间抽成真空，减慢热量传递。", "vessel"],
      ["外壳与底垫", "保护内胆，底垫还可以防滑。", "case"]
    ]
  },
  {
    id: "clock", name: "机械闹钟", room: "kitchen", x: 82, y: 37, color: "#d8a64e", icon: "clock",
    intro: "滴答声的背后，是一套把时间分成小格子的机构。",
    principle: "发条储存能量，齿轮逐级传递动力；摆轮与擒纵机构控制齿轮有节奏地转动。",
    parts: [
      ["表盘与指针", "把齿轮的转动显示成时刻。", "dial"],
      ["齿轮组", "以不同齿数传递动力并改变转速。", "gear"],
      ["发条", "卷紧的金属片储存弹性势能。", "spring"],
      ["摆轮与擒纵", "以稳定节奏控制齿轮释放动力。", "gear"]
    ]
  },
  {
    id: "lamp", name: "台灯", room: "living", x: 17, y: 59, color: "#e1b65d", icon: "lamp",
    intro: "一盏台灯把电变成光，让沙发旁的书更容易读。",
    principle: "闭合开关后，电流流向光源；灯罩遮挡部分直射光，并帮助引导光线。",
    parts: [
      ["灯罩", "遮挡部分直射光，把光引向需要的位置。", "shade"],
      ["光源", "灯泡或 LED 将电能转化为光。", "bulb"],
      ["灯杆与底座", "支撑光源；底座配重帮助保持稳定。", "stand"],
      ["开关与电线", "连接电源并控制电路的通断。", "switch"]
    ]
  },
  {
    id: "radio", name: "收音机", room: "living", x: 84, y: 18, color: "#80a298", icon: "radio",
    intro: "转动旋钮，看不见的无线电波就变成了声音。",
    principle: "天线接收无线电信号，调谐电路选出频率；信号经解调和放大后，驱动喇叭振动。",
    parts: [
      ["天线", "接收空气中传播的无线电信号。", "antenna"],
      ["调谐电路", "选择想要收听的频率。", "circuit"],
      ["放大电路", "增强处理后的声音信号。", "circuit"],
      ["扬声器", "将电信号转成振动，让空气发出声音。", "speaker"]
    ]
  },
  {
    id: "fan", name: "电风扇", room: "living", x: 71, y: 71, color: "#e3c587", icon: "fan",
    intro: "它不制冷，却能让流动的空气带走身上的热。",
    principle: "电机带动倾斜的扇叶推动空气。流动的空气有助于汗液蒸发，使人感觉凉快。",
    parts: [
      ["保护网罩", "隔开转动的扇叶，减少误触。", "ring"],
      ["扇叶", "倾斜的叶片旋转时推动空气。", "blade"],
      ["电机", "将电能转化为带动扇叶的机械运动。", "motor"],
      ["立杆与底座", "支撑机头，配重让风扇保持稳定。", "stand"]
    ]
  },
  {
    id: "umbrella", name: "雨伞", room: "living", x: 91, y: 71, color: "#c56b55", icon: "umbrella",
    intro: "一块防水布和几根伞骨，就能给人撑出一小片干燥。",
    principle: "伞骨从中棒向外撑紧伞面，伞面的弧度让雨水向边缘流走。",
    parts: [
      ["伞面", "防水布料挡住雨水，并让水流向边缘。", "shade"],
      ["伞骨", "支撑并绷紧伞面，收合时向中棒靠拢。", "rack"],
      ["中棒", "连接伞骨和手柄，是整把伞的支柱。", "antenna"],
      ["手柄与卡扣", "手柄供握持，卡扣固定撑开或收起的状态。", "switch"]
    ]
  }
];

items.push(...furnitureItems);
enrichItemParts(items);

const storageKey = "tabby-house-pixel-v2";
const assemblyStorageKey = `${storageKey}-assemblies`;
const storyStorageKey = `${storageKey}-story`;
const schemaStorageKey = `${storageKey}-parts-schema`;
const surfaceHeights = { kettle: 176, toaster: 176, cup: 231, clock: 151, lamp: 228, radio: 85, fan: 270, umbrella: 270 };
const byId = (id) => document.getElementById(id);
const elements = {
  room: byId("room"), objects: byId("objects"), cat: byId("cat"), reaction: byId("reaction"),
  intro: byId("intro"), detail: byId("detailOverlay"), archive: byId("archiveOverlay"),
  ending: byId("endingOverlay"), nest: byId("nestOverlay"), reset: byId("resetOverlay")
};
const savedStory = loadStory();
const state = { room: "kitchen", found: loadProgress(), busy: false, catX: 42, selected: null, partIndex: 0, diagramPage: 0, assemblyPage: 0, focusReturn: null, placements: [], selectedPiece: null, archivePage: 0, nestPage: 0, nestReturn: null, repaired: savedStory.repaired, stolen: savedStory.stolen, returned: savedStory.returned };
let reactionTimer;
let activePieceDrag = null;
migratePartsSchema();

function isInstallable(item, index) {
  return item.parts[index]?.[3]?.installable === true;
}

function partIdentity(item, index) {
  return item.parts[index]?.[3]?.id;
}

function partIndexFor(item, entry) {
  if (entry?.partId) return item.parts.findIndex((part) => part[3].id === entry.partId);
  return Number.isInteger(entry?.index) && entry.index >= 0 && entry.index < item.parts.length ? entry.index : -1;
}

function installableIndices(item) {
  return item.parts.map((part, index) => part[3].installable ? index : -1).filter((index) => index >= 0);
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return new Set(Array.isArray(saved) ? saved.filter((id) => items.some((item) => item.id === id)) : []);
  } catch {
    return new Set();
  }
}

function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify([...state.found])); } catch {}
}

function loadStory() {
  try {
    const saved = JSON.parse(localStorage.getItem(storyStorageKey) || "{}");
    const validPart = (entry) => {
      const item = items.find((candidate) => candidate.id === entry?.itemId);
      return item && partIndexFor(item, entry) >= 0;
    };
    const normalizedKey = (entry) => {
      const item = items.find((candidate) => candidate.id === entry?.itemId);
      return item ? `${entry.itemId}:${partIndexFor(item, entry)}` : "";
    };
    const repaired = new Set(Array.isArray(saved.repaired) ? saved.repaired.filter((id) => items.some((item) => item.id === id)) : []);
    const normalizeParts = (entries) => Array.isArray(entries)
      ? entries.filter((entry, index, all) => validPart(entry) && !repaired.has(entry.itemId) &&
        all.findIndex((other) => normalizedKey(other) === normalizedKey(entry)) === index)
        .map((entry) => {
          const item = items.find((candidate) => candidate.id === entry.itemId);
          const index = partIndexFor(item, entry);
          return { itemId: entry.itemId, index, partId: partIdentity(item, index) };
        })
      : [];
    const stolen = normalizeParts(saved.stolen);
    const returned = normalizeParts(saved.returned).filter((entry) => !stolen.some((other) => other.itemId === entry.itemId && other.index === entry.index));
    return { repaired, stolen, returned };
  } catch {
    return { repaired: new Set(), stolen: [], returned: [] };
  }
}

function migratePartsSchema() {
  let schema;
  try { schema = localStorage.getItem(schemaStorageKey); } catch { return; }
  if (schema === "3") return;
  const assemblies = loadAssemblies();
  const migratedStolen = [];
  for (const entry of state.stolen) {
    const item = items.find((candidate) => candidate.id === entry.itemId);
    if (isInstallable(item, entry.index)) {
      migratedStolen.push(entry);
      continue;
    }
    const replacement = item.parts.findIndex((part, index) => part[3].stealable &&
      !state.returned.some((returned) => returned.itemId === item.id && returned.index === index) &&
      !(assemblies[item.id] || []).some((placement) => placement.index === index));
  if (replacement >= 0) migratedStolen.push({ itemId: item.id, index: replacement, partId: partIdentity(item, replacement) });
    else {
      const existing = migratedStolen.find((part) => part.itemId === item.id && isInstallable(item, part.index));
      if (!existing) {
        const fallback = installableIndices(item).find((index) =>
          !state.returned.some((returned) => returned.itemId === item.id && returned.index === index));
        if (fallback !== undefined) {
          assemblies[item.id] = (assemblies[item.id] || []).filter((placement) => placement.index !== fallback);
          migratedStolen.push({ itemId: item.id, index: fallback, partId: partIdentity(item, fallback) });
        }
      }
      state.returned.push(entry);
    }
  }
  state.stolen = migratedStolen;
  for (const item of items) {
    const old = assemblies[item.id] || [];
    const oldRepaired = state.repaired.has(item.id);
    const next = old.filter((placement) => isInstallable(item, placement.index));
    if (oldRepaired) {
      for (const index of installableIndices(item)) {
        if (index < 4) continue;
        const target = targetPosition(item, index);
        const placement = next.find((entry) => entry.index === index);
        if (!placement) next.push({ index, partId: partIdentity(item, index), ...target, snapped: true });
      }
    }
    assemblies[item.id] = next;
  }
  try {
    localStorage.setItem(assemblyStorageKey, JSON.stringify(assemblies));
    saveStory();
    localStorage.setItem(schemaStorageKey, "3");
  } catch {}
}

function saveStory() {
  try {
    localStorage.setItem(storyStorageKey, JSON.stringify({ repaired: [...state.repaired], stolen: state.stolen, returned: state.returned }));
  } catch {}
}

function stolenPart(itemId, index) {
  return state.stolen.some((entry) => entry.itemId === itemId && entry.index === index);
}

function maybeStealPart(item) {
  const smallParts = item.parts.map((part, index) => part[3].stealable && part[3].installable ? index : -1).filter((index) => index >= 0);
  const eligible = smallParts.filter((index) =>
    !state.returned.some((entry) => entry.itemId === item.id && entry.index === index));
  const firstTheft = !state.stolen.length && !state.returned.length && state.found.size === 1;
  if (!eligible.length || (!firstTheft && Math.random() >= .3)) return;
  const index = eligible[Math.floor(Math.random() * eligible.length)];
  state.stolen.push({ itemId: item.id, index, partId: partIdentity(item, index) });
  saveStory();
}

function openNest(source) {
  if (state.busy) return;
  cancelPieceDrag();
  state.nestReturn = source;
  state.nestPage = 0;
  if (source === "assembly") {
    saveAssembly();
    elements.detail.hidden = true;
  }
  renderNest();
  elements.nest.hidden = false;
  byId("closeNest").focus({ preventScroll: true });
}

function renderNest() {
  const list = byId("nestList");
  const pageSize = 4;
  const pageCount = Math.max(1, Math.ceil(state.stolen.length / pageSize));
  state.nestPage = Math.max(0, Math.min(state.nestPage, pageCount - 1));
  byId("nestPage").textContent = `${state.nestPage + 1} / ${pageCount}`;
  byId("nestPrevious").disabled = state.nestPage === 0;
  byId("nestNext").disabled = state.nestPage === pageCount - 1;
  list.innerHTML = "";
  if (!state.stolen.length) {
    list.innerHTML = `<p class="nest-empty">窝里干干净净，阿斑正趴在垫子上打盹。</p>`;
    return;
  }
  state.stolen.slice(state.nestPage * pageSize, (state.nestPage + 1) * pageSize).forEach((entry) => {
    const item = items.find((candidate) => candidate.id === entry.itemId);
    const row = document.createElement("div");
    row.className = "nest-item";
    row.innerHTML = `${renderPartArtwork(item.id, entry.index)}<span><strong>${item.parts[entry.index][0]}</strong><small>来自 ${item.name}</small></span><button type="button" aria-label="取回${item.name}的${item.parts[entry.index][0]}">取回</button>`;
    row.querySelector("button").addEventListener("click", () => {
      state.stolen = state.stolen.filter((part) => part.itemId !== entry.itemId || part.index !== entry.index);
    state.returned.push({ itemId: entry.itemId, index: entry.index, partId: partIdentity(item, entry.index) });
      saveStory();
      renderNest();
      renderRoom();
      byId("nestTitle").textContent = `已取回：${item.parts[entry.index][0]}`;
    });
    list.appendChild(row);
  });
}

function closeNest() {
  elements.nest.hidden = true;
  byId("nestTitle").textContent = "阿斑的小窝";
  if (state.nestReturn === "assembly") {
    elements.detail.hidden = false;
    state.selectedPiece = null;
    renderAssembly();
    const missing = state.stolen.filter((entry) => entry.itemId === state.selected.id).length;
    byId("assemblyMessage").textContent = missing
      ? `还缺少 ${missing} 个零件，可再去猫窝找找。`
      : "零件已经取回，主人可以继续修理了。";
    byId("assemblyNest").hidden ? byId("backToDetail").focus({ preventScroll: true }) : byId("assemblyNest").focus({ preventScroll: true });
  } else {
    byId("nestSpot")?.focus({ preventScroll: true });
  }
  state.nestReturn = null;
}

function pixelIcon(kind, color = "#e5bd78") {
  const shapes = {
    kettle: `<path d="M12 18h20v25H12z M15 14h14v4H15z M19 10h6v4h-6z M32 21h6v4h3v12h-4V26h-5z M8 20h4v9H8z" fill="${color}"/><path d="M12 39h20v4H12z M15 21h4v13h-4z" fill="#866047"/>`,
    toaster: `<path d="M7 19h34v22H7z M11 15h12v4H11z M26 15h11v4H26z" fill="${color}"/><path d="M12 15h10v3H12z M27 15h9v3h-9z M32 26h5v5h-5z M32 34h5v4h-5z" fill="#684a36"/>`,
    cup: `<path d="M15 11h18v31H15z M13 7h22v5H13z" fill="${color}"/><path d="M15 18h18v3H15z M15 36h18v3H15z" fill="#f3ddbd"/>`,
    clock: `<path d="M12 13h24v4h4v23H8V17h4z M8 8h9v5H8z M31 8h9v5h-9z M12 40h5v4h-5z M31 40h5v4h-5z" fill="${color}"/><path d="M13 18h22v18H13z" fill="#fff1d5"/><path d="M22 20h3v9h7v3H22z" fill="#5b4334"/>`,
    lamp: `<path d="M17 7h14l7 16H10z" fill="${color}"/><path d="M22 23h4v16h-4z M13 39h22v4H13z" fill="#74523c"/>`,
    radio: `<path d="M6 16h36v25H6z" fill="${color}"/><path d="M11 20h13v7H11z" fill="#f2e2bd"/><path d="M29 21h8v12h-8z M11 32h4v4h-4z M19 32h4v4h-4z M12 15L34 5h3v3L15 18z" fill="#52685e"/>`,
    fan: `<path d="M14 8h20v4h5v20h-5v4H14v-4H9V12h5z" fill="#8da6a0"/><path d="M15 13h18v18H15z" fill="${color}"/><path d="M21 15h5v7h6v5h-7v5h-5v-7h-5v-5h6z" fill="#78978a"/><path d="M22 36h4v6h-4z M15 42h18v3H15z" fill="#765741"/>`,
    umbrella: `<path d="M10 11h28v4h4v7H6v-7h4z" fill="${color}"/><path d="M22 21h4v17h-4z M22 38h4v4h-4z M16 40h7v4h-7z M13 36h4v4h-4z" fill="#75523a"/>`,
    lid: `<path d="M9 20h30v9H9z M17 15h14v5H17z" fill="${color}"/>`,
    vessel: `<path d="M10 10h28v30H10z" fill="${color}"/><path d="M15 15h18v20H15z" fill="#2e494d"/>`,
    coil: `<path d="M8 12h32v5H13v5h27v5H13v5h27v5H8z" fill="${color}"/>`,
    switch: `<path d="M9 14h30v20H9z" fill="${color}"/><path d="M20 18h8v12h-8z" fill="#2e494d"/>`,
    case: `<path d="M7 12h34v28H7z" fill="${color}"/><path d="M12 17h24v18H12z" fill="#2e494d"/>`,
    rack: `<path d="M9 11h4v26H9z M20 11h4v26h-4z M31 11h4v26h-4z M7 34h30v4H7z" fill="${color}"/>`,
    spring: `<path d="M12 9h24v5H17v5h19v5H17v5h19v5H17v5h19v5H12z" fill="${color}"/>`,
    ring: `<path d="M12 8h24v5h5v22h-5v5H12v-5H7V13h5z" fill="${color}"/><path d="M15 14h18v20H15z" fill="#2e494d"/>`,
    dial: `<path d="M10 9h28v30H10z" fill="${color}"/><path d="M15 14h18v20H15z" fill="#2e494d"/><path d="M22 16h4v9h6v4H22z" fill="${color}"/>`,
    gear: `<path d="M20 6h8v5h7v5h5v8h-5v7h-7v5h-8v-5h-7v-7H8v-8h5v-5h7z" fill="${color}"/><path d="M20 16h8v9h-8z" fill="#2e494d"/>`,
    shade: `<path d="M16 8h16l8 24H8z" fill="${color}"/><path d="M8 32h32v4H8z" fill="#98774f"/>`,
    bulb: `<path d="M16 8h16v4h4v15h-4v5H16v-5h-4V12h4z M18 33h12v6H18z" fill="${color}"/>`,
    stand: `<path d="M22 6h4v29h-4z M11 35h26v6H11z" fill="${color}"/>`,
    antenna: `<path d="M21 8h6v29h-6z M17 37h14v4H17z" fill="${color}"/>`,
    circuit: `<path d="M8 8h32v32H8z" fill="${color}"/><path d="M13 14h22v3H13z M13 23h13v3H13z M13 32h22v3H13z M28 20h6v9h-6z" fill="#2e494d"/>`,
    speaker: `<path d="M10 8h28v32H10z" fill="${color}"/><path d="M15 13h18v22H15z" fill="#2e494d"/><path d="M20 18h8v12h-8z" fill="${color}"/>`,
    blade: `<path d="M21 7h7v12h10v7H28v12h-7V26H10v-7h11z" fill="${color}"/><path d="M21 19h7v7h-7z" fill="#2e494d"/>`,
    motor: `<path d="M10 13h28v23H10z M18 8h12v5H18z M17 36h14v5H17z" fill="${color}"/><path d="M15 19h18v3H15z M15 27h18v3H15z" fill="#2e494d"/>`
  };
  return `<svg viewBox="0 0 48 48" shape-rendering="crispEdges" aria-hidden="true">${shapes[kind] || shapes.case}</svg>`;
}

function renderRoom() {
  const kitchen = state.room === "kitchen";
  byId("kitchenBackground").toggleAttribute("hidden", !kitchen);
  byId("livingBackground").toggleAttribute("hidden", kitchen);
  byId("roomTitle").textContent = kitchen ? "厨房与餐桌" : "客厅一角";
  byId("roomNumber").textContent = kitchen ? "ROOM 01" : "ROOM 02";
  elements.room.setAttribute("aria-label", kitchen ? "厨房与餐桌" : "客厅一角");
  document.querySelectorAll(".room-tab").forEach((tab) => {
    const active = tab.dataset.room === state.room;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
    tab.disabled = state.busy;
  });
  elements.objects.innerHTML = "";
  items.filter((item) => item.room === state.room).forEach((item) => {
    const button = document.createElement("button");
    const found = state.found.has(item.id);
    const repaired = state.repaired.has(item.id);
    button.type = "button";
    button.className = `${item.marker ? "object-marker" : "object"}${found && !repaired ? " explored" : ""}${repaired ? " repaired" : ""}`;
    if (item.marker && found && !repaired) button.classList.add("broken");
    button.dataset.id = item.id;
    button.dataset.label = item.name;
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.setAttribute("aria-label", `${item.name}，${repaired ? "已修复，点击回看档案" : found ? "已拆坏，点击修理" : "点击拆解"}`);
    button.innerHTML = item.marker ? "" : pixelIcon(item.icon, item.color);
    if (item.marker) button.title = item.name;
    elements.objects.appendChild(button);
  });
  document.querySelectorAll("[data-fixture]").forEach((fixture) => {
    const broken = state.found.has(fixture.dataset.fixture) && !state.repaired.has(fixture.dataset.fixture);
    fixture.classList.toggle("fixture-broken", broken);
  });
  [["windowFrame", kitchen ? "kitchen_window" : "living_window"], ["windowCurtains", kitchen ? "kitchen_curtain" : "living_curtain"]].forEach(([elementId, itemId]) => {
    byId(elementId).classList.toggle("fixture-broken", state.found.has(itemId) && !state.repaired.has(itemId));
  });
  if (!kitchen) {
    const nest = document.createElement("button");
    nest.type = "button";
    nest.className = "nest-spot";
    nest.id = "nestSpot";
    nest.setAttribute("aria-label", `进入阿斑的猫窝，藏有${state.stolen.length}个零件`);
    nest.innerHTML = `<svg viewBox="0 0 80 48" shape-rendering="crispEdges" aria-hidden="true"><path fill="#8b624b" d="M7 19h66v21H7z M13 12h54v7H13z"/><path fill="#c9916a" d="M12 20h56v15H12z"/><path fill="#e6c393" d="M20 23h40v9H20z"/><path fill="#654735" d="M21 27h5v3h-5z M33 27h5v3h-5z M45 27h5v3h-5z M57 27h5v3h-5z"/></svg><span>猫窝${state.stolen.length ? ` · ${state.stolen.length}` : ""}</span>`;
    elements.objects.appendChild(nest);
  }
  alignObjects();
  updateProgress();
}

function handleRoomClick(event) {
  const clicked = event.target.closest("button");
  if (!clicked || state.busy) return;
  let target = clicked;
  if (event.detail > 0) {
    const candidates = [...elements.objects.querySelectorAll(".object,.object-marker,.nest-spot")]
      .map((button) => {
        const rect = button.getBoundingClientRect();
        const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
          event.clientY >= rect.top && event.clientY <= rect.bottom;
        const distance = Math.hypot(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2));
        return { button, inside, distance };
      }).filter((candidate) => candidate.inside);
    candidates.sort((first, second) => first.distance - second.distance);
    if (candidates.length) target = candidates[0].button;
  }
  if (target.id === "nestSpot") {
    openNest("room");
    return;
  }
  const item = items.find((candidate) => candidate.id === target.dataset.id);
  if (item) activate(item, target);
}

function alignObjects() {
  const roomRect = elements.room.getBoundingClientRect();
  if (!roomRect.height) return;
  elements.objects.querySelectorAll(".object").forEach((button) => {
    const svg = button.querySelector("svg");
    const bounds = svg.getBBox();
    const matrix = svg.getScreenCTM();
    if (!matrix) return;
    const currentBottom = matrix.f + matrix.d * (bounds.y + bounds.height);
    const targetBottom = roomRect.top + roomRect.height * surfaceHeights[button.dataset.id] / 350;
    button.style.top = `${parseFloat(button.style.top) + (targetBottom - currentBottom) / roomRect.height * 100}%`;
  });
}

function updateProgress() {
  byId("progress").textContent = `${state.found.size}/${items.length}`;
  byId("roomStatus").textContent = state.found.size ? `主人回家 · 已修复 ${state.repaired.size}` : "午后 · 无人在家";
  byId("hint").textContent = state.found.size === items.length
    ? `档案已收集，主人已修复 ${state.repaired.size} 件。`
    : "点击物品拆解；主人回来后可修理。";
}

function showReaction(text) {
  clearTimeout(reactionTimer);
  elements.reaction.textContent = text;
  elements.reaction.classList.add("show");
  reactionTimer = setTimeout(() => elements.reaction.classList.remove("show"), 1800);
}

async function activate(item, button) {
  if (state.busy) return;
  state.focusReturn = button;
  if (state.found.has(item.id)) {
    openDetail(item);
    return;
  }
  showReaction(item.name);
  state.busy = true;
  renderTabAvailability();
  const movingLeft = item.x < state.catX + 7;
  const destination = Math.max(0, Math.min(85, item.x - (movingLeft ? 3 : 12)));
  elements.cat.classList.toggle("left", movingLeft);
  elements.cat.classList.add("walk");
  elements.cat.style.left = `${destination}%`;
  state.catX = destination;
  showReaction("这个里面是什么？");
  await delay(600);
  elements.cat.classList.remove("walk");
  const itemCenter = (button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2 - elements.room.getBoundingClientRect().top) / elements.room.clientHeight;
  elements.cat.style.setProperty("--jump-height", `${Math.max(0, 0.78 - itemCenter) * elements.room.clientHeight}px`);
  elements.cat.classList.add("jump");
  button.classList.add("breaking");
  showReaction("啪！拆开看看！");
  await delay(580);
  elements.cat.classList.remove("jump");
  button.classList.remove("breaking");
  state.found.add(item.id);
  state.repaired.delete(item.id);
  saveProgress();
  maybeStealPart(item);
  button.classList.add("explored");
  button.setAttribute("aria-label", `${item.name}，已拆坏，点击修理`);
  state.busy = false;
  renderRoom();
  updateProgress();
  renderTabAvailability();
  openDetail(item);
}

function renderTabAvailability() {
  document.querySelectorAll(".room-tab").forEach((tab) => { tab.disabled = state.busy; });
  byId("archiveButton").disabled = state.busy;
  if (byId("nestSpot")) byId("nestSpot").disabled = state.busy;
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function openDetail(item) {
  cancelPieceDrag();
  state.selected = item;
  byId("detailNumber").textContent = `拆解档案 / NO. ${String(items.indexOf(item) + 1).padStart(2, "0")}`;
  byId("detailTitle").textContent = item.name;
  byId("detailIntro").textContent = item.intro;
  byId("principle").textContent = item.principle;
  byId("assembleButton").textContent = state.repaired.has(item.id) ? "查看已修好物品 ↗" : "主人动手修理 ↗";
  state.diagramPage = 0;
  highlightPart(0);
  elements.detail.querySelector(".detail").hidden = false;
  elements.detail.querySelector(".assembly").hidden = true;
  elements.detail.hidden = false;
  byId("closeDetail").focus({ preventScroll: true });
}

const diagramPageSize = 8;

function highlightPart(index) {
  if (!state.selected) return;
  state.partIndex = index;
  state.diagramPage = Math.floor(index / diagramPageSize);
  const [name, description, , metadata] = state.selected.parts[index];
  byId("parts").innerHTML = `<div class="part"><span class="part-num">${String(index + 1).padStart(2, "0")}</span><span><strong>${name} <small class="part-kind">${metadata.installable ? "可拆装" : "剖面观察"}</small></strong><span class="description">${description}</span></span></div>`;
  byId("partCounter").textContent = `结构 ${index + 1} / ${state.selected.parts.length}`;
  byId("previousPart").disabled = index === 0;
  byId("nextPart").disabled = index === state.selected.parts.length - 1;
  renderDiagramPage();
}

function renderDiagramPage() {
  const item = state.selected;
  const pageCount = Math.ceil(item.parts.length / diagramPageSize);
  const start = state.diagramPage * diagramPageSize;
  byId("diagramPagination").hidden = pageCount <= 1;
  byId("diagramPage").textContent = `${state.diagramPage + 1} / ${pageCount}`;
  byId("diagramPrevious").disabled = state.diagramPage === 0;
  byId("diagramNext").disabled = state.diagramPage >= pageCount - 1;
  byId("exploded").innerHTML = item.parts.slice(start, start + diagramPageSize).map(([name, , , metadata], offset) => {
    const index = start + offset;
    return `<button class="piece${state.partIndex === index ? " active" : ""}" type="button" data-index="${index}" aria-label="${name}，${metadata.installable ? "可拆装" : "仅观察"}" aria-pressed="${state.partIndex === index}">${renderPartArtwork(item.id, index)}<span class="piece-num">${index + 1}</span><small>${name}</small></button>`;
  }).join("");
  byId("exploded").querySelectorAll(".piece").forEach((button) => {
    button.addEventListener("click", () => highlightPart(Number(button.dataset.index)));
  });
}

function closeDetail() {
  cancelPieceDrag();
  elements.detail.hidden = true;
  state.selected = null;
  if (state.repaired.size === items.length && !sessionStorageGet("endingSeen")) {
    sessionStorageSet("endingSeen", "1");
    elements.ending.hidden = false;
    byId("endingButton").focus();
  } else if (state.focusReturn?.isConnected) {
    state.focusReturn.focus({ preventScroll: true });
  }
}

function openAssembly() {
  const item = state.selected;
  if (!item) return;
  cancelPieceDrag();
  state.placements = (loadAssemblies()[item.id] || []).filter((placement) => isInstallable(item, placement.index) && !stolenPart(item.id, placement.index));
  state.placements.forEach((placement) => {
    if (placement.snapped && placement.index >= 4) Object.assign(placement, targetPosition(item, placement.index), { snapped: true });
  });
  state.selectedPiece = null;
  state.assemblyPage = 0;
  byId("assemblyTools").hidden = true;
  byId("assemblyToolsToggle").setAttribute("aria-expanded", "false");
  byId("assemblyToolsToggle").textContent = "调整工具 ▾";
  byId("assemblyTitle").textContent = `组装${item.name}`;
  byId("assemblyMessage").textContent = "拖动零件到虚线轮廓附近；直接拖动画板上的图片可重新调整。";
  byId("assemblyGuide").innerHTML = installableIndices(item).map((index) => {
    const target = targetPosition(item, index);
    return `<div class="target-outline" data-index="${index}" style="left:${target.x}%;top:${target.y}%;transform:translate(-50%,-50%) rotate(${target.rotation}deg) scale(${target.scale})">${renderPartArtwork(item.id, index)}<span>${index + 1}</span></div>`;
  }).join("");
  elements.detail.querySelector(".detail").hidden = true;
  elements.detail.querySelector(".assembly").hidden = false;
  renderAssembly();
  byId("closeAssembly").focus({ preventScroll: true });
}

function targetPosition(item, index) {
  const [x, y, scale = 1, rotation = 0] = repairTargets[item.id][index];
  return { x, y, scale, rotation };
}

function loadAssemblies() {
  try {
    const data = JSON.parse(localStorage.getItem(assemblyStorageKey) || "{}");
    if (!data || typeof data !== "object" || Array.isArray(data)) return {};
    const safe = {};
    for (const item of items) {
      if (!Array.isArray(data[item.id])) continue;
      safe[item.id] = data[item.id].filter((entry, index, list) =>
        partIndexFor(item, entry) >= 0 && Number.isFinite(entry.x) && Number.isFinite(entry.y) &&
        list.findIndex((other) => partIndexFor(item, other) === partIndexFor(item, entry)) === index
      ).map((entry) => ({
        index: partIndexFor(item, entry),
        partId: partIdentity(item, partIndexFor(item, entry)),
        x: clampCoordinate(entry.x),
        y: clampCoordinate(entry.y),
        scale: Number.isFinite(entry.scale) ? Math.max(.4, Math.min(1.8, entry.scale)) : 1,
        rotation: Number.isFinite(entry.rotation) ? entry.rotation % 360 : 0,
        snapped: entry.snapped === true
      }));
    }
    return safe;
  } catch {
    return {};
  }
}

function clampCoordinate(value) {
  return Math.max(12, Math.min(88, value));
}

function saveAssembly() {
  if (!state.selected) return;
  const data = loadAssemblies();
  data[state.selected.id] = state.placements;
  try { localStorage.setItem(assemblyStorageKey, JSON.stringify(data)); } catch {}
}

function renderAssembly() {
  cancelPieceDrag();
  const item = state.selected;
  const canvas = byId("assemblyCanvas");
  canvas.querySelectorAll(".target-outline").forEach((outline) => {
    const index = Number(outline.dataset.index);
    const snapped = state.placements.some((placement) => placement.index === index && placement.snapped);
    outline.classList.toggle("installed", snapped);
    outline.classList.toggle("active-target", state.selectedPiece === index && !snapped);
  });
  canvas.querySelectorAll(".canvas-piece").forEach((piece) => piece.remove());
  state.placements.forEach((placement, layer) => {
    const piece = document.createElement("button");
    piece.type = "button";
    piece.className = `canvas-piece${state.selectedPiece === placement.index ? " selected" : ""}${placement.snapped ? " snapped" : ""}`;
    piece.dataset.index = placement.index;
    piece.style.left = `${placement.x}%`;
    piece.style.top = `${placement.y}%`;
    piece.style.zIndex = String(layer + 2);
    piece.style.transform = `translate(-50%, -50%) rotate(${placement.rotation || 0}deg) scale(${placement.scale || 1})`;
    piece.setAttribute("aria-label", `工作台上的${item.parts[placement.index][0]}，${placement.snapped ? "已安装，可重新移动" : "尚未安装"}`);
    if (placement.snapped) piece.title = "已吸附，可再次拖动";
    piece.innerHTML = renderPartArtwork(item.id, placement.index);
    bindAssemblyPiece(piece);
    canvas.appendChild(piece);
  });
  const indices = installableIndices(item);
  const pageCount = Math.max(1, Math.ceil(indices.length / 4));
  state.assemblyPage = Math.max(0, Math.min(pageCount - 1, state.assemblyPage));
  const visible = indices.slice(state.assemblyPage * 4, state.assemblyPage * 4 + 4);
  byId("assemblyPage").textContent = `${state.assemblyPage + 1} / ${pageCount}`;
  byId("assemblyPrevious").disabled = state.assemblyPage === 0;
  byId("assemblyNext").disabled = state.assemblyPage >= pageCount - 1;
  byId("assemblyPieces").innerHTML = visible.map((index) => {
    const [name] = item.parts[index];
    const placed = state.placements.find((entry) => entry.index === index);
    const stolen = stolenPart(item.id, index);
    const status = stolen ? " · 猫窝" : placed?.snapped ? " ✓" : placed ? " · 待安装" : "";
    return `<button class="assembly-piece${state.selectedPiece === index ? " selected" : ""}${placed ? " on-canvas" : ""}${stolen ? " stolen" : ""}" type="button" data-index="${index}" ${stolen ? "disabled" : ""} aria-label="${name}${stolen ? "，在猫窝里" : placed?.snapped ? "，已安装" : "，待安装"}" aria-pressed="${state.selectedPiece === index}">${renderPartArtwork(item.id, index)}<span>${name}${status}</span></button>`;
  }).join("");
  byId("assemblyPieces").querySelectorAll(".assembly-piece").forEach(bindAssemblyPiece);
  const installed = state.placements.filter((entry) => entry.snapped).length;
  const missing = state.stolen.filter((entry) => entry.itemId === item.id).length;
  byId("assemblyCount").textContent = `已安装 ${installed} / ${indices.length}`;
  byId("repairResult").hidden = !state.repaired.has(item.id);
  byId("assemblyNest").hidden = missing === 0;
  if (missing) byId("assemblyNest").textContent = `缺少 ${missing} 个零件，去猫窝找找 →`;
  if (missing && state.selectedPiece === null) byId("assemblyMessage").textContent = "缺少零件，可去猫窝找找。";
  if (missing && byId("nestSpot")) {
    byId("nestSpot").setAttribute("aria-label", `进入阿斑的猫窝，藏有${state.stolen.length}个零件`);
  }
  const selectedOnCanvas = state.placements.some((entry) => entry.index === state.selectedPiece);
  ["layerDown", "layerUp", "removePiece", "moveLeft", "moveRight", "moveUp", "moveDown", "scaleDown", "scaleUp", "rotateLeft", "rotateRight"].forEach((id) => {
    byId(id).disabled = !selectedOnCanvas;
  });
  byId("installPiece").disabled = state.selectedPiece === null || stolenPart(item.id, state.selectedPiece);
}

function bindAssemblyPiece(piece) {
  piece.addEventListener("click", () => {
    if (piece.dataset.suppressClick) return;
    state.selectedPiece = Number(piece.dataset.index);
    byId("assemblyMessage").textContent = `已选择「${state.selected.parts[state.selectedPiece][0]}」，找到编号 ${state.selectedPiece + 1} 的虚线轮廓。`;
    renderAssembly();
  });
  piece.addEventListener("pointerdown", startPieceDrag);
}

function putPiece(index, clientX, clientY) {
  if (stolenPart(state.selected.id, index)) return;
  const rect = byId("assemblyCanvas").getBoundingClientRect();
  const x = clampCoordinate((clientX - rect.left) / rect.width * 100);
  const y = clampCoordinate((clientY - rect.top) / rect.height * 100);
  const existing = state.placements.find((entry) => entry.index === index);
  if (existing) Object.assign(existing, { x, y });
  else state.placements.push({ index, partId: partIdentity(state.selected, index), x, y, scale: 1, rotation: 0, snapped: false });
  state.selectedPiece = index;
  checkPlacement(index);
}

function checkPlacement(index, { snap = true } = {}) {
  const placement = state.placements.find((entry) => entry.index === index);
  if (!placement) return;
  const target = targetPosition(state.selected, index);
  const distance = Math.hypot(placement.x - target.x, placement.y - target.y);
  if (snap && distance <= 11) {
    Object.assign(placement, target, { snapped: true });
  } else {
    placement.snapped = false;
  }
  const complete = installableIndices(state.selected).every((partIndex) =>
    state.placements.some((entry) => entry.index === partIndex && entry.snapped) && !stolenPart(state.selected.id, partIndex));
  if (complete) state.repaired.add(state.selected.id);
  else state.repaired.delete(state.selected.id);
  saveStory();
  saveAssembly();
  renderAssembly();
  renderRoom();
  byId("assemblyMessage").textContent = complete
    ? `主人修好了${state.selected.name}！零件仍可重新调整。`
    : placement.snapped
      ? `「${state.selected.parts[index][0]}」已吸附安装，可再次拖动调整。`
      : `「${state.selected.parts[index][0]}」尚未安装，拖到对应轮廓附近。`;
}

function cancelPieceDrag() {
  if (activePieceDrag) activePieceDrag.cancel();
  document.querySelectorAll(".drag-ghost").forEach((ghost) => ghost.remove());
}

function startPieceDrag(event) {
  if (event.button !== 0 || event.currentTarget.disabled || activePieceDrag) return;
  const piece = event.currentTarget;
  const pointerId = event.pointerId;
  const index = Number(piece.dataset.index);
  const startX = event.clientX;
  const startY = event.clientY;
  let finished = false;
  let dragging = false;
  let ghost = null;
  const cleanup = () => {
    if (finished) return;
    finished = true;
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", finish);
    window.removeEventListener("pointercancel", cancel);
    window.removeEventListener("blur", cancel);
    piece.removeEventListener("lostpointercapture", lostCapture);
    if (ghost) ghost.remove();
    activePieceDrag = null;
    if (piece.hasPointerCapture(pointerId)) piece.releasePointerCapture(pointerId);
  };
  const move = (moveEvent) => {
    if (moveEvent.pointerId !== pointerId) return;
    if (!dragging && Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY) > 8) {
      dragging = true;
      ghost = piece.cloneNode(true);
      ghost.className = "drag-ghost";
      ghost.removeAttribute("style");
      ghost.removeAttribute("id");
      ghost.setAttribute("aria-hidden", "true");
      document.body.appendChild(ghost);
    }
    if (ghost) {
      ghost.style.left = `${moveEvent.clientX}px`;
      ghost.style.top = `${moveEvent.clientY}px`;
    }
  };
  const finish = (upEvent) => {
    if (upEvent.pointerId !== pointerId) return;
    const wasDragging = dragging;
    cleanup();
    if (!wasDragging) return;
    piece.dataset.suppressClick = "true";
    setTimeout(() => delete piece.dataset.suppressClick, 0);
    const rect = byId("assemblyCanvas").getBoundingClientRect();
    if (upEvent.clientX >= rect.left && upEvent.clientX <= rect.right && upEvent.clientY >= rect.top && upEvent.clientY <= rect.bottom) {
      putPiece(index, upEvent.clientX, upEvent.clientY);
    } else {
      byId("assemblyMessage").textContent = "请把零件拖到工作台内。";
    }
  };
  const cancel = (cancelEvent) => {
    if (cancelEvent?.pointerId !== undefined && cancelEvent.pointerId !== pointerId) return;
    cleanup();
  };
  const lostCapture = (captureEvent) => {
    if (captureEvent.pointerId === pointerId) cleanup();
  };
  activePieceDrag = { cancel };
  piece.addEventListener("lostpointercapture", lostCapture);
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", finish);
  window.addEventListener("pointercancel", cancel);
  window.addEventListener("blur", cancel);
  piece.setPointerCapture(pointerId);
}

function closeAssembly() {
  cancelPieceDrag();
  saveAssembly();
  elements.detail.querySelector(".assembly").hidden = true;
  elements.detail.querySelector(".detail").hidden = false;
  byId("assembleButton").textContent = state.repaired.has(state.selected.id) ? "查看已修好物品 ↗" : "主人动手修理 ↗";
  byId("assembleButton").focus({ preventScroll: true });
}

function adjustLayer(direction) {
  const index = state.placements.findIndex((entry) => entry.index === state.selectedPiece);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= state.placements.length) return;
  [state.placements[index], state.placements[target]] = [state.placements[target], state.placements[index]];
  saveAssembly();
  renderAssembly();
}

function moveSelected(dx, dy) {
  const placement = state.placements.find((entry) => entry.index === state.selectedPiece);
  if (!placement) return;
  placement.x = clampCoordinate(placement.x + dx);
  placement.y = clampCoordinate(placement.y + dy);
  checkPlacement(placement.index, { snap: !placement.snapped });
}

function transformSelected(scaleDelta, rotationDelta) {
  const placement = state.placements.find((entry) => entry.index === state.selectedPiece);
  if (!placement) return;
  placement.scale = Math.max(.4, Math.min(1.8, Math.round(((placement.scale || 1) + scaleDelta) * 10) / 10));
  placement.rotation = ((placement.rotation || 0) + rotationDelta + 360) % 360;
  checkPlacement(placement.index, { snap: false });
}

function sessionStorageGet(key) {
  try { return sessionStorage.getItem(`${storageKey}-${key}`); } catch { return null; }
}
function sessionStorageSet(key, value) {
  try { sessionStorage.setItem(`${storageKey}-${key}`, value); } catch {}
}

function openArchive() {
  if (state.busy) return;
  state.archivePage = 0;
  renderArchive();
  elements.archive.hidden = false;
  byId("closeArchive").focus({ preventScroll: true });
}

function renderArchive() {
  byId("archiveIntro").textContent = `已收集 ${state.found.size} / ${items.length} 张档案。点击已解锁的物品回看。`;
  const grid = byId("archiveGrid");
  grid.innerHTML = "";
  const pageSize = 8;
  const pageCount = Math.ceil(items.length / pageSize);
  state.archivePage = Math.max(0, Math.min(pageCount - 1, state.archivePage));
  byId("archivePage").textContent = `${state.archivePage + 1} / ${pageCount}`;
  byId("archivePrevious").disabled = state.archivePage === 0;
  byId("archiveNext").disabled = state.archivePage === pageCount - 1;
  items.slice(state.archivePage * pageSize, (state.archivePage + 1) * pageSize).forEach((item) => {
    const found = state.found.has(item.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "archive-item";
    button.disabled = !found;
    button.innerHTML = `${item.marker ? renderPartArtwork(item.id, 0) : pixelIcon(item.icon, item.color)}<span><b>${found ? item.name : "??? 未拆解"}</b><small>${found ? (state.repaired.has(item.id) ? "已修复 · 查看档案 →" : "待修理 · 查看档案 →") : item.room === "kitchen" ? "在厨房" : "在客厅"}</small></span>`;
    button.addEventListener("click", () => {
      elements.archive.hidden = true;
      state.focusReturn = byId("archiveButton");
      openDetail(item);
    });
    grid.appendChild(button);
  });
}

function closeArchive() {
  elements.archive.hidden = true;
  byId("archiveButton").focus({ preventScroll: true });
}

elements.objects.addEventListener("click", handleRoomClick);
const hostedByNest = new URLSearchParams(window.location.search).get("host") === "nest" && window.parent !== window;
byId("nestBackButton").hidden = !hostedByNest;
byId("nestBackButton").addEventListener("click", () => {
  cancelPieceDrag();
  window.parent.postMessage({ type: "youzao:cat-house-back" }, window.location.origin);
});
byId("startButton").addEventListener("click", () => {
  elements.intro.hidden = true;
  showReaction("先拆哪个呢？");
});
document.querySelectorAll(".room-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (state.busy || state.room === tab.dataset.room) return;
    state.room = tab.dataset.room;
    renderRoom();
    showReaction("换个地方看看！");
  });
});
byId("archiveButton").addEventListener("click", openArchive);
byId("archivePrevious").addEventListener("click", () => { state.archivePage -= 1; renderArchive(); });
byId("archiveNext").addEventListener("click", () => { state.archivePage += 1; renderArchive(); });
byId("closeArchive").addEventListener("click", closeArchive);
byId("closeDetail").addEventListener("click", closeDetail);
byId("continueButton").addEventListener("click", closeDetail);
byId("assembleButton").addEventListener("click", openAssembly);
byId("closeAssembly").addEventListener("click", closeAssembly);
byId("backToDetail").addEventListener("click", closeAssembly);
byId("assemblyToolsToggle").addEventListener("click", () => {
  const tools = byId("assemblyTools");
  tools.hidden = !tools.hidden;
  byId("assemblyToolsToggle").setAttribute("aria-expanded", String(!tools.hidden));
  byId("assemblyToolsToggle").textContent = tools.hidden ? "调整工具 ▾" : "收起工具 ▴";
});
byId("assemblyNest").addEventListener("click", () => openNest("assembly"));
byId("closeNest").addEventListener("click", closeNest);
byId("nestDone").addEventListener("click", closeNest);
byId("nestPrevious").addEventListener("click", () => { state.nestPage -= 1; renderNest(); });
byId("nestNext").addEventListener("click", () => { state.nestPage += 1; renderNest(); });
byId("assemblyCanvas").addEventListener("click", (event) => {
  const waiting = state.selectedPiece !== null && !state.placements.some((entry) => entry.index === state.selectedPiece);
  if (waiting) {
    const target = targetPosition(state.selected, state.selectedPiece);
    const rect = byId("assemblyCanvas").getBoundingClientRect();
    putPiece(state.selectedPiece, rect.left + rect.width * target.x / 100, rect.top + rect.height * target.y / 100);
    return;
  }
  if (event.target.closest(".canvas-piece")) {
    return;
  }
  if (state.selectedPiece === null) {
    byId("assemblyMessage").textContent = "请先从下方选择一个零件。";
    return;
  }
  putPiece(state.selectedPiece, event.clientX, event.clientY);
});
byId("layerDown").addEventListener("click", () => adjustLayer(-1));
byId("layerUp").addEventListener("click", () => adjustLayer(1));
byId("moveLeft").addEventListener("click", () => moveSelected(-4, 0));
byId("moveRight").addEventListener("click", () => moveSelected(4, 0));
byId("moveUp").addEventListener("click", () => moveSelected(0, -4));
byId("moveDown").addEventListener("click", () => moveSelected(0, 4));
byId("scaleDown").addEventListener("click", () => transformSelected(-.1, 0));
byId("scaleUp").addEventListener("click", () => transformSelected(.1, 0));
byId("rotateLeft").addEventListener("click", () => transformSelected(0, -15));
byId("rotateRight").addEventListener("click", () => transformSelected(0, 15));
byId("installPiece").addEventListener("click", () => {
  if (state.selectedPiece === null || stolenPart(state.selected.id, state.selectedPiece)) return;
  const target = targetPosition(state.selected, state.selectedPiece);
  const rect = byId("assemblyCanvas").getBoundingClientRect();
  putPiece(state.selectedPiece, rect.left + rect.width * target.x / 100, rect.top + rect.height * target.y / 100);
});
byId("removePiece").addEventListener("click", () => {
  state.placements = state.placements.filter((entry) => entry.index !== state.selectedPiece);
  state.repaired.delete(state.selected.id);
  state.selectedPiece = null;
  saveStory();
  saveAssembly();
  renderAssembly();
  renderRoom();
  byId("assemblyMessage").textContent = "零件已移回零件区。";
});
byId("resetAssembly").addEventListener("click", () => {
  state.placements = [];
  state.repaired.delete(state.selected.id);
  state.selectedPiece = null;
  saveStory();
  saveAssembly();
  renderAssembly();
  renderRoom();
  byId("assemblyMessage").textContent = "工作台已清空，可以重新拼装。";
});
byId("previousPart").addEventListener("click", () => highlightPart(state.partIndex - 1));
byId("nextPart").addEventListener("click", () => highlightPart(state.partIndex + 1));
byId("diagramPrevious").addEventListener("click", () => highlightPart((state.diagramPage - 1) * diagramPageSize));
byId("diagramNext").addEventListener("click", () => highlightPart((state.diagramPage + 1) * diagramPageSize));
let diagramTouchStart = null;
byId("exploded").addEventListener("touchstart", (event) => {
  if (event.touches.length !== 1) return;
  diagramTouchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
}, { passive: true });
byId("exploded").addEventListener("touchend", (event) => {
  if (!diagramTouchStart || !state.selected || !event.changedTouches.length) return;
  const deltaX = event.changedTouches[0].clientX - diagramTouchStart.x;
  const deltaY = event.changedTouches[0].clientY - diagramTouchStart.y;
  diagramTouchStart = null;
  if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  const pageCount = Math.ceil(state.selected.parts.length / diagramPageSize);
  const nextPage = state.diagramPage + (deltaX < 0 ? 1 : -1);
  if (nextPage >= 0 && nextPage < pageCount) highlightPart(nextPage * diagramPageSize);
}, { passive: true });
byId("exploded").addEventListener("touchcancel", () => { diagramTouchStart = null; }, { passive: true });
byId("assemblyPrevious").addEventListener("click", () => { state.assemblyPage -= 1; renderAssembly(); });
byId("assemblyNext").addEventListener("click", () => { state.assemblyPage += 1; renderAssembly(); });
byId("endingButton").addEventListener("click", () => {
  elements.ending.hidden = true;
  if (state.focusReturn?.isConnected) state.focusReturn.focus({ preventScroll: true });
});
byId("resetButton").addEventListener("click", () => {
  elements.archive.hidden = true;
  elements.reset.hidden = false;
  byId("cancelReset").focus({ preventScroll: true });
});
byId("cancelReset").addEventListener("click", () => {
  elements.reset.hidden = true;
  elements.archive.hidden = false;
  byId("resetButton").focus({ preventScroll: true });
});
byId("confirmReset").addEventListener("click", () => {
  cancelPieceDrag();
  state.found.clear();
  state.repaired.clear();
  state.stolen = [];
  state.returned = [];
  state.placements = [];
  state.selected = null;
  state.selectedPiece = null;
  state.room = "kitchen";
  state.catX = 42;
  elements.cat.style.left = "42%";
  elements.cat.classList.remove("left", "walk", "jump");
  clearTimeout(reactionTimer);
  elements.reaction.classList.remove("show");
  elements.intro.hidden = true;
  try { localStorage.removeItem(storageKey); } catch {}
  try { localStorage.removeItem(assemblyStorageKey); } catch {}
  try { localStorage.removeItem(storyStorageKey); } catch {}
  try { localStorage.removeItem(schemaStorageKey); } catch {}
  try { sessionStorage.removeItem(`${storageKey}-endingSeen`); } catch {}
  elements.reset.hidden = true;
  elements.archive.hidden = true;
  elements.ending.hidden = true;
  elements.nest.hidden = true;
  elements.detail.hidden = true;
  renderRoom();
  showReaction("小屋恢复原样啦！");
  byId("archiveButton").focus({ preventScroll: true });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!elements.reset.hidden) byId("cancelReset").click();
  else if (!elements.nest.hidden) closeNest();
  else if (!elements.detail.hidden && !elements.detail.querySelector(".assembly").hidden) closeAssembly();
  else if (!elements.detail.hidden) closeDetail();
  else if (!elements.archive.hidden) closeArchive();
  else if (!elements.ending.hidden) {
    elements.ending.hidden = true;
    if (state.focusReturn?.isConnected) state.focusReturn.focus({ preventScroll: true });
  }
});

renderRoom();
window.addEventListener("resize", alignObjects);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) cancelPieceDrag();
});
