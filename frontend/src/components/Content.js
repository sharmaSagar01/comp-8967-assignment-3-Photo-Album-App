import React, { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import "../styles/Content.css";
import Posts from "./Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";

const Content = ({ searchData }) => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="content_container">
      <div className="content_form">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <div className="content_body">
        <Posts setCurrentId={setCurrentId} searchData={searchData} />
      </div>
    </div>
  );
};

export default Content;
