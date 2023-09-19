import axios from 'axios';
import proxy from '../configs/host';

const env = import.meta.env.MODE || 'development';
const EVENY_API_HOST = proxy[env].EVENT_API;

const TIMEOUT = env === 'development' ? 1800000 : 5000;

export const instance = axios.create({
  baseURL: EVENY_API_HOST,
  timeout: TIMEOUT,
  withCredentials: false,
});


instance.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
    return Promise.reject(response?.data);
  },
  (e) => Promise.reject(e),
);

export default instance;
