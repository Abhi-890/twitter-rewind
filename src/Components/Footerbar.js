import React from "react";
import "./Footerbar.css";
const Footerbar = () => {
  return (
    <div className="footerbar-cont">
      <div className="left">
        <div className="footerbar-logo">
          <div className="footerbar-logo-left">
            <img src="./assets/icons8-twitter.png" alt="" />
          </div>
          <div className="footerbar-logo-right">
            <p>
              My Twitter <span>&#x1D19;</span>ewind
            </p>
            <img src="./assets/breadcrumb.png" alt="" />
          </div>
        </div>
        <div className="icons">
          <ul>
            <li>
              <img src="./assets/globalization.svg" alt="" />
            </li>
            <li>
              {" "}
              <img src="./assets/twitter.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="./assets/insta.svg" alt="" />{" "}
            </li>
            <li>
              {" "}
              <img src="./assets/mail.png" alt="" />{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>
            <p>
              Get early access for Bread{" "}
              <span>
                <img src="./assets/arrow.png" alt="" />
              </span>
            </p>
          </li>
          <li>
            <p>📄 Privacy Policy</p>
            <p>📃 Terms of Use</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footerbar;
