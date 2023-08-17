import { RiStarSFill }from 'react-icons/ri';
import { RiStarSLine } from 'react-icons/ri'
import Customers1 from '../assets/customers1.png'
import Customers2 from '../assets/customers2.png'
import Customers3 from '../assets/customers3.png'

const Customers = () => {
  return <section className="container customers-section">
    <h2> what our customers say</h2>
    <p  className='customers-text'>Problems trying to resolve the conflict between the two major realms of <br />Classical physics: Newtonian mechanics </p>
    <div className="customers-cards">
      <div className="customers-card">
        <div className="stars">
          <RiStarSFill className='stars-fill'/><RiStarSFill className='stars-fill'/>
          <RiStarSFill className='stars-fill'/><RiStarSFill className='stars-fill'/>
          <RiStarSLine className='stars-line'/>
        </div>
        <p className='customers-card-text'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
        <img src={Customers1} alt="customer 1" />
      </div>
      <div className="customers-card">
        <div className="stars">
          <RiStarSFill className='stars-fill'/><RiStarSFill className='stars-fill'/>
          <RiStarSFill className='stars-fill'/><RiStarSFill className='stars-fill'/>
          <RiStarSLine className='stars-line'/>
        </div>
        <p className='customers-card-text'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
        <img src={Customers2} alt="customer 2" />
      </div>
      <div className="customers-card">
        <div className="stars">
          <RiStarSFill className='stars-fill'/><RiStarSFill className='stars-fill'/>
          <RiStarSFill className='stars-fill'/><RiStarSFill className='stars-fill'/>
          <RiStarSLine className='stars-line'/>
        </div>
        <p className='customers-card-text'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
        <img src={Customers3} alt="customer 3" />
      </div>
    </div>
  </section>;
};

export default Customers;
