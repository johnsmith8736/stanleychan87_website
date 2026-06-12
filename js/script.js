/* ═══════════════════════════════════════════════════
   stanleychan87 — 终端风格个人主页
   JavaScript: File Explorer, Content Rendering, Terminal
   ═══════════════════════════════════════════════════ */

'use strict';

/* ─── Content Data ─── */
const FILES = {
  'about': { type: 'file', label: 'about.md', icon: '📄' },
  'projects': { type: 'file', label: 'projects.md', icon: '📄' },
  'blog': { type: 'file', label: 'blog.md', icon: '📄' },
  'contact': { type: 'file', label: 'contact.md', icon: '📄' },
  'skills': {
    type: 'folder', label: 'skills', icon: '📁', open: true,
    children: {
      'skills-frontend': { type: 'file', label: 'frontend.md', icon: '📄' },
      'skills-backend': { type: 'file', label: 'backend.md', icon: '📄' },
      'skills-devops': { type: 'file', label: 'devops.md', icon: '📄' },
    }
  },
  'stats': { type: 'file', label: 'stats.md', icon: '📄' },
}

const FILE_ORDER = ['about', 'projects', 'blog', 'skills', 'contact', 'stats'];

/* ─── Helper: Escape HTML for safe rendering ─── */
function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ─── Content Renderers ─── */
function renderAbout() {
  return `<div class="content-markdown fade-in">
      <div class="profile-section">
        <img class="profile-avatar" src="assets/avatar.svg" alt="stanleychan87 头像" />
        <div class="profile-info">
          <div class="profile-name">stanleychan87</div>
          <div class="profile-bio">Beautiful is better than Ugly! 🍣</div>
          <div class="profile-details">
            <div class="profile-detail-item">
              <span class="detail-icon">📍</span>
              <span>位置:</span>
              <span class="detail-value">UTC+08:00</span>
            </div>
            <div class="profile-detail-item">
              <span class="detail-icon">📅</span>
              <span>加入 GitHub:</span>
              <span class="detail-value">2019 年 10 月</span>
            </div>
            <div class="profile-detail-item">
              <span class="detail-icon">🐦</span>
              <span>X/Twitter:</span>
              <span class="detail-value">@stanleychan87</span>
            </div>
            <div class="profile-detail-item">
              <span class="detail-icon">💻</span>
              <span>公开仓库:</span>
              <span class="detail-value">85 个</span>
            </div>
          </div>
        </div>
      </div>

      <h2>👋 你好！</h2>
      <p>
        我是一名全栈开发者和网络技术爱好者，专注于构建高效、优雅的技术解决方案。
        从底层网络协议到前端界面，我享受技术的每一层面。
      </p>

      <h2>🔧 技术栈概览</h2>
      <p>
        <span class="tag-badge green">TypeScript</span>
        <span class="tag-badge blue">Python</span>
        <span class="tag-badge yellow">Shell</span>
        <span class="tag-badge orange">Java</span>
        <span class="tag-badge purple">React</span>
        <span class="tag-badge green">Node.js</span>
        <span class="tag-badge blue">Docker</span>
        <span class="tag-badge yellow">Vite</span>
      </p>

      <h2>🎯 兴趣领域</h2>
      <ul>
        <li><strong>网络协议与代理技术</strong> — TLS, WebSocket, Sing-Box, Xray</li>
        <li><strong>开源工具开发</strong> — AnyTLS 高性能代理服务器</li>
        <li><strong>自动化运维</strong> — CI/CD, Shell 脚本, Docker 部署</li>
        <li><strong>Web 开发</strong> — React, TypeScript, Vite</li>
        <li><strong>数据采集与分析</strong> — Python 爬虫, 数据处理</li>
      </ul>

      <h2>📖 座右铭</h2>
      <blockquote>
        Beautiful is better than Ugly.<br>
        — Python Zen (The Zen of Python, by Tim Peters)
      </blockquote>
    </div>`;
}

function renderProjects() {
  return `<div class="content-markdown fade-in">
      <h1>📦 开源项目</h1>
      <p>以下是我在 GitHub 上的主要开源项目和个人作品。</p>

      <div class="project-card">
        <div class="project-title">
          <a href="https://github.com/johnsmith8736/AnyTLS" target="_blank" rel="noopener">🔒 AnyTLS</a>
        </div>
        <div class="project-desc">
          一个基于 AnyTLS 的高性能代理服务器配置。专注于提供安全、高效的网络传输解决方案。
        </div>
        <div class="project-meta">
          <span class="star-count">⭐ 11</span>
          <span class="fork-count">🍴 1</span>
          <span class="lang-tag">Shell</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title">
          <a href="https://github.com/johnsmith8736/tech-blog" target="_blank" rel="noopener">📝 Tech Blog</a>
        </div>
        <div class="project-desc">
          基于 Vite + React + TypeScript + React Router 构建的个人技术博客系统。
        </div>
        <div class="project-meta">
          <span class="lang-tag">TypeScript</span>
          <span class="lang-tag">React</span>
          <span class="lang-tag">Vite</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title">
          <a href="https://github.com/johnsmith8736/sing-box-config-tutorial" target="_blank" rel="noopener">🌐 Sing-Box 配置教程</a>
        </div>
        <div class="project-desc">
          Sing-box 配置文件详细教程，涵盖各种协议配置、路由策略和最佳实践。
        </div>
        <div class="project-meta">
          <span class="star-count">⭐ 2</span>
          <span class="fork-count">🍴 1</span>
          <span class="lang-tag">Documentation</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title">
          <a href="https://github.com/johnsmith8736/sing-box-deploy" target="_blank" rel="noopener">🚀 Sing-Box 自动部署</a>
        </div>
        <div class="project-desc">
          Sing-Box 自动部署脚本和文档，实现一键部署和更新。
        </div>
        <div class="project-meta">
          <span class="star-count">⭐ 2</span>
          <span class="lang-tag">Shell</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title">
          <a href="https://github.com/johnsmith8736/douban-movie-crawler" target="_blank" rel="noopener">🎬 豆瓣电影爬虫</a>
        </div>
        <div class="project-desc">
          豆瓣电影 Top 100 爬虫 — 爬取豆瓣电影排行榜数据并进行分析。
        </div>
        <div class="project-meta">
          <span class="lang-tag">Python</span>
        </div>
      </div>

      <h2>📊 开源贡献统计</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-value">85</div>
          <div class="stat-label">公开仓库</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">235</div>
          <div class="stat-label">获得 Star</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">16</div>
          <div class="stat-label">关注者</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">34</div>
          <div class="stat-label">正在关注</div>
        </div>
      </div>
    </div>`;
}

function renderBlog() {
  return `<div class="content-markdown fade-in">
      <h1>📝 技术博客</h1>
      <p>最新文章和技术分享。</p>

      <div class="blog-item">
        <div class="blog-title">Argo Tunnel + Xray + WebSocket + v2rayNG 配置教程</div>
        <div class="blog-date">📅 2025 年</div>
        <div class="blog-desc">
          详细介绍如何结合 Cloudflare Argo Tunnel、Xray、WebSocket 以及 v2rayNG 搭建安全高效的代理通道。
        </div>
      </div>

      <div class="blog-item">
        <div class="blog-title">VLESS + WS + ENC + 固定 Argo + Xray + WARP（JP）</div>
        <div class="blog-date">📅 2025 年</div>
        <div class="blog-desc">
          使用 VLESS 协议、WebSocket 传输、加密传输与 Cloudflare 固定 Argo Tunnel，结合 Xray 和 WARP 的日本节点部署方案。
        </div>
      </div>

      <div class="blog-item">
        <div class="blog-title">VLESS + WS + 固定 Tunnel + Xray + 官方 WARP（JP）</div>
        <div class="blog-date">📅 2025 年</div>
        <div class="blog-desc">
          另一种 VLESS + WebSocket 配置方案，使用 Cloudflare 固定 Tunnel 和官方 WARP 日本节点。
        </div>
      </div>

      <div class="blog-item">
        <div class="blog-title">ModelScope + Claude Code 使用指南</div>
        <div class="blog-date">📅 2025 年</div>
        <div class="blog-desc">
          探索如何在 ModelScope 平台上集成和使用 Claude Code 进行 AI 辅助开发。
        </div>
      </div>

      <h2>📡 博客平台</h2>
      <p>
        完整博客源码托管在 GitHub：
        <a href="https://github.com/johnsmith8736/tech-blog" target="_blank" rel="noopener">johnsmith8736/tech-blog</a>
        <br>
        基于 Vite + React + TypeScript 构建，支持静态部署。
      </p>
    </div>`;
}

function renderSkillsFrontend() {
  return `<div class="content-markdown fade-in">
      <h1>🎨 前端技能</h1>

      <h2>核心栈</h2>
      <p>
        <span class="tag-badge blue">TypeScript</span>
        <span class="tag-badge green">JavaScript</span>
        <span class="tag-badge yellow">HTML5</span>
        <span class="tag-badge orange">CSS3</span>
        <span class="tag-badge purple">React</span>
        <span class="tag-badge blue">Vite</span>
      </p>

      <h2>工具与框架</h2>
      <ul>
        <li><strong>React</strong> — 函数组件、Hooks、状态管理</li>
        <li><strong>TypeScript</strong> — 类型安全、泛型、高级类型</li>
        <li><strong>Vite</strong> — 快速构建工具、HMR</li>
        <li><strong>Tailwind CSS</strong> — 实用优先的 CSS 框架</li>
        <li><strong>Node.js</strong> — 后端 API、脚本工具</li>
      </ul>

      <h2>项目经验</h2>
      <ul>
        <li>构建个人技术博客（Vite + React + TypeScript）</li>
        <li>开发终端风格个人主页</li>
        <li>网络工具 Web 管理界面</li>
      </ul>
    </div>`;
}

function renderSkillsBackend() {
  return `<div class="content-markdown fade-in">
      <h1>⚙️ 后端技能</h1>

      <h2>编程语言</h2>
      <p>
        <span class="tag-badge blue">Python</span>
        <span class="tag-badge orange">Java</span>
        <span class="tag-badge green">Node.js</span>
        <span class="tag-badge yellow">Shell</span>
      </p>

      <h2>网络与协议</h2>
      <ul>
        <li><strong>代理技术</strong> — TLS, WebSocket, VLESS, VMess</li>
        <li><strong>隧道技术</strong> — Cloudflare Argo Tunnel, WARP</li>
        <li><strong>协议配置</strong> — Sing-Box, Xray, v2rayNG</li>
        <li><strong>网络调试</strong> — Wireshark, tcpdump, curl</li>
      </ul>

      <h2>数据处理</h2>
      <ul>
        <li><strong>Python 爬虫</strong> — BeautifulSoup, Scrapy, requests</li>
        <li><strong>数据清洗与分析</strong> — Pandas, NumPy</li>
        <li><strong>API 开发</strong> — RESTful, FastAPI</li>
      </ul>
    </div>`;
}

function renderSkillsDevops() {
  return `<div class="content-markdown fade-in">
      <h1>🛠️ DevOps 技能</h1>

      <h2>容器与部署</h2>
      <p>
        <span class="tag-badge blue">Docker</span>
        <span class="tag-badge green">CI/CD</span>
        <span class="tag-badge yellow">GitHub Actions</span>
        <span class="tag-badge orange">Shell 脚本</span>
      </p>

      <h2>自动化运维</h2>
      <ul>
        <li><strong>自动部署脚本</strong> — Sing-Box 一键部署</li>
        <li><strong>CI/CD 流水线</strong> — GitHub Actions 自动化构建与部署</li>
        <li><strong>Docker 容器化</strong> — 构建优化、多阶段构建</li>
        <li><strong>服务器运维</strong> — Linux 系统管理、网络配置</li>
      </ul>

      <h2>版本控制</h2>
      <ul>
        <li><strong>Git</strong> — 分支策略、代码审查、Git Workflow</li>
        <li><strong>GitHub</strong> — Issues, PR, Actions, Pages</li>
      </ul>

      <h2>云服务</h2>
      <ul>
        <li><strong>Cloudflare</strong> — Tunnel, WARP, DNS, CDN</li>
        <li><strong>Vercel / Netlify</strong> — 静态站点托管</li>
        <li><strong>GitHub Pages</strong> — 项目展示页部署</li>
      </ul>
    </div>`;
}

function renderContact() {
  return `<div class="content-markdown fade-in">
      <h1>📬 联系方式</h1>
      <p>可以通过以下渠道与我取得联系：</p>

      <div class="contact-grid">
        <a href="https://github.com/johnsmith8736" target="_blank" rel="noopener" class="contact-item">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <div>
            <div class="contact-label">GitHub</div>
            <div class="contact-value">johnsmith8736</div>
          </div>
        </a>

        <a href="https://twitter.com/stanleychan87" target="_blank" rel="noopener" class="contact-item">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          <div>
            <div class="contact-label">X / Twitter</div>
            <div class="contact-value">@stanleychan87</div>
          </div>
        </a>

        <a href="mailto:johnsmith874436@gmail.com" class="contact-item">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <div>
            <div class="contact-label">Email</div>
            <div class="contact-value">johnsmith874436@gmail.com</div>
          </div>
        </a>

        <div class="contact-item" style="cursor: default;">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <div>
            <div class="contact-label">位置</div>
            <div class="contact-value">UTC+08:00</div>
          </div>
        </div>
      </div>

      <h2>💬 说点什么</h2>
      <p>
        欢迎通过 GitHub 提交 Issue 或 PR，或者在 X/Twitter 上 @ 我。
        对于技术讨论和合作项目，我始终持开放态度。
      </p>
      <blockquote>
        "Talk is cheap. Show me the code."<br>
        — Linus Torvalds
      </blockquote>
    </div>`;
}

function renderStats() {
  return `<div class="content-markdown fade-in">
      <h1>📊 GitHub 统计</h1>

      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-value">85</div>
          <div class="stat-label">公开仓库</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">235</div>
          <div class="stat-label">获得 Star</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">16</div>
          <div class="stat-label">关注者</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">34</div>
          <div class="stat-label">正在关注</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">2019</div>
          <div class="stat-label">加入年份</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">4</div>
          <div class="stat-label">精选项目</div>
        </div>
      </div>

      <h2>🏆 热门仓库</h2>
      <table>
        <thead>
          <tr><th>仓库</th><th>⭐ Stars</th><th>语言</th></tr>
        </thead>
        <tbody>
          <tr><td>AnyTLS</td><td>11</td><td>Shell</td></tr>
          <tr><td>sing-box-config-tutorial</td><td>2</td><td>文档</td></tr>
          <tr><td>sing-box-deploy</td><td>2</td><td>Shell</td></tr>
          <tr><td>tech-blog</td><td>0</td><td>TypeScript</td></tr>
          <tr><td>douban-movie-crawler</td><td>0</td><td>Python</td></tr>
        </tbody>
      </table>

      <h2>📈 语言分布</h2>
      <ul>
        <li><strong>Shell</strong> — 部署脚本、自动化工具</li>
        <li><strong>TypeScript</strong> — Web 前端、博客系统</li>
        <li><strong>Python</strong> — 爬虫、数据分析</li>
        <li><strong>Java</strong> — 基础编码练习</li>
        <li><strong>Dockerfile</strong> — 容器化配置</li>
      </ul>

      <p style="margin-top: 24px;">
        <a href="https://github.com/johnsmith8736?tab=repositories" target="_blank" rel="noopener">
          查看全部 85 个仓库 →
        </a>
      </p>
    </div>`;
}

/* Route map */
const RENDERERS = {
  'about': renderAbout,
  'projects': renderProjects,
  'blog': renderBlog,
  'skills-frontend': renderSkillsFrontend,
  'skills-backend': renderSkillsBackend,
  'skills-devops': renderSkillsDevops,
  'contact': renderContact,
  'stats': renderStats,
};

const PATH_LABELS = {
  'about': '~/about.md',
  'projects': '~/projects.md',
  'blog': '~/blog.md',
  'skills-frontend': '~/skills/frontend.md',
  'skills-backend': '~/skills/backend.md',
  'skills-devops': '~/skills/devops.md',
  'contact': '~/contact.md',
  'stats': '~/stats.md',
};

/* ─── Terminal Commands ─── */
const TERMINAL_COMMANDS = {
  help() {
    return [
      '<span class="cmd-hl">可用命令:</span>',
      '  <span class="cmd-info">help</span>      — 显示此帮助信息',
      '  <span class="cmd-info">about</span>     — 打开关于页面',
      '  <span class="cmd-info">projects</span>  — 打开项目页面',
      '  <span class="cmd-info">blog</span>      — 打开博客页面',
      '  <span class="cmd-info">contact</span>   — 显示联系方式',
      '  <span class="cmd-info">stats</span>     — 查看 GitHub 统计',
      '  <span class="cmd-info">skills</span>    — 查看技能栈',
      '  <span class="cmd-info">clear</span>     — 清除终端输出',
      '  <span class="cmd-info">date</span>      — 显示当前时间',
      '  <span class="cmd-info">whoami</span>    — 显示当前用户',
      '  <span class="cmd-info">banner</span>    — 显示启动横幅',
      '  <span class="cmd-info">ls</span>        — 列出所有可用页面',
      '  <span class="cmd-info">open &lt;page&gt;</span> — 在编辑器中打开页面',
      '  <span class="cmd-info">neofetch</span>  — 显示系统信息',
      '  <span class="cmd-info">exit</span>      — (无操作，仅供装饰)',
    ].join('<br>');
  },

  about() { selectFile('about'); return '<span class="cmd-success">✔ 已打开 about.md</span>'; },
  projects() { selectFile('projects'); return '<span class="cmd-success">✔ 已打开 projects.md</span>'; },
  blog() { selectFile('blog'); return '<span class="cmd-success">✔ 已打开 blog.md</span>'; },
  contact() { selectFile('contact'); return '<span class="cmd-success">✔ 已打开 contact.md</span>'; },
  stats() { selectFile('stats'); return '<span class="cmd-success">✔ 已打开 stats.md</span>'; },

  skills() {
    selectFile('skills-frontend');
    return '<span class="cmd-success">✔ 已打开 skills/frontend.md</span>';
  },

  clear() {
    document.getElementById('terminal-output').innerHTML = '';
    return null;
  },

  date() {
    const now = new Date();
    return `<span class="cmd-info">${now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</span>`;
  },

  whoami() { return 'stanleychan87'; },

  banner() {
    return [
      '<span class="cmd-hl">╔══════════════════════════════════════╗</span>',
      '<span class="cmd-hl">║</span>  <span class="cmd-success">stanleychan87</span> 终端主页 v1.0      <span class="cmd-hl">║</span>',
      '<span class="cmd-hl">║</span>  "Beautiful is better than Ugly!"  <span class="cmd-hl">║</span>',
      '<span class="cmd-hl">╚══════════════════════════════════════╝</span>',
      '输入 <span class="cmd-hl">help</span> 查看可用命令。',
    ].join('<br>');
  },

  ls() {
    return [
      '<span class="cmd-hl">可用页面:</span>',
      '  <span class="cmd-info">about.md</span>     — 个人简介',
      '  <span class="cmd-info">projects.md</span>  — 开源项目',
      '  <span class="cmd-info">blog.md</span>      — 技术博客',
      '  <span class="cmd-info">contact.md</span>   — 联系方式',
      '  <span class="cmd-info">stats.md</span>     — GitHub 统计',
      '  <span class="cmd-info">skills/</span>      — 技能分类目录',
      '    ├── <span class="cmd-info">frontend.md</span>',
      '    ├── <span class="cmd-info">backend.md</span>',
      '    └── <span class="cmd-info">devops.md</span>',
    ].join('<br>');
  },

  open(args) {
    if (!args || !args.trim()) {
      return '<span class="cmd-error">✖ 用法: open &lt;page&gt; (例如: open about)</span>';
    }
    const page = args.trim().toLowerCase();
    if (RENDERERS[page]) {
      selectFile(page);
      return `<span class="cmd-success">✔ 已打开 ${PATH_LABELS[page] || page}</span>`;
    }
    for (const key of Object.keys(RENDERERS)) {
      if (key.includes(page)) {
        selectFile(key);
        return `<span class="cmd-success">✔ 已打开 ${PATH_LABELS[key] || key}</span>`;
      }
    }
    return `<span class="cmd-error">✖ 错误: 未找到页面 "${esc(page)}"</span>`;
  },

  neofetch() {
    return [
      '<span class="cmd-hl">       ████████████        </span> <span class="cmd-success">stanleychan87@terminal</span>',
      '<span class="cmd-hl">     ██            ██      </span> <span class="cmd-info">--------------</span>',
      '<span class="cmd-hl">    ██   ████████   ██     </span> <span class="cmd-info">OS:</span>      Arch Linux x86_64',
      '<span class="cmd-hl">   ██   ██      ██   ██    </span> <span class="cmd-info">Host:</span>    Terminal Web v1',
      '<span class="cmd-hl">   ██   ██  🍣  ██   ██    </span> <span class="cmd-info">Kernel:</span>  JavaScript ES2022',
      '<span class="cmd-hl">   ██   ██      ██   ██    </span> <span class="cmd-info">Uptime:</span>  网站已加载',
      '<span class="cmd-hl">    ██   ████████   ██     </span> <span class="cmd-info">Shell:</span>   bash-like',
      '<span class="cmd-hl">     ██            ██      </span> <span class="cmd-info">DE:</span>      VS Code Inspired',
      '<span class="cmd-hl">       ████████████        </span> <span class="cmd-info">Theme:</span>   Dark Terminal',
      '',
      '<span class="cmd-info">Bio:</span> Beautiful is better than Ugly! 🍣',
    ].join('<br>');
  },

  exit() {
    return '<span class="cmd-warning">⚠ exit: 此终端为装饰用途。请关闭浏览器标签页退出。</span>';
  },

  _default(cmd) {
    return `<span class="cmd-error">✖ 未知命令: ${esc(cmd)}。输入 <span class="cmd-hl">help</span> 查看可用命令。</span>`;
  }
};

/* ─── File Tree Builder ─── */
function buildFileTree(container, parentKey, depth = 0) {
  const items = parentKey
    ? Object.entries(FILES[parentKey].children)
    : FILE_ORDER.map(key => [key, FILES[key]]);

  for (const [key, node] of items) {
    const item = document.createElement('div');
    item.className = 'tree-item' + (node.type === 'folder' ? ' folder-item' : ' file-item');
    item.dataset.key = key;
    item.style.setProperty('--depth', depth);
    item.setAttribute('role', 'treeitem');
    item.setAttribute('tabindex', '0');

    if (node.type === 'folder') {
      const chevron = document.createElement('span');
      chevron.className = 'chevron' + (node.open ? ' expanded' : '');
      chevron.textContent = '▶';
      item.appendChild(chevron);
    } else {
      const spacer = document.createElement('span');
      spacer.style.width = '14px';
      spacer.style.display = 'inline-block';
      spacer.style.flexShrink = '0';
      item.appendChild(spacer);
    }

    const icon = document.createElement('span');
    icon.className = 'icon';
    icon.textContent = node.type === 'folder' && node.open ? '📂' : (node.icon || '📄');
    item.appendChild(icon);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = node.label;
    item.appendChild(name);

    item.addEventListener('click', () => {
      if (node.type === 'folder') {
        toggleFolder(key, item);
      } else {
        selectFile(key);
      }
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        item.click();
      }
    });

    container.appendChild(item);

    if (node.type === 'folder' && node.children) {
      const childContainer = document.createElement('div');
      childContainer.className = 'tree-children' + (node.open ? ' expanded' : '');
      childContainer.dataset.parent = key;
      childContainer.setAttribute('role', 'group');
      container.appendChild(childContainer);
      if (node.open) {
        buildFileTree(childContainer, key, depth + 1);
      }
    }
  }
}

function toggleFolder(key, itemEl) {
  const chevron = itemEl.querySelector('.chevron');
  if (chevron) chevron.classList.toggle('expanded');
  const iconEl = itemEl.querySelector('.icon');
  if (iconEl) {
    iconEl.textContent = iconEl.textContent === '📁' ? '📂' : '📁';
  }
  itemEl.classList.toggle('open');
  const children = document.querySelector(`.tree-children[data-parent="${key}"]`);
  if (children) {
    const willOpen = !children.classList.contains('expanded');
    children.classList.toggle('expanded');
    if (willOpen && !children.children.length) {
      buildFileTree(children, key, parseInt(itemEl.style.getPropertyValue('--depth')) + 1);
    }
  }
}

/* ─── File Selection ─── */
let currentFile = null;

function selectFile(key) {
  document.querySelectorAll('.tree-item.active').forEach(el => el.classList.remove('active'));
  const target = document.querySelector(`.tree-item[data-key="${key}"]`);
  if (target) target.classList.add('active');

  const pathEl = document.getElementById('current-file-path');
  pathEl.textContent = PATH_LABELS[key] || `~/${key}`;

  const renderer = RENDERERS[key];
  const contentEl = document.getElementById('preview-content');
  if (renderer) {
    contentEl.innerHTML = renderer();
    currentFile = key;
    animateHeadings(contentEl);
  } else {
    contentEl.innerHTML = '<div id="empty-state"><div class="empty-icon">📄</div><p>文件未找到</p></div>';
  }
}

function animateHeadings(container) {
  if (!container) return;
  const h1 = container.querySelector('h1');
  if (h1 && !h1.dataset.animated) {
    h1.dataset.animated = 'true';
    const text = h1.textContent;
    h1.textContent = '';
    h1.classList.add('typewriter-line');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        h1.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        h1.classList.remove('typewriter-line');
        h1.classList.add('typewriter-done');
      }
    }, 50);
  }
}

/* ─── Terminal Logic ─── */
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  addTerminalLine(output, TERMINAL_COMMANDS.banner());

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = input.value.trim();
      input.value = '';
      if (!cmd) return;

      const promptStr = `<span class="prompt-user">stanleychan87</span><span class="prompt-at">@</span><span class="prompt-host">terminal</span><span class="prompt-colon">:</span><span class="prompt-path">~</span><span class="prompt-dollar">$</span> ${esc(cmd)}`;
      addTerminalLine(output, promptStr);

      const parts = cmd.split(/\s+/);
      const command = parts[0].toLowerCase();
      const args = parts.slice(1).join(' ');

      let result;
      if (TERMINAL_COMMANDS[command]) {
        result = TERMINAL_COMMANDS[command](args);
      } else {
        result = TERMINAL_COMMANDS._default(cmd);
      }

      if (result !== null) {
        addTerminalLine(output, result);
      }
      output.scrollTop = output.scrollHeight;
    }
  });

  document.getElementById('terminal').addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT') input.focus();
  });
}

function addTerminalLine(container, html) {
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.innerHTML = html;
  container.appendChild(line);
}

/* ─── Keyboard Navigation ─── */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const items = document.querySelectorAll('.tree-item.file-item, .tree-item.folder-item');
      if (!items.length) return;

      let idx = -1;
      items.forEach((el, i) => { if (el.classList.contains('active')) idx = i; });

      if (e.key === 'ArrowDown') {
        idx = Math.min(idx + 1, items.length - 1);
      } else {
        idx = Math.max(idx - 1, 0);
      }

      items[idx]?.click();
      items[idx]?.focus();
    }

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const active = document.querySelector('.tree-item.active');
      if (active && active.classList.contains('folder-item')) {
        toggleFolder(active.dataset.key, active);
      }
    }
  });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.getElementById('file-tree');
  buildFileTree(tree, null, 0);
  initTerminal();
  initKeyboardNav();
  selectFile('about');

  document.getElementById('close-explorer').addEventListener('click', () => {
    document.getElementById('explorer').classList.toggle('collapsed');
    const btn = document.getElementById('close-explorer');
    btn.textContent = document.getElementById('explorer').classList.contains('collapsed') ? '⊞ +' : '⊞ x';
  });

  new MutationObserver(() => {
    animateHeadings(document.getElementById('preview-content'));
  }).observe(document.getElementById('preview-content'), { childList: true, subtree: false });
});