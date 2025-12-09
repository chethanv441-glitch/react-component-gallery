import { useState } from "react";
import "../../App.css";

const colors = [
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
];

function ColorPickerDemo() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="color-picker">
      <div className="color-preview" style={{ backgroundColor: selected }} />

      <div className="color-swatches">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelected(color)}
            className={`color-swatch ${selected === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPickerDemo;
