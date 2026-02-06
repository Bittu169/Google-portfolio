import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import googleLogo from "../assets/google.png";

function Navbar() {
  const [query, setQuery] = useState("Bittu Mondal");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();




  /* 🔐 SEARCH HANDLER */
  const handleSearch = () => {
    const value = query.trim().toLowerCase();

    if (value === "bittu mondal") {
      localStorage.setItem("searchAllowed", "true");
      navigate("/");
    } else {
      localStorage.removeItem("searchAllowed");
      navigate("/not-found", {
        state: {
          message:
            'Please search as "Bittu Mondal" or '
        }
      });
    }
  };

  /* ❌ CLEAR SEARCH */
  const clearSearch = () => {
    setQuery("");
    localStorage.removeItem("searchAllowed");
  };

  /* 🔄 AUTOFILL SEARCH FROM NOT FOUND PAGE */
  useEffect(() => {
    if (location.state?.autofill) {
      setQuery(location.state.autofill);
      localStorage.setItem("searchAllowed", "true");
    }
  }, [location.state]);
  

  /* 🌗 THEME TOGGLE */
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.body.classList.toggle("dark");
  };

  /* 🌗 PERSIST THEME */
  useEffect(() => {
    const isDark = document.body.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  /* 🔗 BLOCK NAVIGATION IF SEARCH INVALID */
  const guardedNavigate = (path) => {
    const allowed = localStorage.getItem("searchAllowed") === "true";
    if (allowed) {
      navigate(path);
    } else {
      navigate("/not-found", {
        state: {
          message:
            'No search found. Please search as "Bittu Mondal" or Click here.'
        }
      });
    }
  };


  return (
    <nav className="navbar">
      {/* TOP ROW */}
      <div className="nav-top">
        <img src={googleLogo} alt="Google" className="logo" />

        {/* SEARCH BAR */}
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          {/* CLEAR BUTTON (ALWAYS VISIBLE) */}
          <button
            className={`icon-btn clear-btn ${query ? "active" : "disabled"}`}
            onClick={clearSearch}
            disabled={!query}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f">
            <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
          </button>

          {/* SEARCH BUTTON */}
          <button className="icon-btn search-btn" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
            </svg>
          </button>
        </div>

        {/* RIGHT ICONS */}
        <div className="nav-icons">
          <button className="icon-btn sun-btn" onClick={toggleTheme}>
          {theme === "light" ? (
              /* ☀️ SUN ICON */
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f">
                <path d="M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Zm318-275Z"/>
              </svg>
            ) : (
              /* 🌙 MOON ICON */
              <svg xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f">
                <path d="M609.33-658.67 498.67-769.33 609.33-880 720-769.33 609.33-658.67Zm200 120-70.66-70.66L809.33-680 880-609.33l-70.67 70.66ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 98.33 11 192.92 29 94.59 100 165.66t165.5 100.1Q780-392.3 879-410.31q-26 144.13-138 237.22T483-80Zm0-66.67q96 0 175.67-52.66Q738.33-252 786-336.33q-88.67-8-169.67-42.17-81-34.17-143.66-96.5Q410-537.33 376-618t-41.67-168.67q-84.33 46.34-136.5 126.5Q145.67-580 145.67-484q0 140.56 98.39 238.94 98.38 98.39 238.94 98.39ZM472.33-475Z"/>
              </svg>
            )}  
            </button>

            {/* AVATAR */}
          <div className="avatar-wrapper">
            <div className="avatar">B</div>

            {/* ACCOUNT POPUP */}
            <div className="de">
              <span id="n1">Google Account</span><br />
              <span id="n2">
                Bittu Mondal <br />
                mondalbittu169@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="nav-links">
        <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" /></svg>
          About</NavLink>
        <NavLink to="/skills">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z" /></svg>
          Skills</NavLink>
        <NavLink to="/projects">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="m240-144 240-240 240 240H240ZM96-312.04v-432.24Q96-774 117.5-795t50.5-21h624q29.7 0 50.85 21.16Q864-773.68 864-743.96v432.24Q864-282 842.85-261T792-240H672v-72h120v-432H168v432h120v72H168q-29.7 0-50.85-21.16Q96-282.32 96-312.04ZM480-492Z" /></svg>
          Projects</NavLink>
        <NavLink to="/contact">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M744-481q0-109-77.5-186.5T480-745v-72q70 0 131.13 26.6 61.14 26.6 106.4 71.87 45.27 45.26 71.87 106.4Q816-551 816-481h-72Zm-144 0q0-50-35-85t-85-35v-72q80 0 136 56.16T672-481h-72Zm163 336q-121-9-229.5-59.5T339-341q-86-86-136-194.5T144-765q-2-21 12.29-36.5Q170.57-817 192-817h136q17 0 29.5 10.5T374-780l24 107q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-75H218q5 38 14 74t23 71Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" /></svg>
          Contact</NavLink>
        <NavLink to="/map">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-96q-108 0-174-31.5T240-210q0-26 19.5-47.5T315-295l58 55q-15 5-32 12.5T312-209q8 14 62 27.5T480-168q56 0 109-13.5t59-30.5q-13-9-30.5-16.5T585-241l58-56q38 16 57.5 38.5T720-210q0 51-66 82.5T480-96Zm1-210q95-70 143-143.5T672-594q0-98-62-148t-130-50q-68 0-130 50t-62 148q0 65 48 137.5T481-306Zm-1 90q-133-98-198.5-193.5T216-594q0-66 24-116.5t62-84.5q38-34 85-51.5t93-17.5q46 0 93 17.5t85 51.5q38 34 62 84.5T744-594q0 89-65.5 184.5T480-216Zm0-312q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21.5T408-600q0 29 21 50.5t51 21.5Zm0-72Z" /></svg>
          Map</NavLink>

      </div>
    </nav>
  );
}

export default Navbar;
