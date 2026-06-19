# Qi Scan Web — 部署上线指南

## 📁 项目结构

```
qi-scan-web/
├── css/
│   └── style.css          # 全局样式（Stripe 风格简洁专业设计）
├── js/
│   └── main.js            # 交互逻辑 + 扫描模拟 + 中英文切换
├── index.html             # 首页
├── scan-website.html      # 网站扫描工具
├── scan-brand.html        # 品牌扫描工具
├── scan-product.html      # 产品扫描工具
├── tutorials.html         # 教程列表
├── tutorial-detail.html   # 单篇教程详情
├── blog.html              # 博客列表
├── about.html             # 关于页 + 联系表单
└── DEPLOY.md              # 本文件
```

## 🚀 部署方式一：GitHub Pages（免费）

### 第 1 步：创建 GitHub 仓库
1. 登录 [github.com](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 仓库名填 `qi-scan-web`（或其他你喜欢的名字）
4. 设为 **Public**（免费页面必须是公开仓库）
5. 点击 **Create repository**

### 第 2 步：上传文件
**方式 A — 网页上传（最简单）：**
1. 在仓库页面点击 **uploading an existing file?**
2. 把 `qi-scan-web` 文件夹里**所有文件**拖进去
3. 点击 **Commit changes**

**方式 B — Git 命令行：**
```bash
cd D:\.openclaw\.openclaw\workspace\qi-scan-web
git init
git add .
git commit -m "Initial commit: Qi Scan Web"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qi-scan-web.git
git push -u origin main
```

### 第 3 步：启用 GitHub Pages
1. 进入仓库 → **Settings** → **Pages**（左侧菜单）
2. **Source** 选 `Deploy from a branch`
3. **Branch** 选 `main`，文件夹选 `/ (root)`
4. 点击 **Save**
5. 等待 1-3 分钟，你的网站就会在 `https://YOUR_USERNAME.github.io/qi-scan-web/` 上线

## 🚀 部署方式二：Netlify（推荐，更简单）

### 第 1 步：注册
1. 访问 [netlify.com](https://netlify.com)
2. 用 GitHub 账号一键登录

### 第 2 步：拖拽部署（30 秒上线）
1. 登录 Netlify 后点击 **Add new site** → **Deploy manually**
2. 直接把 `qi-scan-web` **整个文件夹拖进浏览器**
3. 等待几秒... 你的网站已经上线了！
4. 你会得到一个类似 `qi-scan-web-abc123.netlify.app` 的域名

### 第 3 步：绑定自定义域名（可选）
1. 在 Netlify 站点设置 → **Domain settings**
2. 添加你的域名（比如 `qiscan.com`）
3. 按提示配置 DNS（A 记录指向 Netlify）

## 🔧 绑定自定义域名（两种方式通用）

1. 购买域名（推荐：Cloudflare、Namecheap、阿里云）
2. 在部署平台添加域名
3. 修改域名的 DNS 记录：
   - **GitHub Pages**: CNAME 记录指向 `YOUR_USERNAME.github.io`
   - **Netlify**: 添加 CNAME 记录指向你的 `.netlify.app` 域名
4. 等待 DNS 生效（通常几分钟到几小时）

## 💰 Google AdSense 申请流程

### 第 1 步：确保网站符合要求
- ✅ 网站已上线并可以正常访问
- ✅ 有**至少 10-15 篇**高质量原创内容（博客文章/教程）
- ✅ 网站有完整的关于页、隐私政策、联系方式
- ✅ 网站设计专业、无大量错误
- ✅ 网站运行至少 1-2 周（让 Google 爬虫收录）

### 第 2 步：申请 AdSense
1. 访问 [google.com/adsense](https://www.google.com/adsense)
2. 点击 **Start now**
3. 输入你的网站 URL
4. 选择**网站类型**（选择"内容网站"）
5. 填写基本信息

### 第 3 步：在网站上添加广告代码
1. AdSense 审核通过后，它会给你一段代码：
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
2. 把这段代码粘贴到**每个 HTML 文件的 `<head>` 标签内**
3. 创建广告单元：AdSense 后台 → **广告** → **摘要广告单元** → 创建
4. 把生成的广告代码粘贴到你想展示广告的位置

### 第 4 步：替换代码中的广告占位符
在当前代码中搜索 `ad-placeholder`，替换为实际的 AdSense 广告代码。

**示例 — 在首页顶部横幅广告位置：**
```html
<!-- 替换这个 -->
<div class="ad-placeholder ad-placeholder-banner">Advertisement</div>

<!-- 为这个 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="horizontal"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### 第 5 步：等待审核
- 审核时间：通常 **1-7 天**
- 如果被拒绝，查看原因（通常是"内容太少"或"站点用户体验不佳"）
- 补充内容后重新提交

## 💡 赚钱技巧

### 1. 内容策略
- 每周发布 **2-3 篇**高质量 SEO 文章
- 覆盖长尾关键词（比如"如何用 AI 建网站赚钱"）
- 在你的教程中自然植入 Qi Scan 工具链接

### 2. 广告位置优化
- **顶部横幅**（首页）— 高曝光
- **文中广告**（教程页、博客页）— 高点击率
- **侧边栏** — 持续展示
- **扫描报告页** — 用户在等待报告时容易点击

### 3. 流量增长
- 在知乎、Medium、掘金等平台发布引流文章
- 分享到 Reddit（r/webdev, r/SideProject）
- 制作 YouTube 教程视频，链接回网站
- 利用 Qi Scan 工具的"扫描报告"页面做 SEO

### 4. 进阶变现
- 除了 AdSense，还可以加 **affiliate links**（推荐 AI 工具赚佣金）
- 推出 **VIP 高级扫描**付费功能
- 提供 **网站代建服务**（用你的教程能力接单）

## 📝 后续优化建议

1. **添加真实扫描 API** — 当前扫描是模拟的，可以接入真实分析工具
2. **用户系统** — 添加注册/登录，保存扫描历史
3. **数据统计** — 接入 Google Analytics 追踪流量
4. **暗黑模式** — 添加主题切换功能
5. **PWA** — 做成 Progressive Web App，支持离线使用
6. **更多语言** — 添加日文、韩文等多语言支持

## ⚠️ 注意事项

- 当前所有页面已预留 AdSense 广告位（`ad-placeholder` 类）
- 上线前记得替换 CSS 中的 Google Fonts（当前使用系统字体，无需额外加载）
- 中英文切换功能已实现，语言偏好保存在 localStorage
- 所有链接已正确配置，可以直接双击 index.html 在浏览器预览

---

**有问题随时找我！祝赚钱顺利 💰**
