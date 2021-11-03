import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_M5ulgz3ASP9cT0LIkX9RW";


  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Contact Page</h1>
      </div>

      <Form className="form" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" required="true" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" required="true" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" name="subject" required="true" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" placeholder="Please let me know what you think" name="description" rows={3} required="true" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>

    </div>
  )
};

export default Contact;
