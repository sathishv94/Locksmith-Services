import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Component/MyStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes ,Route , Link} from 'react-router-dom'
import { Row, Col, Navbar, NavbarToggle, NavbarCollapse ,Nav,NavLink } from 'react-bootstrap';
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Services from './Component/Services/Services';
import WhyChooseus from './Component/WhyChooseus/WhyChooseus';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">  
    <section className='Header '>
     
        <Router className="">
          <Navbar className='navbar  d-flex justify-content-center' >
          <Navbar.Brand href="#home"><img src={require('./Assets/logo1.png')}></img></Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse>
      <Nav >
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/whyChooseus">Why Choose Us</Nav.Link>
      <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
          </Navbar>
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/whyChooseus' element={<WhyChooseus></WhyChooseus>}></Route>
          <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          </Routes>
        </Router>

      
      </section> 
    </div>
  );
}

export default App;
