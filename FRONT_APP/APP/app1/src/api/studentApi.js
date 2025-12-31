import axios from "./axiosConfig";

const studentApi = {
  registerToCourse: (data) =>
    axios.post("/students/register-to-course", data),

  myCourses: (reg_no) =>
    axios.get(`/students/my-courses?reg_no=${reg_no}`),

  myCourseWithVideos: (reg_no) =>
    axios.get(`/students/my-course-with-videos?reg_no=${reg_no}`),

  changePassword: (data, email) =>
    axios.put("/students/change-password", data, {
      headers: { email },
    }),
};

export default studentApi;
