import React, { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService";

export const AuthContext = createContext(); //creating context

export default ({ children }) => {
  //Authprovider function
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //Calling api for authentication
    AuthService.isAuthenticated().then((data) => {
      console.log(data);
      if (data) {
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated);
      }
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading</h1>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            userData,
            setUserData,
          }}
        >
          {/* setting global values */}
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
