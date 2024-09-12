import axios from "axios";
const instance = axios.create({
  baseURL: 'https://todo-server-ikof.onrender.com/api/', // For production
  // baseURL: 'http://localhost:2006/api/', // For development
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
