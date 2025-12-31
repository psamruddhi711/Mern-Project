import axios from "axios";

const courseApi = axios.create({
  baseURL: "http://localhost:4000/courses"
});


courseApi.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default courseApi;
