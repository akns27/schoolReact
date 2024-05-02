
import UserModify2 from "./UserModify2";

const UserInput = ({ name, email, onChange, onCreate, onReset }) => {
  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름을 입력하세요"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력하세요"
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onReset}>취소</button>
    </div>
  );
};

export default UserInput;
