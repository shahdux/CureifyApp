import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="counter-wrapper">
      <div className="pill">
        <button className="btn" onClick={() => setCount(c => c - 1)}>−</button>
        <span className="count">{count}</span>
        <button className="btn" onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}