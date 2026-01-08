import { Link } from 'react-router-dom';
import './styles/pages/About.module.css';

/**
 * 关于我页面
 * 展示个人经历、技能、工作经验等信息
 */
function About() {
  const experience = [
    {
      period: '2024 - 现在',
      position: 'AI创意工作者',
      company: '自由创作',
      description: '专业从事ComfyUI生图、AI视频创作、小说改编等创意内容制作。积累了大量高质量作品库。'
    },
    {
      period: '2023 - 2024',
      position: '内容创作博主',
      company: '多平台运营',
      description: '在社交媒体分享AI创意作品和技术教程。粉丝群体主要为创意工作者和AI爱好者。'
    },
    {
      period: '2022 - 2023',
      position: '大学学生 · 创意探索',
      company: '学生创意团队',
      description: '开始接触AI技术，学习ComfyUI和创意创作。参与多个创意项目和竞赛。'
    }
  ];

  const education = [
    {
      year: '在读',
      degree: '大学本科',
      school: '某高校',
      description: '在校大学生，致力于探索AI在创意领域的应用。积极参加创新创业竞赛。'
    }
  ];

  const expertise = [
    {
      category: 'AI图像生成',
      skills: ['ComfyUI', 'Stable Diffusion', 'Prompt工程', '模型微调']
    },
    {
      category: 'AI视频创作',
      skills: ['视频生成工具', '帧插值', '风格转换', '后期合成']
    },
    {
      category: '创意内容',
      skills: ['概念艺术', '角色设计', '场景构图', '小说改编']
    },
    {
      category: '工作流开发',
      skills: ['流程优化', '自动化脚本', '预设配置', '效率工具']
    },
    {
      category: '美术基础',
      skills: ['构图与光影', '色彩理论', '视觉设计', '审美引导']
    },
    {
      category: '创意思维',
      skills: ['故事改编', '视觉表达', '创意策划', '概念开发']
    }
  ];

  const values = [
    {
      title: '创意至上',
      description: '将创意想象与技术工具完美结合，创作独特的视觉内容。'
    },
    {
      title: '质量第一',
      description: '追求专业级的作品质量，每一作品都精心打磨。'
    },
    {
      title: '技术赋能',
      description: '深入掌握AI工具，用技术放大创意的表现力。'
    },
    {
      title: '持续创新',
      description: '有效沟通，积极协作，共同推进项目目标。'
    }
  ];

  return (
    <div className="about-page">
      {/* 页面头部 */}
      <header className="page-header">
        <h1>关于我</h1>
        <p>一个热爱前端开发的工程师，致力于构建优秀的用户体验</p>
      </header>

      {/* 个人简介 */}
      <section className="about-intro">
        <div className="intro-content">
          <h2>你好👋</h2>
          <p>
            我是一名专注于React生态的前端工程师。我热爱编程，对Web技术充满热情。
            在过去的几年中，我参与了多个大型项目，积累了丰富的开发经验。
          </p>
          <p>
            我相信良好的代码结构和用户体验同样重要。我致力于编写易于维护、高效能的代码，
            同时确保产品为用户提供卓越的交互体验。
          </p>
          <p>
            在工作之外，我喜欢探索新技术、阅读技术文章，并定期分享我的学习心得。
          </p>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="values">
        <h2>我的价值观</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 专业技能 */}
      <section className="expertise">
        <h2>专业技能</h2>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <div key={index} className="expertise-card">
              <h3>{item.category}</h3>
              <ul className="skill-list">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span className="skill-dot">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 工作经历 */}
      <section className="experience">
        <h2>工作经历</h2>
        <div className="timeline">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3>{item.position}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 教育背景 */}
      <section className="education">
        <h2>教育背景</h2>
        <div className="education-list">
          {education.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-year">{item.year}</div>
              <div className="education-content">
                <h3>{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <p className="education-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 兴趣爱好 */}
      <section className="interests">
        <h2>兴趣爱好</h2>
        <p>
          除了编程，我还喜欢阅读技术博客、关注前端发展趋势、参与开源社区。
          闲暇时间，我喜欢运动、摄影和旅游。
        </p>
      </section>

      {/* call-to-action */}
      <section className="about-cta">
        <h2>让我们合作</h2>
        <p>如果你对我的工作感兴趣，或者有任何问题，欢迎随时联系我。</p>
        <Link to="/contact" className="btn btn-primary btn-large">
          发起联系
        </Link>
      </section>
    </div>
  );
}

export default About;
