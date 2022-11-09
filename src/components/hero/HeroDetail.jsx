import { Button, Dialog, DialogContent, useMediaQuery } from "@mui/material";
import { BASE_URL } from "../../consts";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl ">
        <div className="relative z-10 bg-white lg:w-full lg:max-w-2xl">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{place.placeFound.name}</span>{" "}
                <span className="block text-[#ff395c] xl:inline">in Paris</span>
              </h1>

              <div className="mt-10">
                <p className="mt-2 text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl text-base md:mt-3 md:text-base lg:mx-0">
                  <AssistantDirectionIcon
                    sx={{ color: "#5D2C73", fontSize: 35 }}
                  />{" "}
                  {place.placeFound.adress} - {place.placeFound.zipCode}, Paris
                </p>

                <p className="mt-2 text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-3 md:text-base lg:mx-0">
                  <DirectionsSubwayIcon
                    sx={{ color: "#ff7624", fontSize: 35 }}
                  />{" "}
                  Line: {place.placeFound.metroLine} -{" "}
                  {place.placeFound.metroStation}
                </p>

                <p className="mt-2 text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-3 md:text-base lg:mx-0 pb-5">
                  <AccessTimeIcon sx={{ color: "#05aa6d", fontSize: 35 }} />{" "}
                  Opening times: {place.placeFound.OpeningTimes}
                </p>
              </div>
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
                          fontSize: ".8rem",
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
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={place.placeFound.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroDetail;
