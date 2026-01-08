import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import themeReducer from './themeSlice';

/**
 * Redux Store配置
 * 
 * 整合了所有的reducers，并应用中间件
 * 使用Redux DevTools进行调试
 */
export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 忽略特定action中的非序列化值检查
        ignoredActions: ['projects/selectProject'],
        ignoredPaths: ['projects.selectedProject'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
