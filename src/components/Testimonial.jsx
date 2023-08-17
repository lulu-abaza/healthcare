import Testimonial1 from '../assets/Testimonial1.png'
import Testimonial2 from '../assets/Testimonial2.png'
import Testimonial3 from '../assets/Testimonial3.png'

const Testimonial = () => {
  return <section className='container testimonial-section'>
    <h2 className='blue'>Testimonial</h2>
    <p className='testimonial-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
    <div className="testimonial-cards">
      <div className="testimonial-card">
        <img src={Testimonial1} alt="client picture" />
        <h3>“An amazing service”</h3>
        <p className='card-text'>Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
        <h4>John Carter</h4>
        <p className='card-job-title'>CEO at Google</p>
      </div>
      <div className="testimonial-card">
        <img src={Testimonial2} alt="client picture" />
        <h3>“One of a kind service”</h3>
        <p className='card-text'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
        <h4>Sophie Moore</h4>
        <p className='card-job-title'>MD at Facebook</p>
      </div>
      <div className="testimonial-card">
        <img src={Testimonial3} alt="client picture" />
        <h3>“The best service”</h3>
        <p className='card-text'>Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant.</p>
        <h4>Andy Smith</h4>
        <p className='card-job-title'>CEO Dot Austere</p>
      </div>
    </div>
    </section>;
};

export default Testimonial;
