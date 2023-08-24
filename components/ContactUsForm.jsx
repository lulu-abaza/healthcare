
const ContactUsForm = () => {
  return <section className="container contactus-form-container">
    <h3>Get In Touch</h3>
    <h2>Contact Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="contactus-form-names">
      <div className="contactus-form-fname">
        <label htmlFor="first name">First name</label>
        <input className='contactus-form-input' type="text" name="first name" id="first name" placeholder="enter your First name"/>
      </div>
      <div className="contactus-form-lname">
        <label htmlFor="Last name">Last name</label>
        <input className='contactus-form-input' type="text" name="Last name" id="Last name" placeholder="enter your Last name"/>
      </div>
    </div>
    <div className="contactus-form-contact">
      <div className="contactus-form-email">
        <label htmlFor="email">Email</label>
        <input className='contactus-form-input' type="email" name="name" id="name" placeholder="enter your name"/>
      </div>
      <div className="contactus-form-phone">
        <label htmlFor="phone">phone number</label>
        <input className='contactus-form-input' type="tel" name="phone" id="phone" placeholder="enter your phone number"/>
      </div>
    </div>
    <div className="contactus-form-topic">
        <label htmlFor="topic">Choose a topic</label>
      <select name="topic" id="topic">
          <option value="inquiry">inquiry</option>
          <option value="injury">injury</option>
          <option value="surgery">surgery</option>
          <option value="career">career</option>
          <option value="report a bug">report a bug</option>
      </select>
    </div>
    <div className="contactus-form-message">
    <label htmlFor="message">message</label>
        <textarea name="message" id="message" cols="30" rows="10" defaultValue='Type your message...'></textarea>
    </div>
    <div className="contactus-form-terms">
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">I accept the terms</label>
    </div>
        <button type="submit">Sumbit</button>
    </section>;
};

export default ContactUsForm;
