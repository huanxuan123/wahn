import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { 
  selectProjects, 
  selectProjectsLoading, 
  selectProjectFilter,
  selectFilteredProjects,
  setFilter,
  selectProject
} from './projectsSlice';
import ProjectCard from './components/ProjectCard';
import './styles/pages/Projects.module.css';

/**
 * 项目展示页面
 * 展示所有项目，支持筛选和搜索
 */
function Projects() {
  const dispatch = useDispatch();
  const allProjects = useSelector(selectProjects);
  const filteredProjects = useSelector(selectFilteredProjects);
  const loading = useSelector(selectProjectsLoading);
  const currentFilter = useSelector(selectProjectFilter);
  const [searchTerm, setSearchTerm] = useState('');

  // 页面挂载时，重置filter为'all'以显示全部项目
  useEffect(() => {
    dispatch(setFilter('all'));
  }, [dispatch]);

  // 获取所有可用的标签
  const getAllTags = () => {
    const tagSet = new Set();
    allProjects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  // 根据搜索词和筛选条件过滤项目
  const finalProjects = filteredProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleProjectClick = (project) => {
    dispatch(selectProject(project));
  };

  const availableTags = getAllTags();

  return (
    <div className="projects-page">
      {/* 页面头部 */}
      <header className="page-header">
        <h1>我的项目</h1>
        <p>精心设计和开发的Web应用，展示现代前端技术栈的最佳实践</p>
      </header>

      {/* 搜索和筛选 */}
      <section className="filters-section">
        {/* 搜索框 */}
        <div className="search-box">
          <input
            type="text"
            placeholder="搜索项目名称、描述或技术栈..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* 筛选下拉菜单 */}
        <div className="filter-select-container">
          <label htmlFor="filter-select" className="filter-label">分类筛选:</label>
          <select
            id="filter-select"
            className="filter-select"
            value={currentFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">全部项目</option>
            <option value="featured">⭐ 精选项目</option>
            {availableTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </section>

      {/* 项目列表 */}
      <section className="projects-grid">
        {loading ? (
          <div className="loading-state">
            <p>加载项目中...</p>
          </div>
        ) : finalProjects.length === 0 ? (
          <div className="empty-state">
            <p>没有找到匹配的项目</p>
            <button onClick={() => {
              setSearchTerm('');
              handleFilterChange('all');
            }}>
              清除筛选条件
            </button>
          </div>
        ) : (
          <div className="projects-list">
            {finalProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 结果统计 */}
      {!loading && finalProjects.length > 0 && (
        <div className="results-info">
          <p>共找到 <strong>{finalProjects.length}</strong> 个项目</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
