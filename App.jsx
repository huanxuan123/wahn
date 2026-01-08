import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from './projectsSlice';
import { selectThemeMode } from './themeSlice';
import Navigation from './components/Navigation';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import './reset.css';
import './variables.css';
import './animations.css';
import './App.css';
import './responsive.css';

/**
 * 应用根组件
 * 
 * 职责：
 * 1. 管理路由配置
 * 2. 初始化全局数据（项目列表）
 * 3. 应用主题模式
 * 4. 渲染导航栏和页面内容
 */
function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);

  // 初始化应用时获取项目数据
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // 应用主题模式到HTML元素
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    // 更新浏览器主题色
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeMode === 'dark' ? '#1a1a1a' : '#0066cc');
    }
  }, [themeMode]);

  return (
    <Router>
      {/* 导航栏 - 全局固定组件 */}
      <Navigation />
      
      <div className="app-container" data-theme={themeMode}>
        {/* 页面内容 */}
        <main className="app-main">
          <Routes>
            {/* 首页 */}
            <Route path="/" element={<Home />} />
            
            {/* 项目展示页 */}
            <Route path="/projects" element={<Projects />} />
            
            {/* 关于页面 */}
            <Route path="/about" element={<About />} />
            
            {/* 联系页面 */}
            <Route path="/contact" element={<Contact />} />
            
            {/* 未匹配路由 - 重定向到首页 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 页脚 */}
        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; 2026 个人作品集网站。保留所有权利。</p>
            <p>Built with React • React Router • Redux Toolkit</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
