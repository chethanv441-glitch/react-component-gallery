import { useState } from "react";
import "../../App.css";

function CounterDemo() {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className={`counter-display ${count === 0 ? "zero" : ""}`}>
        {count}
      </div>

      <div className="counter-buttons">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="counter-btn decrement"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="counter-btn increment"
        >
          Increment
        </button>
      </div>

      <button
        onClick={reset}
        className={`reset-btn ${count === 0 ? "disabled" : ""}`}
        disabled={count === 0}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterDemo;
