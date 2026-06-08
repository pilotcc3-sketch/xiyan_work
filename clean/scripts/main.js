/* 样式生产管理 Demo · 精简版 v0.2-clean
 * 与 v0.2 主版差异：去掉「创意广场」「入库审批」相关交互
 */
(function () {
  'use strict';

  // ============ 视角切换 ============
  const roleBtns = document.querySelectorAll('.role-btn');
  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const role = btn.dataset.role;

      if (role === 'product') {
        activateTab('overview');
      }

      const av = document.querySelector('.user-avatar');
      if (av) {
        const map = { product: '樊', design: '桃', dev: '楠', ops: '伦' };
        av.textContent = map[role] || '客';
      }
    });
  });

  // ============ 首页 / 我的工作台 ============
  function activateTab(name) {
    document.querySelectorAll('#dashboard > .section-head .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    document.querySelectorAll('#dashboard > .tab-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === name));
  }
  document.querySelectorAll('#dashboard > .section-head .tab').forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  });

  // ============ 我的工作台子 Tab ============
  function activateSubTab(name) {
    document.querySelectorAll('.subtab').forEach(t => t.classList.toggle('active', t.dataset.subtab === name));
    document.querySelectorAll('.subtab-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === name));
  }
  document.querySelectorAll('.subtab').forEach(tab => {
    tab.addEventListener('click', () => activateSubTab(tab.dataset.subtab));
  });

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

  // ============ Agent 抽屉 ============
  const agentDrawer = document.getElementById('agentDrawer');
  const agentMask = document.getElementById('agentMask');
  const openAgent = document.getElementById('openAgent');
  const closeAgent = document.getElementById('closeAgent');
  const agentBarInput = document.getElementById('agentBarInput');

  function showAgent() { agentDrawer.classList.add('show'); agentMask.classList.add('show'); }
  function hideAgent() { agentDrawer.classList.remove('show'); agentMask.classList.remove('show'); }
  openAgent?.addEventListener('click', showAgent);
  closeAgent?.addEventListener('click', hideAgent);
  agentMask?.addEventListener('click', hideAgent);
  agentBarInput?.addEventListener('focus', showAgent);

  document.querySelectorAll('.agent-tab').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.agent-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const target = t.dataset.agentTab;
      document.querySelectorAll('.agent-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === target));
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
      { name: 'Android_SDK_边下边播错误优化实验', status: '100%', cost: '+0.23%', gmv: '+0.48%', ctr: '+0.29%', cvr: '+0.24%' },
      { name: 'iOS_全形态_SDN多链路优化实验', status: '100%', cost: '+0.13%', gmv: '-0.24%', ctr: '+0.05%', cvr: '-0.33%' },
      { name: '【iOS】全屏广告点击时补曝光_半屏添加到window后立即检测曝光_2', status: '100%', cost: '+0.04%', gmv: '-0.25%', ctr: '-0.93%', cvr: '+0.02%', danger: true },
      { name: '【iOS】【全形态】模板资源预加载实验', status: '100%', cost: '+0.03%', gmv: '-0.94%', ctr: '-0.11%', cvr: '+0.12%' },
      { name: '联盟SDK流量_调整联盟视频播放上报时间_V1', status: '100%', cost: '0.00%', gmv: '0.00%', ctr: '-', cvr: '-' },
      { name: 'Android_SDK_自渲染MediaView展示失败优化实验', status: '5%', cost: '-0.01%', gmv: '-0.54%', ctr: '+0.02%', cvr: '-0.04%' },
      { name: '【iOS】NSTimer切换GCDTimer实验', status: '100%', cost: '-0.23%', gmv: '-0.05%', ctr: '+0.02%', cvr: '+0.13%' },
      { name: 'Android_SDK_边下边播卡顿优化实验', status: '100%', cost: '-0.51%', gmv: '-0.75%', ctr: '-0.40%', cvr: '-0.20%', danger: true }
    ],
    '激励视频': [
      { name: '双端_激励_1003723模板实验', status: '100%', cost: '+7.34%', gmv: '+5.36%', ctr: '-0.98%', cvr: '-0.33%', big: true, danger: true },
      { name: '双端_开插激励原生_26Y618模板上线实验', status: '20%', cost: '+0.06%', gmv: '+0.17%', ctr: '-0.10%', cvr: '-0.01%' },
      { name: 'Android_激励_1003718小游戏试玩规格2264模板实验', status: '1%', cost: '-', gmv: '-', ctr: '-', cvr: '-' },
      { name: '双端_激励_蚂蚁阿福定制化点击激励模板', status: '100%', cost: '-0.29%', gmv: '+1.36%', ctr: '+0.05%', cvr: '-0.23%' }
    ],
    '开屏': [
      { name: '双端_开屏_系统弹窗大按钮_v3', status: '100%', cost: '+1.85%', gmv: '+2.24%', ctr: '+0.45%', cvr: '+0.12%', big: true },
      { name: 'iOS_开屏_竖滑视频实验', status: '10%', cost: '+0.62%', gmv: '+0.41%', ctr: '+0.18%', cvr: '+0.08%' },
      { name: 'Android_开屏_摇扭用_启动延迟优化', status: '100%', cost: '-0.11%', gmv: '-0.02%', ctr: '+0.21%', cvr: '+0.05%' }
    ],
    '插屏': [
      { name: '双端_插屏半屏_炫光岛屿模板实验', status: '100%', cost: '+2.41%', gmv: '+1.88%', ctr: '+0.62%', cvr: '+0.31%', big: true },
      { name: 'iOS_插屏_点击区域优化', status: '5%', cost: '+0.18%', gmv: '+0.22%', ctr: '+0.08%', cvr: '+0.04%' }
    ],
    'Banner': [
      { name: 'Banner_品牌横版刷新频率实验', status: '20%', cost: '+0.05%', gmv: '+0.03%', ctr: '+0.02%', cvr: '+0.01%' }
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
        <td class="${cls(e.gmv)}${big}">${arrow(e.gmv)}</td>
        <td class="${cls(e.ctr)}${danger}">${arrow(e.ctr)}</td>
        <td class="${cls(e.cvr)}${danger}">${arrow(e.cvr)}</td>
        <td class="col-act"><a class="link" href="javascript:void(0)">🔗 查看</a></td>
      </tr>`;
    }).join('');
  }

  // ============ 模板行点击 → 流水线抽屉 ============
  // 阶段（pill / badge 文案）→ 步骤号 映射（v0.4：10 节点版）
  const STAGE_TO_STEP = {
    '编辑中':       '3',
    '调整中':       '3',
    '测试中':       '4',
    '草稿上线':     '5',
    '草稿发布':     '5',
    '灰度回归':     '6',
    '规则配置':     '7',
    '实验中':       '8',
    '待上线审批':   '9',
    '正式草稿':     '9',
    '已上线':       '10',
    '已发布':       '10'
  };

  // ============ 模板成绩单数据 ============
  const reportData = {
    '1003690': {
      name: '【小店】弹窗+商品信息_自渲染_信息流_视频_图文',
      thumb: '🛍️',
      form: '原生 · 信息流',
      parent: '1002819',
      size: '0×0（自适应）',
      specIds: '2147,1766,351,865,2107,2106,1414,1413,1529,585,866,1874,862,1109',
      onlineDate: '2026-04-12',
      onlineDays: '47 天',
      cost: '¥421w',
      ctr: '9.85%',
      cvr: '26.13%',
      gmv: '+38%',
      imp: '1,820w / 日',
      rank: '原生 TOP 2',
      experiments: [
        { name: '双端_自渲染_信息流_小店弹窗模板上线实验', status: '已全量', delta: '消耗 +6.2% · GMV +12.4%' },
        { name: 'iOS_全形态_SDN多链路优化实验', status: '已全量', delta: '消耗 +0.13% · GMV -0.24%' }
      ],
      anomaly: '小米机型在折叠屏展开态下商品信息溢出（占曝光 1.8%），深度转化页 H5 加载 P95 偏高 2.1s。',
      suggest: '商品信息层切换到 ConstraintLayout 自适应；H5 引入预加载 prefetch；可一键克隆为 v2 继承数据。',
      readers: '2.4k 阅读 · 18 评论'
    },
    '1003723': {
      name: '双端_激励_1003723模板',
      thumb: '🎮',
      form: '激励视频',
      parent: '1003680',
      size: '9×16',
      specIds: '1735,1736,1874',
      onlineDate: '2026-04-25',
      onlineDays: '34 天',
      cost: '¥412w',
      ctr: '62.5%',
      cvr: '34.2%',
      gmv: '+27%',
      imp: '720w / 日',
      rank: '激励视频 TOP 3',
      experiments: [
        { name: '双端_激励_endcard交互重构实验', status: '已全量', delta: '消耗 +4.8% · GMV +9.1%' }
      ],
      anomaly: 'OPPO ColorOS 13 部分机型 endcard 关闭按钮区域被系统返回手势遮挡（占曝光 1.2%）。',
      suggest: '关闭按钮 hit-area 上移 16dp，避开手势热区；可联动激励赛道全形态复制方案。',
      readers: '1.7k 阅读 · 11 评论'
    },
    '1003721': {
      name: '商品信息_系统弹窗_插屏半屏-9x16视频-大区域-左下',
      thumb: '🎬',
      form: '插屏 · 半屏视频',
      parent: '1003216',
      size: '9×16',
      specIds: '1529,2107,2106,1414,1413,585,866,862,1109',
      onlineDate: '2026-05-02',
      onlineDays: '27 天',
      cost: '¥182w',
      ctr: '25.6%',
      cvr: '14.8%',
      gmv: '+24%',
      imp: '420w / 日',
      rank: '插屏 TOP 6',
      experiments: [
        { name: '双端_插屏半屏_左下大区域商品信息实验', status: '运行中 · 第 6 天', delta: '消耗 +2.1% · GMV +5.4%（中期）' }
      ],
      anomaly: '半屏视频在 Android 13+ 系统手势区误触关闭率较 v0 上升 0.8pp。',
      suggest: '关闭按钮位置上移 24dp 避开手势区；商品信息卡片增加 8dp 阴影增强层级感。',
      readers: '980 阅读 · 5 评论'
    },
    '1001023': {
      name: '【全突破】自渲染_信息流_图片_透明模板',
      thumb: '🖼️',
      form: '原生 · 透明模板',
      parent: '—',
      size: '0×0（自适应）',
      specIds: '351,865,866,1413,1414',
      onlineDate: '2025-09-08',
      onlineDays: '264 天（长青）',
      cost: '¥274w（近 30d）',
      ctr: '8.49%',
      cvr: '11.2%',
      gmv: '基线',
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
      parent: '1003380',
      size: '0×0（自适应）',
      specIds: '1735',
      onlineDate: '2026-05-08',
      onlineDays: '21 天',
      cost: '¥98.2w',
      ctr: '64.3%',
      cvr: '38.7%',
      gmv: '+18.9%',
      imp: '380w / 日',
      rank: '激励视频 TOP 5',
      experiments: [
        { name: '双端_激励_深转激励浏览(1735)规格实验', status: '已全量', delta: '消耗 +5.1% · GMV +8.3%' }
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
    set('reportParentId', data.parent);
    set('reportForm', data.form);
    set('reportSize', data.size);
    set('reportOnlineDate', data.onlineDate);
    set('reportOnlineDays', data.onlineDays);
    set('reportSpecIds', data.specIds);

    set('rkCost', data.cost);
    set('rkDailyCost', data.dailyCost || '—');
    set('rkCtr', data.ctr);
    set('rkCvr', data.cvr);
    set('rkImp', data.imp);
    set('rkGmv', data.gmv);
    set('rkRank', data.rank);

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
    set('wecomGmv', data.gmv);
    set('wecomAnomaly', data.anomaly);
    set('wecomSuggest', data.suggest);
    set('wecomFoot', `点击查看 · ${data.readers}`);
  }

  function activateStep(no) {
    const current = parseInt(no, 10);
    document.querySelectorAll('#pipelineDrawer .step').forEach(s => {
      const n = parseInt(s.dataset.step, 10);
      s.classList.remove('done', 'active');
      if (n < current) s.classList.add('done');
      else if (n === current) s.classList.add('done', 'active');
    });
    document.querySelectorAll('#pipelineDrawer .step-content').forEach(c => {
      c.classList.toggle('active', c.dataset.stepContent === no);
    });
  }
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
        `模板ID：${tplId}${stageText ? ' · 当前阶段：' + stageText : ''} · 创建 → 设计 → 调整 → 测试 → 草稿发布 → 测试 → 规则配置 → 实验 → 全量上线 → 成绩单`;
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
      activateStep('10');
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
          document.getElementById('pipelineDrawerSub').textContent = '模板ID：1003638 · 创建 → 设计 → 调整 → 测试 → 草稿发布 → 测试 → 规则配置 → 实验 → 全量上线 → 成绩单';
          activateStep('1');
          showDrawer(pipelineDrawer);
        }
      }
    });
  });

  // ============ 我参与的 · 阶段筛选 ============
  const stageFilter = document.getElementById('myTplStageFilter');
  if (stageFilter) {
    const ownPane = document.querySelector('.subtab-pane[data-pane="own"]');
    function applyMyTplFilter() {
      if (!ownPane) return;
      const activeStagePill = stageFilter.querySelector('.pill.active');
      const stage = activeStagePill?.dataset.stage || 'all';
      const kw = (document.getElementById('myTplSearch')?.value || '').trim().toLowerCase();
      ownPane.querySelectorAll('table.plain-table .tpl-row').forEach(row => {
        const pill = row.querySelector('.stage-pill, .badge');
        const text = (pill?.textContent || '').trim();
        const stageOk = stage === 'all' || text === stage;
        const rowText = row.textContent.toLowerCase();
        const kwOk = !kw || rowText.includes(kw);
        row.classList.toggle('hide-by-stage', !stageOk);
        row.classList.toggle('hide-by-search', !kwOk);
      });
    }
    stageFilter.querySelectorAll('.pill').forEach(p => {
      p.addEventListener('click', () => {
        stageFilter.querySelectorAll('.pill').forEach(x => x.classList.remove('active'));
        p.classList.add('active');
        applyMyTplFilter();
      });
    });
    document.getElementById('myTplSearch')?.addEventListener('input', applyMyTplFilter);
  }

  // "我的实验数据看板"右上角"查看我的全部实验"按钮
  document.getElementById('goAllMyExp')?.addEventListener('click', () => {
    const titleEl = document.getElementById('formDrawerTitle');
    if (titleEl) titleEl.textContent = `我的实验 · 全部 8 个`;
    renderExpTable('原生');
    const tt = document.getElementById('expSectionTitle');
    if (tt) tt.textContent = `我的实验 · 共 8 个（3 在跑 / 5 已全量）`;
    showDrawer(formDrawer);
  });

  // ============ ⑥ 规则配置助手（AI 精简版）交互 ============
  const RULE_MAP = {
    only:  { lock: 'no',  enable: ['no'],          hint: '只出 → 大盘"不可出"' },
    ratio: { lock: null,  enable: ['yes', 'no'],   hint: '按比例出 → 大盘可选"可出/不可出"，建议"可出"' },
    prio:  { lock: 'yes', enable: ['yes'],         hint: '高优出 → 大盘"可出"' },
    no:    { lock: 'no',  enable: ['no'],          hint: '不可出 → 大盘"不可出"' },
  };

  document.querySelectorAll('.ra-mode-btn').forEach(b => {
    b.addEventListener('click', () => {
      const mode = b.dataset.raMode;
      if (b.id === 'raResetBtn') {
        document.querySelectorAll('.ra-card .ra-input').forEach(inp => { inp.value = ''; });
        document.querySelectorAll('[data-ra-seg]').forEach(seg => {
          seg.querySelectorAll('.ra-seg-btn').forEach((x, i) => {
            x.classList.toggle('active', i === 0);
          });
        });
        showToast('已重置规则配置助手');
        return;
      }
      document.querySelectorAll('.ra-mode-btn[data-ra-mode]').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      if (mode === 'text') {
        showToast('文字描述模式 · demo 占位（精简版聚焦"选项填空"）');
      }
    });
  });

  document.querySelectorAll('[data-ra-toggle]').forEach(cb => {
    cb.addEventListener('change', () => {
      const card = cb.closest('.ra-card');
      if (!card) return;
      if (cb.checked) { card.classList.add('active'); card.classList.remove('disabled'); }
      else { card.classList.remove('active'); card.classList.add('disabled'); }
    });
  });

  document.querySelectorAll('[data-ra-seg]').forEach(seg => {
    const segName = seg.dataset.raSeg;
    seg.querySelectorAll('.ra-seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
          showToast('该选项已被映射规则锁定，不可选择');
          return;
        }
        seg.querySelectorAll('.ra-seg-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');

        if (segName === 'flowY' || segName === 'budgetZ') {
          const mainSegName = segName === 'flowY' ? 'flowMain' : 'budgetMain';
          const mainSeg = document.querySelector(`[data-ra-seg="${mainSegName}"]`);
          const lockRow = document.querySelector(`[data-ra-locked-row="${mainSegName}"]`);
          if (!mainSeg) return;
          const map = RULE_MAP[btn.dataset.act];
          if (!map) return;

          mainSeg.querySelectorAll('.ra-seg-btn').forEach(x => {
            const allowed = map.enable.includes(x.dataset.act);
            x.classList.toggle('disabled', !allowed);
          });

          let activeBtn = null;
          if (map.lock) {
            mainSeg.querySelectorAll('.ra-seg-btn').forEach(x => {
              if (x.dataset.act === map.lock) activeBtn = x;
            });
          } else {
            const cur = mainSeg.querySelector('.ra-seg-btn.active');
            if (cur && map.enable.includes(cur.dataset.act)) {
              activeBtn = cur;
            } else {
              activeBtn = mainSeg.querySelector('.ra-seg-btn:not(.disabled)');
            }
          }
          mainSeg.querySelectorAll('.ra-seg-btn').forEach(x => x.classList.remove('active'));
          if (activeBtn) activeBtn.classList.add('active');

          if (lockRow) {
            const hintEl = lockRow.querySelector('.ra-lock-hint');
            if (hintEl) {
              if (map.lock) {
                const lockText = map.lock === 'yes' ? '可出' : '不可出';
                hintEl.innerHTML = `🔒 <b>已锁定为"${lockText}"</b>（按映射表，仅此一种合法组合）`;
                hintEl.style.display = '';
              } else {
                hintEl.innerHTML = `💡 <b>大盘可选</b>（${map.hint}）`;
                hintEl.style.display = '';
              }
            }
          }

          const mapping = seg.closest('.ra-card')?.querySelector('.ra-mapping-text');
          if (mapping) {
            mapping.innerHTML = `映射规则：<b>${map.hint}</b>；映射逻辑：固定`;
          }
        }
      });
    });
  });

  document.getElementById('raCreateBtn')?.addEventListener('click', () => {
    const nameInput = document.getElementById('raRuleName');
    let ruleName = nameInput?.value.trim();
    const activeCards = document.querySelectorAll('.ra-card.active');
    if (!activeCards.length) {
      showToast('请至少启用一张诉求卡（流量 / 预算）');
      return;
    }
    if (!ruleName) {
      const card = activeCards[0];
      const tplVal = card.querySelector('.ra-input')?.value.trim() || '未命名模板';
      const yVal = card.querySelector('.ra-input.slim')?.value.trim() || '全量';
      const actBtn = card.querySelector('[data-ra-seg$="Y"] .ra-seg-btn.active, [data-ra-seg$="Z"] .ra-seg-btn.active');
      const actMap = { only: '只出', ratio: '按比例出', prio: '高优出', no: '不可出' };
      const actText = actMap[actBtn?.dataset.act] || '只出';
      ruleName = `${tplVal}·${yVal}·${actText}`;
    }

    const list = document.getElementById('raRulesMini');
    if (!list) return;
    const idx = list.querySelectorAll('.ra-mini-row').length + 1;
    const numText = ['①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩'][idx - 1] || `${idx}`;

    const row = document.createElement('div');
    row.className = 'ra-mini-row ai-blink';
    row.innerHTML = `
      <span class="ra-mini-no">${numText}</span>
      <span class="ra-mini-name">${ruleName}</span>
      <span class="ra-mini-desc muted">由助手新建 · ${new Date().toLocaleTimeString('zh-CN', {hour:'2-digit', minute:'2-digit'})}</span>
      <label class="switch-mini"><input type="checkbox" checked /><span></span></label>
    `;
    list.appendChild(row);

    const cnt = list.querySelector('.ra-rules-mini-head .muted');
    if (cnt) cnt.textContent = `${list.querySelectorAll('.ra-mini-row').length} 条`;

    if (nameInput) nameInput.value = '';
    showToast(`✓ 已新建规则：${ruleName}`);
    setTimeout(() => row.classList.remove('ai-blink'), 1600);
  });

  document.getElementById('raMappingBtn')?.addEventListener('click', () => {
    showToast('映射表：只出↔不可出 / 按比例出↔可出建议 / 高优出↔可出 / 不可出↔不可出');
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

  // ============ ④/⑥ 模板测试 · 自动化测试 / 人工测试（可跳过） ============
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
  bindAutoTestBtn('btnRunAutoTest2');

  function bindUrgeQA(id, who) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      showToast(`催办已发送 · 已通知 ${who}（企微 + 测试单评论区）`);
    });
  }
  bindUrgeQA('btnUrgeQA',  '@test_lily');
  bindUrgeQA('btnUrgeQA2', '@test_lily');

  function bindOpenQA(id, ticket) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => showToast(`（demo）打开测试单 ${ticket}`));
  }
  bindOpenQA('btnOpenQATicket',  '#QA-2026-0603-007');
  bindOpenQA('btnOpenQATicket2', '#QA-2026-0606-014');

  function bindSkipQA(id, nextStep) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.textContent = '✓ 已跳过人工测试';
      showToast('已跳过人工测试 · 自动化测试已通过 → 可继续下一步');
    });
  }
  bindSkipQA('btnSkipQA',  '5');
  bindSkipQA('btnSkipQA2', '7');

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

  // ============ ⑤ 草稿发布 · 提交上线按钮（弹窗 + IOA 回填） ============
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
      showToast('IOA 审批单已下发 · 测试 / 产品 / 技术 三段审批');
      const ioa = document.getElementById('ioaResultDraft');
      if (ioa) ioa.style.display = 'block';
      const r = document.getElementById('ioaResultRemarkDraft');
      if (r) r.textContent = remark;
      const badge = document.getElementById('onlineStatusBadge');
      if (badge) { badge.textContent = '审批中'; badge.className = 'badge wait'; }
      const tip = document.getElementById('onlineStatusTip');
      if (tip) tip.textContent = 'IOA 审批已下发 · 完成后将解锁灰度环境';
      if (btnSubmitOnline) {
        btnSubmitOnline.disabled = true;
        btnSubmitOnline.textContent = '✓ 已提交（审批中）';
      }
    });
  }
  const btnUrgeDraftIOA = document.getElementById('btnUrgeDraftIOA');
  if (btnUrgeDraftIOA) {
    btnUrgeDraftIOA.addEventListener('click', () => showToast('催办已发送 · IOA 当前节点审批人已收到企微提醒'));
  }

  // ============ ⑨ 全量上线 · 提交按钮（弹窗 + IOA 回填） ============
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
      showToast('IOA 全量上线审批单已下发');
      const ioa = document.getElementById('ioaResultFull');
      if (ioa) ioa.style.display = 'block';
      const r = document.getElementById('ioaResultRemarkFull');
      if (r) r.textContent = remark;
      const badge = document.getElementById('fullOnlineBadge');
      if (badge) { badge.textContent = '审批中'; badge.className = 'badge wait'; }
      const tip = document.getElementById('fullOnlineTip');
      if (tip) tip.textContent = 'IOA 审批已下发 · 完成后正式投放线上 100% 流量';
      if (btnSubmitFullOnline) {
        btnSubmitFullOnline.disabled = true;
        btnSubmitFullOnline.textContent = '✓ 已提交（审批中）';
      }
    });
  }
  const btnUrgeFullIOA = document.getElementById('btnUrgeFullIOA');
  if (btnUrgeFullIOA) {
    btnUrgeFullIOA.addEventListener('click', () => showToast('催办已发送 · IOA 当前节点审批人已收到企微提醒'));
  }

  // ============ ⑧ 模板实验 · 跳过按钮（弹窗 + 产研审批） ============
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
      showToast('已提交跳过申请 · 产品 + 技术审批中');
      if (btnSkipExp) {
        btnSkipExp.disabled = true;
        btnSkipExp.textContent = '✓ 已申请跳过（审批中）';
      }
    });
  }

  // ============ Step 1 · 模板来源 Tab 切换 ============
  document.querySelectorAll('#pipelineDrawer .src-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.srctab;
      document.querySelectorAll('#pipelineDrawer .src-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('#pipelineDrawer .src-pane').forEach(p => p.classList.toggle('active', p.dataset.srcpane === key));
    });
  });

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

})();
