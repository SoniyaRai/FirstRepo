import React from "react";
import Header from "./component/Header";
import "./Home.css";
import Pic from "./images/hh.jpg";
import Navbar from "./component/Navbar";

const Home = () => {
  return (
    <div className="cont-1">
      <div className="background-img">
        <img src={Pic} alt="" />
      </div>
    </div>
  );
};

export default Home;
