import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className=" display-6">Contact Us</h4>
            <ul>
              <li>Email: Moudy.rasmy@Mail.ru</li>
              <li>Phone: +1234567890</li>
              <li>Address: Assiut,Egypt</li>
            </ul>
          </div>
          <div className="col-md-6 right">
            <h4 className="display-6">Follow Us</h4>
            <ul className="social-media-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
