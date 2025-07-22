import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeNum, nplusNum, plusNum } from "../redux/store";
import { addCount, removeItem } from "../redux/cartSlice";

function Cart() {
  const test = useSelector((state) => {
    return state.test
  })

  const itme = useSelector(state => state.itme)

  console.log(test)
  console.log(itme)

  const cart = useSelector(state => state.cart);
  const num = useSelector(state => state.num);
  const dispatch = useDispatch();
  console.log(cart)

  const obj = useSelector(state => state.obj )
  return (
    <Table>
      {/* num : {num}
      <button onClick={() => {
        dispatch( changeNum() );
      }}>변경버튼</button>
      <button onClick={() => {
        dispatch( plusNum() );
      }}> 1씩 증가버튼</button>
      <button onClick={() => {
        dispatch(nplusNum(3) );
      }}>n씩증가</button>
      <div>
        {obj.name}: {obj.age}
        <button onClick={() => {
          dispatch( changeAge(30))
        }}>나이변경</button>
      </div> */}
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {
          //배열방 안에있는 반복문을 돌림
          cart.map((itme, i) =>{
            return (
            <tr key={i}>
              <td>{itme.id}</td>
              <td>{itme.title}</td>
              <td>{itme.count}</td>
              <td><button onClick={() => {
                dispatch(addCount(i));
              }}>+</button></td>
              <td><button onClick={() => {
                dispatch(removeItem (i) );
              }}>X</button></td>
            </tr>
            )

          })
        }
      </tbody>
    </Table>
  )
}

export default Cart