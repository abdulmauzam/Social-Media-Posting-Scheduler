import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import wisdom from "./images/wisdom.JPG"
import Background from "./images/dubai.jpg";
import "./App.css";

var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url(" + Background + ")",
};

export default function Reset() {
  const emailRef = useRef();

  const { reset } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await reset(emailRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to send a Reset Email");
    }

    setLoading(false);
  }

  return (
    <section style={sectionStyle}>
    <>
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="d-flex flex-row">
    <Card >
    <Card.Body>
    <Container >
    <img src={wisdom} height="100px"/>
    </Container>
    
     <h5 className="text"> WELCOME TO </h5>
     <h5 className="text"> WISDOM</h5>
     <h5 className="text">SOCIAL MEDIA AUTO SLATE</h5>

     
    </Card.Body>
  </Card>
      <Card className="back">
        <Card.Body>
          <h2 className="text-center margin">Reset password</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label >Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>

            <Button disabled={loading} className="w-100 " type="submit">
              {" "}
              Reset Password
            </Button>
            <div className="w-100 text-center mt-2 ">
              Dont have an Account ? <Link to="/signup">Sign Up</Link>
            </div>
          </Form>
        </Card.Body>
      </Card></div>
      </Container>
    </>
    </section>
  );
}
