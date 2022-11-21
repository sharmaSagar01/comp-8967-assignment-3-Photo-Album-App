import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

import "./Post.css";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Post = ({ post, setCurrentId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <Card className="card">
      <CardMedia
        className="media"
        image={post.selectedFile}
        title={post.title}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      />

      <div className="overlay">
        {!show && (
          <Typography varient="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        )}
        {show && (
          <Typography varient="h6" fontSize="large" className="title">
            {post.title}
          </Typography>
        )}
        {show && (
          <Button
            color="primary"
            onChange={(e) => e.preventDefault()}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
            className="deleteButton"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="medium" />
            Delete
          </Button>
        )}
      </div>

      <CardActions className="cardActions">
        <Button
          className="button"
          size="small"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          <VisibilityIcon fontSize="medium" className="icon" />
          {""} Show Image
        </Button>
        {isOpen && (
          <Lightbox
            imageTitle={post.title}
            imageCaption={post.message}
            mainSrc={post.selectedFile}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}
        <Button
          className="button"
          size="small"
          color="primary"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <EditIcon fontSize="medium" className="icon" />
          {""} Edit Image
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
