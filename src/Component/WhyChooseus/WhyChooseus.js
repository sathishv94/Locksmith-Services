import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../Contact/Contact";

function WhyChooseus(){
    return(
        <div>
            <section className="WhyChoose " id="WhyChoose">
                <div >
    <Container className=" secfour-head">
      <Row className="Solving ">
        <Col className="problems col-lg-12 col-md-12  col-sm-12">
       <h6 className="text-danger">Solving problems since 1963</h6> 
       <h1>WE PROVIDE THE BEST RESIDENDIAL,
      COMMERCIAL, AND CAR LOCKSMITH SERVICES</h1>
        </Col>
      </Row>
      
    </Container></div>
    <div>
    <Container className=" Ballard">
      <Row className="Lock ">
        <Col className="Extensive ">
            <h4 className="">BALLARD LOCK AND KEY IS AN INDEPENDENT, LOCALLY-OWNED, AND OPERATED SEATTLE LOCKSMITH.</h4>
        </Col>
        <Col className="knowledge ">
            <div><h6> Extensive knowledge and expertise in all facets of vehicle, commercial and residential areas.</h6></div>
            <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
        </Col>
        
      </Row>
      
      </Container>
      <div className=" key4-image " ><img src={require('./Assets/images/key4.jpg')}></img></div>
    </div>
     
            </section>
            <section className="sec-five ">
                <Container className="secfive-head ">
            <Row className="secfive-row" >
        <Col className="Fully " lg={4} md={12}>
        <h6><b>Why choose us</b></h6>
        <h5><b>FULLY LICENSED, BONDED, AND INSURED</b></h5>
        </Col>
        <Col md={8} className="secfive-two" >
        <Row>
        <Col lg={1} className="text-danger">
        <svg width="36" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.25 9H9V5.25a3 3 0 1 1 6 0 .75.75 0 1 0 1.5 0 4.5 4.5 0 1 0-9 0V9h-.75a3.003 3.003 0 0 0-3 3v8.25a3.003 3.003 0 0 0 3 3h10.5a3.004 3.004 0 0 0 3-3V12a3.004 3.004 0 0 0-3-3Z"></path>
</svg>
</Col>
        <Col >
      <b> <h6>Certified Locksmiths</h6></b> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </Col>
        <Col lg={1} className="text-danger "><svg  width="36" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
  <path d="M18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1h12Z"></path>
</svg></Col>
        <Col>
        <b><h6>Customer Support</h6></b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p></Col>
      </Row>
      <Row>
      <Col lg={1} className="text-danger">
      <svg width="36" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M21.6 12c0 4.64-4.298 8.4-9.6 8.4a10.609 10.609 0 0 1-4.9-1.176L2.4 20.4l1.606-3.748C2.992 15.32 2.4 13.721 2.4 12c0-4.64 4.298-8.4 9.6-8.4s9.6 3.76 9.6 8.4ZM8.4 10.8H6v2.4h2.4v-2.4Zm9.6 0h-2.4v2.4H18v-2.4Zm-7.2 0h2.4v2.4h-2.4v-2.4Z" clip-rule="evenodd"></path>
</svg>
</Col>
        <Col >
      <b> <h6>Certified Locksmiths</h6></b> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </Col>
        <Col lg={1} className="text-danger "><svg width="36" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M21.6 15.6V6a2.4 2.4 0 0 0-2.4-2.4H4.8A2.4 2.4 0 0 0 2.4 6v9.6A2.4 2.4 0 0 0 4.8 18h3.6l3.6 3.6 3.6-3.6h3.6a2.4 2.4 0 0 0 2.4-2.4ZM6 8.4a1.2 1.2 0 0 1 1.2-1.2h9.6a1.2 1.2 0 1 1 0 2.4H7.2A1.2 1.2 0 0 1 6 8.4ZM7.2 12a1.2 1.2 0 1 0 0 2.4h3.6a1.2 1.2 0 1 0 0-2.4H7.2Z" clip-rule="evenodd"></path>
</svg></Col>
        <Col>
        <b><h6>Customer Support</h6></b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p></Col>
      </Row>
        </Col>
        
       
      </Row>
    </Container>
            </section>
            <Contact></Contact>
        </div>
    )
}

export default WhyChooseus