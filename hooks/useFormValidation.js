import { useState } from 'react';

/**
 * 表单验证Hook
 * 提供表单字段验证功能
 */
export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  /**
   * 验证单个字段
   */
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = '姓名不能为空';
        } else if (value.trim().length < 2) {
          newErrors.name = '姓名至少需要2个字符';
        } else {
          delete newErrors.name;
        }
        break;

      case 'email':
        if (!value.trim()) {
          newErrors.email = '邮箱不能为空';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = '请输入有效的邮箱地址';
        } else {
          delete newErrors.email;
        }
        break;

      case 'subject':
        if (!value.trim()) {
          newErrors.subject = '主题不能为空';
        } else if (value.trim().length < 5) {
          newErrors.subject = '主题至少需要5个字符';
        } else {
          delete newErrors.subject;
        }
        break;

      case 'message':
        if (!value.trim()) {
          newErrors.message = '消息不能为空';
        } else if (value.trim().length < 10) {
          newErrors.message = '消息至少需要10个字符';
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return !newErrors[name];
  };

  /**
   * 验证整个表单
   */
  const validateForm = (formData) => {
    const newErrors = {};

    // 验证姓名
    if (!formData.name?.trim()) {
      newErrors.name = '姓名不能为空';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = '姓名至少需要2个字符';
    }

    // 验证邮箱
    if (!formData.email?.trim()) {
      newErrors.email = '邮箱不能为空';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    // 验证主题
    if (!formData.subject?.trim()) {
      newErrors.subject = '主题不能为空';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = '主题至少需要5个字符';
    }

    // 验证消息
    if (!formData.message?.trim()) {
      newErrors.message = '消息不能为空';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '消息至少需要10个字符';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * 清除错误信息
   */
  const clearErrors = (fields) => {
    if (!fields || fields.length === 0) {
      setErrors({});
    } else {
      const newErrors = { ...errors };
      fields.forEach(field => {
        delete newErrors[field];
      });
      setErrors(newErrors);
    }
  };

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
    hasErrors: Object.keys(errors).length > 0
  };
};
