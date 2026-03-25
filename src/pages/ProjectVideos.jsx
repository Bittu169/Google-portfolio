import React from "react";
import "./projectVideos.css";
import { Link } from "react-router-dom";

const videos = [
  {
    title: "AI Powered Job scrapper",
    source: "LinkedIn · Bittu Mondal",
    date: "14-Nov-2025",
    thumbnail:
      "https://www.ilovephd.com/wp-content/uploads/2025/07/An-AI-machine-writing-code-for-AI-project.jpg",
    link: "https://www.linkedin.com/posts/bittu-mondal-a06258313_python-webscraping-machinelearning-activity-7423617174268973056-Z3qm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-X2KYBlH4SfSH3rfO29nh2FqVL-Mndo0c"
  },
  {
    title: "Restaurant Management System",
    source: "LinkedIn · Bittu Mondal",
    date: "02-Feb-2025",
    thumbnail:
      "https://ahoitech.in/wp-content/uploads/2024/12/Restaurant-Management-System.png",
    link: "https://github.com/Bittu169/resturant"
  },
  {
    title: "Video Streaming Web Application",
    source: "LinkedIn · Bittu mondal",
    date: "26-Mar-2022",
    thumbnail:
      "https://s3b.cashify.in/gpro/uploads/2020/03/04103226/Top-5-Video-Streaming-Apps-for-Android-and-iOS.png",
    link: "https://github.com/Bittu169/Video_streaming"
  }
];

const ProjectVideo = () => {
  return (
    <div className="project-video-container">

      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="m388-308.67 266.67-172.66L388-654v345.33ZM146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67Zm0-66.67h666.66v-506.66H146.67v506.66Zm0 0v-506.66 506.66Z" /></svg> Project videos
        <span className="more-icon">⋮</span>
      </h3>
      <hr className="divider" />
      {videos.map((video, index) => (
        <a
          key={index}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="video-row"
        >
          <img src={video.thumbnail} alt="thumb" />
          <div className="video-info">
            <span className="video-title">{video.title}</span>
            <span className="video-source">{video.source}</span>
            <span className="video-date">{video.date}</span>
          </div>
        </a>
      ))}

      <Link to="/projects" className="view-all-btn">View all →</Link>

      <h3 className="related-title">
        Related Search <span className="more-icon">⋮</span>
      </h3>

      <div className="related-search">
        <Link to="/projects">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f">
        <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/>
        </svg>
        Bittu's Skills</Link>
        <Link to="/skills">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f">
        <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/>
        </svg>
        Bittu's Projects</Link>
        <Link to="/contact">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f">
        <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/>
        </svg>
        Contact Bittu</Link>
        <Link to="/map">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f">
        <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/>
        </svg>
        Bittu's Location</Link>
      </div>
    </div>
  );
};

export default ProjectVideo;
