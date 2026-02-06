import "./Map.css";
import { useEffect } from "react";

function Map() {

  useEffect(() => {
    document.title = "Bittu's Location";
  }, []);

  return (
    <div className="map-page">
      <iframe
        title="My Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.7485607481235!2d88.35301287428885!3d22.625862731018003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d70f8f27c11%3A0x52366e9a14008091!2s7%2C%20Ramdhan%20Ghosh%20Ln%2C%20Belur%20Math%2C%20Howrah%2C%20West%20Bengal%20711202!5e0!3m2!1sen!2sin!4v1770393500417!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
