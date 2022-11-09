import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { BASE_URL } from "../consts";
import PlaceMap from "../components/map/PlaceMap";
import HeroDetail from "../components/hero/HeroDetail";
import TopPlaces from "../components/random-places/TopPlaces";

export default function PlaceDetail() {
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

  return (
    <>
      <HeroDetail />
      <div className="container mx-auto content-center">
        <main className="container relative z-10 mt-11 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-5/2 xl:w-3/2 space-y-8 lg:space-y-10 lg:pr-6">
            {/* CONTENT */}
            <div className="w-full flex flex-col sm:rounded-2xl border-b sm:border-t sm:border-l sm:border-r border-neutral-200 dark:border-neutral-700 space-y-4 sm:space-y-4 pb-6 px-0 sm:p-4 xl:p-6">
              <h2 className="text-2xl pt-2 font-semibold">About</h2>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 pb-30"></div>
              <div className="text-neutral-6000 dark:text-neutral-300">
                <span>{place.placeFound.description}</span>
                <br />
                <br />
                <PlaceMap />
              </div>
            </div>

            <div className="w-full flex flex-col sm:rounded-2xl border-b sm:border-t sm:border-l sm:border-r border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 pb-10 px-0 sm:p-4 xl:p-8">
              {/* comment */}
              <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                <Comments placeid={id} className="py-8" />
              </div>
            </div>
          </div>
        </main>
        <TopPlaces />
      </div>
    </>
  );
}
