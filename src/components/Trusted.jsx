import Google from '../assets/Google.png';
import FaceBook from '../assets/Facebook.png';
import Youtube from '../assets/YouTube.png';
import Pinterest from '../assets/Pinterest.png';
import Twitch from '../assets/Twitch.png';
import WebFlow from '../assets/Webflow.png';
import Dots from '../assets/Dot-navigation.png';

const Trusted = () => {
  return <section className="container trusted-section">
    <h2 className="blue">Trusted by 10,000+ companies around the world</h2>
      <div className="trusted-logos">
      <img src={Google} alt="google" />
      <img src={FaceBook} alt="google" />
      <img src={Youtube} alt="google" />
      <img src={Pinterest} alt="google" />
      <img src={Twitch} alt="google" />
      <img src={WebFlow} alt="google" />
      </div>
    <img src={Dots} alt="dots navigation" className='dots-navigation' />
  </section>;
};

export default Trusted;
