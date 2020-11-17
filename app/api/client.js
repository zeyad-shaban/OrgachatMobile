import { create } from 'apisauce';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: 'http://10.0.3.2:8000',
});

apiClient.addAsyncRequestTransform(async request => {
    const token = await authStorage.getToken();
    if (!token) return;
    request.headers['Authorization'] = `Bearer ${token}`;
})

// const get = apiClient.get;
// apiClient.get = async (url, params, axiosConfig) => {
//     return await get(url, params, axiosConfig);
// };

export default apiClient;