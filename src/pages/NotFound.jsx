import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import notFoundImg from "../assets/image1.jpg";
import styles from "./NotFound.module.css"; // Import as styles object

function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Not Found";
  }, []);

  const message = location.state?.message || 'No search found. Please search as "Bittu Mondal".';

  const handleClick = () => {
    navigate("/", { state: { autofill: "Bittu Mondal" } });
  };

  return (
    <div className={styles.container}>
      <img
        src={notFoundImg}
        alt="No results found"
        className={styles.image}
      />

      <p className={styles.text}>
        {message}
        <span className={styles.link} onClick={handleClick}>
          Click here.
        </span>
      </p>
    </div>
  );
}

export default NotFound;