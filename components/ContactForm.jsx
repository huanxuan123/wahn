import { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import '../styles/components/ContactForm.module.css';

/**
 * 联系表单组件
 * 
 * Props:
 *   onSubmit: 表单提交回调，接收表单数据
 *   initialValues: 初始值（可选）
 */
function ContactForm({ onSubmit, initialValues = {} }) {
  const initialFormData = {
    name: initialValues.name || '',
    email: initialValues.email || '',
    subject: initialValues.subject || '',
    message: initialValues.message || ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, validateForm, clearErrors } = useFormValidation();

  // 处理输入变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除该字段的错误信息
    if (errors[name]) {
      clearErrors([name]);
    }
  };

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 验证表单
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 调用父组件的onSubmit回调
      onSubmit?.(formData);

      // 重置表单
      setFormData(initialFormData);
      clearErrors();
    } catch (error) {
      console.error('提交失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* 姓名字段 */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          姓名 <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'error' : ''}`}
          placeholder="请输入你的姓名"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="error-message">{errors.name}</p>
        )}
      </div>

      {/* 邮箱字段 */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          邮箱 <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'error' : ''}`}
          placeholder="请输入你的邮箱地址"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="error-message">{errors.email}</p>
        )}
      </div>

      {/* 主题字段 */}
      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          主题 <span className="required">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`form-input ${errors.subject ? 'error' : ''}`}
          placeholder="请输入信息主题"
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="error-message">{errors.subject}</p>
        )}
      </div>

      {/* 消息字段 */}
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          消息 <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          placeholder="请输入你的消息..."
          rows="6"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="error-message">{errors.message}</p>
        )}
      </div>

      {/* 隐私说明 */}
      <p className="privacy-notice">
        ℹ️ 我们会保护你的隐私。你的信息仅用于回复你的消息。
      </p>

      {/* 提交按钮 */}
      <button
        type="submit"
        className="btn btn-primary btn-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? '发送中...' : '发送消息'}
      </button>
    </form>
  );
}

export default ContactForm;
