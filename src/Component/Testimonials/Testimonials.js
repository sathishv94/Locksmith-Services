import React from "react";
import { Row, Col, Container} from "react-bootstrap"
import Contact from "../Contact/Contact";

function Testimonials(){
    return(
        <div>
            <section className="Test" id="Test">
                
            <Row className="secsix">
        <Col className=" What">
         <div className="rating "> 
         <div className="rating-image"><img src={require('./Assets/images/rating.jpg')}></img></div>
         <div className="points"><h1>4.8</h1></div>
         <div className="average"><h6>Our average customer rating is 4.8 / 5 based on 2.549 reviews</h6></div>
         </div>
        </Col>
        <Col className=" customers">
         <h4>WHAT OUR CUSTOMERS SAY</h4><br></br>
         <hr></hr>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut ad minim veniam, quis nostrud exercitation.</p>
        <div className="d-flex justify-content-start d-flex align-items-center jane"> <img src={require('./Assets/images/jane.jpg')}></img> <h6> Jane Oliver</h6> </div><br></br>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut ad minim veniam, quis nostrud exercitation.</p>
        <div className="d-flex justify-content-start d-flex align-items-center jane"> <img src={require('./Assets/images/james.jpg')}></img> <h6> James Winston</h6> </div><br></br>
        <hr></hr>
        </Col>
      </Row>
  
            </section>
            <Contact></Contact>
        </div>
    )
}

export default Testimonials