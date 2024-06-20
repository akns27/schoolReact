import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name:"윤서", age: 17},
  reducers: {
    changeName(state){
      return {name:"예설", age:20};
    },
    changAge(state, a){
      state.age += a.payload;
      //a(action)만큼 나이 먹기
    },
  },
});

export let {changAge, changeName} = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    { id:0, name:"낙동강 뷰 SRC", count:2},
    { id:1, name:"친환경 펜션", count:50},
    { id:2, name:"논밭뷰 기숙사", count:1},
  ],
  reducers: {
    increase(state, a){
      state[a.payload].count++;
    },
    decrease(state, a){
      state[a.payload].count>0 ? state[a.payload].count-- : state[a.payload].count=0;
      //a(action)만큼 나이 먹기
    },
  },
  addItem(state, a){
    state.push(a.payload);
    console.log(payload);
  }
});

export let {increase, decrease, addItem} = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer
  },

});