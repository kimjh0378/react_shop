import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
//예전 문법
  // const 변수이름 = useQuery (['쿼리이름'], () => {
  //    axios로 요청
  //    쿼리에 저장할 데이터를 return
  // })

//요즘 문법
  // const 변수이름2 = useQuery({
      // querykey: ['쿼리이름'],
      // pueryFn: () => {
      //axios로 요청
      // 쿼리에 저장할 데이터를 return
      // }
  // })

  const useInfoQuery = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')

      console.log(response)

      return response.data;


    },
    //새로고침 재갱신 시간
    staleTime : 5000,
    //실패했을때 시도할 횟수
    retry: 10
  })
  


  return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/test">테스트</Nav.Link>
            <Link to={"/test"}>테스트2</Link>
          </Nav>
          <nav style={{color: 'white'}}>
            {useInfoQuery.isLoading && '회원정보 불러오는중...'}
            {useInfoQuery.error && '회원정보 불러오기 실패!!'}
            {useInfoQuery.data && useInfoQuery.data[0].name}
            
          </nav>
        </Container>
      </Navbar>

  )
}
export default Header;