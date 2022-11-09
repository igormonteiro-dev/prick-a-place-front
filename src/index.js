import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./components/Context/Auth.context";
import { FavoriteProviderWrapper } from "./components/Context/Favorite.context";
import AppThemeProvider from "./themes/AppThemeProvider";

// STYLE

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <Router>
        <AuthProviderWrapper>
          <FavoriteProviderWrapper>
            <App />
          </FavoriteProviderWrapper>
        </AuthProviderWrapper>
      </Router>
    </AppThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
