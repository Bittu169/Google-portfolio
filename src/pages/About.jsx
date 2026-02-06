import "./About.css";
import profileImg from "../assets/myimg.png";
import { Link } from "react-router-dom";
import ProjectVideo from "./ProjectVideos";
import { useEffect } from "react";




function About() {

  useEffect(() => {
    document.title = "Bittu's Portfolio";
  }, []);

  return (
    <div className="about-page">
      {/* LEFT CONTENT */}
      <div className="about-left">
        <h1 className="about-name">Bittu Mondal</h1>
        <h2 className="about-title">MCA Student | Full Stack Developer</h2>

        <p className="about-summary">
          Aspiring full stack developer with strong foundations in Python,
          JavaScript, and database-driven applications. Experienced in building
          scalable web projects, solving algorithmic problems, and working with
          modern backend frameworks. Passionate about learning and creating
          real-world software solutions.
        </p>

        {/* EXPERIENCE */}
        <section className="about-section">
          <h3>Hands-on Project Experience</h3>

          <div className="experience">
            <div className="experience-header">
              <strong>Full Stack Developer (Academic Projects)</strong>
              <span>2023 – Present</span>
            </div>
            <div className="experience-company">
              Self-driven · College Projects
            </div>

            <p>
              <strong>Video Streaming Platform:</strong> Developed a scalable
              movie streaming platform with secure authentication, role-based
              access (admin/user), and subscription-based premium content.
              <br />
              <strong>Tech:</strong> Laravel, MySQL, JavaScript, HTML, CSS
            </p>

            <p>
              <strong>Hospital Patient Management System:</strong> Built backend
              services to manage patient records, appointments, and prescriptions.
              Implemented REST APIs and automated PDF generation for prescriptions.
              <br />
              <strong>Tech:</strong> PHP, MySQL, JavaScript
            </p>

            <p>
              <strong>Video Recommendation System:</strong> Created a machine
              learning–based recommendation engine using the KNN algorithm and
              designed an interactive UI for real-time recommendations.
              <br />
              <strong>Tech:</strong> Python, Streamlit, Scikit-learn, Pandas,
              NumPy
            </p>
          </div>

          <div className="experience">
            <div className="experience-header">
              <strong>Problem Solving & Competitive Programming</strong>
              <span>Ongoing</span>
            </div>
            <div className="experience-company">
              LeetCode · HackerRank
            </div>

            <p>
              Solved <strong>170+ problems on LeetCode</strong> and{" "}
              <strong>50+ problems on HackerRank</strong>, strengthening skills
              in data structures, algorithms, and optimized problem-solving
              techniques.
            </p>
          </div>
        </section>

        {/* PEOPLE ALSO ASK */}
        <section className="about-section">
          <h3>People also ask <span className="more-icon">⋮</span>
            {/* <svg
              className="rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
 */}


          </h3>

          <details>
            <summary>What skills does Bittu have?</summary>
            <p>
              Python, JavaScript, Django, Laravel, SQL, Oracle SQL, HTML, CSS,
              Bootstrap 5, REST APIs, Git, GitHub, Data Structures, and Algorithms.
              <Link to="/skills" className="view-skills-link">
                View all skills...
              </Link>

            </p>
          </details>

          <details>
            <summary>What services does Bittu provide?</summary>
            <p>
              Full stack web development, backend API development, database
              design, frontend interfaces, and performance optimization.
            </p>
          </details>

          <details>
            <summary>Is Bittu a frontend or backend developer?</summary>
            <p>
              Bittu is a full stack developer with hands-on experience in both
              frontend interfaces and backend systems.
            </p>
          </details>
          <details>
            <summary>How much experience does Bittu  have?</summary>
            <p>
              Bittu is a fresher who has completed 6 months of professional training in Python Full Stack Development.
            </p>
          </details>
        </section>
       
        <ProjectVideo/> 
        
        
      </div>


      {/* RIGHT CARD */}
      <div className="about-right">
        <div className="profile-card">
          <img src={profileImg} alt="Bittu Mondal" />

          <p className="profile-desc">
            MCA student and aspiring software engineer with a strong interest in
            full stack development, problem solving, and building scalable web
            applications using modern technologies.
          </p>
          <hr className="divider" />

          <div className="profile-links">
            <a href="mailto:Mondalbittu169@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
              </svg>
              Mondalbittu169@gmail.com
            </a>
            <a id="ph" href="tel:+916291518238">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M266.67-40q-27.5 0-47.09-19.58Q200-79.17 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920H692q27.5 0 47.08 19.58 19.59 19.59 19.59 47.09V-712q18 4.33 29.66 18.64Q800-679.06 800-660.95v76.28q0 19-11.67 33.34-11.66 14.33-29.66 18.66v426q0 27.5-19.59 47.09Q719.5-40 692-40H266.67Zm0-66.67H692v-746.66H266.67v746.66Zm212.66-66.66q13.67 0 23.5-9.84 9.84-9.83 9.84-23.5 0-13.66-9.84-23.5Q493-240 479.33-240q-13.66 0-23.5 9.83-9.83 9.84-9.83 23.5 0 13.67 9.83 23.5 9.84 9.84 23.5 9.84Z" />
              </svg>
              +91 6******238
            </a>
            <a href="https://linkedin.com/in/bittu-mondal-a06258313" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077b5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>

              LinkedIn Profile
            </a>
            <a href="https://github.com/Bittu169" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>

              GitHub Profile
            </a>
            <a href="https://bittu169.github.io/Portfolio/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
              Portfolio
            </a>
            <a href="https://leetcode.com/u/bittu12345/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M331.4 73.3C342.5 61.5 361.1 60.8 373 71.9C384.9 83 385.5 101.7 374.4 113.5L331.4 159.5C352.9 162.8 373.5 171.3 390.5 185.1L465.1 245.4C477.7 255.6 479.7 274.2 469.5 286.8C459.3 299.4 440.8 301.4 428.1 291.2L353.5 230.9C327.3 209.8 281.6 212.7 259 236.8L177 325C155.5 348 157.9 385 182.6 409.2L273.8 498.6C298.7 522.6 339.4 522.6 363.9 498.2L415 447.2C426.5 435.7 445.1 435.7 456.6 447.3C468.1 458.9 468 477.5 456.5 489L405.4 540C358.3 587.1 281.4 587.7 233.5 541.6L141.5 451.4C94.6 405.3 90 331.9 134 284.7L331.4 73.3zM507.7 337.2C523.9 337.2 537.1 350.4 537.1 366.7C537.1 383 523.9 396.2 507.7 396.2L290.8 396.2C274.6 396.2 261.4 383 261.4 366.7C261.4 350.4 274.6 337.2 290.8 337.2L507.7 337.2z" />
              </svg>
              LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
