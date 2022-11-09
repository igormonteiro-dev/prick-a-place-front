import React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../consts";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export default function TopPlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/random",
      baseURL: BASE_URL,
    }).then((response) => {
      console.log("response.data", response.data);
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto pt-5">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              fontWSeight: 500,
            }}
          >
            You might also like
          </Typography>
          <HorizontalRuleIcon
            sx={{ color: "secondary.main", fontSize: "50px", mt: "-20px" }}
          />
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {places.map((place) => (
              <div key={place.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      <a href={`/places/${place._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {place.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {place.zipCode}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
