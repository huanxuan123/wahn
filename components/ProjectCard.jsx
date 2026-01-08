import '../styles/components/ProjectCard.module.css';

/**
 * 项目卡片组件
 * 
 * Props:
 *   project: 项目数据对象 { id, title, description, image, tags, link, featured, year }
 *   onClick: 点击卡片时的回调函数
 */
function ProjectCard({ project, onClick }) {
  return (
    <div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      onClick={onClick}
    >
      {/* 项目图片/视频 */}
      {project.video ? (
        <div className="project-image project-video">
          <video src={project.video} alt={project.title} controls />
          <div className="video-badge">🎬 视频</div>
        </div>
      ) : project.image ? (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      ) : null}

      {/* 项目头部 */}
      <div className="project-header">
        {/* 特色标签 */}
        {project.featured && (
          <span className="featured-badge">⭐ 精选</span>
        )}
        {/* 年份 */}
        <span className="project-year">{project.year}</span>
      </div>

      {/* 项目内容 */}
      <div className="project-content">
        {/* 标题 */}
        <h3 className="project-title">{project.title}</h3>

        {/* 描述 */}
        <p className="project-description">{project.description}</p>

        {/* 技术标签 */}
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 项目底部 - 链接 */}
      <div className="project-footer">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          onClick={(e) => e.stopPropagation()}
        >
          查看项目 →
        </a>
      </div>

      {/* 悬停效果 - 使用CSS实现 */}
      <div className="card-hover-effect"></div>
    </div>
  );
}

export default ProjectCard;
