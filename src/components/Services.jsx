import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Dental from '../assets/dental.png';
import Bones from '../assets/bones.png';
import Diagnosis from '../assets/diagnonis.png';
import Cardiology from '../assets/cardiology.png';
import Surgery from '../assets/surgery.png';
import EyeCare from '../assets/eye.png';

const Services = () => {
  return <section className="container services-section">
    <h2 className="blue services-title">Services we provide </h2>
    <p className='services-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
    <div className="services-cards">
      <div className="services-card">
        <img src={Dental} alt="dental" />
        <h3>Dental treatments</h3>
        <p className='services-card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        <Link to='#'>Learn more <FaArrowRight/></Link>
      </div>
      <div className="services-card">
        <img src={Bones} alt="bones" />
        <h3>Bones treatments</h3>
        <p className='services-card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        <Link to='#'>Learn more <FaArrowRight/></Link>
      </div>
      <div className="services-card">
        <img src={Diagnosis} alt="diagnosis" />
        <h3>Diagnosis</h3>
        <p className='services-card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        <Link to='#'>Learn more <FaArrowRight/></Link>
      </div>
      <div className="services-card">
        <img src={Cardiology} alt="Cardiology" />
        <h3>Cardiology</h3>
        <p className='services-card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        <Link to='#'>Learn more <FaArrowRight/></Link>
      </div>
      <div className="services-card">
        <img src={Surgery} alt="Surgery" />
        <h3>Surgery</h3>
        <p className='services-card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        <Link to='#'>Learn more <FaArrowRight/></Link>
      </div>
      <div className="services-card">
        <img src={EyeCare} alt="Eye care" />
        <h3>Eye care</h3>
        <p className='services-card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        <Link to='#'>Learn more <FaArrowRight/></Link>
      </div>
    </div>
    </section>;
};

export default Services;
