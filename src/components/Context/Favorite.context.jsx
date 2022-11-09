import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../consts";
import { AuthContext } from "./Auth.context";

export const FavContext = React.createContext();

export function FavoriteProviderWrapper(props) {
  const [allFavorites, setAllFavorites] = useState([]);
  const { token } = useContext(AuthContext);

  ///////////////////////////////////
  /*UPDATE FAV LIST*/
  //////////////////////////////////

  const updateFavoritesList = useCallback(() => {
    if (!token) {
      setAllFavorites([]);
      return;
    }

    const config = {
      method: "get",
      baseURL: BASE_URL,
      url: `/user/favorites`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        setAllFavorites(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(updateFavoritesList, [updateFavoritesList]);

  ///////////////////////////////////
  /*ADD TO FAV LIST*/
  //////////////////////////////////
  const addToFavorites = useCallback(
    (placeId) => {
      const config = {
        method: "post",
        baseURL: BASE_URL,
        url: `/user/favorites/${placeId}`,

        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
      };
      axios(config)
        .then((response) => {
          console.log("response status", response.status);
          updateFavoritesList();
          // Navigate('/')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [token, updateFavoritesList]
  );

  ///////////////////////////////////
  /*DELETE FAVORITE*/
  //////////////////////////////////

  function deleteFavorite(favoriteId) {
    const config = {
      method: "delete",
      baseURL: BASE_URL,
      url: `/user/favorites/${favoriteId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        updateFavoritesList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <FavContext.Provider
      value={{
        allFavorites,
        deleteFavorite,
        addToFavorites,
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
}
