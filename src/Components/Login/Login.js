import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="container py-5 login">
      <div className="shadow-lg px-3 py-5 w-50 mx-auto">
        <h3 className="py-3">Please sign in using Google</h3>
        <button
          onClick={handleGoogleLogin}
          className="btn-danger fs-5 border-0 py-1 px-3 rounded-1"
        >
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
