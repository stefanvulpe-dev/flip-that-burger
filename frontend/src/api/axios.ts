import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
