# 样式生产管理 · 联盟样式工作台子模块 Demo

> 路演 v0.1 · 2026-05-29 · Owner：产品·小樊

## 三件套

| 文件 | 说明 |
|---|---|
| `index.html` | **可交互 Demo** · 大盘/我的工作台 + 模板池三 Tab + 8 步生产流水线 + Agent + 协同接口侧栏 |
| `onepager.html` | **业务定义一页纸** · 产品层/用户层/合作层 + 生产模块 5 题 + 协同接口 |
| `decisions.html` | **决策档案** · 9 条决策（其中 D1/D3/D5 为路演主答） |

## 已锁定核心决策

- **D1 ★** 模板池演化为「💡创意广场 + 📝草稿 + ✅正式」三 Tab，鼓励全员体验生成
- **D3 ★** 设计-研发冲突解法 = 对齐器嵌入流水线 ②，不做"以谁为准"的强约束
- **D5 ★** 不重做 iDOMO 画布，本模块定位为"上层壳"
- D2 双审批（草稿入库 + 上线发布）
- D4 双入口（标准流/零稿流）并入 Agent 双 Tab
- D6 北极星：T2L + CTR 提升中位数
- D7 Agent = 输入条 + 抽屉
- D8 默认大盘
- D9 成绩单 = 卡片报告 + 模拟企微推送

## 与基座协同接口（5/29 必交）

| # | 接口 | 必/建议 |
|---|---|---|
| ① | AI 路由关键词（15 个） | 必 |
| ② | 首页看板卡片（场景分布 / Top5） | 必 |
| ③ | Skills 提报（8 个 · A/B/C 分级） | 必 |
| ④ | 数据口径（视角 + 指标） | 建议 |
| ⑤ | 入口参数（query string 协议） | 建议 |
| ⑥ | 历史承接说明 | 建议 |

## 本地预览

```bash
# 任选其一
python3 -m http.server 5180
# 或
npx --yes serve -p 5180 .
```

打开 http://localhost:5180/index.html

## 文件结构

```
Claw/
├── index.html          # Demo 主入口
├── onepager.html       # 一页纸
├── decisions.html      # 决策档案
├── styles/
│   ├── tokens.css      # 视觉 tokens（与基座对齐）
│   └── main.css        # Demo 主样式
└── scripts/
    └── main.js         # 交互脚本
```

## 视觉规范

完全对齐基座 `workbench-foundation` v0.6/v0.7：
- 主色 `#3370FF` / 紫 `#7B5CFF` / 成功 `#00B96B` / 警告 `#FF9A2E`
- 卡片圆角 12px / 按钮 8px / 阴影 `0 2px 8px rgba(0,0,0,.04)`
- 字体栈：PingFang SC / Microsoft YaHei / system-ui
