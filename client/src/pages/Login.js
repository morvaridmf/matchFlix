// import "../App.css"
import { useAuth0 } from "@auth0/auth0-react";
import popcorn from '../assets/popcorn.png';
import React from "react"


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="login">
      <h1 className="logo">MatchFlix</h1>
      <img src={popcorn} alt='popcorn' className="popcorn_img"/>
      <button onClick={() => loginWithRedirect()} className="login_btn">LOG IN</button>
    </div>
  );
};

export default Login;