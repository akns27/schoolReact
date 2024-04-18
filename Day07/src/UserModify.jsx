import { useRef, useState } from "react";
import "./style.css";

const User = ({ user, onRemove, onToggle, onModify }) => {
  const { id, name, email } = user;
  console.log(name, email);
  return (
    <div>
      <b
        onClick={() => onToggle(id, user)}
        style={{ cursor: "pointer", color: user.selected ? "blue" : "black" }}
      >
        {name}
      </b>
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      <button onClick={() => onModify(id, user)}>수정</button>
    </div>
  );
};

export default function UserModify() {
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
      selected: false,
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
      selected: true,
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
      selected: false,
    },
  ]);
  const nextId = useRef(4);
  const inputRef = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    const user1 = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, user1]);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    const rmUser = users.filter((user) => user.id !== id); //1. 삭제함수 filter사용
    setUsers(rmUser);
  };

  const onToggle = (id, user) => {
    //1. 이름 클릭 시 객체의 slected를 true/false
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              selected: !user.selected, //원래의 값을 반전시킴
            }
          : user
      ),
      setInputs({
        name: user.name,
        email: user.email,
      })
    );
  };

  const onModify = (id, user) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              name: inputs.name,
              email: inputs.email,
            }
          : user
      )
    );

    //인풋창 깨끗하게
    setInputs({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>
      <table>
        <thead>
          <tr>
            <th>연번</th>
            <th>이름</th>
            <th>이메일</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td onClick={() => onToggle(user.id, user)}>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => onRemove(user.id)}>삭제</button>
                <button onClick={() => onModify(user.id, user)}>수정</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
