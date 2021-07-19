import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#2EB5F0" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <img src="./assets/toplogo.svg" alt="logo" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                Sign In
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                <Button classname={button}>Home</Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
