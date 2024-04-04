/*InputTest1.jsx */
import "./Style.css"
import { useState } from "react";
const Modal = (props)=>{
  const {name, nickname, email} = props;//props는 객체, 구조분해할당
  return(
  <div id="modal">
  입력된 이름은 <span>{name}</span>이고, 입력된 닉네임은<span>{nickname}</span> 입력된 이메일은 <span>{email}</span>
</div>
);
}

export default function InputTest2() {

  const [inputs, setInputs] = useState({
    name : '',
    nickname : '',
    email : '',
  });

  const {name, nickname, email} = inputs;

  return (
    <div>
      <form action="">
        <h1> 로그인</h1>

        <li>
          이름
          <input type="text" name="name" placeholder="이름을 입력해주세요" value={name} onChange={
            (e) => setInputs({
              ...inputs,//user를 복사한 다음에
              [e.target.name] : e.target.value,
            }
            )}
            
            />
        </li>
        <li>
          닉네임
          <input type="text" name="nickname" placeholder="닉네임을 입력해주세요" value={nickname} onChange={
            (e) => setInputs({
              ...inputs,//user를 복사한 다음에
              [e.target.name] : e.target.value,
            }
            )}
            
            />
          {/* 입력된 걸로 {name}을 바꿔줘 */}
        </li>
        <li>
          이메일
          <input type="email" name="email" value = {email} placeholder="이메일을 입력해주세요" onChange={
            (e) => setInputs({
              ...inputs,//user를 복사한 다음에
              [e.target.name] : e.target.value,
            }
            )}
            />
        </li>
        {/* {console.log(user)} */}
        <li>
          <button type="submit" action="" onClick={()=>alert("입력이 완료되었습니다!")}>
            등록
          </button>
          <button onClick = {() => setInputs({
            ...inputs,
            id:0,
            name : '',
            nickname: '',
            email : '',
          })}>취소</button>
        </li>
      </form>
      {name && <Modal name={name} nickname={nickname} email={email}/>}
    </div>
  );
}
