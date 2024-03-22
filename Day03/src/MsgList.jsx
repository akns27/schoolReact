function MsgList() {
  const msgList = ["안녕하세요", "2학년 학생입니다", "리액트 수강생입니다."];

  let msgCopy = [...msgList];
  msgCopy.push("강의가 끝났습니다.");

  return (
    <>
      <ul>
        {msgCopy.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </>
  );
}

export default MsgList;
