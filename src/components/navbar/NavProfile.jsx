import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../Context/Auth.context";
import { useContext } from "react";
import { Typography } from "@mui/material";

import { Link } from "react-router-dom";

export default function ImageAvatars() {
  const { logOutUser, user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        srcSet={user.photo}
        sx={{
          ml: 5,
          ".MuiAvatar-img": {
            backgroundSize: "contain",
            backgroundPosition: "center",
          },
        }}
        alt="img"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <Menu
        sx={{
          MuiMenu: { left: "850px" },
          mt: 6,
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            color="none"
            to="/user"
            style={{ textDecoration: "none", color: "#303030" }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.8rem",
              }}
            >
              Profile
            </Typography>
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link
            color="black"
            to="/user"
            style={{ textDecoration: "none", color: "#303030" }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.8rem",
              }}
            >
              Favorites
            </Typography>
          </Link>
        </MenuItem> */}
        <MenuItem onClick={logOutUser}>
          <Typography sx={{ textAlign: "left", fontSize: "0.8rem" }}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
