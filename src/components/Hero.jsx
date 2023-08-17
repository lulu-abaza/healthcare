import Watch from '../assets/watch.png'
import Professionals from '../assets/professionals.png'
import HeroImage from '../assets/hero-image.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return <>
  <section className="container hero-section">
    <div className="hero-content">
      <h1>Providing Quality <span className="blue">Healthcare</span> for a <span className="green">Brighter</span>
      and <span className="green">Healthy</span> Future</h1>
      <p className='hero-text'>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
      <div className="hero-buttons">
        <Link className='hero-button1' to='service'>Appointments</Link>
        <Link to='https://youtu.be/p92P5x-WfQg' target='_blank'><img src={Watch} alt="watch" />
        <p>Watch video</p></Link>
      </div>
    </div>
    <div className="hero-images">
      <div className="hero-float-left"><h4>our professionals</h4><img src={Professionals} alt="" /></div>
      <img src={HeroImage} alt="doctor image" className='hero-image' />
      <p className='hero-float-right'><span className="blue service-24-7">24/7</span> service</p>
    </div>
  </section>
  </>;
};

export default Hero;
