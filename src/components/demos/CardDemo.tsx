import { useState } from "react";
import "../../App.css";

function CardDemo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="profile-card">
      <h3 className="profile-name">Chethankumar</h3>
      <p className="profile-title">Frontend Developer</p>

      <button
        type="button"
        className={`profile-toggle ${expanded ? "is-expanded" : ""}`}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="profile-details"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>

      {expanded && (
        <div id="profile-details" className="profile-details">
          <p>Skills: React, TypeScript</p>
          <p>Mobile: 9*8*4*5*6*</p>
          <p>Copmpany: ABCD</p>
          <p>Email: xyz@example.com</p>
          <p>Location: Bengaluru</p>
        </div>
      )}
    </div>
  );
}

export default CardDemo;
