import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pickaplace_red.png";
import Stack from "@mui/material/Stack";
import ButtonSignUp from "./Buttons/ButtonSignUp";
import ButtonLogin from "./Buttons/ButtonLogin";
import Box from "@mui/material/Box";
import { AuthContext } from "../Context/Auth.context";
import { useContext } from "react";
import NavProfile from "./NavProfile";

export default function NavBar() {
  const {
    isLoggedIn,
    user, // <== UPDATE
  } = useContext(AuthContext);

  return (
    <Box spacing="" sx={{ flexGrow: 1, pt: "5px" }}>
      <AppBar
        elevation={0}
        position="relative"
        sx={{
          bgcolor: "white",
          minHeight: 80,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{ borderBottom: 1, borderColor: "#f4f5f5", pb: 2, pt: 2 }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} alt="logo" style={{ width: "60px", mr: 2 }} />
            </Link>
            <Typography
              sx={{
                mr: 2,
                display: { xs: "none", sm: "block" },
                fontSize: "22px",
                fontWeight: 800,
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              Pick a place
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/*    UPDATE     */}
            {isLoggedIn && (
              <>
                <NavProfile />
                <span>{user && user.name}</span>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <ButtonLogin />
                    <ButtonSignUp />
                  </Stack>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
