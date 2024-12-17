import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <h2>FinProHB</h2>
    </div>
    <div class="footer-links">
      <a href="#">About Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact</a>
    </div>
    <div class="footer-social">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
    </div>
    <p class="footer-credit">© 2024 FinProHB. All Rights Reserved.</p>
  </div>
</footer>

  );
};

export default Footer;


