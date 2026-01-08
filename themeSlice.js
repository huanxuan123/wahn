import { createSlice } from '@reduxjs/toolkit';

// 从localStorage读取初始主题
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('app-theme-mode');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    // 默认设置为夜间模式
    return 'dark';
  } catch (e) {
    return 'dark';
  }
};

const initialState = {
  mode: getInitialTheme(), // 'light' | 'dark'
  colors: {
    light: {
      primary: '#0066cc',
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#333333',
      textSecondary: '#666666',
      border: '#e0e0e0',
      accent: '#ff6b35'
    },
    dark: {
      primary: '#4d9fff',
      background: '#1a1a1a',
      surface: '#2d2d2d',
      text: '#f0f0f0',
      textSecondary: '#b0b0b0',
      border: '#404040',
      accent: '#ff8c5a'
    }
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // 切换主题
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('app-theme-mode', state.mode);
      } catch (e) {
        console.warn('无法保存主题设置到localStorage', e);
      }
    },
    // 设置主题
    setTheme: (state, action) => {
      if (action.payload === 'light' || action.payload === 'dark') {
        state.mode = action.payload;
        try {
          localStorage.setItem('app-theme-mode', state.mode);
        } catch (e) {
          console.warn('无法保存主题设置到localStorage', e);
        }
      }
    }
  }
});

// 导出Actions
export const { toggleTheme, setTheme } = themeSlice.actions;

// 选择器
export const selectThemeMode = (state) => state.theme.mode;
export const selectThemeColors = (state) => {
  const mode = state.theme.mode;
  return state.theme.colors[mode];
};
export const selectCurrentColors = (state) => {
  const mode = state.theme.mode;
  return state.theme.colors[mode];
};

// 导出Reducer
export default themeSlice.reducer;
