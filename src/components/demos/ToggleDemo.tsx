import { useState } from "react";
import "../../App.css";

function ToggleDemo() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="toggle-container">
      <div className="toggle-label">
        <span className="toggle-text">{isOn ? "ON" : "OFF"}</span>
        <span className="toggle-status">{isOn ? "Enabled" : "Disabled"}</span>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        onClick={toggle}
        className={`toggle-switch ${isOn ? "on" : "off"}`}
      >
        <span className="toggle-slider" />
      </button>
    </div>
  );
}

export default ToggleDemo;
