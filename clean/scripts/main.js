/* 样式生产管理 Demo · 精简版 v0.2-clean
 * 与 v0.2 主版差异：去掉「创意广场」「入库审批」相关交互
 */
(function () {
  'use strict';



  // ============ 模板池 Tab ============
  function activatePoolTab(name) {
    document.querySelectorAll('.pool-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.pooltab === name));
    document.querySelectorAll('.pool-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === name));
  }
  document.querySelectorAll('.pool-tabs .tab').forEach(tab => {
    tab.addEventListener('click', () => activatePoolTab(tab.dataset.pooltab));
  });

  // ============ Filter Pills ============
  document.querySelectorAll('.filter-bar, .table-toolbar-right').forEach(bar => {
    const groups = [];
    let cur = [];
    bar.childNodes.forEach(n => {
      if (n.nodeType === 1) {
        if (n.classList.contains('filter-divider') || n.classList.contains('filter-label')) {
          if (cur.length) { groups.push(cur); cur = []; }
        } else if (n.classList.contains('pill')) {
          cur.push(n);
        }
      }
    });
    if (cur.length) groups.push(cur);
    groups.forEach(g => {
      g.forEach(p => {
        p.addEventListener('click', () => {
          g.forEach(x => x.classList.remove('active'));
          p.classList.add('active');
        });
      });
    });
  });

  // ============ 二级抽屉通用 ============
  const sideMask = document.getElementById('sideDrawerMask');
  const formDrawer = document.getElementById('formDrawer');
  const pipelineDrawer = document.getElementById('pipelineDrawer');

  function showDrawer(el) {
    el.classList.add('show');
    sideMask.classList.add('show');
  }
  function hideAllDrawers() {
    formDrawer.classList.remove('show');
    pipelineDrawer.classList.remove('show');
    sideMask.classList.remove('show');
  }
  sideMask?.addEventListener('click', hideAllDrawers);
  document.querySelectorAll('[data-close]').forEach(b => {
    b.addEventListener('click', hideAllDrawers);
  });

  // ============ 形态行点击 → 实验数据抽屉 ============
  // 各形态实验数据
  const expData = {
    '原生': [
      { name: 'Android_SDK_边下边播错误优化实验', status: '100%', cost: '+0.23%', ecpm: '+0.48%', ctr: '+0.29%', cvr: '+0.24%' },
      { name: 'iOS_全形态_SDN多链路优化实验', status: '100%', cost: '+0.13%', ecpm: '-0.24%', ctr: '+0.05%', cvr: '-0.33%' },
      { name: '【iOS】全屏广告点击时补曝光_半屏添加到window后立即检测曝光_2', status: '100%', cost: '+0.04%', ecpm: '-0.25%', ctr: '-0.93%', cvr: '+0.02%', danger: true },
      { name: '【iOS】【全形态】模板资源预加载实验', status: '100%', cost: '+0.03%', ecpm: '-0.94%', ctr: '-0.11%', cvr: '+0.12%' },
      { name: '联盟SDK流量_调整联盟视频播放上报时间_V1', status: '100%', cost: '0.00%', ecpm: '0.00%', ctr: '-', cvr: '-' },
      { name: 'Android_SDK_自渲染MediaView展示失败优化实验', status: '5%', cost: '-0.01%', ecpm: '-0.54%', ctr: '+0.02%', cvr: '-0.04%' },
      { name: '【iOS】NSTimer切换GCDTimer实验', status: '100%', cost: '-0.23%', ecpm: '-0.05%', ctr: '+0.02%', cvr: '+0.13%' },
      { name: 'Android_SDK_边下边播卡顿优化实验', status: '100%', cost: '-0.51%', ecpm: '-0.75%', ctr: '-0.40%', cvr: '-0.20%', danger: true }
    ],
    '激励视频': [
      { name: '双端_激励_1003723模板实验', status: '100%', cost: '+7.34%', ecpm: '+5.36%', ctr: '-0.98%', cvr: '-0.33%', big: true, danger: true },
      { name: '双端_开插激励原生_26Y618模板上线实验', status: '20%', cost: '+0.06%', ecpm: '+0.17%', ctr: '-0.10%', cvr: '-0.01%' },
      { name: 'Android_激励_1003718小游戏试玩规格2264模板实验', status: '1%', cost: '-', ecpm: '-', ctr: '-', cvr: '-' },
      { name: '双端_激励_蚂蚁阿福定制化点击激励模板', status: '100%', cost: '-0.29%', ecpm: '+1.36%', ctr: '+0.05%', cvr: '-0.23%' }
    ],
    '开屏': [
      { name: '双端_开屏_系统弹窗大按钮_v3', status: '100%', cost: '+1.85%', ecpm: '+2.24%', ctr: '+0.45%', cvr: '+0.12%', big: true },
      { name: 'iOS_开屏_竖滑视频实验', status: '10%', cost: '+0.62%', ecpm: '+0.41%', ctr: '+0.18%', cvr: '+0.08%' },
      { name: 'Android_开屏_摇扭用_启动延迟优化', status: '100%', cost: '-0.11%', ecpm: '-0.02%', ctr: '+0.21%', cvr: '+0.05%' }
    ],
    '插屏': [
      { name: '双端_插屏半屏_炫光岛屿模板实验', status: '100%', cost: '+2.41%', ecpm: '+1.88%', ctr: '+0.62%', cvr: '+0.31%', big: true },
      { name: 'iOS_插屏_点击区域优化', status: '5%', cost: '+0.18%', ecpm: '+0.22%', ctr: '+0.08%', cvr: '+0.04%' }
    ],
    'Banner': [
      { name: 'Banner_品牌横版刷新频率实验', status: '20%', cost: '+0.05%', ecpm: '+0.03%', ctr: '+0.02%', cvr: '+0.01%' }
    ]
  };

  function renderExpTable(form) {
    const list = expData[form] || [];
    const tbody = document.getElementById('expTbody');
    if (!tbody) return;
    document.getElementById('expSectionTitle').textContent = `${form} · ${list.length} 个实验`;
    tbody.innerHTML = list.map(e => {
      const cls = c => {
        if (c === '-' || c === '0.00%') return '';
        if (c.startsWith('+')) return 'up';
        if (c.startsWith('-')) return 'down';
        return '';
      };
      const arrow = c => {
        if (c === '-' || c === '0.00%') return c;
        if (c.startsWith('+')) return `▲ ${c}`;
        if (c.startsWith('-')) return `▼ ${c}`;
        return c;
      };
      const danger = e.danger ? ' danger' : '';
      const big = e.big ? ' big' : '';
      const layer = parseFloat(e.status);
      const stCls = layer >= 100 ? 'st-full' : (layer >= 10 ? 'st-mid' : 'st-trial');
      return `<tr>
        <td>${e.name}</td>
        <td><span class="exp-status ${stCls}">${e.status}</span></td>
        <td class="${cls(e.cost)}${big}">${arrow(e.cost)}</td>
        <td class="${cls(e.ecpm)}${big}">${arrow(e.ecpm)}</td>
        <td class="${cls(e.ctr)}${danger}">${arrow(e.ctr)}</td>
        <td class="${cls(e.cvr)}${danger}">${arrow(e.cvr)}</td>
        <td class="col-act"><a class="link" href="javascript:void(0)">🔗 查看</a></td>
      </tr>`;
    }).join('');
  }

  // ============ 模板行点击 → 流水线抽屉 ============
  // 阶段（pill / badge 文案）→ 步骤号 映射（v0.6：8 节点版，原 ②设计+③调整 合并为 ② 模板编辑）
  const STAGE_TO_STEP = {
    '编辑中':       '2',
    '调整中':       '2',
    '测试中':       '3',
    '草稿上线':     '4',
    '草稿发布':     '4',
    '规则配置':     '5',
    '实验中':       '6',
    '待草稿发布审批': '7',
    '正式草稿':     '7',
    '已上线':       '8',
    '已发布':       '8'
  };

  // ============ 模板成绩单数据 ============
  const reportData = {
    '1003690': {
      name: '【小店】弹窗+商品信息_自渲染_信息流_视频_图文',
      thumb: '🛍️',
      form: '原生 · 信息流',
      scene: '信息流',
      size: '0×0（自适应）',
      specIds: '2147,1766,351,865,2107,2106,1414,1413,1529,585,866,1874,862,1109',
      onlineDate: '2026-04-12',
      onlineDays: '47 天',
      cost: '¥421w',
      ctr: '9.85%',
      cvr: '26.13%',
      ecpm: '¥38.6',
      imp: '1,820w / 日',
      rank: '原生 TOP 2',
      experiments: [
        { name: '双端_自渲染_信息流_小店弹窗模板上线实验', status: '已全量', delta: '消耗 +6.2% · eCPM +12.4%' },
        { name: 'iOS_全形态_SDN多链路优化实验', status: '已全量', delta: '消耗 +0.13% · eCPM -0.24%' }
      ],
      anomaly: '小米机型在折叠屏展开态下商品信息溢出（占曝光 1.8%），深度转化页 H5 加载 P95 偏高 2.1s。',
      suggest: '商品信息层切换到 ConstraintLayout 自适应；H5 引入预加载 prefetch；可一键克隆为 v2 继承数据。',
      readers: '2.4k 阅读 · 18 评论'
    },
    '1003723': {
      name: '双端_激励_1003723模板',
      thumb: '🎮',
      form: '激励视频',
      scene: '激励视频',
      size: '9×16',
      specIds: '1735,1736,1874',
      onlineDate: '2026-04-25',
      onlineDays: '34 天',
      cost: '¥412w',
      ctr: '62.5%',
      cvr: '34.2%',
      ecpm: '¥56.2',
      imp: '720w / 日',
      rank: '激励视频 TOP 3',
      experiments: [
        { name: '双端_激励_endcard交互重构实验', status: '已全量', delta: '消耗 +4.8% · eCPM +9.1%' }
      ],
      anomaly: 'OPPO ColorOS 13 部分机型 endcard 关闭按钮区域被系统返回手势遮挡（占曝光 1.2%）。',
      suggest: '关闭按钮 hit-area 上移 16dp，避开手势热区；可联动激励赛道全形态复制方案。',
      readers: '1.7k 阅读 · 11 评论'
    },
    '1003721': {
      name: '商品信息_系统弹窗_插屏半屏-9x16视频-大区域-左下',
      thumb: '🎬',
      form: '插屏 · 半屏视频',
      scene: '插屏',
      size: '9×16',
      specIds: '1529,2107,2106,1414,1413,585,866,862,1109',
      onlineDate: '2026-05-02',
      onlineDays: '27 天',
      cost: '¥182w',
      ctr: '25.6%',
      cvr: '14.8%',
      ecpm: '¥43.4',
      imp: '420w / 日',
      rank: '插屏 TOP 6',
      experiments: [
        { name: '双端_插屏半屏_左下大区域商品信息实验', status: '运行中 · 第 6 天', delta: '消耗 +2.1% · eCPM +5.4%（中期）' }
      ],
      anomaly: '半屏视频在 Android 13+ 系统手势区误触关闭率较 v0 上升 0.8pp。',
      suggest: '关闭按钮位置上移 24dp 避开手势区；商品信息卡片增加 8dp 阴影增强层级感。',
      readers: '980 阅读 · 5 评论'
    },
    '1001023': {
      name: '【全突破】自渲染_信息流_图片_透明模板',
      thumb: '🖼️',
      form: '原生 · 透明模板',
      scene: '信息流',
      size: '0×0（自适应）',
      specIds: '351,865,866,1413,1414',
      onlineDate: '2025-09-08',
      onlineDays: '264 天（长青）',
      cost: '¥274w（近 30d）',
      ctr: '8.49%',
      cvr: '11.2%',
      ecpm: '¥20.0',
      imp: '610w / 日',
      rank: '原生 TOP 9',
      experiments: [
        { name: '（长青模板，无在跑实验，仅作为基线）', status: '已全量', delta: '—' }
      ],
      anomaly: '长期稳定运行，无显著异常。建议每月检查一次素材合规性。',
      suggest: '该模板已成为信息流场景基线，不做主动优化；新模板均以此为对照组评估增量。',
      readers: '6.2k 阅读 · 42 评论（累计）'
    },
    '1003728': {
      name: '[小说短剧]标准版深转激励-激励浏览(1735)',
      thumb: '📚',
      form: '激励视频',
      scene: '激励视频',
      size: '0×0（自适应）',
      specIds: '1735',
      onlineDate: '2026-05-08',
      onlineDays: '21 天',
      cost: '¥98.2w',
      ctr: '64.3%',
      cvr: '38.7%',
      ecpm: '¥61.8',
      imp: '380w / 日',
      rank: '激励视频 TOP 5',
      experiments: [
        { name: '双端_激励_深转激励浏览(1735)规格实验', status: '已全量', delta: '消耗 +5.1% · eCPM +8.3%' }
      ],
      anomaly: '激励满 30s 跳转外站 H5 时，部分 Vivo 设备返回键失效（占曝光 0.6%）。',
      suggest: '在 H5 容器内监听 hardwareBack，回流时强制返回原生页；可联动小说&短剧赛道复制规格。',
      readers: '1.1k 阅读 · 6 评论'
    }
  };

  function renderReport(tplId, stageText) {
    const data = reportData[tplId];
    const empty = document.getElementById('reportEmpty');
    const full = document.getElementById('reportFull');
    const onlineBadge = document.getElementById('reportOnlineBadge');

    if (!data) {
      if (empty) empty.style.display = '';
      if (full) full.style.display = 'none';
      if (onlineBadge) {
        onlineBadge.textContent = stageText || '尚未上线';
        onlineBadge.className = 'badge wait';
      }
      return;
    }

    if (empty) empty.style.display = 'none';
    if (full) full.style.display = '';
    if (onlineBadge) {
      onlineBadge.textContent = `已上线 ${data.onlineDays}`;
      onlineBadge.className = 'badge ok';
    }

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    document.getElementById('reportThumb').textContent = data.thumb;
    set('reportTplName', data.name);
    set('reportTplId', tplId);
    set('reportScene', data.scene || data.form || '—');
    set('reportOnlineDate', data.onlineDate);
    set('reportOnlineDays', data.onlineDays);

    set('rkCost', data.cost);
    set('rkDailyCost', data.dailyCost || '—');
    set('rkCtr', data.ctr);
    set('rkCvr', data.cvr);
    set('rkImp', data.imp);
    set('rkEcpm', data.ecpm || '¥20');

    set('reportSubMeta', `${data.name} · 上线 ${data.onlineDate}`);

    const expWrap = document.getElementById('reportExpList');
    if (expWrap) {
      if (data.experiments?.length) {
        expWrap.innerHTML = data.experiments.map(e => `
          <div class="report-exp-item">
            <span class="exp-status ${e.status === '已全量' ? 'st-full' : 'st-running'}">${e.status}</span>
            <span class="report-exp-name">${e.name}</span>
            <span class="report-exp-delta">${e.delta}</span>
          </div>`).join('');
      } else {
        expWrap.innerHTML = '<div class="muted">无关联实验</div>';
      }
    }

    set('reportAnomaly', data.anomaly);
    set('reportSuggest', data.suggest);

    set('wecomTplName', data.name);
    set('wecomCtr', data.ctr);
    set('wecomCost', data.cost);
    set('wecomAnomaly', data.anomaly);
    set('wecomSuggest', data.suggest);
    set('wecomFoot', `点击查看 · ${data.readers}`);
  }

  function activateStep(no) {
    const current = parseInt(no, 10);
    const steps = document.querySelectorAll('#pipelineDrawer .step');
    steps.forEach(s => {
      const n = parseInt(s.dataset.step, 10);
      s.classList.remove('done', 'active');
      if (n < current) s.classList.add('done');
      else if (n === current) s.classList.add('active');
    });
    // 步骤间的连接线（.step-gap）·当左侧 step 为 done 时，连线置为 primary 色
    document.querySelectorAll('#pipelineDrawer .step-gap').forEach(gap => {
      const prev = gap.previousElementSibling;
      const next = gap.nextElementSibling;
      const prevDone = prev && prev.classList.contains('done') && !prev.classList.contains('active');
      const bothDone = prevDone && next && next.classList.contains('done');
      gap.classList.toggle('done', !!bothDone);
    });
    document.querySelectorAll('#pipelineDrawer .step-content').forEach(c => {
      c.classList.toggle('active', c.dataset.stepContent === no);
    });
    renderStepGapTimes();
  }

  // 把两步 done-at 时间戳之差渲染成「实际耗时」（不是预估时间）
  // 规则：
  //   - 两端都已完成 → 显示真实差值（5min / 1.2h / 1d3h …）
  //   - 左端完成、右端未完成（含 active）→ 显示「进行中 · 已 xxx」用 now - leftDoneAt
  //   - 否则 → 显示 "—"
  function fmtDuration(ms) {
    if (ms < 0) ms = 0;
    const min = Math.round(ms / 60000);
    if (min < 60) return `${min}min`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    if (h < 24) return m ? `${h}h${m}min` : `${h}h`;
    const d = Math.floor(h / 24);
    const rh = h % 24;
    return rh ? `${d}d${rh}h` : `${d}d`;
  }
  function renderStepGapTimes() {
    const gaps = document.querySelectorAll('#pipelineDrawer .step-gap');
    const now = Date.now();
    gaps.forEach(gap => {
      const prev = gap.previousElementSibling;
      const next = gap.nextElementSibling;
      const label = gap.querySelector('.step-gap-time');
      if (!label || !prev || !next) return;
      const lAt = prev.dataset.doneAt ? new Date(prev.dataset.doneAt).getTime() : null;
      const rAt = next.dataset.doneAt ? new Date(next.dataset.doneAt).getTime() : null;
      if (lAt && rAt) {
        label.textContent = `⏱ ${fmtDuration(rAt - lAt)}`;
      } else if (lAt && next.classList.contains('active')) {
        label.textContent = `⏱ 进行中 · 已 ${fmtDuration(now - lAt)}`;
      } else {
        label.textContent = '—';
      }
    });
  }
  renderStepGapTimes();
  document.querySelectorAll('#pipelineDrawer .step').forEach(s => {
    s.addEventListener('click', () => activateStep(s.dataset.step));
  });
  document.querySelectorAll('#pipelineDrawer .step-nav-btn').forEach(b => {
    b.addEventListener('click', () => activateStep(b.dataset.jump));
  });

  function inferStepFromRow(row) {
    if (!row) return '2';
    const pill = row.querySelector('.stage-pill, .badge');
    const text = (pill?.textContent || '').trim();
    return STAGE_TO_STEP[text] || '2';
  }
  function inferStageText(row) {
    if (!row) return '';
    const pill = row.querySelector('.stage-pill, .badge');
    return (pill?.textContent || '').trim();
  }

  document.querySelectorAll('[data-pipeline]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const tplId = a.dataset.pipeline;
      const row = a.closest('tr');
      const tplName = row?.querySelector('td:nth-child(2)')?.textContent?.trim() || '当前模板';
      const stepNo = inferStepFromRow(row);
      const stageText = inferStageText(row);
      document.getElementById('pipelineDrawerTitle').textContent = `模板生产流水线 · ${tplName}`;
      document.getElementById('pipelineDrawerSub').textContent =
        `模板ID：${tplId}${stageText ? ' · 当前阶段：' + stageText : ''} · 创建 → 编辑 → 测试 → 草稿发布 → 规则配置 → 实验 → 全量上线 → 成绩单`;
      renderReport(tplId, stageText);
      activateStep(stepNo);
      showDrawer(pipelineDrawer);
    });
  });

  document.querySelectorAll('[data-report]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const tplId = a.dataset.report;
      const row = a.closest('tr');
      const tplName = row?.querySelector('td:nth-child(2)')?.textContent?.trim() || '当前模板';
      const stageText = inferStageText(row) || '已上线';
      document.getElementById('pipelineDrawerTitle').textContent = `模板数据成绩单 · ${tplName}`;
      document.getElementById('pipelineDrawerSub').textContent =
        `模板ID：${tplId} · 当前阶段：${stageText} · 已上线后自动出 v1 报告`;
      renderReport(tplId, stageText);
      activateStep('8');
      showDrawer(pipelineDrawer);
    });
  });

  document.querySelectorAll('[data-edit]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const tplId = a.dataset.edit;
      const row = a.closest('tr');
      const tplName = row?.querySelector('td:nth-child(2)')?.textContent?.trim() || '';
      const ok = window.confirm(
        `即将打开 iDOMO 模板编辑器\n\n模板：${tplName}\n模板ID：${tplId}\n\n（demo 演示：实际会跳转到 iDOMO 画布；当前打开占位页 idomo-editor.html）`
      );
      if (ok) {
        window.open(`idomo-editor.html?id=${tplId}&name=${encodeURIComponent(tplName)}`, '_blank', 'noopener');
      }
    });
  });

  document.querySelectorAll('[data-jump-empty]').forEach(b => {
    b.addEventListener('click', () => {
      const sub = document.getElementById('pipelineDrawerSub')?.textContent || '';
      const match = sub.match(/当前阶段：(\S+?)\s/);
      const stage = match ? match[1] : '';
      const step = STAGE_TO_STEP[stage] || '2';
      activateStep(step);
    });
  });

  // ============ Agent inline-btn 提示 ============
  document.querySelectorAll('.inline-btn').forEach(b => {
    b.addEventListener('click', e => {
      e.stopPropagation();
      const t = b.textContent.trim();
      if (t.includes('流水线')) {
        hideAgent();
        const trigger = document.querySelector('[data-pipeline="1003638"]');
        if (trigger) {
          trigger.click();
        } else {
          document.getElementById('pipelineDrawerTitle').textContent = '模板生产流水线 · 开屏-夏日冰镇风 v1';
          document.getElementById('pipelineDrawerSub').textContent = '模板ID：1003638 · 创建 → 编辑 → 测试 → 草稿发布 → 规则配置 → 实验 → 全量上线 → 成绩单';
          activateStep('1');
          showDrawer(pipelineDrawer);
        }
      }
    });
  });

  // "我的实验数据看板"右上角"查看我的全部实验"按钮
  document.getElementById('goAllMyExp')?.addEventListener('click', () => {
    const titleEl = document.getElementById('formDrawerTitle');
    if (titleEl) titleEl.textContent = `我的实验 · 全部 8 个`;
    renderExpTable('原生');
    const tt = document.getElementById('expSectionTitle');
    if (tt) tt.textContent = `我的实验 · 共 8 个（3 在跑 / 5 已全量）`;
    showDrawer(formDrawer);
  });


  function showToast(msg) {
    let t = document.getElementById('claw-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'claw-toast';
      t.className = 'claw-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // ============ ④ 模板测试 · 自动化测试 / 人工测试（可跳过） ============
  function bindAutoTestBtn(id) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      btn.disabled = true;
      const old = btn.textContent;
      btn.textContent = '⏳ 自动化测试运行中…';
      showToast('已启动自动化测试 · AI 已生成 case');
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = '✓ 测试完成 (24/24)';
        showToast('测试完成 · 通过率 24/24 · 报告单已生成');
      }, 2000);
    });
  }
  bindAutoTestBtn('btnRunAutoTest');

  function bindUrgeQA(id, who) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      showToast(`已在协作群内 @ 相关人 · ${who}`);
    });
  }
  bindUrgeQA('btnUrgeQA',  '@test_lily');

  // ============ ⑦ 模板实验 · 开启实验按钮 ============
  const btnStartExp = document.getElementById('btnStartExp');
  if (btnStartExp) {
    btnStartExp.addEventListener('click', () => {
      btnStartExp.disabled = true;
      btnStartExp.textContent = '⏳ 实验创建中…';
      showToast('正在 TAB 平台创建实验 · 绑定灰度规则…');
      setTimeout(() => {
        const startCard = document.getElementById('expStartCard');
        const expContent = document.getElementById('expContent');
        if (startCard) startCard.style.display = 'none';
        if (expContent) expContent.style.display = '';
        showToast('✓ 实验已开启 · EXP-2026-0529-01 · 10% 灰度');
      }, 1200);
    });
  }


  // ============ 通用弹窗（tpl-dialog）============
  function showDialog(id) {
    const d = document.getElementById(id);
    if (!d) return;
    d.classList.add('show');
    d.setAttribute('aria-hidden', 'false');
  }
  function hideDialog(id) {
    const d = document.getElementById(id);
    if (!d) return;
    d.classList.remove('show');
    d.setAttribute('aria-hidden', 'true');
  }
  document.querySelectorAll('[data-dlg-close]').forEach(el => {
    el.addEventListener('click', () => hideDialog(el.dataset.dlgClose));
  });

  // ============ ⑤ 草稿发布 · 提交上线按钮（弹窗 + MyOA 回填） ============
  const btnSubmitOnline = document.getElementById('btnSubmitOnline');
  if (btnSubmitOnline) {
    btnSubmitOnline.addEventListener('click', () => showDialog('dlgDraftOnline'));
  }
  const dlgDraftSubmitBtn = document.getElementById('dlgDraftSubmitBtn');
  if (dlgDraftSubmitBtn) {
    dlgDraftSubmitBtn.addEventListener('click', () => {
      const remark = (document.getElementById('draftRemarkInput')?.value || '').trim();
      if (!remark) { showToast('请填写备注'); return; }
      hideDialog('dlgDraftOnline');
      showToast('MyOA 审批单已下发 · 测试 / 产品 / 技术 三段审批');
      const ioa = document.getElementById('ioaResultDraft');
      if (ioa) ioa.style.display = 'block';
      const r = document.getElementById('ioaResultRemarkDraft');
      if (r) r.textContent = remark;
      const badge = document.getElementById('onlineStatusBadge');
      if (badge) { badge.textContent = '审批中'; badge.className = 'badge wait'; }
      const tip = document.getElementById('onlineStatusTip');
      if (tip) tip.textContent = 'MyOA 审批已下发 · 完成后将解锁灰度环境';
      if (btnSubmitOnline) {
        btnSubmitOnline.disabled = true;
        btnSubmitOnline.textContent = '✓ 已提交（审批中）';
      }
    });
  }
  const btnUrgeDraftMyOA = document.getElementById('btnUrgeDraftMyOA');
  if (btnUrgeDraftMyOA) {
    btnUrgeDraftMyOA.addEventListener('click', () => showToast('已在协作群内 @ 相关人 · MyOA 当前节点审批人已收到提醒'));
  }

  // ============ ⑧ 全量上线 · 提交按钮（弹窗 + MyOA 回填） ============
  const btnSubmitFullOnline = document.getElementById('btnSubmitFullOnline');
  if (btnSubmitFullOnline) {
    btnSubmitFullOnline.addEventListener('click', () => showDialog('dlgFullOnline'));
  }
  const dlgFullSubmitBtn = document.getElementById('dlgFullSubmitBtn');
  if (dlgFullSubmitBtn) {
    dlgFullSubmitBtn.addEventListener('click', () => {
      const remark = (document.getElementById('fullRemarkInput')?.value || '').trim();
      if (!remark) { showToast('请填写备注'); return; }
      hideDialog('dlgFullOnline');
      showToast('MyOA 全量上线审批单已下发');
      const ioa = document.getElementById('ioaResultFull');
      if (ioa) ioa.style.display = 'block';
      const r = document.getElementById('ioaResultRemarkFull');
      if (r) r.textContent = remark;
      const badge = document.getElementById('fullOnlineBadge');
      if (badge) { badge.textContent = '审批中'; badge.className = 'badge wait'; }
      const tip = document.getElementById('fullOnlineTip');
      if (tip) tip.textContent = 'MyOA 审批已下发 · 完成后正式投放线上 100% 流量';
      if (btnSubmitFullOnline) {
        btnSubmitFullOnline.disabled = true;
        btnSubmitFullOnline.textContent = '✓ 已提交（审批中）';
      }
    });
  }
  const btnUrgeFullMyOA = document.getElementById('btnUrgeFullMyOA');
  if (btnUrgeFullMyOA) {
    btnUrgeFullMyOA.addEventListener('click', () => showToast('已在协作群内 @ 相关人 · MyOA 当前节点审批人已收到提醒'));
  }

  // ============ ⑦ 模板实验 · 跳过按钮（弹窗 + 产研审批） ============
  const btnSkipExp = document.getElementById('btnSkipExp');
  if (btnSkipExp) {
    btnSkipExp.addEventListener('click', () => showDialog('dlgSkipExp'));
  }
  const dlgSkipExpSubmitBtn = document.getElementById('dlgSkipExpSubmitBtn');
  if (dlgSkipExpSubmitBtn) {
    dlgSkipExpSubmitBtn.addEventListener('click', () => {
      const reason = (document.getElementById('skipExpReason')?.value || '').trim();
      if (!reason) { showToast('请填写跳过原因'); return; }
      hideDialog('dlgSkipExp');
      showToast('已提交跳过申请 · 产品 + 研发审批中');
      if (btnSkipExp) {
        btnSkipExp.disabled = true;
        btnSkipExp.textContent = '✓ 已申请跳过（审批中）';
      }
    });
  }

  // ============ Step 2 · 设计 Agent Tab 切换（D2C / C2D2C）============
  document.querySelectorAll('#pipelineDrawer .da-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.datab;
      document.querySelectorAll('#pipelineDrawer .da-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('#pipelineDrawer .da-pane').forEach(p => p.classList.toggle('active', p.dataset.dapane === key));
    });
  });

  // ============ 步骤内跳转（data-jump-step）============
  document.querySelectorAll('#pipelineDrawer [data-jump-step]').forEach(b => {
    b.addEventListener('click', () => activateStep(b.dataset.jumpStep));
  });

  // ============ Step 1 · 一键拉协作群 ============
  const btnInviteIM = document.getElementById('btnInviteIM');
  if (btnInviteIM) {
    btnInviteIM.addEventListener('click', () => {
      btnInviteIM.disabled = true;
      btnInviteIM.textContent = '✓ 协作群已建';
      const tip = document.getElementById('imGroupTip');
      if (tip) tip.innerHTML = '群名：<b>【模板1003638】夏日冰镇风开屏 · 协作群</b> · 已邀请 产品 / 设计 / 研发 / 测试 / 运营 5 位';
      showToast('已创建协作群「【模板1003638】夏日冰镇风开屏 · 协作群」');
    });
  }

  // ============ Step 6 · adata Tab 切换（昨天 / 前 3 天 / 前 7 天）============
  const adataTabs = document.getElementById('adataTabs');
  if (adataTabs) {
    const adataSamples = {
      d1: { cost: '¥18.4w', ctr: '9.62%',  cvr: '20.18%', imp: '486w',   ecpm: '¥37.9' },
      d3: { cost: '¥54.2w', ctr: '9.71%',  cvr: '20.06%', imp: '1,432w', ecpm: '¥37.8' },
      d7: { cost: '¥126.8w',ctr: '9.62%',  cvr: '20.18%', imp: '3,402w', ecpm: '¥37.9' }
    };
    adataTabs.querySelectorAll('.subtab').forEach(t => {
      t.addEventListener('click', () => {
        adataTabs.querySelectorAll('.subtab').forEach(x => x.classList.toggle('active', x === t));
        const key = t.dataset.adataTab;
        const d = adataSamples[key] || adataSamples.d1;
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('adataCost', d.cost);
        set('adataCtr',  d.ctr);
        set('adataCvr',  d.cvr);
        set('adataImp',  d.imp);
        set('adataEcpm', d.ecpm);
      });
    });
  }

})();
