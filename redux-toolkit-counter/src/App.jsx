import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit Counter</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button>{count}</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          5씩 증가
        </button>
      </div>
    </>
  );
}

export default App