import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 异步Thunk：获取项目数据
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // 返回模拟的项目数据
      return [
        {
          id: 1,
          title: 'AI概念艺术生成',
          description: '使用ComfyUI进行高质量概念艺术创作，包括科幻场景、建筑设计、角色原画等。运用工作流优化和模型融合技术生成专业级美术资源。',
          image: '/images/ComfyUI_temp_xtsak_00048_.png',
          tags: ['ComfyUI', 'Stable Diffusion', '概念艺术', '高分辨率'],
          link: 'https://portfolio.example.com/ai-art-1',
          featured: true,
          year: 2025,
          category: 'AI生图'
        },
        {
          id: 2,
          title: '小说转漫画脚本生成',
          description: '将网络文学或小说自动化转换为漫画分镜脚本。通过AI分析故事结构，自动生成分镜、人物动作描述、对话优化等完整漫化方案。',
          image: '/images/ComfyUI_temp_gjmkg_00003_.png',
          tags: ['文本处理', 'AI分析', '创意脚本', '漫改'],
          link: 'https://portfolio.example.com/novel-to-manga',
          featured: true,
          year: 2025,
          category: '内容创作'
        },
        {
          id: 3,
          title: '动漫风格视频生成',
          description: '使用AI视频生成工具和ComfyUI创建动漫风格短视频。包括场景转换、角色动画、特效合成等完整视频制作流程。',
          image: '/images/ComfyUI_temp_hgpnp_00007_.png',
          video: '/images/181108_00001.mp4',
          tags: ['视频生成', '动漫风格', 'AI动画', '后期合成'],
          link: 'https://portfolio.example.com/anime-video',
          featured: true,
          year: 2025,
          category: 'AI视频'
        },
        {
          id: 4,
          title: '人物原画角色设计库',
          description: '创建包含数百个AI生成的角色原画。涵盖多个美术风格（二次元、写实、概念艺术），每个角色附带详细的设定信息和多角度展示。',
          image: '/images/ComfyUI_temp_hgpnp_00007_.png',
          tags: ['角色设计', 'AI插画', '风格融合', '原画库'],
          link: 'https://portfolio.example.com/character-design',
          featured: true,
          year: 2025,
          category: 'AI生图'
        },
        {
          id: 5,
          title: '漫改电影预告片制作',
          description: '将小说或漫画改编为AI生成的电影预告片。结合AI视频生成、语音合成、音效设计，创作专业级的视觉叙事作品。',
          image: '/images/b8e48099020c79e06790df625dda5067373334756.jpg',
          tags: ['视频制作', '小说改编', '预告片', '多媒体'],
          link: 'https://portfolio.example.com/manga-movie-trailer',
          featured: true,
          year: 2025,
          category: 'AI视频'
        },
        {
          id: 6,
          title: 'ComfyUI工作流库',
          description: '整理并优化的20+个高效ComfyUI工作流。包括高清人像生成、建筑渲染、视频帧插值、风格转换等专业级预设，可直接使用。',
          image: '/images/ComfyUI_00119_.png',
          tags: ['ComfyUI', '工作流', '自动化', '技术分享'],
          link: 'https://github.com/yourname/comfyui-workflows',
          featured: false,
          year: 2025,
          category: '技术工具'
        }
      ];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 初始状态
const initialState = {
  items: [],
  loading: false,
  error: null,
  filter: 'all', // 'all' | 'featured' | 按标签筛选
  selectedProject: null
};

// 创建Slice
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // 设置筛选条件
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    // 选择项目
    selectProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    // 清空选择
    clearSelection: (state) => {
      state.selectedProject = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // 获取项目 - pending
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // 获取项目 - fulfilled
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      // 获取项目 - rejected
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || '加载项目失败';
        state.items = [];
      });
  }
});

// 导出Actions
export const { setFilter, selectProject, clearSelection } = projectsSlice.actions;

// 选择器 (Selectors)
export const selectProjects = (state) => state.projects.items;
export const selectProjectsLoading = (state) => state.projects.loading;
export const selectProjectsError = (state) => state.projects.error;
export const selectProjectFilter = (state) => state.projects.filter;
export const selectSelectedProject = (state) => state.projects.selectedProject;

// 派生选择器：根据筛选条件返回项目
export const selectFilteredProjects = (state) => {
  const { items, filter } = state.projects;
  
  if (filter === 'all') {
    return items;
  }
  
  if (filter === 'featured') {
    return items.filter(p => p.featured);
  }
  
  // 按标签筛选
  return items.filter(p => p.tags.includes(filter));
};

// 导出Reducer
export default projectsSlice.reducer;
