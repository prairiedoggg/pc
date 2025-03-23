import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://96kx3jmth9.execute-api.ap-northeast-2.amazonaws.com',
  headers: {
    'Accept': 'application/json'
  },
  withCredentials: false // CORS 정책에 따라 credentials 사용 여부 설정
});

export default apiClient;