import { useState } from "react";
import "./style.css";

const msgs = [
  "안녕하세요. 오늘의 일정입니다.",
  "점심시간이 11시 30분으로 변경되었습니다.",
  "이제 곧 회의가 시작됩니다.",
];

const InputMsg = ({ input, setInput, onCreate, onCancel }) => {
  return (
    <div className="container">
      <input
        type="text"
        name="msg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

const Message = ({ msg, index, onRemove, onModify, onSetInput }) => {
  return (
    <div className="wrapper">
      <div onClick={() => onSetInput(msg)}></div>
      <div className="control">
        <button onClick={() => onRemove(index)}>삭제</button>
        <button onClick={() => onModify(index)}>수정</button>{
      </div>
    </div>
  );
};

export default function MsgListLast() {
  const [input, setInput] = useState(""); // 입력을 관리할 상태
  const [msgList, setMsgList] = useState(msgs); // 메시지 리스트 관리

  const onCreate = () => {
    if (input) {
      //입력한 새 메시지(input)를 펼쳐진 배열의 뒤에 추가
      setMsgList([...msgList, input]);
      setInput(""); // 입력 초기화
    }
  };

  const onRemove = (index) => {
    const newMsgList = msgList.filter((_, i) => i !== index);
    setMsgList(newMsgList);
  };
  //지우고 싶은 메시지 위치(index)를 제외한 나머지 메시지들을 필터링해서 새로운 리스트로 만들어줘요.

  const onModify = (index) => {
    const newMsgList = [...msgList];
    newMsgList[index] = input;
    setMsgList(newMsgList);
    setInput("");
  };

  const onSetInput = (content) => {
    setInput(content);
  };

  const onCancel = () => {
    setInput("");
  };

  return (
    <div>
      <h1>일정 관리</h1>
      <InputMsg input={input} setInput={setInput} onCreate={onCreate} onCancel={onCancel} />
      {msgList.map((msg, index) => (
        <Message
          key={index}
          msg={msg}
          index={index}
          onRemove={onRemove}
          onModify={onModify}
          onSetInput={onSetInput}
        />
      ))}
    </div>
  );
}
