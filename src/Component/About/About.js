import React from "react";
import { Row,Col } from "react-bootstrap";
import Contact from "../Contact/Contact";

function About(){
    return(
        <div>
            <section className="About sec-three" id="About">
            <div className="row secthree-head">
    <div className=" secthree-partone">
     <h2 >About Us</h2>
      <h6 >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</h6>
       <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
       <p className="text-secondary">Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>  
    </div>
    <div className="col  secthree-parttwo">
  <div className="logo2 "><div className="logotool"><img src={require('./Assets/images/logo2.png')}></img></div> 
   <img className="key3" width="50%" src={require('./Assets/images/key3.jpg')}></img></div> 
    </div>
  </div>

             </section>  
             <Contact></Contact>
            </div>
    )
}

export default About