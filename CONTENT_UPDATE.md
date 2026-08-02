# MiniGameWiki 内容更新流程（打勾版）

站点：https://minigamewiki.com  
主数据文件：`data/snowcone.json`  
发布方式：改文件 → commit 到 `main` → Cloudflare Pages 自动部署  

复制下面「今日打勾」整段到笔记 / Notion，每天新建一份即可。

---

## 今日打勾（每日，约 5–15 分钟）

日期：`____-__-__`

### A. 信息收集（你做）
- [ ] 看开发者/游戏社媒是否宣布新 code
- [ ] 扫一眼 Discord / Reddit 有没有人报新码或数值大改
- [ ] （可选）进游戏试兑或确认「仍无公开码」

### B. 决定今天改什么
- [ ] **无码且无数值变化**：只刷新 `codesLastChecked`（推荐至少每 2–3 天做一次）
- [ ] **有新码**：验证后写入 `codes`，并更新 `codesLastChecked` / `codesNote`
- [ ] **码过期**：从 `codes` 移到 `expiredCodes`
- [ ] **数值/机制变了**：改 flavors / mutations / totems / perfectMult / tierList，并改 `dataReviewedAt`

### C. 写进仓库并上线（可交给 AI）
- [ ] 更新 `data/snowcone.json` 对应字段
- [ ] 在 `changelog` 顶部加今天条目（有实质改动才写；仅刷新日期也可写一句）
- [ ] commit + push 到 `main`
- [ ] Cloudflare Pages Production 显示成功
- [ ] 打开线上 Codes / Updates 页确认日期已变

### D. 今日收工
- [ ] 无需每天点 GSC「请求编入索引」（有大更新再做）
- [ ] 无需每天发 Discord/Reddit（有新闻再发）

---

## 每周打勾（建议周日/周一，约 30–60 分钟）

周次：`____-W__`

### 你做
- [ ] 进游戏抽查 3–5 个关键数值（base / mut / totem / Perfect）
- [ ] 确认 tier 假设是否还合理
- [ ] 打开 GSC「效果」看有无新搜索词 / 异常掉曝光
- [ ] 打开 Cloudflare Web Analytics 看近 7 日访问

### 可交给 AI
- [ ] 根据你确认的数值差异，改 `snowcone.json` + changelog + push
- [ ] 若有明确长尾问题，起草 1 篇 guide（你审核后再发）
- [ ] 起草 1 条 Discord/Reddit 短文案（你本人发帖）

### 收工
- [ ] 线上抽查 Calculator / Tier / Codes
- [ ] Updates 页有本周记录（若有改动）

---

## 游戏大更新日打勾（优先当天完成）

- [ ] **你**：进游戏确认 patch 改了什么
- [ ] **你**：把「变了 / 没变」清单发给 AI（或写在 issue/聊天里）
- [ ] **AI**：改 JSON、受影响 guides、changelog、push
- [ ] **你**：线上点 Calculator 验证结果合理
- [ ] **你**：GSC 网址检查 → 对 `/codes`、`/blender-planner`、变更最大页 → 请求编入索引
- [ ] **你**：（可选）Discord/Reddit 发「数据已跟 patch 更新」+ 链接

---

## 每月打勾（约 1–2 小时）

月份：`____-__`

- [ ] **你 + AI**：过一遍 10 篇 guides，标过时段落
- [ ] **AI**：按你的标注修改并 push
- [ ] **你**：GSC「网页」索引情况扫一眼（报告有数据后）
- [ ] **你**：决定下月是否加新 guide / 是否准备下一个游戏
- [ ] **你**：外链动作 1 次（有实质更新才发）

---

## 谁做什么：AI vs 你（详细）

### 一、必须你手动做的（AI 替不了或替了风险高）

| 动作 | 为什么必须你 | 具体怎么操作 |
|------|--------------|--------------|
| **验证 code 能否兑换** | 要进 Roblox 游戏点兑换；假码不能上站 | 进 Snowcone Stand → Codes/Shop → 输入 → 看是否成功；成功再让 AI 写入 |
| **核对游戏内数值** | AI 看不到你客户端实时数据 | 打开游戏对照 flavor base、mutation、totem、Perfect；把差异记成清单发给 AI |
| **GSC / Cloudflare 点选** | 要登录你的 Google / CF 账号 | 见下方「后台操作步骤」 |
| **Discord / Reddit 发帖** | 要用你的号，且要守社群规则 | AI 只写文案；你复制到允许推广的频道/帖子发送 |
| **决定「今天有没有码」的最终判断** | 涉及站点诚信 | 你确认「已查过、仍无活跃码」后，再让 AI 只改日期 |
| **邮箱回复读者纠错** | `hello@...` 在你邮箱 | 收到举报后，你验证 → 再让 AI 改站 |

### 二、可以交给 AI 做的（你下达指令即可）

| 动作 | 你怎么下令 | AI 会做什么 |
|------|------------|-------------|
| 刷新 codes 检查日期 | 「今天查过仍无码，刷新 last checked 并 push」 | 改 `codesLastChecked`、必要时 `codesNote`/`changelog`，push `main` |
| 上新码 / 归档过期码 | 「这个码已验证：CODE / 奖励 xxx，请上线」 | 写入 `codes` 或挪到 `expiredCodes`，更新日期，push |
| 改数值与 tier | 「游戏里 Mango base 改成 xx，Golden 改成 x.x」 | 改 JSON、`dataReviewedAt`、changelog，必要时改 guides 相关句，push |
| 写/改 guide | 「写一篇 how to get X，挂到 guides」 | 写内容、加 slug、内链到 calculator/codes，push |
| SEO 文案 / 内链 / 小功能 | 「加强某某页 Title」等 | 改 `src/` 页面与组件并 push |
| 起草推广文案 | 「给 Discord 写一条分享 calculator」 | 给你可复制的英文短帖（你自己发） |
| 排查 sitemap / 构建问题 | 「sitemap 对不对」 | 查线上 XML、仓库路由、部署状态 |

### 三、协作口令（直接复制给 AI）

**每日无码刷新：**
> 今天我已确认 Snowcone Stand 仍无公开活跃码。请把 `codesLastChecked` 改成今天，必要时更新 changelog，push 到 main。

**上新码：**
> 我已在游戏内验证可兑：code=`XXXX`，reward=`....`。请写入 active codes，更新日期与 changelog，push。

**数值变更：**
> 我核对过游戏：请把以下字段改成…（逐条列出）。更新 `dataReviewedAt` 与 changelog，push。部署后告诉我要打开哪些页验收。

**只要文案不要发帖：**
> 写一条 Reddit/Discord 短文案，链到 calculator 和 codes 状态页。不要替我发帖。

---

## 后台操作步骤（只有你能点的）

### Cloudflare Pages（确认已上线）
1. 打开 Cloudflare → Workers & Pages → `minigamewiki`
2. 看 Production 最新部署是否 Success、commit 是否刚推的那条
3. 失败则点进日志，把报错发给 AI

### 线上验收（2 分钟）
1. https://minigamewiki.com/games/snowcone-stand/codes  
2. https://minigamewiki.com/games/snowcone-stand/updates  
3. 改过计算器时：https://minigamewiki.com/games/snowcone-stand/blender-planner

### Google Search Console（不必每天）
1. 打开资源 `minigamewiki.com`（网域）
2. **网址检查** → 粘贴完整 URL → 测试正式版 → **请求编入索引**
3. 优先页：`/codes`、`/blender-planner`、变更最大的 guide/tier
4. 「网页」索引报告：出数后再看；处理中就等，不用天天点

### Discord / Reddit（有新闻再发）
1. 先看版规是否允许链接
2. 粘贴 AI 写好的短文 + 1–2 个链接
3. 优先分享 **Calculator 可复制 build** 或 **诚实 codes 状态**，少发空泛广告

---

## `snowcone.json` 字段速查

| 字段 | 何时改 |
|------|--------|
| `codes` / `expiredCodes` | 有码上线或过期 |
| `codesLastChecked` | 每次检查 codes（即使仍为空） |
| `codesNote` | 状态说明变化时 |
| `dataReviewedAt` | 核对过数值/tier 时 |
| `flavors` / `mutations` / `totems` / `perfectMult` | 游戏数值变化 |
| `tierList` | 排名逻辑变化 |
| `guides` | 新增或修改攻略 |
| `changelog` | 任何对用户有意义的更新 |

---

## 推荐日常分工（最省事）

| 角色 | 每天 | 每周 |
|------|------|------|
| **你** | 花 5 分钟查有没有码/大改；有变化就验证 | 进游戏抽查数值；看 GSC/流量 |
| **AI** | 按你的结论改 JSON 并 push | 批量改数据/写 guide/修文案并 push |

一句话：**判断真假和进游戏 = 你；改站发布 = AI。**
