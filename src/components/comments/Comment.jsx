// import "./Comment.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Avatar, Button, TextareaAutosize, Typography } from "@mui/material";
import { flexCenter } from "../../themes/commonStyles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";
import { BASE_URL } from "../../consts";

export default function Comment({ comment, author }) {
  const [state, setState] = useState(comment.comment);
  const [showInput, setShowInput] = useState(false);
  const { user } = useContext(AuthContext);
  const isSameUser = author?._id === user?._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "PATCH",
      baseURL: BASE_URL,
      url: `/places/comments/${comment._id}`,
      data: { comment: state },
      headers: { authorization: `Bearer ${localStorage.getItem("authToken")}` },
    };
    axios(config)
      .then(() => {
        setShowInput(!showInput);
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = () => {
    const config = {
      method: "DELETE",
      baseURL: BASE_URL,
      url: `/places/comments/${comment._id}`,
      data: { comment: state },
      headers: { authorization: `Bearer ${localStorage.getItem("authToken")}` },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
        // setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <Paper variant="outlined" sx={{ mb: 2, py: 2 }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", alignContent: "left" }}>
            <Avatar
              srcSet={author?.photo}
              sx={{
                ml: 5,
                mr: 2,
                ".MuiAvatar-img": {
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                },
              }}
              alt="img"
              id="demo-positioned-button"
            />
            <Box sx={{ ...flexCenter }}>
              <Typography sx={{ fontSize: "1rem", mr: 3 }}>
                {author?.username}
              </Typography>
              {showInput ? (
                <>
                  <TextareaAutosize
                    aria-label="text"
                    placeholder="Empty"
                    style={{ width: 200 }}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />

                  {/* <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  /> */}
                  <Button
                    sx={[
                      {
                        ml: 2,
                        minWidth: 40,
                        color: "#FFF",
                        fontSize: ".9rem",
                        fontWeight: "400",
                        backgroundColor: "#f04a58",
                      },
                      {
                        "&:hover": {
                          background: "#f53b4b",
                          color: "white",
                          opacity: 0.9,
                        },
                      },
                    ]}
                    onClick={handleSubmit}
                  >
                    Save edit
                  </Button>
                </>
              ) : (
                <>
                  <Typography>{state}</Typography>
                  <Typography sx={{ ml: 5 }}>{author?.createdAt}</Typography>
                </>
              )}
              {isSameUser && (
                <>
                  <DeleteIcon
                    sx={{ ml: 5, fontSize: "20px", color: "primary.main" }}
                    onClick={() => handleDelete(!showInput)}
                  />
                  <EditIcon
                    sx={{ fontSize: "20px", color: "primary.main" }}
                    comments={"comments"}
                    onClick={() => setShowInput(!showInput)}
                  />
                </>
              )}
            </Box>
          </Box>
          {/* </Item>
          </Stack> */}
        </Box>
      </Paper>
    </form>
  );
}
