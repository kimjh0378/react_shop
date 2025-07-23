import { memo, useState, useTransition } from "react";

function Child({num}) {
  return (
    <>
    <h1>첫번째 자식 컴포넌트</h1>
    <p>num을 증가시켜서 보여줌 : {num + 10}</p>
    </>
  )
}

const Child2 = memo (() => {
  return (
    <>
    <h1>두번째 자식 컴포넌트</h1>
    <p>num이랑 전혀 관련없는 기능이 있는 컴포넌트임</p>
    </>
  )
})




function Test () {

  const[num, setNum] = useState(0);
  const[data, setData] = useState('');
  //특정 부분을 지연시켜 주는거임
  const [isPending, startTransition]= useTransition();


  const a = new Array(10000).fill(0);




  return (
    <>
    <input type="text" onChange={(e)=> {
      startTransition(() => {
        setData(e.target.value);
      })
    }} />

  {

    isPending ?
    <div>처리중입니다....</div>
    :
    a.map(() =>{
      return <div>{data}</div>
    })
  }


    {num} <button onClick={() => setNum(num + 1)}>+</button>
    <Child num ={num} />
    <Child2 />
    </>
  )
}

export default Test;