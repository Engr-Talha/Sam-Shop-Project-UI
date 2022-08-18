import React from "react";
import ContactForm from "./contactform";

import "./contact.css";
import TopImg from "./Imgs/TopImg.jpg";
const banner = require("./Imgs/TopImg.jpg");
function Contact() {
  return (
    <div className="main-wrapper">
      <div className="banner">
        <img className="bannerimage" src={banner}></img>
      </div>

      <div className="form-class">
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
