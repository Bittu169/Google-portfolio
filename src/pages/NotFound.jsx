import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import notFoundImg from "../assets/image1.jpg";

function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => setIsDark(document.body.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    
    document.title = "Not Found";
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

  // Styles object (Directly from your CSS)
  const styles = {
    container: {
      padding: '80px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '60vh'
    },
    image: {
      width: '220px',
      marginBottom: '24px',
      opacity: '0.9',
      borderRadius: '8px' // Optional: keeps it clean
    },
    text: {
      fontSize: '18px',
      color: isDark ? '#9aa0a6' : '#5f6368',
      fontFamily: 'Arial, sans-serif'
    },
    link: {
      color: isDark ? '#8ab4f8' : '#1a73e8',
      fontWeight: '500',
      textDecoration: 'none',
      cursor: 'pointer',
      marginLeft: '5px'
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={notFoundImg}
        alt="No results found"
        style={styles.image}
      />

      <p style={styles.text}>
        {message}
        <span 
          style={styles.link} 
          onClick={handleClick}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
        >
          Click here.
        </span>
      </p>
    </div>
  );
}

export default NotFound;