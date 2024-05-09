import { useState } from "react";
import ReactDom from "react-dom/client";


export default function Input() {
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
      {text ? (
        <div id="modal">
          입력한 값은 <span style={{color: "orangered"}}>{text}</span>입니다. 
        </div>
      ): null};


    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Input/>)