import axios from "./axiosConfig";

const videoApi = {
  getVideosByCourse: (course_id) =>
    axios.get("/video/all-videos", {
      data: { course_id },
    }),

  addVideo: (data) =>
    axios.post("/video/add", data),

  updateVideo: (data) =>
    axios.put("/video/update", data),

  deleteVideo: (video_id) =>
    axios.delete("/video/delete", {
      data: { video_id },
    }),
};

export default videoApi;
