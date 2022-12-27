import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TextField, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


const Form = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({
    createdBy: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      dispatch(
        createPost({ ...postData, createdBy: localStorage.getItem("email") })
      );
      clear();
      window.location.reload();
    }
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      createdBy: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.heading} varient="h4">
        {currentId ? "UPDATE" : "ADD"} YOUR PHOTO MEMORIES
      </Typography>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {/* {localStorage.getItem("email") && (
          <TextField
            name="createdBy"
            className={classes.input}
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.createdBy}
            onChange={(e) =>
              setPostData({
                ...postData,
                createdBy: localStorage.getItem("email"),
              })
            }
            hidden
          />
        )} */}
        <TextField
          name="title"
          className={classes.input}
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          className={classes.input}
          // minRows={3}
          variant="outlined"
          label="Add Description"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          className={classes.input}
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
