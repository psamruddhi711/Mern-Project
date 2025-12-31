import axios from "./axiosConfig";

const userApi = {
  signin: (data) => axios.post("/users/signin", data),
  signup: (data) => axios.post("/users/signup", data),
};

export default userApi;
