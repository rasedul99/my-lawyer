import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div>
        <h3>Difference between authorization and authentication?</h3>
        <p>
          Ans: In authentication process, the identity of users are checked for
          providing the access to the system.While in authorization process,
          person’s or user’s authorities are checked for accessing the
          resources. In authentication process, users or persons are
          verified.While in this process, users or persons are
          validated.Authentication determines whether the person is user or
          not.While it determines What permission do user have?
        </p>
      </div>
      <div>
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Ans: I am using firebase because Firebase Authentication provides
          backend services, easy-to-use SDKs, and ready-made UI libraries to
          authenticate users to your app. It supports authentication using
          passwords, phone numbers, popular federated identity providers like
          Google, Facebook and Twitter, and more. I have implement
          Password-based authentication. Passwords are the most common methods
          of authentication
        </p>
      </div>
      <div>
        <h3>
          {" "}
          What other services does firebase provide other than authentication
        </h3>
        <p>
          Ans: There are many services which Firebase provides, Most useful of
          them are: Cloud Firestore, Cloud Functions, Authentication, Hosting,
          Cloud Storage, Google Analytics, Predictions, Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blog;
