import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ForestIcon from "@mui/icons-material/Forest";
import GrainIcon from "@mui/icons-material/Grain";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../consts";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  const [place, setPlace] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`${BASE_URL}/places/${id}`).then((response) => {
      console.log("response.data", response.data);
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return <></>;
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          All places
        </Link>
        <span>
          <ForestIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {place.placeFound.category}
        </span>

        <span>
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {place.placeFound.name}
        </span>
      </Breadcrumbs>
    </div>
  );
}
