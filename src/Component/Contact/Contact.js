import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap"
import { Form, FormGroup, FormLabel, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import { URL_API } from "../API/URL_API";
import { useNavigate } from "react-router-dom";
import { inputHandler } from "react"

function Contact() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })
  const inputHandler = (e) => {
    const { name,value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
    console.log(name, value)
  }

  const postAPI = async () => {
    await axios.post(URL_API, user)
    console.log(user)
    await setUser({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    })
  }
  return (
    <div>
      <section className="Contact" id="Contact">
        <div>
          <Container className=" sec-seven">
            <Row className=" secseven-head">
              <Col className="we ">
                <p><b> We work 24/7 </b></p>
                <h2 ><b>CALL 929-242-6868</b></h2>
               <br></br>
              </Col>

            </Row>
          </Container>
        </div>
      </section>
      <br></br>
      <section className="sec-eight" >
        <div>
          <div class="container seceight-head ">
            <div class="row mail ">
              <div class=" seattle col-md-12">
                <h5><b>CONTACT</b></h5>
                <br></br>
                <div className=" d-flex align-items-center ">
                  <div className="text-danger "><svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.528 7.694A2.4 2.4 0 0 0 2.4 9.73v9.47a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V9.73a2.4 2.4 0 0 0-1.128-2.036l-7.2-4.5a2.4 2.4 0 0 0-2.544 0l-7.2 4.5Zm3.138 2.908a1.2 1.2 0 0 0-1.332 1.997l6 4a1.2 1.2 0 0 0 1.332 0l6-4a1.2 1.2 0 1 0-1.332-1.997L12 14.158l-5.334-3.556Z" clip-rule="evenodd"></path>
                  </svg></div>
                  <div className="" ><h6 >contact@info.com</h6></div>
                </div><br></br>
                <div className="d-flex align-items-center">
                  <div className="text-danger"><svg width="26" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0ZM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  </svg></div>
                  <div className=" add text-start"><h6>6027 38th Ave SW</h6>
                    <h6>Seattle, Washington(WA), 98126</h6> </div>
                </div>
              </div>
              <div class=" message col-md-12">
                <h4 className="text-start">MESSAGE US</h4>

                <Form onSubmit={postAPI}>
                  <Row>
                    <p className="text-start">Name</p>
                    <Col>
                      <Form.Control placeholder="" type="text" name="firstName" value={user.firstName}
                        onChange={inputHandler} />
                      <p className="text-start">First</p>
                    </Col>
                    <Col>
                      <Form.Control placeholder="" type="text" name="lastName" value={user.lastName}
                        onChange={inputHandler} />
                      <p className="text-start">Last</p>
                    </Col>
                  </Row>
                  <p className="text-start">Email</p>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" name="email" value={user.email} placeholder=""
                      onChange={inputHandler} />
                  </Form.Group>
                  <p className="text-start">Message</p>
                  <FloatingLabel controlId="floatingTextarea2" label="" >
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      type="text" name="message" value={user.message}
                      onChange={inputHandler}
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                  <br></br>
                  <div className="text-start"> <Button variant="danger" type="submit">Click</Button> </div>

                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Location ">
                <div >
                    <div class="iframe">
                        <div class="iframeone">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8779023713164!2d77.71557527378324!3d11.343627848478148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3998053453%3A0x7ba00457d4d7cf91!2sNurture%20Infotech%20-%20Erode%20(Python%20%7C%20Java%20%7C%20Fullstack%20%7C%20Web%20Design%20%7C%20Graphic%20Design%20%7C%20Testing%20%7C%20Tally%20%7C%20Data%20Analytics%20%7C%20ML)!5e0!3m2!1sen!2sin!4v1713246470866!5m2!1sen!2sin" width="100%" height="600"
                         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secnine ">
            <div class="container secnine-head d-flex justify-content-center">
  <div class="row proud">
    <div class="col-lg-7 col-md-12 ">
      <div><h6 className="text-light">We are very proud to be serving our local area for over 35 years!</h6></div>
    </div>
    <div class="col-lg-5 col-md-12  d-flex justify-content-center map-call ">
    <div className="call  border-light">  <h6 >CALL 929-242-6868</h6></div>
    </div>
  </div>
  </div>
            </section>

            

    </div>
  )
}

export default Contact