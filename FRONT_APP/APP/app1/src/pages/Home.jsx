import React from "react";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
import "../styles/home.css";
=======
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
<<<<<<< HEAD
      <section className="hero">
        <div className="hero-overlay">
          <h5>Learn From Home</h5>
          <h1>Education Courses</h1>

          <div className="search-box">
            <select>
              <option>Courses</option>
              <option>MERN Stack</option>
              <option>Java Full Stack</option>
              <option>Python</option>
            </select>
            <input type="text" placeholder="Keyword" />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
              alt="about"
            />
          </div>

          <div className="col-md-6">
            <h6 className="text-danger">ABOUT US</h6>
            <h2>First Choice For Online Education Anywhere</h2>
            <p>
              LearnSphere provides industry-ready courses with expert mentors,
              hands-on training, and placement support.
            </p>

            <div className="stats">
              <div className="stat green">123<br />Subjects</div>
              <div className="stat blue">1234<br />Courses</div>
              <div className="stat red">123<br />Instructors</div>
              <div className="stat yellow">1234<br />Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6 className="text-danger">WHY CHOOSE US?</h6>
              <h2>Why You Should Start Learning with Us?</h2>
              <p>
                LearnSphere focuses on real-world skills, certifications, and
                career growth.
              </p>
              <ul>
                <li>✔ Skilled Instructors</li>
                <li>✔ International Certification</li>
                <li>✔ Online Classes</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="why"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer">
        <h2>30% Off For New Students</h2>

        <div className="offer-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <select>
            <option>Select a course</option>
            <option>MERN Stack</option>
            <option>Java Full Stack</option>
            <option>Python</option>
          </select>
          <button>Sign Up Now</button>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses">
        <h6 className="text-danger">OUR COURSES</h6>
        <h2>Checkout New Releases Of Our Courses</h2>

        <div className="course-grid">
          <CourseCard title="Web Design & Development" />
          <CourseCard title="MERN Stack Development" />
          <CourseCard title="Java Full Stack" />
          <CourseCard title="Python & Data Science" />
=======
      <div style={styles.hero}>
        <h1>Build Your Career with Industry-Ready Courses</h1>
        <p>Learn from experts | Hands-on training | Placement support</p>
      </div>

      {/* AVAILABLE COURSES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📚 Available Courses</h2>

        <div style={styles.cardGrid}>
          <CourseCard
            title="MERN Stack Development"
            desc="Full stack web development using MongoDB, Express, React & Node."
            img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />

          <CourseCard
            title="Java Full Stack"
            desc="Core Java, Spring Boot, Hibernate, REST APIs & React."
            img="https://images.unsplash.com/photo-1517430816045-df4b7de1cd0a"
          />

          <CourseCard
            title="Python & Data Science"
            desc="Python, NumPy, Pandas, Machine Learning & Data Analysis."
            img="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          />
        </div>
      </section>

      {/* UPCOMING COURSES */}
      <section style={{ ...styles.section, background: "#f4f6fb" }}>
        <h2 style={styles.sectionTitle}>⏳ Upcoming Courses</h2>

        <div style={styles.cardGrid}>
          <CourseCard
            title="AI & Machine Learning"
            desc="Learn AI concepts, ML algorithms & real-world projects."
            img="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            upcoming
          />

          <CourseCard
            title="DevOps with AWS"
            desc="CI/CD, Docker, Kubernetes, AWS Cloud services."
            img="https://images.unsplash.com/photo-1518770660439-4636190af475"
            upcoming
          />
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15
        </div>
      </section>
    </>
  );
}

<<<<<<< HEAD
function CourseCard({ title }) {
  return (
    <div className="course-card">
      <div className="course-overlay">
        <h4>{title}</h4>
        <p>Courses for beginners</p>
        <span>⭐ 4.5 (250)</span>
=======
/* COURSE CARD COMPONENT */
function CourseCard({ title, desc, img, upcoming }) {
  return (
    <div style={styles.card}>
      <img src={img} alt={title} style={styles.cardImg} />

      <div style={styles.cardBody}>
        <h3>{title}</h3>
        <p>{desc}</p>

        {upcoming ? (
          <span style={styles.upcomingBadge}>Coming Soon</span>
        ) : (
          <button style={styles.registerBtn}>Register</button>
        )}
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

/* STYLES */
const styles = {
  hero: {
    padding: "80px 20px",
    textAlign: "center",
    color: "#fff",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  section: {
    padding: "50px 40px",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "30px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    transition: "transform 0.3s",
  },
  cardImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "20px",
  },
  registerBtn: {
    marginTop: "15px",
    padding: "10px 22px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  upcomingBadge: {
    display: "inline-block",
    marginTop: "15px",
    padding: "6px 15px",
    background: "#ff9800",
    color: "#fff",
    borderRadius: "20px",
    fontSize: "0.9rem",
  },
};
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15
