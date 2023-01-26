import {Input } from "@mui/material";
import Button from "../Button/Button";
import React from "react";
import "./Popup.css";

function Popup() {
  return (
    <div className="popup">
      <Input />
      <Input />
      <div>
        <Button text="sign in" />
      </div>
    </div>
  );
}

export default Popup;
