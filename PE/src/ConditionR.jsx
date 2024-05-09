import React, {useState} from "react";
import ReactDOM from "react-dom";

// import "./style.css";
export default function Condition(){
  const[login, setLogin] = useState(false);
  return(
  
  <div>
    
      <div className="wrapp">
        {login ?  
        <button className="btn" onClick={()=>setLogin(false)}>로그아웃</button> :
        <button className="btn" onClick={()=>setLogin(true)}>로그인</button>
        }
      </div>

    <hr/>
    <div style={{paddingTop : "8px"}}>모두 함께 리액트 공부</div>

  </div>
  );//요소를 리턴

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Condition/>)