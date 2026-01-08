import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from './projectsSlice';
import { selectProjectsLoading, selectProjects } from './projectsSlice';
import ProjectShowcase from './components/ProjectShowcase';
import './styles/pages/Home.module.css';

/**
 * 首页组件
 * 展示个人简介、精选项目、技能亮点等内容
 */
function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(selectProjectsLoading);
  const allProjects = useSelector(selectProjects);

  useEffect(() => {
    // 确保项目数据已加载
    if (allProjects.length === 0 && !loading) {
      dispatch(fetchProjects());
    }
  }, [dispatch, allProjects, loading]);

  const skills = ['ComfyUI', 'Stable Diffusion', 'AI视频生成', '小说改编', '漫画脚本', 'Prompt工程', '工作流优化', '多模型融合'];
  const highlights = [
    { icon: '🎨', title: 'AI概念艺术', description: '创意生图，专业级美术资源生成' },
    { icon: '🎬', title: '视频创作', description: '动画视频制作，视觉叙事表达' },
    { icon: '📖', title: '内容改编', description: '小说转漫剧，创意脚本开发' },
    { icon: '⚙️', title: '工作流优化', description: '自动化生产，高效创意工具' },
  ];

  return (
    <div className="home-page">
      {/* 英雄区 */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            AI创意工作者，用<span className="highlight">想象力驱动技术</span>
          </h1>
          <p className="hero-subtitle">
            专业使用ComfyUI进行创意生图、视频制作。擅长小说转漫改、AI工作流优化。
            将创意想法转化为高质量的视觉内容，探索AI艺术的无限可能。
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              查看我的作品 →
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              合作咨询
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/ComfyUI_temp_uemqp_00007_.png" alt="个人头像" className="hero-avatar" />
        </div>
      </section>

      {/* 技能亮点 */}
      <section className="highlights">
        <h2>关键特性</h2>
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 技能展示 */}
      <section className="skills">
        <h2>技能栈</h2>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 精选项目 */}
      <section className="featured-projects">
        <h2>精选项目</h2>
        {loading ? (
          <div className="loading">加载中...</div>
        ) : (
          <ProjectShowcase projects={allProjects.length >= 4 ? [allProjects[0], allProjects[1], allProjects[3], allProjects[2]] : allProjects.slice(0, 4)} />
        )}
      </section>

      {/* call-to-action */}
      <section className="cta">
        <h2>想要合作或定制项目？</h2>
        <p>无论是商业插画、漫改视频、概念艺术还是AI工作流开发，我都能为您提供专业、创意的解决方案。</p>
        <Link to="/contact" className="btn btn-primary btn-large">
          开始你的创意项目
        </Link>
      </section>
    </div>
  );
}

export default Home;
