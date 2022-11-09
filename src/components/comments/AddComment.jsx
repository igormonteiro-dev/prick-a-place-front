import axios from "axios";
import React, { useContext, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AuthContext } from "../Context/Auth.context";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../consts";

const AddComment = ({ updateCommentsList }) => {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [text, setText] = useState("");
  const { id } = useParams();

  const resetForm = () => {
    setText("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      alert("You are not logged in");
      return;
    }

    const data = {
      comment: text,
    };

    const config = {
      method: "post",
      baseURL: BASE_URL,
      url: `/places/${id}/comments`,

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log("response status", response.status);
        updateCommentsList();
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Typography
        sx={{
          mb: 2,
          mt: 7,
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "primary.main",
        }}
        variant="h6"
        component="h2"
        gutterBottom
      >
        Attach your review
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          styles={{ marginTop: "50px", marginBottom: 20 }}
          onChange={(event) => setText(event.target.value)}
          value={text}
          label="Comment"
          variant="outlined"
          multiline
          rows={4}
          color="secondary"
          fullWidth
          required
        />
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Button
            sx={{ mt: 2, px: 3 }}
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddComment;
