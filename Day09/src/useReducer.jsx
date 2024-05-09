/* 아래의 Counter.jsx 파일을 useReducer를 사용하여 구현해 보자 */
import { useState, useReducer } from "react";
const reducer = (state, action) => {
  //1. 리듀서 함수를 구현하시오.
  switch(action.type){
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

export default function UseReducer() {
  // const [num, setNum] = useState(0);
  //2. useState대신 리듀서함수, 초기값을 쓰는 변수 number 로 수정하시오.
  //const [state,dispatch] = useReducer(리듀서함수, 초기값);
  const [number, dispatch] = useReducer(reducer,0);

  const onIncrease = () => {
    // setNum(num + 1);
    //3. dispatch를 사용하여 수정하시오.   
    dispatch({type: 'INC'});//action을 발생시키는 함수
  };
  
  const onDecrease = () => {
    // setNum(num - 1);
    //4. dispatch를 사용하여 수정하시오.
    dispatch({type:'DEC'});//action을 발생시키는 함수
  };


  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
