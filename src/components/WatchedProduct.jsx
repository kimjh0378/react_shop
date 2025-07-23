import './WatchedProduct.css'
import bg from '../bg.jpg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WatchedProduct ({fruit}) {

  const watched = useSelector(state => state.watched);

  // 최근본 상품 과일을 눌러도 이동하게 하는 함수
    const navigate = useNavigate();
  function clickHandler(id) {
    navigate(`/detail/${id}`)
  }

  

  return (
    <div className="WatchedProduct">
      <div className="cards">
        <p>최근 본 상품</p>
        {
          watched.map((id, i)=> {
            return (                        // 클릭해서 이동할수 있게 하는 동작
              <div className="card" key={i} onClick={() => clickHandler(id)}>
                <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`} alt="" />
                <p>{fruit[id].title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WatchedProduct;