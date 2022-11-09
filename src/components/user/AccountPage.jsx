import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react"; // <== IMPORT useContext
import axios from "axios";
import { AuthContext } from "../Context/Auth.context";
import { BASE_URL } from "../../consts";
import { Typography } from "@mui/material";

export default function AccountPage() {
  /* handleClose as props to close login Modal */
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState(undefined);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { user, token } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const requestBody = { firstname, lastname, username, city, country };

    const config = {
      method: "patch",
      baseURL: BASE_URL,
      url: `/user/profile`,
      data: { firstname: firstname },
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then((response) => {
        console.log("response status", response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>
            Account infomation
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography sx={{ mb: 2, mt: 2, fontSize: "0.8rem" }}>
                  First Name
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="Firstname"
                  label={user.firstname}
                  name="Firstname"
                  autoComplete="Firstname"
                  value={firstname}
                  onChange={handleFirstname}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ mb: 2, mt: 2, fontSize: "0.8rem" }}>
                  Last Name
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="Lastname"
                  label={user.lastname}
                  name="Lastname"
                  autoComplete="Lastname"
                  value={lastname}
                  onChange={handleLastname}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ mb: 2, mt: 2, fontSize: "0.8rem" }}>
                  Username
                </Typography>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  fullWidth
                  id="outlined-basic"
                  label={user.username}
                  autoFocus
                  value={username}
                  onChange={handleUsername}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography sx={{ mb: 2, mt: 2, fontSize: "0.8rem" }}>
                  City
                </Typography>
                <TextField
                  fullWidth
                  id="city"
                  label={user.city}
                  name="city"
                  autoComplete="city"
                  value={city}
                  onChange={handleCity}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ mb: 2, mt: 2, fontSize: "0.8rem" }}>
                  Country
                </Typography>
                <TextField
                  fullWidth
                  id="country"
                  label={user.country}
                  name="country"
                  autoComplete="country"
                  value={country}
                  onChange={handleCountry}
                />
              </Grid>

              {error && (
                <p style={{ color: "red" }} className="error-message">
                  {error}
                </p>
              )}
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={[
                {
                  color: "white",
                  borderColor: "#404040",
                  mt: 3,
                  mb: 2,
                },
                {
                  "&:hover": {
                    color: "white",
                    borderColor: "#404040",
                    opacity: 0.9,
                  },
                },
              ]}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
