# MiniGameWiki 内容更新手册（小白完整版）

适合：完全不懂代码、但会用浏览器的人。  
目标：你知道 **去哪找消息 → 找什么 → 怎么确认 → 怎么改网站 → 怎么检查已上线**。

| 项目 | 地址 |
|------|------|
| 网站 | https://minigamewiki.com |
| 代码仓库 | https://github.com/eric4885/minigamewiki |
| 主数据文件（几乎所有内容更新都改它） | https://github.com/eric4885/minigamewiki/blob/main/data/snowcone.json |
| Codes 页（改完后验收） | https://minigamewiki.com/games/snowcone-stand/codes |
| 更新日志页 | https://minigamewiki.com/games/snowcone-stand/updates |
| 计算器 | https://minigamewiki.com/games/snowcone-stand/blender-planner |

> 一句话：游戏里的事实你去查；网站上的字和数字，改 GitHub 里的 `data/snowcone.json`，保存到 `main` 分支后，Cloudflare 会自动更新网站。

---

## 0. 先搞懂：我们在维护什么？

MiniGameWiki 现在主要做 Roblox 游戏 **Snowcone Stand** 的工具站。玩家常来查：

1. **有没有兑换码（Codes）**
2. **口味 / 突变 / 图腾数值（表 + 计算器）**
3. **Tier 排名**
4. **攻略文章（Guides）**

这些内容会过时。你的工作不是天天写长文，而是：

- 经常确认：**还有没有码？数值变了没？**
- 有变化就改文件并发布。

---

## 1. 去哪里找「需要更新」的信息？

下面每个来源都写了：**打开哪、看什么、发现什么算要更新**。

### 1.1 最重要：游戏本体（Roblox）——你必须会

**去哪：**

1. 打开 https://www.roblox.com  
2. 登录你的账号  
3. 搜索 **Snowcone Stand**（注意拼写，别搜成别的雪糕游戏）  
4. 进入游戏并等到完全加载

**找什么：**

| 你要查的事 | 在游戏里怎么做 | 什么情况要更新网站 |
|------------|----------------|--------------------|
| 有没有新 Codes | 找 Codes / Shop / Settings / Twitter 图标，打开兑换框 | 能兑成功 → 上站；以前有的码兑不了 → 移到过期 |
| 口味价格/基础值变了没 | 打开商店或图鉴，对照网站 Flavor 表 | 数字和网站不一致 → 改 `flavors` |
| 突变倍率变了没 | 看突变说明或实际结算 | 不一致 → 改 `mutations` |
| 图腾倍率变了没 | 看图腾说明 | 不一致 → 改 `totems` |
| Perfect Blend 还是不是约 1.5 倍 | 同一配方 Perfect 开/关对比手感或说明 | 官方改倍率 → 改 `perfectMult` |

**小白技巧：**

- 打开两个窗口：一边游戏，一边网站  
  https://minigamewiki.com/games/snowcone-stand/flavor-mutation-table  
- 抽查 3 个常见项就够（例如 Vanilla、Mango、Golden），不必一次对完全部。  
- **拿不准的数字不要改**；先记下来，问 AI 或再确认。

---

### 1.2 开发者 / 官方社媒（找“宣布发码、更新公告”）

**去哪找官方渠道：**

1. 在 Roblox 游戏页往下看：**社交链接 / 群组 / 简介**  
2. 常见：Discord 邀请、Twitter/X、YouTube、Roblox Group  
3. 把你确认过的链接收藏到浏览器书签，命名例如：  
   - `Snowcone-官方Discord`  
   - `Snowcone-开发者X`

**找什么样的内容：**

- 含有 **code / codes / redeem / promo** 的公告  
- **Update / Patch / Changelog / Balancing**（数值平衡）  
- 「限时活动」「新 flavor」「新 mutation」

**注意：**

- 截图里的码经常是假的或已过期 → **必须进游戏自己兑一次** 再上站。  
- 我们的原则：**不验证，不上站**。

---

### 1.3 Discord（玩家最早报码、报改动的地方）

**去哪：**

1. 用 Discord 搜索或从游戏页进官方服  
2. 也可搜玩家社区服（名称含 Snowcone / Roblox）

**看哪些频道（名称可能略有不同）：**

- `#announcements` / `#updates` / `#patch-notes` → 官方更新  
- `#codes` / `#rewards` → 兑换码讨论  
- `#guides` / `#questions` → 玩家问「最佳口味」「有没有码」

**找什么样的内容算线索：**

- 「NEW CODE: XXXXX」  
- 「code expired」  
- 「mango nerfed」「totem changed」  
- 很多人同时说同一件事 → 值得进游戏核实

**你该怎么做：**

1. 把可疑 code 记下来  
2. **自己进游戏兑换**  
3. 成功 → 按第 3 节更新网站（或让 AI 改）  
4. 失败 → 不要写进网站

**发推广帖（可选，不是每天必做）：**

- 只发在允许分享链接的频道（如 `#tools` `#self-promo`）  
- 先看置顶版规，禁止广告就别发

---

### 1.4 Reddit

**去哪：**

- https://www.reddit.com/r/roblox  
- 搜索：`Snowcone Stand`（整个 Reddit 搜索）  
- 若有游戏专属小版，一并收藏

**找什么样的内容：**

- 标题含 codes / tier list / guide / update  
- 评论区有人贴码或说数值变了

**做法同上：** 当线索 → 游戏验证 → 再改站。  
发帖前读版规；AI 可以帮你写英文短帖，但 **用你的账号自己发**。

---

### 1.5 YouTube / Shorts / TikTok（辅助）

**去哪：** YouTube 搜索 `Snowcone Stand codes` / `Snowcone Stand update`

**用途：** 知道「最近大家在聊什么」。  
**不要：** 看见视频标题写 Working Codes 就照抄上站——先自己兑。

---

### 1.6 其他粉丝站（对照，不是照抄）

可能已有：`snowconestand.net`、`.org`、`.wiki` 等（会增减）。

**正确用法：**

- 他们写了新码 → 你拿去 **游戏里验证**  
- 他们改了表 → 你拿去 **游戏里核对**  
- **不要**整页复制别人的假码列表

---

### 1.7 网站自己的邮箱（别人帮你纠错）

**邮箱：** hello@minigamewiki.com（已转到你的 Gmail 的话，在邮箱里看）

**找什么：** 读者说「这个码能用」「这个数字错了」  
**做法：** 你验证 → 再改站 → 简短回复感谢。

---

## 2. 信息收集后：今天属于哪种更新？

对照下表，选一种（可多选）：

| 类型 | 你观察到什么 | 网站上改什么 |
|------|--------------|--------------|
| A. 仅巡检 | 查过了，仍无码、数值也没变 | 只改 `codesLastChecked` 为今天 |
| B. 新码 | 游戏里兑成功 | 写入 `codes`，改日期与说明 |
| C. 码过期 | 以前的码兑失败 | 从 `codes` 挪到 `expiredCodes` |
| D. 数值/机制 | 游戏数字和表不一致 | 改 `flavors` / `mutations` / `totems` / `perfectMult`，并改 `dataReviewedAt` |
| E. 排名 | 强度明显变化 | 改 `tierList` |
| F. 攻略 | 流程变了或要补长尾 | 改/加 `guides` |

**小白最低要求：**  
即使什么都没变，也建议 **每 2～3 天做一次类型 A**（刷新「上次检查日期」），这样 Codes 状态页才像“活页”。

---

## 3. 怎么改网站？（推荐：GitHub 网页改，不用装软件）

### 3.1 登录仓库

1. 打开 https://github.com/eric4885/minigamewiki  
2. 用有权限的 GitHub 账号登录  
3. 点文件：`data` → `snowcone.json`  
   或直接打开：  
   https://github.com/eric4885/minigamewiki/blob/main/data/snowcone.json

### 3.2 进入编辑

1. 点文件右上角铅笔图标 **Edit this file**  
2. 用 `Ctrl + F` 搜索要改的字段名（如 `codesLastChecked`）

### 3.3 按类型修改（复制改）

#### 类型 A：今天查过，仍无活跃码

找到类似：

```json
"codes": [],
"codesLastChecked": "2026-08-01",
"codesNote": "As of the last check date, there are no active public promo codes...
```

改成（日期改成今天）：

```json
"codes": [],
"codesLastChecked": "2026-08-02",
```

`codesNote` 可以不动。  
然后在 `changelog` 数组**最前面**加一条（可选但推荐）：

```json
{
  "date": "2026-08-02",
  "items": [
    "Codes last-checked date refreshed; still no verified active codes."
  ]
},
```

注意：上一条 changelog 前面要有逗号分隔，JSON 逗号别写错。  
**若你怕弄坏 JSON：不要手改，把结论发给 AI，让 AI 改并 push。**

#### 类型 B：上新码（已验证）

```json
"codes": [
  {
    "code": "EXAMPLECODE",
    "reward": "Cash / items — 按游戏实际填写",
    "status": "Active"
  }
],
"codesLastChecked": "2026-08-02",
"codesNote": "Verified active codes listed below. Expired codes move to the archive."
```

#### 类型 C：码过期

1. 从 `codes` 数组删掉该条  
2. 放到 `expiredCodes`：

```json
"expiredCodes": [
  {
    "code": "OLDCODE",
    "reward": "…",
    "status": "Expired"
  }
],
```

3. 更新 `codesLastChecked`

#### 类型 D：改数值示例

搜索 `"name": "Mango"`，改旁边的 `"baseValue": 35` 为新数字。  
改完后务必改：

```json
"dataReviewedAt": "2026-08-02",
```

计算器会自动读同一份 JSON，一般不用改计算器代码。

#### 类型 E：改 Tier

找到 `"tierList"`，改 `ranks` 里各 tier 的 `items` 字符串列表。  
同时更新：

```json
"updatedAt": "2026-08-02"
```

（在 `tierList` 对象里面）

### 3.4 提交（让网站真的更新）

1. 页面下方 **Commit changes**  
2. 建议勾选 commit 到 **`main`** 分支  
3. 标题示例：  
   - `content: refresh codes check date`  
   - `content: add verified code XXX`  
4. 点绿色 **Commit changes**

### 3.5 等自动部署（1–3 分钟）

1. 打开 Cloudflare → **Workers & Pages** → 项目 **minigamewiki**  
2. 看 **Production** 最新一条是否绿色 Success  
3. 对应 commit 信息是否刚提交的那条  

没有 Cloudflare 时：等 3 分钟，直接强刷网站看日期变没变。

### 3.6 上线验收（必做）

打开并刷新（可用 Ctrl+F5）：

1. https://minigamewiki.com/games/snowcone-stand/codes  
   - Last checked 是否变成今天  
   - 新码是否出现 / 空表是否仍合理  
2. https://minigamewiki.com/games/snowcone-stand/updates  
   - changelog 是否有今天条目  
3. 若改了数值：  
   https://minigamewiki.com/games/snowcone-stand/blender-planner  
   - 选对应 flavor，看数字是否合理  

---

## 4. 怕改坏 JSON？用 AI 代劳（推荐小白）

你只负责「去游戏里查清楚」，然后把结论发给 AI。

### 复制这些口令即可

**仍无码，只刷新日期：**

> 我今天已经在游戏里确认：Snowcone Stand 仍没有可兑换的公开码。请把 `codesLastChecked` 改成今天，必要时写 changelog，push 到 main，并告诉我部署后打开哪一页检查。

**有新码：**

> 我已在游戏内兑换成功：code=`XXXX`，奖励=`……`。请写入 active codes，更新日期与 changelog，push 到 main。

**数值变了：**

> 我对照游戏发现：Mango 的 baseValue 从 35 变成 XX；Golden 的 reduceMult 变成 X.XX。请改 `data/snowcone.json`，更新 `dataReviewedAt` 与 changelog，push。

**只要文案：**

> 帮我写一条 Discord/Reddit 短文案，链接 calculator 和 codes 页。不要替我发帖。

---

## 5. 谁做什么（小白对照表）

### 必须你自己做

| 步骤 | 在哪里做 | 怎么做 |
|------|----------|--------|
| 进游戏验证码/数值 | Roblox 客户端 | 见第 1.1 节 |
| 判断「能不能写进网站」 | 你的判断 | 未验证 = 不上站 |
| 看部署成功没有 | Cloudflare Pages | 见第 3.5 节 |
| 打开网站验收 | 浏览器 | 见第 3.6 节 |
| GSC 请求索引 | Google Search Console | 大更新才做，见第 7 节 |
| 发 Discord/Reddit | 你的账号 | AI 只给文案 |

### 可以交给 AI

| 步骤 | 你提供什么 | AI 做什么 |
|------|------------|-----------|
| 改 `snowcone.json` | 今天的结论 / 已验证的码 / 新数字 | 改文件并 push |
| 写 changelog | 改了什么的一句话 | 写进 JSON |
| 改页面文案/SEO | 你的要求 | 改 `src/` 并 push |
| 新写 guide | 主题 + 要点 | 写入 `guides` 并 push |
| 检查 sitemap/报错 | 截图或现象 | 帮你排查 |

---

## 6. 打勾清单（复制到笔记里用）

### 每日（5–15 分钟）

日期：`____-__-__`

**找信息（你）**
- [ ] 打开 Roblox → Snowcone Stand（或至少查官方/Discord 公告）
- [ ] 有没有人报新 code？
- [ ] 有没有更新/数值大改传闻？
- [ ] 对可疑 code：**自己进游戏兑过了**

**分类**
- [ ] 今天属于：A 仅刷新日期 / B 新码 / C 过期 / D 数值 / 其他：______

**改站**
- [ ] 自己在 GitHub 改了 `snowcone.json` **或** 已把结论发给 AI 并完成 push
- [ ] Cloudflare 部署 Success（或等 3 分钟）
- [ ] 打开 Codes 页，Last checked 已更新
- [ ] （若有改动）Updates 页看得到今天记录

**不必每天做**
- [ ] 今天不用发 Discord/Reddit（除非有大新闻）
- [ ] 今天不用点 GSC 请求索引（除非大更新）

---

### 每周（30–60 分钟）

- [ ] 游戏内抽查 3+ 个数值 vs 网站表格
- [ ] 打开 GSC「效果」看一眼有无新词
- [ ] 打开 Cloudflare Analytics 看近 7 日访问
- [ ] 有差异 → 按类型 D 更新（或交给 AI）
- [ ] （可选）让 AI 起草 1 条分享文案，你发到 Discord/Reddit

---

### 游戏大更新当天

- [ ] 你：列出「变了什么 / 没变什么」
- [ ] AI：改 JSON + 相关说明 + push
- [ ] 你：验收 Calculator / Tier / Codes
- [ ] 你：GSC 对核心页「请求编入索引」

---

## 7. Google Search Console（偶尔做，不是每天）

**去哪：** https://search.google.com/search-console  
**选资源：** `minigamewiki.com`（网域，不是带 https 的那个前缀）

**何时点「请求编入索引」：**

- 第一次上线重要新页  
- 游戏大更新后核心页大改  
- Codes 从空变为有码（或反过来且你很在意）

**怎么点：**

1. 左侧 **网址检查**  
2. 粘贴完整链接，例如：  
   `https://minigamewiki.com/games/snowcone-stand/codes`  
3. 等结果 → **请求编入索引**  
4. 每天不要对几十个链接狂点（有限额）

「网页」报告若显示「正在处理数据」，等 1–2 天再看，不是坏了。

---

## 8. 常见错误（避免踩坑）

| 错误 | 正确做法 |
|------|----------|
| 网上看到码直接上站 | 先自己游戏内兑换 |
| 好几周不改 `codesLastChecked` | 无码也要定期刷新日期 |
| 改错 JSON 逗号导致整站构建失败 | 小白优先让 AI 改；或 commit 后看 Cloudflare 是否失败 |
| 改了文件但没 commit 到 `main` | 必须提交到 `main` 才会自动部署 |
| 把现实生活「snow cone stand 刨冰」新闻当游戏更新 | 我们的站是 Roblox 游戏，注意过滤 |
| 天天发广告帖 | 有实质更新再发，否则易被封 |

---

## 9. 推荐你的最小可行习惯

| 频率 | 你做 | AI 做 |
|------|------|------|
| 每 2～3 天 | 花 5 分钟确认「有没有码」 | 按你的话刷新日期并 push |
| 有码/有 patch 当天 | 游戏验证 | 改数据并 push |
| 每周一次 | 抽查数值 + 看 GSC/流量 | 按差异改表 |
| 有新闻时 | 发 1 条社群链接 | 写文案 |

**记住：**  
找内容 = Discord/Reddit/官方/游戏里；  
改网站 = GitHub 的 `data/snowcone.json`（或叫 AI）；  
看结果 = 网站 Codes 页 + Cloudflare 部署成功。

---

## 10. 字段速查（改 JSON 时对照）

| 字段名 | 中文含义 | 何时改 |
|--------|----------|--------|
| `codes` | 当前可兑码列表 | 有活跃码 |
| `expiredCodes` | 过期码归档 | 码失效 |
| `codesLastChecked` | 你上次检查 codes 的日期 | 每次检查 |
| `codesNote` | Codes 页说明文字 | 状态变化时 |
| `dataReviewedAt` | 上次核对数值的日期 | 核对表/计算器数据后 |
| `flavors` | 口味基础值等 | 游戏改口味 |
| `mutations` | 突变倍率 | 游戏改突变 |
| `totems` | 图腾倍率 | 游戏改图腾 |
| `perfectMult` | Perfect 倍率 | 游戏改 Perfect |
| `tierList` | 排行榜 | 强度变化 |
| `guides` | 攻略文章 | 新增/修改攻略 |
| `changelog` | 网站更新日志 | 任何对用户有意义的更新 |

完。把第 6 节每日清单复制到手机备忘录，按勾执行即可。
