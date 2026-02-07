import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import notFoundImg from "../assets/image1.jpg";
import "./NotFound.css";

function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = "Not Found";
    
    // Check initial theme
    setIsDark(document.body.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const message =
    location.state?.message ||
    'No search found. Please search as "Bittu Mondal".';

  const handleClick = () => {
    navigate("/", {
      state: { autofill: "Bittu Mondal" }
    });
  };

  return (
    <div className={`notfound-container ${isDark ? "dark" : "light"}`}>
      <img
        src={notFoundImg}
        alt="No results found"
        className="notfound-img"
      />

      <p className="notfound-text">
        {message}{" "}
        <span className="notfound-link" onClick={handleClick}>
          Click here.
        </span>
      </p>
    </div>
  );
}

export default NotFound;