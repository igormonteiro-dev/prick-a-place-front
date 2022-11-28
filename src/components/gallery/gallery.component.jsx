import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../consts";
import PlaceIcon from "@mui/icons-material/Place";

export default function Gallery({ filter }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (filter.type || filter.with) {
      const x = [];

      if (filter.type) {
        x.push(`theme=${filter.type.toLowerCase()}`);
      }
      if (filter.with) {
        x.push(`withWho=${filter.with.toLowerCase()}`);
      }

      console.log(`${BASE_URL}/places?${x.join("&")}`);

      axios.get(`${BASE_URL}/places?${x.join("&")}`).then((response) => {
        console.log("response.data", response.data);
        setPlaces(response.data);
      });
    } else {
      axios.get(`${BASE_URL}/places`).then((response) => {
        console.log("response.data", response.data);
        setPlaces(response.data);
      });
    }
  }, [filter]); // <- [] means: Run the effect only once, after initial render

  if (!places) {
    return (
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    );
  }

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {places.map((place) => (
              <div key={place.id} className="group relative">
                <div className="h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
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
                        <PlaceIcon sx={{ color: "#ff395c" }} />
                        {place.name}, {place.zipCode}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
