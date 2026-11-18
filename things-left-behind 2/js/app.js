(function () {
  const STORAGE_KEY = "things_left_behind_v1";
  const data = window.GAME_DATA;
  const audio = window.roomAudio;
  const sceneLayout = window.SCENE_ITEM_LAYOUT;
  const sceneItemMap = Object.fromEntries(sceneLayout.items.map((item) => [item.id, item]));
  const byId = (id) => document.getElementById(id);
  let activeItemId = null;
  let activeMemoryId = null;
  let memoryCompleting = false;
  let memoryCloseTimer = null;
  let ambientTimer = null;
  let ambientIndex = 0;

  function initialRun() {
    const items = {};
    data.items.forEach((item) => {
      items[item.id] = { inspected: false, flipped: false, memoryDone: false, disposition: null };
    });
    return {
      zone: "desk",
      proximity: "normal",
      minutesPassed: 0,
      coachShown: false,
      items,
      lastUndo: null,
      finalAction: null,
      endingId: null
    };
  }

  function initialState() {
    return {
      run: initialRun(),
      archive: { seenEndings: [], exploredMemories: [], completedRuns: 0 },
      settings: { muted: false, haptics: true }
    };
  }

  function loadState() {
    const fallback = initialState();
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!parsed) return fallback;
      const loaded = {
        run: Object.assign(initialRun(), parsed.run || {}),
        archive: Object.assign(fallback.archive, parsed.archive || {}),
        settings: Object.assign(fallback.settings, parsed.settings || {})
      };
      const items = initialRun().items;
      Object.keys(items).forEach((itemId) => {
        if (parsed.run && parsed.run.items && parsed.run.items[itemId]) {
          items[itemId] = Object.assign(items[itemId], parsed.run.items[itemId]);
        }
      });
      loaded.run.items = items;
      return loaded;
    } catch (error) {
      return fallback;
    }
  }

  let state = loadState();

  const dom = {
    sceneWorld: byId("scene-world"),
    hotspotsLayer: byId("hotspots-layer"),
    dropZonesLayer: byId("drop-zones-layer"),
    dropZones: Array.from(document.querySelectorAll(".drop-zone")),
    roomClock: byId("room-clock"),
    arrivalNote: byId("arrival-note"),
    endingsCountDot: byId("endings-count-dot"),
    muteLabel: byId("mute-label"),
    hapticLabel: byId("haptic-label"),
    alanStateTag: byId("alan-state-tag"),
    alanPropIndicator: byId("alan-prop-indicator"),
    doorThresholdBtn: byId("door-threshold-btn"),
    doorTagSub: byId("door-tag-sub"),
    openingLineCard: byId("opening-line-card"),
    spokenText: byId("spoken-text"),
    gestureCoach: byId("gesture-coach"),
    reactionText: byId("reaction-text"),
    btnUndo: byId("btn-undo"),
    btnZoneDesk: byId("btn-zone-desk"),
    btnZoneLiving: byId("btn-zone-living"),
    btnProximity: byId("btn-proximity"),
    btnFinishPack: byId("btn-finish-pack"),
    inspectSheet: byId("inspect-sheet"),
    inspectTitle: byId("inspect-title"),
    inspectPlace: byId("inspect-place"),
    inspectStage: byId("inspect-stage"),
    inspectVisual: byId("inspect-visual"),
    ringProgress: byId("ring-progress"),
    btnFlipDetail: byId("btn-flip-detail"),
    memoryBtnText: byId("memory-btn-text"),
    inspectDetailText: byId("inspect-detail-text"),
    inspectEchoText: byId("inspect-echo-text"),
    dispositionList: byId("disposition-list"),
    memoryOverlay: byId("memory-overlay"),
    memoryStamp: byId("memory-stamp"),
    memoryCanvasBox: byId("memory-canvas-box"),
    memoryPromptHint: byId("memory-Prompt-hint"),
    memorySpokenLine: byId("memory-spoken-line"),
    thresholdOverlay: byId("threshold-overlay"),
    thresholdActions: byId("threshold-actions"),
    endingOverlay: byId("ending-overlay"),
    endingTitle: byId("ending-title"),
    endingSceneBox: byId("ending-scene-box"),
    endingLines: byId("ending-lines"),
    endingLastAction: byId("ending-last-action"),
    leftItemsGrid: byId("left-items-grid"),
    archiveOverlay: byId("archive-overlay"),
    archiveEndingsList: byId("archive-endings-list"),
    viewport: byId("viewport")
  };

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      return;
    }
  }

  function itemData(itemId) {
    return data.items.find((item) => item.id === itemId);
  }

  function icon(itemId) {
    const icons = {
      photo: '<svg viewBox="0 0 36 36"><rect x="5" y="5" width="26" height="26" rx="3" fill="#efe4d4" stroke="#c8a97e" stroke-width="1.6"/><rect x="8" y="8" width="20" height="15" rx="1.5" fill="#2a3a4a"/><circle cx="14" cy="15" r="2.6" fill="#e3b778"/><circle cx="21" cy="15" r="2.6" fill="#c6d4e1"/></svg>',
      cup: '<svg viewBox="0 0 36 36" fill="none"><path d="M8 11h16v13c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6V11Z" fill="#525c68" stroke="#d9c3a4" stroke-width="1.6"/><path d="M24 14h3.5a3.5 3.5 0 0 1 0 7H24" stroke="#d9c3a4" stroke-width="1.6"/></svg>',
      key: '<svg viewBox="0 0 36 36" fill="none"><circle cx="12" cy="18" r="5.5" stroke="#e5b976" stroke-width="2"/><path d="M17.5 18H30m-5 0v4m3.5-4v3.5" stroke="#e5b976" stroke-width="2"/><rect x="5" y="24" width="11" height="5" rx="2" fill="#5c88a8"/></svg>',
      box: '<svg viewBox="0 0 36 36" fill="none"><path d="m6 13 12-5 12 5v13l-12 5-12-5V13Z" fill="#8c6743" stroke="#e4c193" stroke-width="1.5"/><path d="m6 13 12 5 12-5M18 18v13" stroke="#e4c193" stroke-width="1.4"/></svg>',
      medicine: '<svg viewBox="0 0 36 36"><rect x="6" y="10" width="24" height="16" rx="3" fill="#dce3e8" stroke="#93a8b8" stroke-width="1.5"/><path d="M6 16h24" stroke="#7a97ac" stroke-width="2"/><circle cx="13" cy="21" r="2" fill="#d48472"/><circle cx="19" cy="21" r="2" fill="#d48472"/></svg>',
      playlist: '<svg viewBox="0 0 36 36" fill="none"><rect x="10" y="6" width="16" height="24" rx="3" fill="#232b36" stroke="#c9b293" stroke-width="1.5"/><path d="M15 18v-6l7-1.5V17" stroke="#e5ab67" stroke-width="1.6"/><circle cx="14" cy="18.5" r="1.8" fill="#e5ab67"/><circle cx="21" cy="17" r="1.8" fill="#e5ab67"/></svg>',
      rent: '<svg viewBox="0 0 36 36" fill="none"><rect x="8" y="6" width="20" height="24" rx="3" fill="#283240" stroke="#d5bc98" stroke-width="1.5"/><path d="M13 13h10m-10 5h8m-8 5h5" stroke="#e7c28e" stroke-width="1.6"/></svg>'
    };
    return icons[itemId] || "";
  }

  function disposedCount() {
    return Object.values(state.run.items).filter((itemState) => itemState.disposition).length;
  }

  function clockText() {
    const total = 21 * 60 + 40 + state.run.minutesPassed;
    return `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
  }

  function renderChrome() {
    const count = disposedCount();
    dom.roomClock.textContent = clockText();
    dom.arrivalNote.textContent = count === 0
      ? "她妈妈那班高铁快到站了"
      : count < 4
        ? `已整理 ${count}/7 样旧物 · 地铁离这儿两站`
        : count < 7
          ? `已整理 ${count}/7 样 · 可随时走到玄关门边`
          : "房间里的东西都动过了 · 去门边收尾吧";
    const seenCount = state.archive.seenEndings.length;
    dom.endingsCountDot.textContent = seenCount ? `记录 ${seenCount}/4` : "记录";
    dom.muteLabel.textContent = state.settings.muted ? "静音" : "有声";
    dom.hapticLabel.textContent = state.settings.haptics ? "触感" : "无震";
    byId("btn-mute").setAttribute("aria-pressed", String(!state.settings.muted));
    byId("btn-haptic").setAttribute("aria-pressed", String(state.settings.haptics));
    dom.doorThresholdBtn.classList.toggle("ready", count >= 4);
    dom.doorTagSub.textContent = count >= 4 ? "收拾得差不多了" : `再理几样 (${count}/4)`;
    dom.btnFinishPack.classList.toggle("hidden", count < 4);
    dom.btnUndo.classList.toggle("hidden", !state.run.lastUndo);
  }

  function renderScene() {
    layoutScene();
    dom.sceneWorld.dataset.zone = state.run.zone;
    dom.sceneWorld.dataset.proximity = state.run.proximity;
    dom.btnZoneDesk.classList.toggle("active", state.run.zone === "desk");
    dom.btnZoneLiving.classList.toggle("active", state.run.zone === "living");
    dom.btnProximity.textContent = state.run.proximity === "close" ? "退回门口" : "走近半步";
  }

  function layoutScene() {
    const viewportWidth = dom.viewport.clientWidth;
    const viewportHeight = dom.viewport.clientHeight;
    const imageRatio = sceneLayout.sourceWidth / sceneLayout.sourceHeight;
    let worldWidth = viewportWidth;
    let worldHeight = viewportWidth / imageRatio;
    if (worldHeight < viewportHeight) {
      worldHeight = viewportHeight;
      worldWidth = worldHeight * imageRatio;
    }
    dom.sceneWorld.style.width = `${worldWidth}px`;
    dom.sceneWorld.style.height = `${worldHeight}px`;
    dom.sceneWorld.style.left = `${(viewportWidth - worldWidth) / 2}px`;
    dom.sceneWorld.style.top = `${(viewportHeight - worldHeight) / 2}px`;
  }

  function sceneObjectState(itemId) {
    const layout = sceneItemMap[itemId];
    const disposition = state.run.items[itemId].disposition;
    const hidden = new Set([
      "photo:drawer", "photo:pack_box", "cup:cabinet", "cup:wrap_pack",
      "key:keep_self", "key:envelope", "box:hide_closet",
      "medicine:drawer", "medicine:pack_box"
    ]);
    const position = { x: layout.x, y: layout.y };
    if (itemId === "key" && disposition === "return_hand") {
      position.x = 600;
      position.y = 872;
    }
    return { position, removed: hidden.has(`${itemId}:${disposition}`) };
  }

  function renderHotspots() {
    dom.hotspotsLayer.innerHTML = "";
    data.items.forEach((item) => {
      const layout = sceneItemMap[item.id];
      const itemState = state.run.items[item.id];
      const objectState = sceneObjectState(item.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "item-hotspot scene-object";
      button.dataset.itemId = item.id;
      button.style.left = `${objectState.position.x / sceneLayout.sourceWidth * 100}%`;
      button.style.top = `${objectState.position.y / sceneLayout.sourceHeight * 100}%`;
      button.style.width = `${layout.width / sceneLayout.sourceWidth * 100}%`;
      button.style.height = `${layout.height / sceneLayout.sourceHeight * 100}%`;
      button.setAttribute("aria-label", `${item.name}，轻点检视，长按回忆，拖动处置`);
      if (itemState.disposition) button.classList.add("disposed");
      if (objectState.removed) button.classList.add("scene-object-removed");
      if (state.archive.completedRuns > 0 && !state.archive.exploredMemories.includes(item.id)) {
        button.classList.add("unexplored-hint");
      }
      button.innerHTML = `<img class="scene-object-image" src="${layout.src}" alt="" draggable="false"><span class="scene-object-label">${item.name}</span>`;
      if (item.id === "playlist" || item.id === "rent") {
        const overlay = document.createElement("span");
        overlay.className = `scene-screen-overlay scene-screen-${item.id}`;
        overlay.innerHTML = "<span></span><span></span><span></span>";
        button.appendChild(overlay);
      }
      bindHotspot(button, item);
      dom.hotspotsLayer.appendChild(button);
    });
  }

  function hoveredDropZone(clientX, clientY) {
    return dom.dropZones.find((zone) => {
      const rect = zone.getBoundingClientRect();
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    });
  }

  function bindHotspot(button, item) {
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let pointerOffsetX = 0;
    let pointerOffsetY = 0;
    let dragging = false;
    let movedToMemory = false;
    let holdTimer = null;

    button.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      const buttonRect = button.getBoundingClientRect();
      pointerOffsetX = event.clientX - buttonRect.left;
      pointerOffsetY = event.clientY - buttonRect.top;
      dragging = false;
      movedToMemory = false;
      try { button.setPointerCapture(pointerId); } catch (error) {}
      holdTimer = setTimeout(() => {
        if (!dragging) {
          movedToMemory = true;
          openInspect(item.id);
          startMemory(item.id);
        }
      }, 650);
    });

    button.addEventListener("pointermove", (event) => {
      if (pointerId !== event.pointerId || movedToMemory) return;
      if (!dragging && Math.hypot(event.clientX - startX, event.clientY - startY) > 12) {
        dragging = true;
        clearTimeout(holdTimer);
        button.classList.add("dragging");
        dom.dropZonesLayer.classList.add("active");
      }
      if (!dragging) return;
      const rect = dom.sceneWorld.getBoundingClientRect();
      const nextLeft = (event.clientX - rect.left - pointerOffsetX) / rect.width * 100;
      const nextTop = (event.clientY - rect.top - pointerOffsetY) / rect.height * 100;
      button.style.left = `${Math.max(-4, Math.min(96, nextLeft))}%`;
      button.style.top = `${Math.max(4, Math.min(94, nextTop))}%`;
      const hovered = hoveredDropZone(event.clientX, event.clientY);
      dom.dropZones.forEach((zone) => zone.classList.toggle("hovered", zone === hovered));
    });

    function finish(event) {
      if (pointerId !== event.pointerId) return;
      clearTimeout(holdTimer);
      pointerId = null;
      if (movedToMemory) return;
      if (dragging) {
        const target = hoveredDropZone(event.clientX, event.clientY);
        button.classList.remove("dragging");
        dom.dropZonesLayer.classList.remove("active");
        dom.dropZones.forEach((zone) => zone.classList.remove("hovered"));
        if (target) {
          applyDisposition(item.id, item.dropMap[target.dataset.drop]);
        } else {
          renderHotspots();
        }
      } else {
        openInspect(item.id);
      }
    }

    button.addEventListener("pointerup", finish);
    button.addEventListener("pointercancel", finish);
    button.addEventListener("click", (event) => {
      if (event.detail === 0 && !dragging && !movedToMemory) openInspect(item.id);
    });
  }

  function renderInspection(item) {
    const itemState = state.run.items[item.id];
    dom.inspectVisual.classList.toggle("flipped", itemState.flipped && item.id === "photo");
    dom.inspectDetailText.textContent = itemState.flipped ? item.backDetail : item.frontDetail;
    dom.memoryBtnText.textContent = itemState.memoryDone ? "再次触碰这段旧日" : "长按物品或点此进入回忆";
    const link = data.linkedPairs[item.id];
    const showEcho = link && itemState.memoryDone && state.run.items[link.partner].memoryDone;
    dom.inspectEchoText.classList.toggle("hidden", !showEcho);
    dom.inspectEchoText.textContent = showEcho ? link.echo : "";

    if (item.id === "photo") {
      dom.inspectVisual.innerHTML = itemState.flipped
        ? '<div class="photo-back-note" style="transform:rotateY(180deg)"><span>2019.06.21 傍晚</span><p style="margin:auto 0">“风很大，别往后退。”</p><span>—— 刚搬进 302 的那周</span></div>'
        : '<div class="photo-inspect-card"><img src="./assets/photo-memory.png" alt="天台旧合照" draggable="false"><span style="font-size:11px">2019 · 旧楼天台</span></div>';
    } else if (item.id === "playlist") {
      dom.inspectVisual.innerHTML = '<div class="scrollable-records"><button class="record-item" data-track="song1"><span>01 · 《夜车》</span><span>深夜公交</span></button><button class="record-item" data-track="song2"><span>02 · 《便利店七点》</span><span>循环 47 次</span></button><button class="record-item" data-track="song3"><span>03 · 《搬家日》</span><span>旧楼道回声</span></button></div>';
      dom.inspectVisual.querySelectorAll("[data-track]").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          audio.play(button.dataset.track);
          state.run.items.playlist.flipped = true;
          dom.inspectDetailText.textContent = item.backDetail;
          saveState();
        });
      });
    } else if (item.id === "rent") {
      dom.inspectVisual.innerHTML = '<div class="scrollable-records"><div class="record-item"><span>2021.09 · 押金差额</span><span>阿岚先垫付</span></div><div class="record-item"><span>2022.06 · 夏天水电</span><span>我付了全月</span></div><div class="record-item"><span>2023.11 · 热水器维修</span><span>两人平摊</span></div><div class="record-item"><span>今晚 · 本月房租</span><span>待处理</span></div></div>';
    } else {
      dom.inspectVisual.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;gap:10px;max-width:260px;text-align:center"><img class="inspect-object-image" src="${sceneItemMap[item.id].src}" alt="${item.name}"><span style="font-size:12px;color:#ead9c3;line-height:1.5">${itemState.flipped ? item.backDetail : item.frontDetail}</span></div>`;
    }
  }

  function openInspect(itemId) {
    const item = itemData(itemId);
    if (!item) return;
    activeItemId = itemId;
    state.run.items[itemId].inspected = true;
    state.run.zone = item.zone;
    dom.inspectTitle.textContent = item.name;
    dom.inspectPlace.textContent = item.place;
    dom.btnFlipDetail.textContent = item.flipButtonLabel;
    renderInspection(item);
    dom.dispositionList.innerHTML = "";
    item.dispositions.forEach((disposition) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "disposition-btn";
      button.dataset.disposition = disposition.id;
      button.classList.toggle("selected", state.run.items[itemId].disposition === disposition.id);
      button.innerHTML = `<span class="disposition-btn-title">${disposition.title}</span><span class="disposition-btn-sub">${disposition.sub}</span>`;
      button.addEventListener("click", () => {
        applyDisposition(itemId, disposition.id);
        closeInspect();
      });
      dom.dispositionList.appendChild(button);
    });
    dom.inspectSheet.classList.remove("hidden");
    dom.inspectSheet.setAttribute("aria-hidden", "false");
    if (!state.run.coachShown) {
      state.run.coachShown = true;
      dom.gestureCoach.classList.remove("hidden");
      setTimeout(() => dom.gestureCoach.classList.add("hidden"), 3200);
    }
    audio.play(itemId === "key" ? "key" : itemId === "cup" ? "cup" : itemId === "box" ? "box" : "pickup");
    renderScene();
    renderHotspots();
    saveState();
  }

  function closeInspect() {
    dom.inspectSheet.classList.add("hidden");
    dom.inspectSheet.setAttribute("aria-hidden", "true");
    activeItemId = null;
  }

  function flipInspection() {
    if (!activeItemId) return;
    const itemState = state.run.items[activeItemId];
    itemState.flipped = !itemState.flipped;
    audio.play(activeItemId === "box" ? "tape" : activeItemId === "key" ? "key" : "flip");
    renderInspection(itemData(activeItemId));
    saveState();
  }

  function applyDisposition(itemId, dispositionId) {
    const item = itemData(itemId);
    const disposition = item && item.dispositions.find((entry) => entry.id === dispositionId);
    if (!disposition) return;
    const itemState = state.run.items[itemId];
    state.run.lastUndo = { itemId, previousDisposition: itemState.disposition };
    if (!itemState.disposition) state.run.minutesPassed = Math.min(38, state.run.minutesPassed + 4);
    itemState.disposition = dispositionId;
    itemState.inspected = true;
    dom.alanStateTag.textContent = disposition.alanTag;
    dom.alanPropIndicator.textContent = `${item.name} · ${disposition.title}`;
    dom.alanPropIndicator.classList.add("visible");
    dom.reactionText.textContent = itemState.memoryDone && disposition.reactionWithMemory
      ? disposition.reactionWithMemory
      : disposition.reaction;
    dom.openingLineCard.classList.add("faded");
    audio.play(itemId === "key" ? "key" : itemId === "cup" ? "cup" : itemId === "box" ? "box" : "pickup");
    renderChrome();
    renderHotspots();
    saveState();
  }

  function undoDisposition() {
    const undo = state.run.lastUndo;
    if (!undo) return;
    state.run.items[undo.itemId].disposition = undo.previousDisposition;
    state.run.lastUndo = null;
    dom.alanPropIndicator.classList.remove("visible");
    dom.reactionText.textContent = `你把「${itemData(undo.itemId).name}」拿了回来，重新决定放在哪。`;
    audio.play("pickup");
    renderChrome();
    renderHotspots();
    saveState();
  }

  function startMemory(itemId) {
    if (!itemData(itemId)) return;
    clearTimeout(memoryCloseTimer);
    activeMemoryId = itemId;
    memoryCompleting = false;
    const item = itemData(itemId);
    dom.memoryStamp.textContent = item.memoryStamp;
    dom.memoryPromptHint.textContent = item.memoryHint;
    dom.memorySpokenLine.textContent = "";
    dom.memoryCanvasBox.innerHTML = "";
    buildMemory(item);
    dom.memoryOverlay.classList.remove("hidden");
    dom.memoryOverlay.setAttribute("aria-hidden", "false");
    audio.play("memory");
  }

  function closeMemory() {
    clearTimeout(memoryCloseTimer);
    dom.memoryOverlay.classList.add("hidden");
    dom.memoryOverlay.setAttribute("aria-hidden", "true");
    activeMemoryId = null;
    memoryCompleting = false;
  }

  function completeMemory() {
    if (!activeMemoryId || memoryCompleting) return;
    memoryCompleting = true;
    const completedId = activeMemoryId;
    const itemState = state.run.items[completedId];
    itemState.memoryDone = true;
    itemState.inspected = true;
    itemState.flipped = true;
    if (!state.archive.exploredMemories.includes(completedId)) {
      state.archive.exploredMemories.push(completedId);
    }
    audio.play("memory");
    saveState();
    memoryCloseTimer = setTimeout(() => {
      closeMemory();
      if (activeItemId === completedId) renderInspection(itemData(completedId));
      dom.reactionText.textContent = `你的视线从「${itemData(completedId).name}」上收回来，阿岚正把折好的毛衣放到手边。`;
      renderHotspots();
    }, 650);
  }

  function memoryLayout(visual, controls) {
    dom.memoryCanvasBox.innerHTML = `<div class="mem-interactive-wrap"><div class="mem-visual-box">${visual}</div>${controls}</div>`;
  }

  function buildMemory(item) {
    if (item.id === "photo") {
      memoryLayout(
        '<img id="memory-photo-image" src="./assets/photo-memory.png" alt="天台取景" style="width:122%;height:122%;object-fit:cover;transform:translateX(-18px);transition:transform .15s"><div id="memory-viewfinder" style="position:absolute;width:74%;height:74%;border:2px solid #f5cd94;border-radius:10px;box-shadow:0 0 0 999px #080a0e73;pointer-events:none"></div>',
        '<div class="mem-slider-row"><span>偏左</span><input id="memory-photo-slider" class="mem-slider" type="range" min="0" max="100" value="15" aria-label="拖动取景框"><span>居中</span></div><button id="memory-shutter" class="mem-action-btn" type="button">对准后按下快门</button>'
      );
      const slider = byId("memory-photo-slider");
      slider.addEventListener("input", () => {
        byId("memory-photo-image").style.transform = `translateX(${(50 - Number(slider.value)) * 0.45}px)`;
        if (Number(slider.value) >= 42 && Number(slider.value) <= 68) {
          byId("memory-viewfinder").style.borderColor = "#7fd1ae";
          dom.memorySpokenLine.textContent = item.memoryLine;
        }
      });
      byId("memory-shutter").addEventListener("click", () => {
        slider.value = "52";
        slider.dispatchEvent(new Event("input"));
        audio.play("shutter");
        completeMemory();
      });
      return;
    }

    if (item.id === "cup") {
      memoryLayout(
        '<div style="display:flex;gap:26px"><div style="text-align:center"><div style="width:60px;height:82px;border:2px solid #cbb292;border-radius:6px 6px 14px 14px;position:relative;overflow:hidden"><div id="memory-cup-player" style="position:absolute;inset:auto 0 0;height:20%;background:#dca667;transition:height .25s"></div></div><small>给你的那杯</small></div><div style="text-align:center"><div style="width:60px;height:82px;border:2px solid #8fa4b8;border-radius:6px 6px 14px 14px;position:relative;overflow:hidden"><div id="memory-cup-alan" style="position:absolute;inset:auto 0 0;height:20%;background:#7395b1;transition:height .25s"></div></div><small>阿岚的那杯</small></div></div>',
        '<button id="memory-pour" class="mem-action-btn" type="button">按住水壶倒水</button>'
      );
      let pourTimer = null;
      let level = 20;
      function stopPour() { clearInterval(pourTimer); pourTimer = null; }
      function pourStep() {
        level = Math.min(90, level + 12);
        byId("memory-cup-player").style.height = `${level}%`;
        byId("memory-cup-alan").style.height = `${Math.max(28, level - 22)}%`;
        if (level >= 84) {
          stopPour();
          dom.memorySpokenLine.textContent = item.memoryLine;
          audio.play("cup");
          completeMemory();
        }
      }
      byId("memory-pour").addEventListener("pointerdown", (event) => {
        event.preventDefault();
        stopPour();
        pourStep();
        pourTimer = setInterval(pourStep, 180);
      });
      ["pointerup", "pointercancel", "pointerleave"].forEach((name) => byId("memory-pour").addEventListener(name, stopPour));
      byId("memory-pour").addEventListener("click", () => { if (!pourTimer) pourStep(); });
      return;
    }

    if (item.id === "key") {
      memoryLayout(
        `<div style="width:88px;height:88px">${icon("key")}</div><p style="font-size:12px;color:#cbd7e3">玄关鞋柜边，她刚换下帆布鞋</p>`,
        '<div class="mem-slider-row"><span>她的手边</span><input id="memory-key-slider" class="mem-slider" type="range" min="0" max="100" value="10" aria-label="接过钥匙"><span>接进手心</span></div><button id="memory-key-take" class="mem-action-btn" type="button">伸手接过钥匙</button>'
      );
      function takeKey() {
        dom.memorySpokenLine.textContent = item.memoryLine;
        audio.play("key");
        completeMemory();
      }
      byId("memory-key-slider").addEventListener("input", (event) => {
        if (Number(event.target.value) >= 80) takeKey();
      });
      byId("memory-key-take").addEventListener("click", takeKey);
      return;
    }

    if (item.id === "box") {
      memoryLayout(
        `<div style="width:82px;height:82px">${icon("box")}</div><p id="memory-box-label" style="font-size:12px;text-align:center;color:#ead8c0">2020.03 · 第一次一起封箱，箱侧写下“暂住”</p>`,
        '<div class="mem-step-chips"><button class="mem-step-chip" data-box-step="seal" type="button">拉紧胶带</button><button class="mem-step-chip" data-box-step="lift" type="button">抬上四楼</button><button class="mem-step-chip" data-box-step="door" type="button">推开房门</button></div>'
      );
      const completedSteps = new Set();
      dom.memoryCanvasBox.querySelectorAll("[data-box-step]").forEach((button) => {
        button.addEventListener("click", () => {
          const step = button.dataset.boxStep;
          completedSteps.add(step);
          button.classList.add("done");
          if (step === "seal") byId("memory-box-label").textContent = "2021.11 · 第二次换房，旧胶带上又压了一层";
          if (step === "lift") byId("memory-box-label").textContent = "2023.04 · 箱角磨软了，“暂住”还在";
          if (step === "door") dom.memorySpokenLine.textContent = item.memoryLine;
          audio.play(step === "seal" ? "tape" : step === "door" ? "lock" : "box");
          if (completedSteps.size === 3) completeMemory();
        });
      });
      return;
    }

    if (item.id === "medicine") {
      memoryLayout(
        `<div style="width:82px;height:82px">${icon("medicine")}</div><p id="memory-medicine-label" style="font-size:12px;text-align:center;color:#d6e1ec">冬夜窗缝有风，阿岚坐在床边，伸手试了试你额头的温度</p>`,
        '<div class="mem-step-chips"><button class="mem-step-chip" data-medicine-step="curtain" type="button">拉拢窗帘</button><button class="mem-step-chip" data-medicine-step="water" type="button">推近温水</button></div>'
      );
      const completedSteps = new Set();
      dom.memoryCanvasBox.querySelectorAll("[data-medicine-step]").forEach((button) => {
        button.addEventListener("click", () => {
          completedSteps.add(button.dataset.medicineStep);
          button.classList.add("done");
          if (button.dataset.medicineStep === "curtain") byId("memory-medicine-label").textContent = "窗帘合拢后，房间只剩床头小灯的暖光";
          if (button.dataset.medicineStep === "water") dom.memorySpokenLine.textContent = item.memoryLine;
          audio.play("cup");
          if (completedSteps.size === 2) completeMemory();
        });
      });
      return;
    }

    if (item.id === "playlist") {
      memoryLayout(
        `<div style="width:82px;height:82px">${icon("playlist")}</div><p style="font-size:12px;text-align:center;color:#ead8c0">《便利店七点》 · 01:47<br>路灯光从车窗掠过两人的袖口</p>`,
        '<div class="mem-slider-row"><span>单耳</span><input id="memory-ear-slider" class="mem-slider" type="range" min="0" max="100" value="25" aria-label="分出左耳耳机"><span>左耳给她</span></div><button id="memory-ear-button" class="mem-action-btn" type="button">把左耳耳机递给她</button>'
      );
      function shareEarphone() {
        dom.memorySpokenLine.textContent = item.memoryLine;
        audio.play("song2");
        completeMemory();
      }
      byId("memory-ear-slider").addEventListener("input", (event) => {
        if (Number(event.target.value) >= 75) shareEarphone();
      });
      byId("memory-ear-button").addEventListener("click", shareEarphone);
      return;
    }

    if (item.id === "rent") {
      memoryLayout(
        `<div style="width:78px;height:78px">${icon("rent")}</div><p id="memory-rent-note" style="font-size:12px;text-align:center;color:#ead8c0">备注：“这月手头紧，下月发薪马上还你”</p><small style="color:#9bb2c7;text-align:center">她在厨房背对你烧水，假装没看见</small>`,
        '<div class="mem-step-chips"><button id="memory-delete-note" class="mem-step-chip" type="button">删掉客套备注</button><button id="memory-send-rent" class="mem-action-btn" type="button">按下转账</button></div>'
      );
      byId("memory-delete-note").addEventListener("click", () => {
        byId("memory-rent-note").textContent = "转账备注：（空白）";
        byId("memory-delete-note").classList.add("done");
        audio.play("flip");
      });
      byId("memory-send-rent").addEventListener("click", () => {
        dom.memorySpokenLine.textContent = item.memoryLine;
        completeMemory();
      });
    }
  }

  function relationshipScores() {
    const totals = { closeness: 0, boundary: 0, avoidance: 0, debt: 0, expectation: 0, reciprocity: 0, honesty: 0, overstep: 0 };
    data.items.forEach((item) => {
      const dispositionId = state.run.items[item.id].disposition;
      const disposition = item.dispositions.find((entry) => entry.id === dispositionId);
      if (!disposition) return;
      Object.entries(disposition.weights).forEach(([dimension, value]) => {
        totals[dimension] += value;
      });
    });
    return totals;
  }

  function openThreshold() {
    if (disposedCount() < 4) {
      dom.reactionText.textContent = `房间里还有不少东西没动（已整理 ${disposedCount()}/7），先收一收再去门边吧。`;
      return;
    }
    dom.thresholdActions.innerHTML = "";
    data.thresholdActions.forEach((action) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "threshold-btn";
      button.dataset.thresholdAction = action.id;
      button.innerHTML = `<span class="threshold-btn-title">${action.title}</span><span class="threshold-btn-sub">${action.sub}</span>`;
      button.addEventListener("click", () => resolveEnding(action.id));
      dom.thresholdActions.appendChild(button);
    });
    dom.thresholdOverlay.classList.remove("hidden");
    dom.thresholdOverlay.setAttribute("aria-hidden", "false");
  }

  function closeThreshold() {
    dom.thresholdOverlay.classList.add("hidden");
    dom.thresholdOverlay.setAttribute("aria-hidden", "true");
  }

  function resolveEnding(finalActionId) {
    closeThreshold();
    const scores = relationshipScores();
    let endingId = "stay";
    if (scores.debt >= 3 || scores.overstep >= 3 || (state.run.items.rent.disposition === "overpay" && state.run.items.box.disposition === "hide_closet")) {
      endingId = "imbalance";
    } else if (finalActionId === "act_open_box" || finalActionId === "act_speak_leave") {
      endingId = "honest";
    } else if (finalActionId === "act_hand_key") {
      endingId = scores.honesty >= 4 && scores.avoidance <= 2 ? "honest" : "polite";
    } else if (finalActionId === "act_sit_listen") {
      endingId = scores.boundary >= 7 && scores.closeness <= 2 ? "polite" : "stay";
    }
    state.run.finalAction = finalActionId;
    state.run.endingId = endingId;
    if (!state.archive.seenEndings.includes(endingId)) state.archive.seenEndings.push(endingId);
    state.archive.completedRuns += 1;
    saveState();
    showEnding(endingId);
  }

  function summaryItems() {
    const order = ["key", "photo", "box", "cup", "playlist", "rent", "medicine"];
    const disposed = order.filter((itemId) => state.run.items[itemId].disposition);
    const chosen = disposed.concat(order.filter((itemId) => !disposed.includes(itemId))).slice(0, 3);
    return chosen.map((itemId) => {
      const item = itemData(itemId);
      const disposition = item.dispositions.find((entry) => entry.id === state.run.items[itemId].disposition);
      return { id: itemId, name: item.name, summary: disposition ? disposition.summaryLabel : "未曾挪动" };
    });
  }

  function showEnding(endingId) {
    const ending = data.endings[endingId] || data.endings.stay;
    dom.endingTitle.textContent = ending.title;
    dom.endingSceneBox.innerHTML = `<img src="./assets/room-main-v2.png" alt="${ending.title}"><div class="ending-scene-caption">${ending.caption}</div>`;
    dom.endingLines.innerHTML = ending.lines.map((line) => `<p>${line}</p>`).join("");
    const memoryChangesAction =
      (endingId === "honest" && (state.run.items.key.memoryDone || state.run.items.box.memoryDone)) ||
      (endingId === "stay" && (state.run.items.playlist.memoryDone || state.run.items.medicine.memoryDone)) ||
      (endingId === "polite" && (state.run.items.key.memoryDone || state.run.items.photo.memoryDone)) ||
      (endingId === "imbalance" && (state.run.items.rent.memoryDone || state.run.items.box.memoryDone));
    dom.endingLastAction.textContent = memoryChangesAction ? ending.actionMemory : ending.actionDefault;
    dom.leftItemsGrid.innerHTML = summaryItems().map((item) => `<div class="left-item-card"><div style="width:32px;height:32px">${icon(item.id)}</div><span class="left-item-name">${item.name}</span><span class="left-item-state">${item.summary}</span></div>`).join("");
    dom.endingOverlay.classList.remove("hidden");
    dom.endingOverlay.setAttribute("aria-hidden", "false");
    renderChrome();
    audio.play("lock");
  }

  function closeArchive() {
    dom.archiveOverlay.classList.add("hidden");
    dom.archiveOverlay.setAttribute("aria-hidden", "true");
  }

  function openArchive() {
    dom.archiveEndingsList.innerHTML = ["stay", "honest", "polite", "imbalance"].map((endingId) => {
      const seen = state.archive.seenEndings.includes(endingId);
      return `<div class="archive-row ${seen ? "seen" : ""}"><span style="font-size:13px;color:${seen ? "#f5e8d6" : "#857e74"}">${seen ? data.endings[endingId].title : "尚未走到的落点"}</span><span style="font-size:11px;color:#b6ada0">${seen ? "已记录" : "未触发"}</span></div>`;
    }).join("");
    dom.archiveOverlay.classList.remove("hidden");
    dom.archiveOverlay.setAttribute("aria-hidden", "false");
  }

  function restartRun() {
    clearTimeout(memoryCloseTimer);
    state.run = initialRun();
    activeItemId = null;
    activeMemoryId = null;
    closeInspect();
    closeMemory();
    closeThreshold();
    closeArchive();
    dom.endingOverlay.classList.add("hidden");
    dom.endingOverlay.setAttribute("aria-hidden", "true");
    dom.openingLineCard.classList.remove("faded");
    dom.alanStateTag.textContent = "阿岚正在折毛衣";
    dom.alanPropIndicator.classList.remove("visible");
    dom.reactionText.textContent = "客厅只开着落地灯，冰箱在背后低低地响。";
    renderScene();
    renderChrome();
    renderHotspots();
    saveState();
  }

  function clearAll() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (error) { return; }
    state = initialState();
    audio.setMuted(false);
    audio.setHaptics(true);
    restartRun();
  }

  function setZone(zone) {
    state.run.zone = zone;
    renderScene();
    saveState();
  }

  function toggleProximity() {
    state.run.proximity = state.run.proximity === "close" ? "normal" : "close";
    if (state.run.proximity === "close") {
      dom.alanStateTag.textContent = "阿岚把沙发边腾出一小块空位";
      dom.reactionText.textContent = "你往茶几边走近了半步，阿岚把折好的衣服往身边收了收。";
    } else {
      dom.alanStateTag.textContent = "阿岚继续低头折毛衣";
      dom.reactionText.textContent = "你退回到卧室门口，刚好能看清整间小客厅。";
    }
    renderScene();
    saveState();
  }

  function bindInspectGestures() {
    let holdTimer = null;
    let animationFrame = null;
    let startedAt = 0;
    let pointerStartX = 0;
    let flippedByDrag = false;

    function reset() {
      clearTimeout(holdTimer);
      cancelAnimationFrame(animationFrame);
      dom.ringProgress.style.strokeDashoffset = "239";
    }

    function advanceRing(timestamp) {
      if (!startedAt) startedAt = timestamp;
      const ratio = Math.min(1, (timestamp - startedAt) / 600);
      dom.ringProgress.style.strokeDashoffset = String(239 * (1 - ratio));
      if (ratio < 1) animationFrame = requestAnimationFrame(advanceRing);
    }

    dom.inspectStage.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button") || event.target.closest("input")) return;
      startedAt = 0;
      pointerStartX = event.clientX;
      flippedByDrag = false;
      animationFrame = requestAnimationFrame(advanceRing);
      holdTimer = setTimeout(() => {
        reset();
        if (activeItemId) startMemory(activeItemId);
      }, 600);
    });

    dom.inspectStage.addEventListener("pointermove", (event) => {
      if (!pointerStartX || flippedByDrag || Math.abs(event.clientX - pointerStartX) < 60) return;
      flippedByDrag = true;
      reset();
      flipInspection();
    });

    ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
      dom.inspectStage.addEventListener(eventName, () => {
        pointerStartX = 0;
        reset();
      });
    });
  }

  function bindViewportPan() {
    let startX = 0;
    let startY = 0;
    dom.viewport.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button")) return;
      startX = event.clientX;
      startY = event.clientY;
    });
    dom.viewport.addEventListener("pointerup", (event) => {
      if (!startX) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      startX = 0;
      if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) setZone(deltaX < 0 ? "living" : "desk");
    });
  }

  function bindEvents() {
    dom.btnZoneDesk.addEventListener("click", () => setZone("desk"));
    dom.btnZoneLiving.addEventListener("click", () => setZone("living"));
    dom.btnProximity.addEventListener("click", toggleProximity);
    byId("alan-zone-btn").addEventListener("click", () => {
      state.run.zone = "living";
      const scores = relationshipScores();
      if (scores.overstep >= 2 || scores.debt >= 3) {
        state.run.proximity = "normal";
        dom.alanStateTag.textContent = "阿岚往沙发里侧偏了偏肩";
        dom.reactionText.textContent = "你刚想靠近，阿岚借着拿衣服的动作自然地避开了半寸。";
        renderScene();
      } else {
        toggleProximity();
      }
      saveState();
    });
    dom.doorThresholdBtn.addEventListener("click", openThreshold);
    dom.btnFinishPack.addEventListener("click", openThreshold);
    dom.btnUndo.addEventListener("click", undoDisposition);
    byId("btn-close-inspect").addEventListener("click", closeInspect);
    document.querySelector("[data-close-inspect]").addEventListener("click", closeInspect);
    dom.btnFlipDetail.addEventListener("click", flipInspection);
    byId("btn-enter-memory").addEventListener("click", () => { if (activeItemId) startMemory(activeItemId); });
    byId("btn-skip-memory").addEventListener("click", closeMemory);
    byId("btn-close-threshold").addEventListener("click", closeThreshold);
    document.querySelector("[data-close-threshold]").addEventListener("click", closeThreshold);
    byId("btn-mute").addEventListener("click", () => {
      state.settings.muted = !state.settings.muted;
      audio.setMuted(state.settings.muted);
      if (!state.settings.muted) audio.play("pickup");
      renderChrome();
      saveState();
    });
    byId("btn-haptic").addEventListener("click", () => {
      state.settings.haptics = !state.settings.haptics;
      audio.setHaptics(state.settings.haptics);
      audio.vibrate(12);
      renderChrome();
      saveState();
    });
    byId("btn-restart").addEventListener("click", restartRun);
    byId("btn-play-again").addEventListener("click", restartRun);
    byId("btn-clear-storage").addEventListener("click", clearAll);
    byId("btn-endings-drawer").addEventListener("click", openArchive);
    byId("btn-close-archive").addEventListener("click", closeArchive);
    document.querySelector("[data-close-archive]").addEventListener("click", closeArchive);
    byId("btn-archive-reset-run").addEventListener("click", restartRun);
    byId("btn-archive-clear-all").addEventListener("click", clearAll);
    bindInspectGestures();
    bindViewportPan();
  }

  function startAmbientLife() {
    clearInterval(ambientTimer);
    ambientTimer = setInterval(() => {
      if (!dom.inspectSheet.classList.contains("hidden") || !dom.memoryOverlay.classList.contains("hidden") || !dom.endingOverlay.classList.contains("hidden")) return;
      ambientIndex = (ambientIndex + 1) % data.ambientStates.length;
      dom.alanStateTag.textContent = data.ambientStates[ambientIndex].tag;
    }, 9000);
  }

  function init() {
    audio.setMuted(state.settings.muted);
    audio.setHaptics(state.settings.haptics);
    window.addEventListener("resize", layoutScene);
    dom.spokenText.textContent = data.openingSpoken;
    renderScene();
    renderChrome();
    renderHotspots();
    bindEvents();
    startAmbientLife();
    if (state.run.endingId) showEnding(state.run.endingId);
  }

  init();
})();
