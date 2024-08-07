import React from "react";
import { Row, Col } from "react-bootstrap";
import Services from "../Services/Services";
import About from "../About/About";
import WhyChooseus from "../WhyChooseus/WhyChooseus";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


function Home(){
    return(
        <div>
            <section className="Home" id="Home">
            <Row>
        <Col className="Address">
            <div className="sec-partone">
            <div className="map ">
            <div className="map-icon"><svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0ZM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
</svg></div>
<div className=" add"><h6>6027 38th Ave SW</h6>
 <h6>Seattle, Washington(WA), 98126</h6> </div>
            </div>
            <div className="In-shop">
                <div className="Mobile ">
                <h3>IN-SHOP AND MOBILE</h3>
                <h3> LOCKSMITH SERVICES,</h3>
                <h3>  SINCE 1963</h3>
                </div>
            </div>
            <div className="contact">
            <div className="call">  <h6 >CALL 929-242-6868</h6></div> 
            </div>
            </div>
            
        </Col>
        <Col className=" ">
            <div className="key"><img src={require('./Assets/images/key1.jpg')}></img></div>
        </Col>
      </Row>
            </section>
           
          <Footer></Footer>  
        </div>
    )
}

export default Home