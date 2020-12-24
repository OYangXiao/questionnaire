import axios from 'axios';

export const login = (name) => axios.post('/api/userItems', { name });
export const checkDone = () => axios.get('/api/checkDone');
export const submit = (data) => axios.post('/api/submit', data);
export const getFormConfigs = () => axios.get('/api/getFormConfigs');
