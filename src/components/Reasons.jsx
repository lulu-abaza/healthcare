import { Link } from 'react-router-dom';
import ReasonsImg from '../assets/reasons.png'

const Reasons = () => {
  return <section className="container reasons-section">
    <div className="reasons-content">
      <h2 className='blue'>You have lots of reasons to choose us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
      <div className="reasons-buttons">
        <Link to="service">Get started</Link>
        <Link to="contactus">Talk to sales</Link>
      </div>
    </div>
    <img src={ReasonsImg} alt="doctors doing surgery" />
  </section>;
};

export default Reasons;
