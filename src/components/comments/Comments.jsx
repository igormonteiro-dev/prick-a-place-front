import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { AuthContext } from "../Context/Auth.context";
import { BASE_URL } from "../../consts";
import { Typography } from "@mui/material";

const Comments = ({ placeid }) => {
  const [allComments, setAllComments] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  const updateCommentsList = useCallback(() => {
    if (!placeid) {
      console.error("No placeid provided for comments");
      return;
    }

    const config = {
      method: "get",
      baseURL: BASE_URL,
      url: `/places/${placeid}/comments`,
      headers: {},
    };

    axios(config)
      .then((response) => {
        setAllComments(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [placeid]);

  useEffect(() => {
    updateCommentsList();
  }, [updateCommentsList]);

  return (
    <div className="comments">
      <ul>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            mb: 2,
            mt: 2,
            color: "primary.main",
          }}
        >
          Latest reviews
        </Typography>
        {allComments.map((comment) => {
          return (
            <li>
              <Comment comment={comment} author={comment.user} />
            </li>
          );
        })}
      </ul>
      {isLoggedIn && (
        <AddComment placeid={placeid} updateCommentsList={updateCommentsList} />
      )}
    </div>
  );
};

export default Comments;
