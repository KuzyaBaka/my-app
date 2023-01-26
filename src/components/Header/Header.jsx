import React, { useState } from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Time from "../Time/Time";

function Header({ type, onChange }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="header">
      <div><Time/></div>
      <Link to='/signin'>
        <div className="account">
          <AccountCircleIcon className="icon" fontSize="large" />
        </div>
      </Link>
      <Link to="/">
        <div>
          <Button text="Home" />
        </div>
      </Link>
      <div className="input">
        <Input type={type} onChange={onChange} />
      </div>
    </div>
  );
}

export default Header;
