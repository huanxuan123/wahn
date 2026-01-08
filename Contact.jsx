import { useState } from 'react';
import ContactForm from './components/ContactForm.jsx';
import './styles/pages/Contact.module.css';

/**
 * 联系我页面
 * 展示联系表单和联系信息
 */
function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: '📧',
      label: '邮箱',
      value: '3210559923@qq.com',
      action: () => window.location.href = 'mailto:3210559923@qq.com'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/huanxuan123',
      action: () => window.open('https://github.com/huanxuan123', '_blank')
    },
    // {
    //   icon: '💼',
    //   label: 'LinkedIn',
    //   value: 'linkedin.com/in/yourprofile',
    //   action: () => window.open('https://linkedin.com/in/yourprofile', '_blank')
    // },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@wearrr116649',
      action: () => window.open('https://twitter.com/wearrr116649', '_blank')
    }
  ];

  const handleSubmit = (data) => {
    // 模拟表单提交
    console.log('表单数据:', data);
    setSubmitStatus('success');
    
    // 3秒后重置状态
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* 页面头部 */}
      <header className="page-header">
        <h1>联系我</h1>
        <p>有任何问题或建议？我很乐意听到你的消息</p>
      </header>

      <div className="contact-container">
        {/* 左侧：联系信息 */}
        <section className="contact-info-section">
          <h2>联系方式</h2>
          <div className="contact-methods">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-method">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.label}</h3>
                  <p>{info.value}</p>
                  <button
                    className="contact-action-btn"
                    onClick={info.action}
                  >
                    联系 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 响应时间 */}
          <div className="response-info">
            <h3>📬 回复时间</h3>
            <p>我通常会在24小时内回复邮件。</p>
            <p>对于紧急事项，可以通过GitHub联系我。</p>
          </div>
        </section>

        {/* 右侧：联系表单 */}
        <section className="contact-form-section">
          <h2>发送消息</h2>
          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ 消息已发送！感谢您的联系，我会尽快回复。
            </div>
          )}
          <ContactForm onSubmit={handleSubmit} />
        </section>
      </div>

      {/* 额外信息 */}
      <section className="contact-extra">
        <h2>我能帮你什么？</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🛠️ 项目开发</h3>
            <p>从零开始开发新的Web应用，或优化现有项目。</p>
          </div>
          <div className="service-card">
            <h3>📊 技术咨询</h3>
            <p>提供前端架构、技术选型和最佳实践的建议。</p>
          </div>
          <div className="service-card">
            <h3>🚀 性能优化</h3>
            <p>分析和优化应用性能，提升用户体验。</p>
          </div>
          <div className="service-card">
            <h3>🎓 技术培训</h3>
            <p>分享React、现代前端开发的知识和经验。</p>
          </div>
        </div>
      </section>

      {/* 办公时间 */}
      <section className="office-hours">
        <h2>工作时间</h2>
        <div className="hours-info">
          <p>🕐 <strong>工作日</strong>: 09:00 - 18:00 (UTC+8)</p>
          <p>📅 <strong>周末</strong>: 可能会延迟回复</p>
          <p>🏖️ <strong>假期</strong>: 详见GitHub个人资料</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
