# stanleychan87 终端风格个人主页

> 模仿 [amruth.ai](https://amruth.ai/) 的 VS Code / 终端审美，打造个人作品集网站。

![Preview](preview.png)

## ✨ 特性

- **VS Code / 终端设计** — 深色主题、左侧文件浏览器、右侧预览区、底部终端模拟器
- **交互式文件浏览器** — 点击文件切换内容，键盘导航 (↑↓→←)
- **终端模拟器** — 支持 `help`, `about`, `projects`, `blog`, `contact`, `neofetch` 等命令
- **打字机动画效果** — H1 标题的逐字动画
- **完全响应式** — 桌面端、平板、手机均可正常显示
- **真实个人信息** — 基于 GitHub 资料填充

## 📁 目录结构

```
.
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件 (深色主题、动画)
├── js/
│   └── script.js       # 交互逻辑 (文件树、终端、导航)
└── assets/
    └── avatar.svg      # 头像 (终端风格 SVG)
```

## 🚀 快速部署

### 方案一：GitHub Pages

1. 创建仓库 `https://github.com/stanleychan87/stanleychan87.github.io`
2. 将本目录所有文件推送到 main 分支
3. 在仓库 Settings > Pages 中设置源为 main 分支
4. 访问 `https://stanleychan87.github.io`

### 方案二：Vercel

```bash
npm install -g vercel
vercel
```

### 方案三：Netlify

直接将本文件夹拖放到 [Netlify Drop](https://app.netlify.com/drop)。

## ⌨️ 终端命令

| 命令 | 说明 |
|------|------|
| `help` | 显示帮助信息 |
| `about` | 打开关于页面 |
| `projects` | 打开项目页面 |
| `blog` | 打开博客页面 |
| `contact` | 显示联系方式 |
| `stats` | GitHub 统计 |
| `skills` | 查看技能栈 |
| `clear` | 清除终端 |
| `date` | 显示当前时间 |
| `whoami` | 显示用户名 |
| `banner` | 显示启动横幅 |
| `ls` | 列出所有页面 |
| `neofetch` | 显示系统信息 |
| `open <page>` | 打开指定页面 |

## 🎨 自定义

- **主题色**: 修改 `css/style.css` 中的 `:root` 变量
- **内容**: 修改 `js/script.js` 中的 renderer 函数
- **文件列表**: 修改 `js/script.js` 中的 `FILES` 对象
- **终端命令**: 修改 `js/script.js` 中的 `TERMINAL_COMMANDS` 对象

## 📊 数据来源

- GitHub API: [johnsmith8736](https://github.com/johnsmith8736)
- X/Twitter: [@stanleychan87](https://twitter.com/stanleychan87)

## 📝 许可证

MIT

---

> "Beautiful is better than Ugly!" 🍣