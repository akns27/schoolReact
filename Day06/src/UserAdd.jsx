import { useRef, useState } from "react";
import "./style.css";

const User = ({ user }) => {
  const { id, name, email } = user;
  console.log(name, email);
  return (
    <div>
      <b>{name}</b>
      <span>{email}</span>
      <button>삭제</button>
    </div>
  );
};

export default function UseRefAdd() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const { name, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
    },
  ]);
  const nextId = useRef(4); //useRef로 4 설정
  const inputRef = useRef(); //useRef로 설정

  const onChange = (e) => {
    //input에 반영될 내용 수정
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    //배열 복사하고 요소 추가
    const user1 = {
      id: nextId.current,
      name, //input의 값
      email, //input의 값
    };
    setUsers([...users, user1]);
    // nextId값 1 증가
    nextId.current +=1;
  };


  
  return (
        <div>  
        <input name = "name" onChange={onChange} value={name} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>  
        {
          users.map((user)=>{
            return <User user={user} />})  
        }
        </div>
  );
}
