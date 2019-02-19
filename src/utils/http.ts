import axios from 'axios';
import { CONSTANTS } from './constants';
import store from '@/store';

/**
 *  Common https services
 */
export const HTTP = axios.create({
  baseURL: CONSTANTS.API.HOST,
});

HTTP.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('AUTH');
        if (token) {
            config.headers = {
                'Authorization': 'bearer ' + token,
                'Content-Type': 'application/json;charset=utf-8',
            };
        }
        return config;
    },
    (error) => Promise.reject(error),
);

HTTP.interceptors.response.use(
    (response) => {
      // const token = response.headers.authorization;
        const token = response.data.token;
        console.log(response);
        if (token) {
          localStorage.setItem('AUTH', token);
          console.log('1. dispatching setToken ');
          store.dispatch('setToken', token);
      }
        return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        // unauthorized
        store.dispatch('logout');
      }
      return Promise.reject(error);
    },
);
