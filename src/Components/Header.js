import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const handleClick = () => {
    setBtn(btn === "Login" ? "logout" : "login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="image" />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button className="login-button" onClick={handleClick}>
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
