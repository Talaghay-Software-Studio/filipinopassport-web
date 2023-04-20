import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <h3>filipinopassport by Kach</h3>
          <p>
          We provide the simplest solution to help with the process of tourist visa and more!
          </p>
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/FilipinoPassportByKach">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Fil_Passport">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="mailto:help@filipinopassport.com">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@KachUmandap">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/filipinopassport_com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
           Designed by{" "}
            <span>Talaghay Software Studios</span>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;