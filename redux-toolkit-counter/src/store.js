import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice는 state를 저장하는 역할을 한다
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // 얼마씩 증가
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 저장소에는 counter가 있고 그 안에는 reducer가 있다.
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // 변수: counter, 변경 함수들: reducer
  },
});