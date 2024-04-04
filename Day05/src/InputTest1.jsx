/*InputTest1.jsx */
import "./Style.css"

import { useState } from "react";
export default function InputTest1() {
  // const [name,setName] = useState("");

  //객체 생성하기
  //2. useState이용하여 객체 반영하기

  const user1 = {
    id: 0,
    name: "",
    email: "",
  };

  const [user,setUser] = useState(user1);//객체의 주소가 초기값으로 들어감

  return (
    <div>
      <form action="">
        <h1> 로그인</h1>

        <li>
          이름
          <input type="text" onChange={
            (e) => setUser({
              ...user,//user를 복사한 다음에
              name : e.target.value,
            }
            )} value = {user.name}
            
            />
          {/* 입력된 걸로 {name}을 바꿔줘 */}
        </li>
        <li>
          이메일
          <input type="email" onChange={
            (e) => setUser({
              ...user,
              email : e.target.value,
            }
            )}value = {user.email} 
            />
        </li>
        {/* {console.log(user)} */}
        <li>
          <button type="submit" action="">
            확인
          </button>
          <button onClick = {() => setUser({
            ...user,
            id:0,
            name : '',
            email : '',
          })}>취소</button>
        </li>
      </form>
      <div id="modal">
        입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
      </div>
    </div>
  );
}
