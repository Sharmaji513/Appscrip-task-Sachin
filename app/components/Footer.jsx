import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Top Section: Newsletter and Contact */}
        <div className="footer-top">
          <div className="footer-col subscribe-col">
            <h4>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." aria-label="Enter your e-mail" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="footer-col contact-col">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4 className="currency-title">CURRENCY</h4>
            <div className="currency-selector">
              <span role="img" aria-label="USA flag">🇺🇸</span>
              <span>USD</span>
            </div>
            <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section: Links, Social, Payments */}
        <div className="footer-bottom">
          <div className="footer-col">
            <h3 className="footer-logo">mettā muse</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="#" aria-label="Instagram"><img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" className="social-icon" /></a>
              <a href="#" aria-label="facebook"><img src="https://simpleicons.org/icons/facebook.svg" alt="facebook" className="social-icon" /></a>
            </div>
            
            <h4 className="accepts-title">mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="https://simpleicons.org/icons/googlepay.svg" alt="Google Pay" />
              <img src="https://simpleicons.org/icons/mastercard.svg" alt="MasterCard" />
              <img src="https://simpleicons.org/icons/paypal.svg" alt="PayPal" />
              <img src="https://simpleicons.org/icons/americanexpress.svg" alt="American Express" />
              <img src="https://simpleicons.org/icons/applepay.svg" alt="Apple Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Opay-logo.svg" alt="OPay" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}