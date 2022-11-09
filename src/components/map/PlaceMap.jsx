import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../consts";

export default function PlaceMap() {
  const [place, setPlace] = useState(null);
  const { id } = useParams();
  const center = useMemo(
    () => ({ lat: 48.88092095062544, lng: 2.3826055443970815 }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/places/${id}`).then((response) => {
      console.log("response.data", response.data);
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return <p>loading ...</p>;
  }

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
