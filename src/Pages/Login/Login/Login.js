import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleForm = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="w-50 mx-auto mt-5">
      <h3 className="text-center">Login</h3>
      <Form onSubmit={handleForm}>
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
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleLogin} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to My Lawyer?
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
