import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://96kx3jmth9.execute-api.ap-northeast-2.amazonaws.com',
});

export default apiClient; 