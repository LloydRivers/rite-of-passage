import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h1 id="footer-logo-text">Medicare</h1>
            <p>Your health is our priority.</p>
          </div>

          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div>
            <ul>
              <a href="#">
                <li>Home</li>
              </a>

              <a href="#">
                <li>Contact</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
            </ul>
          </div>

          <div className="footer-items">
            <h3>Services</h3>
            <div className="border1"></div>
            <ul>
              <a href="#">
                <li>Home Care</li>
              </a>
              <a href="#">
                <li>Consultations</li>
              </a>
              <a href="#">
                <li>Advice</li>
              </a>
            </ul>
          </div>

          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>123456789
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                xyz@gmail.com
              </li>
            </ul>

            <div className="social-media">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-google-plus-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">Copyright &copy; Medicare 2021.</div>
      </div>
    </footer>
  );
}

export default Footer;
