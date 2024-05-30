import React from "react";
import "../styles.css";
import { useParams } from "react-router-dom";
import Rooms from "../Rooms.jsx"
export default function Detail() {

  const {id} = useParams();
  let room = Rooms.filter((item)=> item.key==id);
  let result = room[0];

  return (
    <div className="container">
      <div className="box image">
        <img src={result.image} className="boximage" alt="Room" />
      </div>
      <div className="box">
        <div className="location">{result.location}에 위치</div>
        <div className="title">{result.name}</div>
        <hr />
        <div className="guest">최대인원{result.totalGuest} 명</div>
        <div className="rating">
          평점: {result.rating} <span className="visits">({result.numberOfRating})</span>
        </div>
        <div className="price">
          {result.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
}
