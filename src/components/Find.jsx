import { BsToggle2On } from 'react-icons/Bs';


const Find = () => {

  return <section className="container find-section">
      <h2>find a doctor</h2>
      <div className="find-form">
        <div className="find-field">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="speciality" id="speciality" placeholder="Speciality"/>
        </div>
        <div className="find-cta">
          <div className="toggle"><p>Available </p><BsToggle2On className='toggle-icon'/></div> 
          <button type="button">Search</button>
        </div>
      </div>
  </section>;
};

export default Find;
