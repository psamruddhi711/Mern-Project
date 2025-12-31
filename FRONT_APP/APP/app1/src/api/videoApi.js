import axios from "axios";

const videoApi = axios.create({
  baseURL: "http://localhost:4000/video"
});

videoApi.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default videoApi;
