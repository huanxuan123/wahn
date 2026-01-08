import ProjectCard from './ProjectCard';
import '../styles/components/ProjectShowcase.module.css';

/**
 * 项目展示网格组件
 * 负责展示多个项目卡片的网格布局
 * 
 * Props:
 *   projects: 项目数组
 *   onProjectClick: 项目卡片点击回调（可选）
 */
function ProjectShowcase({ projects = [], onProjectClick }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="showcase-empty">
        <p>暂无项目展示</p>
      </div>
    );
  }

  return (
    <div className="project-showcase">
      <div className="showcase-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick?.(project)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;
