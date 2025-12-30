import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
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
        </div>
      </section>
    </>
  );
}

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
      </div>
    </div>
  );
}

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
