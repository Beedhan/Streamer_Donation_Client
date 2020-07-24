import React from 'react'
import { useLocation,Redirect,browserHistory } from "react-router-dom";

const LoginSuccess = ({match,history}) => {
  const token = new URLSearchParams(useLocation().search).get("token");

    return (
        <div>
            <Redirect to="/dashboard"/>
        </div>
    )
}

export default LoginSuccess
