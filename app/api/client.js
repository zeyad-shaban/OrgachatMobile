import { create } from 'apisauce';

import authStorage from '../auth/storage';
import settings from '../config/settings';

const apiClient = create({
    baseURL: settings.apiUrl,
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