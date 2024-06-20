import React from "react";
import "../styles.css";
import { useParams } from "react-router-dom";
import Rooms from "../Rooms.jsx";
import { Nav,Button } from 'react-bootstrap';
import { useState } from "react";
import { useContext } from "react";
import {Context1} from "../App.jsx";

export default function DetailTab() {
  const { id } = useParams();
  let room = Rooms.filter((item) => item.key == id);
  let result = room[0];
  let [tab, setTab] = useState(0);
  const {theme, toggleTheme} = useContext(Context1);
  

  return (
    <main style={{backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    }}>
      <div>테마색깔 : {theme}</div>
      <button onClick={toggleTheme} id="theme" variant="light">테마변경</button>
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
            평점: {result.rating}{" "}
            <span className="visits">({result.numberOfRating})</span>
          </div>
          <div className="price">
            {result.price} 원<span className="month">/ month</span>
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link0">상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link1">리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link2" disabled>
            상품Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {tab==0 && (<div>
        <p>
          5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을
          제공합니다.
        </p>
        <p>
          모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급
          어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.
        </p>
        <br /> 위치 :5~9층
        <br />
        룸구성 : 침실 1, 욕실 1
        <br />
        문의전화 : 02-2230-0700
      </div>)}

      {tab==1 && (<div>내용1</div>)}
      {tab==2 && (<div>내용2</div>)}

    </main>
  );
}
