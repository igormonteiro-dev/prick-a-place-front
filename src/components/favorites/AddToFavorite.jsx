import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { FavContext } from "../Context/Favorite.context";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function AddToFavorite() {
  const { addToFavorites, deleteFavorite, allFavorites } =
    useContext(FavContext);

  const { id: placeId } = useParams();

  // We look if this place id has already been favorited, so the button change
  const favorite = allFavorites.find((fav) => fav.place?._id === placeId);

  if (favorite) {
    return (
      <Button
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
              color: "white",
              backgroundColor: "secondary.main",
            },
          },
        ]}
        onClick={() => deleteFavorite(favorite._id)}
      >
        <FavoriteIcon style={{ fontSize: "30px" }} />
        <Typography sx={{ ml: "10px", fontSize: "1rem" }}>
          I love it!
        </Typography>
      </Button>
    );
  }

  return (
    <Button
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
            color: "white",
            backgroundColor: "secondary.main",
          },
        },
      ]}
      onClick={() => addToFavorites(placeId)}
    >
      <FaRegHeart style={{ fontSize: "30px" }} />
      <Typography sx={{ ml: "10px", fontSize: "1rem" }}>
        Add to favorite
      </Typography>
    </Button>
  );
}
