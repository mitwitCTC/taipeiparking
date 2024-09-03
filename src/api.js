import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // 在 vite.config.js 中配置的代理路徑
});

export default apiClient;
