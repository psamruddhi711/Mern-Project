import axios from "axios";

const courseApi = axios.create({
  baseURL: "http://localhost:4000/courses",
});

// OPTIONAL: Attach token automatically
courseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default courseApi;
