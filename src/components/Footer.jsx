import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Facebook from '../assets/Facebook-icon.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';
import Linkedin from '../assets/linkedin.png';
import Youtube from '../assets/youtube-icon.png';

const Footer = () => {
  return <section className="footer-section">
  <div className="container footer-container">
  <div className="footer-copyright">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
        <h1>healthcare</h1>
      </div>
      <p>Copyright © 2022 BRIX Templates | All Rights Reserved </p>
    </div>
    <div className="footer-product">
      <h2 className='footer-header'>Product</h2>
      <Link to='#'>Features</Link>
      <Link to='#'>Pricing</Link>
      <Link to='#'>Case studies</Link>
      <Link to='#'>Reviews</Link>
      <Link to='#'>Updates</Link>
    </div>
    <div className="footer-support">
      <h2 className='footer-header'>Support</h2>
      <Link to='#'>Getting Started</Link>
      <Link to='#'>Help center</Link>
      <Link to='#'>Server status</Link>
      <Link to='#'>Report A bug</Link>
      <Link to='#'>Chat support</Link>
    </div>
    <div className="footer-follow-us">
      <h2 className='footer-header'>Follow us</h2>
      <Link to='#'><img src={Facebook} alt="facebook" />Facebook</Link>
      <Link to='#'><img src={Twitter} alt="twitter" />twitter</Link>
      <Link to='#'><img src={Instagram} alt="Instagram" />Instagram</Link>
      <Link to='#'><img src={Linkedin} alt="Linkedin" />LinkedIn</Link>
      <Link to='#'><img src={Youtube} alt="Youtube" />Youtube</Link>
    </div>
  </div>
  </section>;
};

export default Footer;
