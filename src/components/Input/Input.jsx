import React from "react";
import "./Input.css";

function Input({ type, onChange, label }) {
  return (
    <div>
      <label className="labelIn">
        <input type={type} onChange={onChange} className="input-style" />
        {label}
      </label>
    </div>
  );
}

export default Input;
