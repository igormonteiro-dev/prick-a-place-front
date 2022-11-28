import { Button, Dialog, DialogContent, useMediaQuery } from "@mui/material";
import { BASE_URL } from "../../consts";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddToFavorite } from "../favorites/AddToFavorite";
import LoginPage from "../Authentication/LoginPage";
import { AuthContext } from "../Context/Auth.context";
import { useTheme } from "@emotion/react";

function HeroDetail() {
  const [place, setPlace] = useState(null);
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenLogin = () => {
    setOpen(true);
  };

  const handleCloseLogin = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/places/${id}`).then((response) => {
      console.log("response.data", response.data);
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return <></>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <AddToFavorite placeid={id} />
      ) : (
        <div>
          <Button
            onClick={handleOpenLogin}
            variant="outlined"
            sx={[
              {
                px: 2,
                py: 1,
                minWidth: 90,
                fontSize: "1rem",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "white",
                color: "white",
                backgroundColor: "secondary.main",
              },
              {
                "&:hover": {
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "white",
                  backgroundColor: "#ff395c",
                  opacity: 0.9,
                },
              },
            ]}
          >
            Login to favorite this place !
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleCloseLogin}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
              <LoginPage handleCloseLogin={handleCloseLogin} />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default HeroDetail;
