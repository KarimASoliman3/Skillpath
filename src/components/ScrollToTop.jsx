import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          padding: "12px 18px",
          fontSize: "18px",
          borderRadius: "50%",
          background: "#FF9F19",
          color: "#fff",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 1000,
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
