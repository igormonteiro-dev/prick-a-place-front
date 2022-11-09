import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { flexCenter } from "../../themes/commonStyles";
import Logo from "../../assets/images/pickaplace_red.png";
import { useState, useContext } from "react"; // <== IMPORT useContext

import { AuthContext } from "../Context/Auth.context";
import axios from "axios";
import { BASE_URL } from "../../consts";

export default function LoginPage({ handleCloseLogin }) {
  /* handleClose as props to close login Modal */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken } = useContext(AuthContext);

  //user imput
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault(); //stop the event

    const requestBody = { email, password };

    axios({
      method: "post",
      url: "/auth/login",
      baseURL: BASE_URL,
      data: requestBody,
    })
      .then((response) => {
        console.log("JWT token", response.data.token);

        storeToken(response.data.token);

        handleCloseLogin();
      })
      .catch((error) => {
        const errorDescription = error.response.data.error;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            ...flexCenter,
            marginTop: 8,
            flexDirection: "column",
          }}
        >
          <img src={Logo} alt="logo" style={{ width: "70px" }} />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleLoginSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={handleEmail}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              autoComplete="current-password"
            />
            {errorMessage && (
              <p style={{ color: "red" }} className="error-message">
                {errorMessage}
              </p>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={[
                {
                  mt: 3,
                  mb: 2,
                },
                {
                  "&:hover": {
                    opacity: 0.9,
                  },
                },
              ]}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>Don't have an account? Please, sign up</Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
