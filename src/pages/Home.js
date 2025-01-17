import styled from "styled-components";
import homeBg from "./backgroundImg/homeBg.jpg";
import logo from "../components/img/Logo.svg";
import { Link } from "react-router-dom";
import chat1 from "../components/img/chat/chat1_1.png";
import npc1body from "../components/img/npc/1_body.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${homeBg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */

  h3 {
    font-size: clamp(20px, 4vw, 35px);
    font-weight: bold;
    color: white;
  }
`;

const Logo = styled.div`
  img {
    width: 800px;
    height: auto;
    margin: -20px auto;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 90px;

  a{
    z-index: 1;
    position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  }
  h3{
    font-size: 25px;
  }
`;

const Chat = styled.div`
  width: 600px;
  position: absolute;
  bottom: 10%;
  left: 52%;
  transform: translateX(-50%);

  h2 {
    width: 400px;
    position: absolute;
    top: 24%;
    left: 54%;
    transform: translateX(-50%);
    font-size: 25px;
    font-family: "Noto Sans KR";
    font-weight: bold;
    line-height: 50px;
    color: #827459;
  }
`;

const Npc1 = styled.div`
  width: 15%;
  position: absolute;
  bottom: 5%;
  right: 8%;
  img {
    width: 100%;
    height: auto;
  }
`;

const Home = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="로고" />
      </Logo>
      <Wrap>
      <Chat>
        <img src={chat1} alt="말풍선이미지" />
        <h2>
          히야~ 정말 멋진 그림들입니다요! <br />
          자세히 살펴 보시죠~ 헷헷헷
        </h2>
      </Chat>
        <Link to={"/main"}>
          <h3>화면을 터치해 시작해보세요</h3>
        </Link>
      </Wrap>
      
      <Npc1>
        <img src={npc1body} alt="여욱이전신" />
      </Npc1>
    </Container>
  );
};

export default Home;
