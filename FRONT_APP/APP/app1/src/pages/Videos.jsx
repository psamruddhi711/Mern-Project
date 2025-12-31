import React, { useState } from "react";
import videoApi from "../api/videoApi";

const VideoManager = () => {
  const [videos, setVideos] = useState([]);
  const [courseId, setCourseId] = useState("");

  const [form, setForm] = useState({
    video_id: "",
    title: "",
    description: "",
    youtube_url: ""
  });

  // 🔹 FETCH VIDEOS
  const fetchVideos = async () => {
    try {
      const res = await videoApi.get(
        `/all-videos?course_id=${courseId}`
      );
      setVideos(res.data.data || []);
    } catch {
      alert("Failed to fetch videos");
    }
  };

  // 🔹 ADD VIDEO
  const addVideo = async () => {
    try {
      await videoApi.post("/add", {
        ...form,
        course_id: courseId
      });
      alert("Video added");
      fetchVideos();
    } catch {
      alert("Unauthorized or error adding video");
    }
  };

  // 🔹 UPDATE VIDEO
  const updateVideo = async () => {
    try {
      await videoApi.put("/update", form);
      alert("Video updated");
      fetchVideos();
    } catch {
      alert("Error updating video");
    }
  };

  // 🔹 DELETE VIDEO
  const deleteVideo = async (video_id) => {
    try {
      await videoApi.delete("/delete", {
        data: { video_id }
      });
      alert("Video deleted");
      fetchVideos();
    } catch {
      alert("Error deleting video");
    }
  };

  return (
    <div className="container my-4">
      <h2>🎥 Video Manager</h2>

      {/* Course ID */}
      <input
        className="form-control mb-2"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={fetchVideos}>
        Get Videos
      </button>

      <hr />

      {/* Form */}
      <h4>Add / Update Video</h4>

      <input
        className="form-control mb-2"
        placeholder="Video ID"
        value={form.video_id}
        onChange={(e) =>
          setForm({ ...form, video_id: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="YouTube URL"
        value={form.youtube_url}
        onChange={(e) =>
          setForm({ ...form, youtube_url: e.target.value })
        }
      />

      <button className="btn btn-success me-2" onClick={addVideo}>
        Add Video
      </button>

      <button className="btn btn-warning" onClick={updateVideo}>
        Update Video
      </button>

      <hr />

      {/* Video List */}
      <h4>Videos</h4>
      {videos.map((v) => (
        <div key={v.video_id} className="card p-3 mb-2">
          <h5>{v.title}</h5>
          <p>{v.description}</p>
          <a href={v.youtube_url} target="_blank" rel="noreferrer">
            Watch
          </a>
          <br />
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => deleteVideo(v.video_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoManager;
