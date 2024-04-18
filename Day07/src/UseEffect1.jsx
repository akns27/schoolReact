import React, { useState, useEffect } from "react";
import InputField from "./Inputfield";
import ShowModal from "./ShowModal";

export default function UseEffect1() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [depName, setDepName] = useState("");

  useEffect(() => {
    console.log("마운트 시에만 실행");
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }, []);

  useEffect(() => {
    alert(`이펙트 함수, 변경 후 함수: ${depName}`);
    return () => {
      alert(`이펙트 함수, 변경 전 함수: ${name}`);
    };
  }, [depName]);

  return (
    <div>
      <form>
        <InputField
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </form>
      <button
        type="button"
        onClick={() => {
          setDepName(name);
        }}
      >
        이름 출력
      </button>
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
      {showModal && <ShowModal msg="useEffect 실습 입니다." />}
    </div>
  );
}
