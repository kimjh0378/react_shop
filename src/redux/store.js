import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";

const test = createSlice({
  name: 'test',
  initialState: 'hello'
})

const item = createSlice({
  name: 'item',
  initialState: ['apple', 'banana']
})


// 누르면 10 나오는 함수
const num = createSlice({
  name: 'num',
  initialState: 1,
  reducers:{
    changeNum() {
      return 10
    },

    //누를때마다 1씩 증가시키는 함수
    plusNum(state) {
      return state + 1;
    },

    //n씩 중가시키는 함수
    nplusNum(state, actions) {
      console.log(actions);
      return state + actions.payload
    }
  }
})
// 나이를 변경해주는 함수
const obj = createSlice({
  name : 'hong',
  initialState: 
  {name:'hong', age:20},
  reducers : {
    changeAge(state, actions) {
      state.age = actions.payload
    }

  }
})

export const {changeNum, plusNum, nplusNum} = num.actions
export const {changeAge} = obj.actions

export default configureStore({
  reducer: {
    test: test.reducer,
    item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer, 
  }
})
