import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { BASE_URL } from "../../consts";
import { AuthContext } from "../Context/Auth.context";

export default function DeleteUser() {
  const { logOutUser, token } = useContext(AuthContext);

  function handleDelete() {
    console.log("You clicked submit.");
    const DeleteUser = {
      method: "delete",
      baseURL: BASE_URL,
      url: `/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(DeleteUser)
      .then(function (response) {
        console.log(response.data);
        logOutUser();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={handleDelete}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete Account
      </Button>
    </Stack>
  );
}
