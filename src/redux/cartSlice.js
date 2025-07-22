import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: 'cart',
  initialState : [
    {id:0, title: 'apple', count: 3},
    {id:2, title : 'watermelon', count: 10},
  ],
  reducers : {
  addCount(state, actions) {
    state[actions.payload].count++;
    },
    
      addItem(state, actions) {
        
        //장바구니에 내가 주문하기 누른 상품이 있는지 없는지 판단
        // 판단 기준을 어떤걸로 할건지
        //주문하기 누른 id가 장바구니에 있나 없나를 검사해보면 될듯
        // indIndex 함수 : 조건식에 만족하는 인덱스를 리턴, 없으면 -1 리턴

        let index = state.findIndex(data => {
          return data.id == actions.payload.id
        })

        if( index !== -1) {
          state[index].count++;
        }else {
          state.push(actions.payload)
        }
        
      },

      removeItem(state, actions) {
        state.splice(actions.payload,1);
      }

     
    
  }
})


export const {addCount, addItem, removeItem} = cart.actions;
export default cart;