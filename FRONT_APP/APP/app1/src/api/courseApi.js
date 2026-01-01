import axios from "./axiosConfig";

const courseApi = {
  getAllCourses: () => axios.get("/course/all-courses"),
  addCourse: (data) => axios.post("/course/add", data),
  updateCourse: (id, data) => axios.put(`/course/update/${id}`, data),
  deleteCourse: (id) => axios.delete(`/course/delete/${id}`),
};

export default courseApi;
