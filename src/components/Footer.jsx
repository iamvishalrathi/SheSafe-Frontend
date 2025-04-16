import React from "react";
import RippleButton from "./RippleButton";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Connect with us</h1>
      <ul>
        <li>
          <a href="#">linkedin</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>

      <div className="right">
        <h3>GETS IN TOUCH</h3>
        <p>@uexample.com</p>
        <p>+91 98765******</p>

        <RippleButton text="Register Now" />
      </div>
    </div>
  );
};

export default Footer;
