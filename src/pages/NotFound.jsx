import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import notFoundImg from "../assets/image1.jpg";
import "./NotFound.css";

function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  const message =
    location.state?.message ||
    'No search found. Please search as "Bittu Mondal".';

  const handleClick = () => {
    navigate("/", {
      state: { autofill: "Bittu Mondal" }
    });
  };

  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    
    <div className="notfound-container">
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
