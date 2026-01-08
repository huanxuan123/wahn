/**
 * 动画工具函数
 * 提供常用的动画效果和过渡处理
 */

/**
 * 滚动到指定元素
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

/**
 * 页面顶部动画滚动
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * 防抖函数
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 * 节流函数
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * 淡入动画
 */
export const fadeIn = (element, duration = 300) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

/**
 * 淡出动画
 */
export const fadeOut = (element, duration = 300) => {
  if (!element) return;
  
  element.style.opacity = '1';
  element.style.transition = `opacity ${duration}ms ease-out`;
  element.style.opacity = '0';
};

/**
 * 添加动画类
 */
export const addAnimationClass = (element, animationClass, duration = 400) => {
  if (!element) return Promise.resolve();

  return new Promise((resolve) => {
    element.classList.add(animationClass);
    
    setTimeout(() => {
      element.classList.remove(animationClass);
      resolve();
    }, duration);
  });
};

/**
 * 检测元素是否在视口内
 */
export const isElementInViewport = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * 当元素进入视口时执行回调
 */
export const onElementInViewport = (element, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, {
    threshold: 0.1
  });

  if (element) {
    observer.observe(element);
  }

  return observer;
};

/**
 * 获取滚动位置
 */
export const getScrollPosition = () => {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
};

/**
 * 检查是否在顶部
 */
export const isAtTop = (threshold = 50) => {
  return (window.pageYOffset || document.documentElement.scrollTop) < threshold;
};

/**
 * 缓动函数集合
 */
export const easing = {
  linear: (t) => t,
  easeIn: (t) => t * t,
  easeOut: (t) => t * (2 - t),
  easeInOut: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - (--t) * t * t * t,
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
  easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
};

/**
 * 动画计数器 - 用于数字动画
 */
export const animateCounter = (start, end, duration = 1000, callback) => {
  const startTime = Date.now();
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(start + (end - start) * progress);
    callback(current);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};
