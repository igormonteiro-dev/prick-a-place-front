import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Container } from "@mui/system";
import axios from "axios";
import { BASE_URL } from "../consts";
import PlaceMap from "../components/map/PlaceMap";
import Comments from "../components/comments/Comments";
import HeroDetail from "../components/hero/HeroDetail";
import TopPlaces from "../components/random-places/TopPlaces";
import Breadcrumbs from "../hooks/breadcrumbs";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export default function PlaceDet() {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/places/${id}`).then((response) => {
      console.log("response.data", response.data);
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return <></>;
  }

  const renderSidebar = () => {
    return (
      <>
        <div className=" w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 ">
          <div>
            <img className="lg:w-full" src={place.placeFound.image} alt="" />
            <div className="text-left mt-5">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-4xl">
                <span className="block xl:inline">{place.placeFound.name}</span>{" "}
                <span className="block text-[#ff395c] xl:inline">in Paris</span>
              </h1>
              <div className="mt-10">
                <p className="mt-2 text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl text-base md:mt-3 md:text-base lg:mx-0">
                  <AssistantDirectionIcon
                    sx={{ color: "#5D2C73", fontSize: 30 }}
                  />{" "}
                  {place.placeFound.adress} - {place.placeFound.zipCode}, Paris
                </p>

                <p className="mt-2 text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl text-base md:mt-3 md:text-base lg:mx-0">
                  <DirectionsSubwayIcon
                    sx={{ color: "#ff7624", fontSize: 30 }}
                  />{" "}
                  Line: {place.placeFound.metroLine} -{" "}
                  {place.placeFound.metroStation}
                </p>

                <p className="mt-2 text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl text-base md:mt-3 md:text-base lg:mx-0 pb-5">
                  <AccessTimeIcon sx={{ color: "#05aa6d", fontSize: 30 }} />{" "}
                  Opening times: {place.placeFound.OpeningTimes}
                </p>
              </div>
              <HeroDetail />
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderSection1 = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl border-b sm:border-t sm:border-l sm:border-r border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 pb-10 px-0 sm:p-4 xl:p-8;">
        <PlaceMap />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl md:text-2xl ">
            <span className=" xl:inline">About</span>
          </h1>
          <HorizontalRuleIcon
            sx={{
              color: "secondary.main",
              fontSize: "50px",
              mt: "-20px",
            }}
          />
        </div>

        <div className="text-neutral-6000 dark:text-neutral-300 mx-1">
          <span>{place.placeFound.description}</span>
          <br />
          <br />
        </div>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <Comments placeid={id} className="py-8" />
        </div>
        <TopPlaces />
      </div>
    );
  };

  return (
    <Container maxWidth="lg">
      <div data-nc-id="AuthorPage">
        <div className="container mx-auto mt-5">
          <Breadcrumbs />
        </div>
        <Helmet>
          <title>Login || Booking React Template</title>
        </Helmet>
        <main className="container mt-12 mb-24 lg:mb-32 flex flex-col lg:flex-row">
          <div className="block flex-grow mb-24 lg:mb-0">
            <div className="lg:sticky lg:top-24">{renderSidebar()} </div>
          </div>
          <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0">
            {renderSection1()}
          </div>
        </main>
      </div>
    </Container>
  );
}
