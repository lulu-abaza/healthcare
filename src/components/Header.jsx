import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import {FiMenu} from 'react-icons/fi'

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => { 
    setOpen(!open);
  }

  return <>
  <header>
    <Link to='/'className="website-brand">
      <img src={logo} alt="logo" />
      <h1><span className="blue">health</span><span className="green">care</span></h1>
    </Link>
    <nav className={`middle-nav-links ${ open ? 'show-middle-menu' : '' }`} onClick={() => setOpen(false)}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='service'>Service</NavLink>
      <NavLink to='contactus'>Contact Us</NavLink>
      {/* <NavLink to='help'>Help</NavLink> */}
      {/* <NavLink to='blogs'>Blogs</NavLink> */}
    </nav>
    <nav className={`right-nav-links ${ open ? 'show-right-menu' : '' }`} onClick={() => setOpen(false)}>
      <Link className='signup blue' to='signup'>Sign Up</Link>
      <Link className='login'to='login'>Log In</Link>
    </nav>
    <FiMenu className='menu-icon' onClick={toggle}/>
  </header>
  </>;
};

export default Header;
