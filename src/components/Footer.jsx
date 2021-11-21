import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="/assets/images/footer/playstore.png" alt="playstore" />
        <img src="/assets/images/footer/Appstore.png" alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1><span className='footer_hover'>SMART <i className='fa fa-apple'></i> MART</span></h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeArunChoudhary</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/arun_choudhary21">Instagram</a>
        <a href="https://linkedin.com/in/arun-choudhary1999-typ">Linkedin</a>
        <a href="http://instagram.com/arun_choudhary21">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
