import React,{useContext}  from "react";
import LoginNav from "../components/LoginPage/LoginNav";
import LoginMain from "../components/LoginPage/LoginMain";

const Login = () => {



  return (
    <div className="login-page">
      <LoginNav/>
      <LoginMain/>
    </div>
  );
};

export default Login;
