import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import "./App.css";
import wisdom from "./images/wisdom.JPG";
import Background from "./images/dubai.jpg";

var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url(" + Background + ")",
};
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
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
          <Card style={{ minHeight: "375px" }}>
            <Card.Body>
              <Container>
                <img src={wisdom} height="100px" />
              </Container>

              <h5 className="text" style={{ marginTop: "10px" }}>
                {" "}
                WELCOME TO{" "}
              </h5>
              <h5 className="text" style={{ marginTop: "25px" }}>
                {" "}
                WISDOM
              </h5>
              <h5 className="text" style={{ marginTop: "30px" }}>
                SOCIAL MEDIA AUTO SLATE
              </h5>
            </Card.Body>
          </Card>
          <Card className="back">
            <Card.Body>
              <h2 className="text-center mb-4">Sign up</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required ref={emailRef} />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" required ref={passwordRef} />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    ref={passwordConfirmRef}
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100 " type="submit">
                  {" "}
                  Sign up
                </Button>
                <div className="w-100 text-center mt-2">
                  Already have an account? <Link to="/">Log in</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </>
    </section>
  );
}
