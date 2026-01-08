import { useSelector } from 'react-redux';
import { selectThemeMode, selectThemeColors } from '../themeSlice';

/**
 * 主题Hook
 * 提供主题相关的状态和工具函数
 */
export const useTheme = () => {
  const mode = useSelector(selectThemeMode);
  const colors = useSelector(selectThemeColors);

  return {
    mode,
    colors,
    isDark: mode === 'dark',
    isLight: mode === 'light'
  };
};
