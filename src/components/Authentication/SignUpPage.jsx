import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../../assets/images/pickaplace_red.png";
import { useState } from "react"; // <== IMPORT useContext
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/Auth.context";
import { BASE_URL } from "../../consts";

export default function SignUp({ handleCloseSignup }) {
  /* handleClose as props to close Modal */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState(undefined);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const { storeToken } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email,
      password,
      username,
      firstname,
      lastname,
      city,
      country,
    };

    axios({
      method: "post",
      baseURL: BASE_URL,
      url: `/auth/signup`,
      data: requestBody,
    })
      .then((response) => {
        storeToken(response.data.token); // <== ADD

        handleCloseSignup();
      })
      .catch((error) => {
        const errorDescription = error.response.data.error;
        setError(errorDescription);
      });
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="logo" style={{ width: "70px" }} />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="Firstname"
                  label="Firstname"
                  name="Firstname"
                  autoComplete="Firstname"
                  value={firstname}
                  onChange={handleFirstname}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="Lastname"
                  label="Lastname"
                  name="Lastname"
                  autoComplete="Lastname"
                  value={lastname}
                  onChange={handleLastname}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  value={city}
                  onChange={handleCity}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  value={country}
                  onChange={handleCountry}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={handleUsername}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmail}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePassword}
                />
              </Grid>
              {error && (
                <p style={{ color: "red" }} className="error-message">
                  {error}
                </p>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={[
                {
                  color: "#303030",
                  borderColor: "#404040",
                  mt: 3,
                  mb: 2,
                },
                {
                  "&:hover": {
                    color: "#303030",
                    borderColor: "#404040",
                    opacity: 0.9,
                  },
                },
              ]}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
