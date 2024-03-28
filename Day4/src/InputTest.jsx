import { useState } from "react";

const Modal = (props) =>{
  const {text}=props;
  return(
    <div id="modal">
      입력한 값은 <span style={{color:"skyblue"}}>{text}</span>입니다.
    </div>
  );
}

export default function InputTest() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="btn" onClick={()=>setText("")}>초기화</button>
      <hr />
      {/* {text && <modal text = {modal/>} */}
      {text && <Modal text={text} />}


    </div>
  );
}
