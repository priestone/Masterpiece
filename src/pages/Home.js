import styled from "styled-components";
import homeBg from "./backgroundImg/homeBg.jpg";
import logo from "../components/img/Logo.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${homeBg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 0 115px 0;
  img {
    width: 1000px;
    height: auto;
    margin: 0 auto;
  }

  h3 {
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
`;

const Home = () => {
  return (
    <Container>
      <img src={logo} alt="로고" />
      <Link>
        <h3>화면을 터치해 시작해보세요</h3>
      </Link>
    </Container>
  );
};

export default Home;
