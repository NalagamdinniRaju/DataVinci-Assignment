import React from "react";

const UMFScaleTaste = () => {
  const scale = [
    { label: "10+", color: "#f97316" },
    { label: "15+", color: "#ef4444" },
    { label: "20+", color: "#e11d48" },
    { label: "24+", color: "#8E2C8C" },
    { label: "26+", color: "#0ea5e9" },
    { label: "28+", color: "#22c55e" },
    { label: "30+", color: "#1d4ed8" },
  ];
  return (
    <>
      <div className="umf-scale">
        <h4>UMF™ SCALE</h4>
        <div className="scale-indicators">
          <div className="scale-grid">
            {scale.map((item) => (
              <div key={item.label} className="scale-item">
                <span className="scale-label">UMF™ {item.label}</span>
                <span className="scale-bar" style={{ backgroundColor: item.color }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="taste-profile">
        <h4>TASTE PROFILE</h4>
        <div className="slider">
          <div className="slider-track"></div>
          <div className="slider-thumb"></div>
        </div>
        <div className="taste-slider">
          <span>Clean & Intense</span>
          <span>Bold & Intense</span>
        </div>
      </div>
    </>
  );
};

export default UMFScaleTaste;

