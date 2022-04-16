import React from "react";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import facebook from "../../../Images/social/facebook.png";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        <button
          onClick={() => {
            signInWithFacebook();
          }}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
