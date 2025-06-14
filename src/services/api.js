import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://link-forge-backend-self.vercel.app/api/url'
});
export const getUrls = () => API.get('/all');

export const shortenUrl = (data) => API.post('/shorten', data);
export const getAnalytics = (code) => API.get(`/analytics/${code}`);
export const getByTag = (tag) => API.get(`/tag/${tag}`);


