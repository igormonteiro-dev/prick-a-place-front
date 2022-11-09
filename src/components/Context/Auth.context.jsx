import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../consts";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setToken(token);
  }, []);

  useEffect(() => {
    authenticateUser(token);
  }, [token]);

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
    setToken("");
  };

  const logOutUser = () => {
    // To log out the user, remove the token
    removeToken();
  };

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
    setToken(token);
  };

  const authenticateUser = (token) => {
    // If the token exists in the localStorage
    if (token) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios({
        method: "get",
        baseURL: BASE_URL,
        url: "/auth/me",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // If the server verifies that JWT token is valid
          const user = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token)
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // If the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setUser,
        token,
        storeToken,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
