import Team1 from '../assets/team1.png';
import Team2 from '../assets/Team2.png';
import Team3 from '../assets/team3.png';
import Team4 from '../assets/team4.png';
import Team5 from '../assets/team5.png';
import Team6 from '../assets/team6.png';
import SocialMedia from '../assets/Social-Media-Container.png';

const Team = () => {
  return <section className='container team-section'>
    <h2 className='blue'>Meet our team members</h2>
    <p className='team-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.</p>
    <div className="team-cards">
      <div className="team-card">
        <img src={Team1} alt="team member 1" />
        <h3>John Carter</h3>
        <h4>CEO & Co-Founder</h4>
        <p className="team-card-text">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.  </p>
        <img src={SocialMedia} alt="social media icons" className='team-social-media'/>
      </div>
      <div className="team-card">
        <img src={Team2} alt="team member 1" />
        <h3>Sophie Moore</h3>
        <h4>dental specialist</h4>
        <p className="team-card-text">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.  </p>
        <img src={SocialMedia} alt="social media icons" />
      </div>
      <div className="team-card">
        <img src={Team3} alt="team member 1" />
        <h3>Matt Cannon</h3>
        <h4>orthopedic</h4>
        <p className="team-card-text">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.  </p>
        <img src={SocialMedia} alt="social media icons" />
      </div>
      <div className="team-card">
        <img src={Team4} alt="team member 1" />
        <h3>Andy Smith</h3>
        <h4>brain surgeon</h4>
        <p className="team-card-text">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.  </p>
        <img src={SocialMedia} alt="social media icons" />
      </div>
      <div className="team-card">
        <img src={Team5} alt="team member 1" />
        <h3>Lily Woods</h3>
        <h4>heart specialist</h4>
        <p className="team-card-text">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.  </p>
        <img src={SocialMedia} alt="social media icons" />
      </div>
      <div className="team-card">
        <img src={Team6} alt="team member 1" />
        <h3>Patrick Meyer</h3>
        <h4>eye specialist</h4>
        <p className="team-card-text">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.  </p>
        <img src={SocialMedia} alt="social media icons" />
      </div>
    </div>
    </section>;
};

export default Team;
