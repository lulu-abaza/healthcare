import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
// import Help from './pages/Help';
// import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Root from './layout-routes/Root';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Root />}>
          <Route index element={<Home />}/>  
          <Route path='/service' element={<Service />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          {/* <Route path='/help' element={<Help />}/> */}
          {/* <Route path='/blogs' element={<Blogs />}/> */}
          </Route>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<LogIn />}/>   
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
