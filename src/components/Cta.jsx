import { Link } from "react-router-dom";

const Cta = () => {
  return <section className="cta-section">
    <div className="container cta-container">
      <div className="cta-content">
        <h1>Meet the Best<br/> Hospital</h1>
        <p>We know how large objects will act,<br/> but things on a small scale.</p>
        <div className="cta-content-buttons">
        <Link to='#'>Get Quote Now</Link>      
        <Link to='#'>Learn More</Link>      
        </div>
      </div>
      <div className="cta">
        <h2 className="cta-header">
          Book Appointment
        </h2>
        <form className="cta-form">
          <div className="cta-form-input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Full Name"/>
          </div>
          <div className="cta-form-input">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
          </div>
          <div className="cta-form-input">
            <label htmlFor="department">Departement</label>
            <select name="department" id="department" placeholder="Please Select">
              <option value="dental">dental</option>
              <option value="bones">bones</option>
              <option value="diagnosis">diagnosis</option>
              <option value="cardiology">cardiology</option>
              <option value="surgery">surgery</option>
              <option value="eye care">eye care</option>
            </select>
          </div>
          <div className="cta-form-input">
            <label htmlFor="time">Time</label>
            <select name="time" id="time" placeholder="4:00 Available">
              <option value="1:00">1:00</option>
              <option value="2:00">2:00</option>
              <option value="3:00">3:00</option>
              <option value="4:00">4:00</option>
              <option value="5:00">5:00</option>
            </select>
          </div>
        </form>
        <button type="submit">Book Appointment</button>
      </div>
    </div>
    </section>;
};

export default Cta;
