import "./App.css";
import { useState } from "react";
// Counter 컴포넌트 생성
function Counter() {
const [count, setCount] = useState(0);
return ( 
  <div>
    <h1>Counter</h1>
    <h2>{count}번 클릭했음</h2>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button><br />
    <button onClick={() => setCount(0)}>초기화</button>
  </div>
  );
}
  export default Counter;