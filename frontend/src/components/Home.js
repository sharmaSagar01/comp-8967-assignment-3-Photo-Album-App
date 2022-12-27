import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Search from "./Search/Search";
import "../styles/Home.css";


const Home = () => {
  const [loginData, setLoginData] = useState();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setLoginData(localStorage.getItem("email") || "");
  }, [loginData]);

  return (
    <div>
      <NavBar />
      {loginData ? (
        <>
          <Search searchData={searchData} setSearchData={setSearchData} />
          <Content searchData={searchData} />
        </>
      ) : (
        <>
          <h1>Welcome to our app</h1>
        </>
      )}
    </div>
  );
};

export default Home;
