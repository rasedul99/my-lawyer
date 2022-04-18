import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocailLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
  };
  const handleRegister = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }
  let errorElememt;
  if (error) {
    errorElememt = (
      <div>
        <p className="text-danger">Error{error.message}</p>
      </div>
    );
  }
  return (
    <div className="w-50 mx-auto mt-5">
      <h3 className="text-center"> Sign Up</h3>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            ref={nameRef}
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleRegister} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login" className="text-primary pe-auto text-decoration-none">
          Please Login
        </Link>{" "}
      </p>
      {errorElememt}
      <SocailLogin />
    </div>
  );
};

export default SignUp;
