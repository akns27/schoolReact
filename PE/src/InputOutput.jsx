//입력 값을 전달하여 출력하는 컴포넌트
import { useState } from "react";
import "./App.css";

function InputOutput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>InputOutput</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <p>{inputValue}</p>
    </div>
  );
}

export default InputOutput;