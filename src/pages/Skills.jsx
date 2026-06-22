import "./Skills.css";
import { useEffect } from "react";


const frontendSkills = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "Bootstrap 5",
  "React Native"
];

const backendSkills = [
  "Python",
  "Django",
  "PHP",
  "Laravel",
  "Node.js",
  "SQL"
];

const skills = [
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB"
  },
  {
    name: "C",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    color: "#A8B9CC"
  },
  {
    name: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#00758F"
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E"
  },
  {
    name: "HTML 5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26"
  },
  {
    name: "CSS 3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6"
  },
  {
    name: "Django",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    color: "#092E20"
  },
  {
    name: "Pandas",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#150458"
  },
  {
    name: "NumPy",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#013243"
  },
  {
    name: "Matplotlib",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    color: "#11557C"
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "#38B2AC"
  },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4"
  },
  {
    name: "Laravel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "#FF2D20"
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032"
  },
  {
    name: "Bootstrap 5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "#7952B3"
  },
  {
    name: "React.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933"
  },
  {
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED"
  },
  {
    name: "Azure",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    color: "#0078D4"
  },
  {
    name: "Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    color: "#9C27B0"
  },
  {
    name: "Artificial Intelligence",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    color: "#00E5FF"
  }
];

function Skills() {

  useEffect(() => {
    document.title = "Bittu's Skills";
  }, []);

  return (
    <div className="skills-page">
      {/* TOP SUMMARY CARDS */}
      <div className="skills-summary">
        <div className="summary-card frontend">
          <h3>Frontend Skills</h3>
          <p>{frontendSkills.join(", ")}</p>
        </div>

        <div className="summary-card backend">
          <h3>Backend Skills</h3>
          <p>{backendSkills.join(", ")}</p>
        </div>
      </div>

      {/* TECHNOLOGY GRID */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ "--glow": skill.color }}
          >
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
