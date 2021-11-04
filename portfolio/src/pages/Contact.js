import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [successMessage, setSuccessMessage] = useState(" ");


  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_M5ulgz3ASP9cT0LIkX9RW";

  const onSubmit = (r) => {
    sendEmail(
      serviceID,
      templateID,
      userID
    )
    r.target.reset();
  }


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>contact me</h1>
        <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>

      <Form className="form" >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" name="subject" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" placeholder="Please let me know what you think" name="description" rows={3} required />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={onSubmit}>
          Send
        </Button>
      </Form>

    </div>
  )
};

export default Contact;
