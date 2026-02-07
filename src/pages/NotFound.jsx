import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import notFoundImg from "../assets/image1.jpg";

function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = "Not Found";
    const checkTheme = () => setIsDark(document.body.classList.contains("dark"));
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const message = location.state?.message || 'No search found. Please search as "Bittu Mondal".';

  const handleClick = () => {
    navigate("/", { state: { autofill: "Bittu Mondal" } });
  };

  // PRODUCTION-PROOF STYLES
  const styles = {
    container: {
      padding: '80px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      backgroundColor: 'transparent'
    },
    img: {
      width: '220px',
      marginBottom: '24px',
      opacity: 0.9,
      height: 'auto'
    },
    text: {
      fontSize: '18px',
      color: isDark ? '#9aa0a6' : '#5f6368',
      margin: '0',
      fontFamily: 'Arial, sans-serif'
    },
    link: {
      color: isDark ? '#8ab4f8' : '#1a73e8',
      fontWeight: '500',
      cursor: 'pointer',
      marginLeft: '5px',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={notFoundImg}
        alt="No results found"
        style={styles.img}
      />

      <p style={styles.text}>
        {message}
        <span 
          style={styles.link} 
          onClick={handleClick}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          Click here.
        </span>
      </p>
    </div>
  );
}

export default NotFound;