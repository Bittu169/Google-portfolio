import "./Footer.css";
import { useEffect, useState } from "react";

function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.body.classList.contains("dark"));
    checkTheme(); // initial check

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // We add 'light' or 'dark' class explicitly to help the CSS selector
  return (
    <footer className={`google-footer ${isDark ? "dark" : "light"}`}>
      <div className="footer-left">
        <span>© 2026 Bittu Mondal</span>
      </div>

      <div className="footer-center">
        <span>Dark theme: {isDark ? "on" : "off"}</span>
      </div>

      <div className="footer-right">
        <a href="https://linkedin.com/in/bittu-mondal-a06258313" target="_blank" rel="noreferrer" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        <a href="https://github.com/Bittu169" target="_blank" rel="noreferrer" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>

        <a href="https://bittu169.github.io/Portfolio/" target="_blank" rel="noreferrer" title="Portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
          </svg>
        </a>

        <a href="https://leetcode.com/u/bittu12345/" target="_blank" rel="noreferrer" title="LeetCode">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 640 640">
            <path d="M331.4 73.3C342.5 61.5 361.1 60.8 373 71.9C384.9 83 385.5 101.7 374.4 113.5L331.4 159.5C352.9 162.8 373.5 171.3 390.5 185.1L465.1 245.4C477.7 255.6 479.7 274.2 469.5 286.8C459.3 299.4 440.8 301.4 428.1 291.2L353.5 230.9C327.3 209.8 281.6 212.7 259 236.8L177 325C155.5 348 157.9 385 182.6 409.2L273.8 498.6C298.7 522.6 339.4 522.6 363.9 498.2L415 447.2C426.5 435.7 445.1 435.7 456.6 447.3C468.1 458.9 468 477.5 456.5 489L405.4 540C358.3 587.1 281.4 587.7 233.5 541.6L141.5 451.4C94.6 405.3 90 331.9 134 284.7L331.4 73.3zM507.7 337.2C523.9 337.2 537.1 350.4 537.1 366.7C537.1 383 523.9 396.2 507.7 396.2L290.8 396.2C274.6 396.2 261.4 383 261.4 366.7C261.4 350.4 274.6 337.2 290.8 337.2L507.7 337.2z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;