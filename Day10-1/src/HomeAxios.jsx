import axios from "axios";
import Rooms from "./Rooms.jsx";
import Card from "./components/Card.jsx";
import Router from "./Router.jsx";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomeAxios() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(Rooms);
  const handleLeadMore = () => {
    axios
      .get("https://mikki32sw.github.io/airanb/data.json")
      .then((result) => {
        console.log(result.data);
        const copyRooms = [...rooms, ...result.data];
        console.log(copyRooms);
        setRooms(copyRooms);
      })
      .catch(() => {
        console.log("get 실패함");
      });
  };
  return (
    <>
      <Router />
      <div id="wrapper">
        {Rooms.map((room) => (
          <div className="box" key={room.key}>
            {/* detail/+room.key */}
            <img
              onClick={() => navigate(`/detail/${room.key}`)}
              className="boximage"
              src={room.image}
            />
            <p>{room.name}</p>
          </div>
        ))}

      </div>
      <button style={{padding:"20px"}} onClick={handleLeadMore}>더보기</button>
    </>
  );
};, 