import React from "react";
import { Row,Col, Accordion, Container} from "react-bootstrap";
import Contact from "../Contact/Contact";


function Services(){
    return(
        <div>
        <section className="sec-two " id="Services">
          <div className=" our " >
        <div className=" services">
        <div className="images"><img src={require('./Assets/images/services1.jpg')}></img></div>
        <div className="images"><img src={require('./Assets/images/services2.jpg')}></img></div>
        <div className="images"><img src={require('./Assets/images/services3.jpg')}></img></div>
      </div>
      </div>
        </section>
        <section className="">



        <div className=" Accord " >
        <div className=" Accordion-head">
        <div className="Accordion-title">
        <Accordion className="Accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h6>Automobile door lock opening</h6></Accordion.Header>
        <Accordion.Body>
    <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="Accordion-Title">
        <Accordion.Header ><h6>Emergency lockouts & re-keying</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h6>Automobile alarm installation</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>    
          </div>



        <div className="Accordion-title">
        <Accordion className="Accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h6>Opening locked house door</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="Accordion-Title">
        <Accordion.Header ><h6>House security device installation</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h6>Emergency lockouts & re-keying</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          
          </div>
        <div className="Accordion-title">
        <Accordion className="Accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h6>Emergency lockouts & re-keying</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="Accordion-Title">
        <Accordion.Header ><h6>Access control device installation</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h6>Security device installation</h6></Accordion.Header>
        <Accordion.Body>
        <div className="text-start" >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




        </div>
      </div>
      </div>

        </section>
        <Contact></Contact>
        </div>
    )
}

export default Services