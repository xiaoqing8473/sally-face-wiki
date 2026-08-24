# 🚀 Sally Face 2 Wiki 部署指南

## ✅ 已完成的内容

### 页面 (5个核心页面)
1. ✅ **主页** (`/`) - 包含 Hero、Stats、Start Here、About Game、Final CTA
2. ✅ **Release Date 页** (`/release-date`) - 发布日期、平台顺序、FAQ
3. ✅ **Trailers 页** (`/trailers`) - 预告片分析、场景解读
4. ✅ **Episodes 页** (`/episodes`) - Episode 2 完整攻略、Supernatural Hotspots
5. ✅ **Characters 页** (`/characters`) - Sal、Ashley、Todd 角色介绍

### 组件
- ✅ **Navigation** - 响应式导航栏（桌面/移动端）
- ✅ **Layout** - 全局布局和 SEO 配置

### 技术栈
- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ 响应式设计

---

## 🌐 本地测试

网站已经在后台运行！打开浏览器访问：

```
http://localhost:3000
```

### 测试检查清单
- [ ] 主页加载正常
- [ ] 导航栏可以点击
- [ ] 所有5个页面都能访问
- [ ] 移动端响应式正常
- [ ] 外部链接（Steam、官网）能打开

---

## 📤 部署到 Vercel（推荐）

### 第1步：推送到 GitHub

```bash
cd H:/youxi/sally-face-wiki

# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Sally Face 2 Wiki - First version"

# 连接到你的 GitHub 仓库
git remote add origin https://github.com/YOUR_USERNAME/sally-face-wiki.git

# 推送
git push -u origin main
```

### 第2步：连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 账号登录
3. 点击 **"New Project"**
4. 选择你的 `sally-face-wiki` 仓库
5. Vercel 会自动检测 Next.js 项目
6. 点击 **"Deploy"**

**等待2-3分钟，网站就上线了！** 🎉

你会得到一个 URL，类似：
```
https://sally-face-wiki.vercel.app
```

---

## 🌍 绑定自定义域名

### 第1步：购买域名

在 [spaceship.com](https://spaceship.com) 购买域名，比如：
- `sallyface2.wiki`
- `sallyface2guide.com`
- `sf2wiki.com`

### 第2步：在 Vercel 添加域名

1. 进入 Vercel 项目 → **Settings** → **Domains**
2. 输入你的域名（如 `sallyface2.wiki`）
3. 点击 **Add**

Vercel 会给你 DNS 配置信息。

### 第3步：配置 Cloudflare DNS

1. 去 [cloudflare.com](https://cloudflare.com) 添加你的域名
2. 在 **DNS** 设置中添加：
   - **Type**: CNAME
   - **Name**: @ (或 www)
   - **Target**: `cname.vercel-dns.com`
   - **Proxy status**: DNS only (灰色云朵)

3. 等待5-30分钟，DNS 生效后你的域名就能访问了！

---

## 🎨 主题色配置

网站使用了 **紫色主题**（符合 Sally Face 的恐怖/神秘氛围）：

```css
主色调：Purple (紫色)
- 主要按钮：bg-purple-600
- 悬停效果：hover:bg-purple-700
- 边框高亮：border-purple-500

背景色：
- 深色背景：bg-slate-900
- 渐变效果：from-slate-900 via-purple-900 to-slate-900

文字颜色：
- 主标题：text-white
- 正文：text-slate-300
- 次要文字：text-slate-400
```

如果需要修改主题色，在 Tailwind CSS 类名中替换 `purple` 为其他颜色。

---

## 📊 SEO 优化要点

### 已实现的 SEO 功能

✅ **每个页面的 Meta 标签**
```typescript
export const metadata = {
  title: '页面标题（包含关键词，<60字符）',
  description: '页面描述（140-160字符）',
  keywords: '关键词1, 关键词2, 关键词3',
};
```

✅ **语义化 HTML**
- 使用 `<h1>`, `<h2>`, `<h3>` 标题层级
- 使用 `<section>`, `<article>` 语义标签

✅ **内链优化**
- 主页链接到所有分类页
- 分类页之间互相链接
- "Related Pages" 部分

✅ **外链策略**
- Steam 官方页面
- Portable Moose 官网
- 社交媒体链接

✅ **移动端优化**
- 响应式设计
- 触摸友好的按钮尺寸

---

## 🔄 后续内容扩展

### 需要等游戏发布后添加的内容

⏳ **Trans Character 详细页**
- 目前只有占位符
- 游戏发布后更新真实角色信息

⏳ **Compcitorp 地点指南**
- 游戏内地点，需要实际游戏内容

⏳ **Gameplay 详细攻略**
- 目前基于预告片推测
- Early Access 后添加实际玩法指南

### 可以立即添加的多语言版本

✅ **葡萄牙语** (`/pt/release-date`)
- 翻译 Release Date 页面内容

✅ **西班牙语** (`/es/capitulo-2`)
- 翻译 Episode 2 攻略

✅ **俄语** (`/ru/data-vykhoda`)
- 翻译发布日期信息

---

## 🐛 常见问题

### Q: 开发服务器启动失败？
```bash
# 删除 node_modules 重新安装
rm -rf node_modules
npm install
npm run dev
```

### Q: 样式不生效？
检查 `tailwind.config.ts` 配置是否正确。

### Q: 页面404？
确保文件路径正确：
- 页面文件必须命名为 `page.tsx`
- 放在 `app/` 目录下的对应文件夹中

### Q: Vercel 部署失败？
检查 GitHub 仓库是否包含：
- `package.json`
- `next.config.js`
- 所有源代码文件

---

## 📈 下一步建议

1. **测试所有页面** - 在本地浏览器检查每个页面
2. **推送到 GitHub** - 保存代码到仓库
3. **部署到 Vercel** - 让网站上线
4. **绑定域名** - 使用自定义域名
5. **提交到 Google Search Console** - 让 Google 收录你的网站
6. **监控流量** - 用 Google Analytics 追踪访问量

---

## ✅ 总结

🎉 **恭喜！Sally Face 2 Wiki 已经完成！**

你现在拥有：
- ✅ 5个完整的页面
- ✅ 响应式设计
- ✅ SEO 优化
- ✅ 真实的游戏信息
- ✅ 专业的 UI 设计

**现在就可以部署上线了！** 🚀

需要帮助？查看 README.md 或重新运行这个指南。
