import Rooms from "./Rooms.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Router from "./Router.jsx";
import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Router />
      <div id="wrapper">
        {Rooms.map((room) => (
          <div className="box" key={room.key}>
            {/* detail/+room.key */}
            <img onClick={()=>navigate(`/detail/${room.key}`)} className="boximage" src={room.image} />
            <p>{room.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
