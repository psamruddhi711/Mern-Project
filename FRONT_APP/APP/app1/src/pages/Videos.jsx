import React from "react";

const VideoPage = () => {
  // Sample Sunbeam-themed data
  const videos = [
    { id: 1, title: "Sunbeam - Advanced Java Programming", duration: "45:20", thumbnail: "https://img.youtube.com/vi/6uY9K1mXh9I/0.jpg" },
    { id: 2, title: "Operating Systems by Sunbeam", duration: "38:45", thumbnail: "https://img.youtube.com/vi/mXw9ruZaxzQ/0.jpg" },
    { id: 3, title: "C++ Data Structures & Algorithms", duration: "52:10", thumbnail: "https://img.youtube.com/vi/vLnPwxZdW4Y/0.jpg" },
    { id: 4, title: "Sunbeam Placement Preparation", duration: "30:00", thumbnail: "https://img.youtube.com/vi/mEP3K_f86r4/0.jpg" },
  ];

  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold border-bottom pb-2">
            Sunbeam <span className="text-warning">Education Portal</span>
          </h2>
          <p className="text-muted">Mastering technology with Sunbeam expert faculty.</p>
        </div>
      </div>

      <div className="row">
        {/* Main Video Player Area */}
        <div className="col-lg-8 mb-4">
          <div className="ratio ratio-16x9 shadow rounded overflow-hidden bg-black">
            {/* Sunbeam YouTube URL Integrated Here */}
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UU7-GfIOf_n6Bgh6F6_uXmew" 
              title="Sunbeam Lectures"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="fw-bold">Now Playing: Sunbeam Official Lectures</h3>
            <p className="text-muted fs-5">
              Access the high-quality technical training provided by Sunbeam Institute, 
              focusing on DAC, DMC, and advanced engineering concepts.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-warning px-4">Subscribe</button>
              <button className="btn btn-outline-dark px-4">View Syllabus</button>
            </div>
          </div>
        </div>

        {/* Sidebar / Recommended List */}
        <div className="col-lg-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <h5 className="mb-3 fw-bold border-bottom pb-2">More from Sunbeam</h5>
            <div className="d-flex flex-column gap-3">
              {videos.map((video) => (
                <div key={video.id} className="card h-100 border-0 shadow-sm overflow-hidden" style={{ cursor: 'pointer' }}>
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src={video.thumbnail} className="img-fluid rounded-start" alt={video.title} />
                    </div>
                    <div className="col-7">
                      <div className="card-body p-2">
                        <h6 className="card-title mb-1" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{video.title}</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>{video.duration}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;