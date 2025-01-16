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
  padding: 0 0 115px 0;
  img {
    width: 900px;
    height: auto;
    margin: -20px auto;
  }

  h3 {
    font-size: 35px;
    font-weight: bold;
    color: white;
  }
`;

const ChatBox = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  position: relative;
  margin-bottom: 80px;
  margin-top: 80px;
  h3 {
    position: absolute;
    top: 50px;
    left: 180px;
    color: #827459;
    line-height: 60px;
  }
`;
const Npc1 = styled.div`
  position: absolute;
  bottom: 50px;
  right: 153px;
  img {
    width: 100%;
    height: auto;
  }
`;

const Home = () => {
  return (
    <Container>
      <img src={logo} alt="로고" />
      <ChatBox>
        <h3>
          자자! 둘러보시죠~! <br /> 찬~찬히 둘러보셔도 됩니다요!
        </h3>
        <img src={chat1} alt="말풍선1_1" />
      </ChatBox>
      <Npc1>
        <img src={npc1body} alt="여욱이전신" />
      </Npc1>
      <Link to={"/main"}>
        <h3>화면을 터치해 시작해보세요</h3>
      </Link>
    </Container>
  );
};

export default Home;
