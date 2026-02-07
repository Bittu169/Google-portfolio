import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Map from "./pages/Map";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function Protected({ children }) {
  // Check if the specific key exists in localStorage
  const valid = localStorage.getItem("searchQuery") === "bittu mondal";
  
  if (!valid) {
    console.warn("Access denied to Projects. Redirecting to 404...");
    return <Navigate to="/not-found" replace />;
  }
  
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content"> {/* Good for styling/padding */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/projects" element={
            <Protected>
              <Projects />
            </Protected>
          } /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          
          {/* Specific 404 page */}
          <Route path="/not-found" element={<NotFound />} />
          {/* Catch-all for any typed URL that doesn't exist */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;