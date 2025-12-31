import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    
    <div className="container my-5">
      <Navbar />
      {/* Hero Section */}
      <div className="text-center mb-5 p-5 bg-dark text-white rounded shadow">
        <h1 className="fw-bold display-4">About <span className="text-warning">Sunbeam</span></h1>
        <p className="lead">Premier Training Institute for C-DAC & Advanced Computing</p>
      </div>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold text-dark">Our Legacy</h2>
          <p className="text-muted" style={{ textAlign: "justify" }}>
            Established in the late 90s, <strong>Sunbeam Institute of Information Technology</strong> 
            has evolved into a multi-technology competency center. We believe that retaining a 
            competitive edge is imperative in today’s professional world. 
          </p>
          <p className="text-muted" style={{ textAlign: "justify" }}>
            As an Authorized Training Centre of <strong>C-DAC ACTS</strong>, we specialize in 
            transforming students into industry-ready professionals through rigorous technical 
            training in PG-DAC, PG-DMC, and more.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card border-warning shadow-sm p-4">
            <h4 className="text-warning fw-bold">Why Sunbeam?</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent"> 25+ Years of Educational Excellence</li>
              <li className="list-group-item bg-transparent"> 50,000+ Students Trained & Placed</li>
              <li className="list-group-item bg-transparent"> State-of-the-Art Labs (Hinjawadi & Karad)</li>
              <li className="list-group-item bg-transparent"> Expert Faculty with Industry Experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Campus Details Section */}
      <div className="row mt-5">
        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h5 className="fw-bold text-warning">Pune (Hinjawadi)</h5>
            <p className="small">Located in Rajiv Gandhi IT Park, our 70,000 sq. ft. campus features world-class computing infrastructure and Wi-Fi-enabled labs.</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h5 className="fw-bold text-warning">Karad Campus</h5>
            <p className="small">A truly residential institute with on-campus hostels and mess, located conveniently near the Mumbai-Bangalore highway.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;