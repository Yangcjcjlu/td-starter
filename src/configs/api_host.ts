
import proxy from './host';

export const getApiHost = () => {
    const env = import.meta.env.MODE || 'development';
    const API_HOST = proxy[env].API;
    return API_HOST;
}