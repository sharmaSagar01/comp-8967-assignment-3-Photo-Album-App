import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Posts = ({ setCurrentId, searchData }) => {
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="strech"
      spacing={3}
    >
      {searchData.length === 0
        ? posts
            .filter((post) => post.createdBy === localStorage.getItem("email"))
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))
        : searchData
            .filter((post) => post.createdBy === localStorage.getItem("email"))
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
    </Grid>
  );
};

export default Posts;
