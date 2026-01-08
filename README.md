# 个人作品集网站

一个使用现代前端技术栈构建的专业个人作品集网站，完整展示前端最佳实践。

## ✨ 项目特性

- 🎨 **响应式设计** - 完美适配桌面、平板、手机等所有设备
- 🌙 **暗色模式** - 一键切换亮色/暗色主题，本地存储用户偏好
- ⚡ **高性能** - Vite构建、代码分割、懒加载等优化
- 🎭 **流畅动画** - 页面过渡、组件动画等视觉效果
- 🔍 **SEO友好** - 语义化HTML、元标签优化
- ♿ **无障碍访问** - ARIA标签、键盘导航支持

## 🛠️ 技术栈

### 前端框架与库
- **React 18** - UI框架
- **React Router 6** - 路由管理
- **Redux Toolkit** - 全局状态管理

### 开发工具
- **Vite** - 构建工具（快速HMR、生产优化）
- **ESLint** - 代码质量检查
- **CSS Modules** - 样式模块化

### 其他工具
- **axios** - HTTP请求库
- **react-transition-group** - 动画库

## 📁 项目结构

```
src/
├── pages/                    # 页面组件
│   ├── Home.jsx            # 首页
│   ├── Projects.jsx        # 项目展示
│   ├── About.jsx           # 关于我
│   └── Contact.jsx         # 联系方式
│
├── components/             # 可复用组件
│   ├── Navigation.jsx      # 导航栏
│   ├── ProjectCard.jsx     # 项目卡片
│   ├── ProjectShowcase.jsx # 项目网格
│   └── ContactForm.jsx     # 联系表单
│
├── hooks/                  # 自定义Hooks
│   ├── useTheme.js         # 主题Hook
│   └── useFormValidation.js # 表单验证Hook
│
├── utils/                  # 工具函数
│   └── animations.js       # 动画工具
│
├── store/                  # Redux状态管理
│   ├── store.js            # Store配置
│   ├── projectsSlice.js    # 项目状态
│   └── themeSlice.js       # 主题状态
│
├── styles/                 # 全局样式
│   ├── variables.css       # CSS变量
│   ├── animations.css      # 动画
│   ├── responsive.css      # 响应式设计
│   └── reset.css           # 样式重置
│
├── App.jsx                 # 根组件
└── main.jsx                # 应用入口
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
启动开发服务器，访问 `http://localhost:5173`

### 生产构建
```bash
npm run build
```
生成优化后的生产文件到 `dist/` 目录

### 预览生产版本
```bash
npm run preview
```

### 代码检查
```bash
npm run lint        # 检查代码质量
npm run lint:fix    # 自动修复
```

## 📋 核心功能模块

### 1. 全局状态管理（Redux Toolkit）
- **项目状态** - 项目列表、加载状态、筛选条件
- **主题状态** - 当前主题模式、色彩配置
- **中间件** - localStorage持久化

**关键特性：**
- 异步数据加载（fetchProjects Thunk）
- 项目筛选和搜索
- 主题本地持久化

### 2. 路由与导航
- 嵌套路由结构
- 平滑页面过渡动画
- 粘性导航栏
- 响应式移动菜单

**支持的路由：**
- `/` - 首页
- `/projects` - 项目展示
- `/about` - 关于我
- `/contact` - 联系方式

### 3. 响应式设计
- **移动优先** - 从小屏幕设计起
- **媒体查询** - 支持所有主流设备
- **灵活网格** - CSS Grid自适应布局
- **流体排版** - 响应式字体大小

**断点：**
- 超小屏（< 360px）
- 手机（480px - 767px）
- 平板（768px - 1023px）
- 桌面（≥ 1024px）

### 4. 主题系统
- 使用CSS变量实现
- 支持亮色/暗色两种模式
- localStorage持久化用户选择
- 系统偏好检测

**可定制颜色：**
- 背景色、文字色
- 品牌色、强调色
- 状态色（成功、警告、错误）
- 阴影和边框

### 5. 表单验证
- 实时字段验证
- 清晰的错误提示
- 表单提交处理
- 防止重复提交

**验证规则：**
- 姓名：2-∞ 字符
- 邮箱：有效的邮箱格式
- 主题：5-∞ 字符
- 消息：10-∞ 字符

## 🎯 主要特点深入

### 响应式布局实现
```css
/* 移动优先 */
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

/* 平板 */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 暗色模式实现
```javascript
// CSS变量根据data-theme属性切换
[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #f0f0f0;
}
```

### Redux状态流
```
用户交互 
  ↓
触发 Action/Thunk
  ↓
Reducer 更新 State
  ↓
选择器获取数据
  ↓
组件订阅更新
  ↓
重新渲染视图
```

## 📊 性能优化

### 构建优化
- ✅ 代码分割（按路由）
- ✅ Tree-shaking（消除死代码）
- ✅ 资源压缩（JS、CSS、HTML）
- ✅ 长期缓存哈希

### 运行时优化
- ✅ 懒加载（页面、图片）
- ✅ 虚拟滚动（大列表）
- ✅ 防抖/节流（事件处理）
- ✅ 骨架屏加载

### 性能指标目标
| 指标 | 目标值 |
|------|--------|
| 首屏加载 | < 3s |
| 首次内容绘制(FCP) | < 2s |
| 最大内容绘制(LCP) | < 2.5s |
| 累积布局偏移(CLS) | < 0.1 |

## 🧪 测试

### 单元测试示例
```javascript
// 使用Jest + React Testing Library
test('应该正确渲染项目卡片', () => {
  const project = { id: 1, title: '测试项目' };
  render(<ProjectCard project={project} />);
  expect(screen.getByText('测试项目')).toBeInTheDocument();
});
```

### 测试覆盖
- 组件渲染测试
- Redux状态测试
- 表单验证测试
- 路由导航测试

## 🔐 安全性

- XSS防护（React自动转义）
- CSRF令牌（可配置）
- 内容安全策略（CSP）
- 依赖安全扫描

## 📱 浏览器支持

| 浏览器 | 版本 |
|--------|------|
| Chrome | 最新版 |
| Firefox | 最新版 |
| Safari | 最新版 |
| Edge | 最新版 |

## 🌐 部署

### 静态部署（推荐）
```bash
# 构建
npm run build

# 部署 dist/ 目录到你的服务器
# 支持的平台：Vercel、Netlify、GitHub Pages等
```

### Docker部署
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📈 SEO优化

- ✅ 语义化HTML标签
- ✅ Meta标签配置
- ✅ Open Graph标签
- ✅ 结构化数据（Schema）
- ✅ 图片优化（懒加载、格式转换）

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 项目变更日志

### v1.0.0 (初始版本)
- ✨ 基础项目结构搭建
- ✨ 响应式设计实现
- ✨ 暗色模式支持
- ✨ Redux状态管理
- ✨ 页面和组件开发
- ✨ 表单验证功能

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👨‍💻 关于作者

这是一个个人作品集展示项目，用于展示现代前端开发的最佳实践和技术能力。

如有问题或建议，欢迎通过以下方式联系：
- 📧 Email: you@example.com
- 🐙 GitHub: github.com/yourname
- 💼 LinkedIn: linkedin.com/in/yourprofile

---

**最后更新于:** 2024年1月7日

祝您使用愉快！ 🎉
