import { useState } from "react";
import "./style.css";

const msgs = [
  "안녕하세요. 오늘의 일정입니다.",
  "점심시간이 11시 30분으로 변경되었습니다.",
  "이제 곧 회의가 시작됩니다.",
];

export default function MsgListLast() {
  const [input, setInput] = useState(""); //1. 입력을 관리할 상태
  const [msgList, setMsgList] = useState(msgs); //2. 메시지 리스트 관리

  const onCreate = () => {
    // 메시지 추가 함수
    setMsgList([...msgList, input]);
    setInput(""); // 입력 필드 초기화
  };
  // index는 수정할 메시지의 위치
  const onRemove = (index) => {
    // 메시지 삭제 함수
    //filter 함수의 구문에서 첫 번째 매개변수는 배열의 각 요소의 값을 나타내고, 두 번째 매개변수는 그 요소의 인덱스를 나타내기 때문
    //삭제만 하기에 각 요소의 값은 필요 없으니 _
    const newMsgList = msgList.filter((_, i) => i !== index);
    setMsgList(newMsgList);
  };


  const onModify = (index) => {
    // 메시지 수정 함수
    const newMsgList = [...msgList];
    newMsgList[index] = input;
    setMsgList(newMsgList);
    setInput(""); // 입력 필드 초기화
  };

  // const onToggle = (content) => {
  //   setInput(content);
  // };

  return (
    <div>
      <h1>일정 관리</h1>
      <div className="container">
        <input
          type="text"
          name="msg"
          value={input}
          onChange={(e) => setInput(e.target.value)} // 입력 필드 상태 업데이트
        />
        <button onClick={onCreate}>등록</button>
        <button onClick={() => setInput("")}>취소</button>
      </div>
      {msgList.map((msg, index) => (
        <div key={index}>
          <div className="wrapper">
          <div onClick={() => setInput(msg)}>
            {msg}
          </div>
            <div className="control">
              <button onClick={() => onRemove(index)}>삭제</button>{" "}
              <button onClick={() => onModify(index)}>수정</button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
