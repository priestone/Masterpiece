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
  padding: 0 0 90px 0;
  overflow: hidden;
  img {
    width: 45%;
    height: auto;
    margin: -20px auto;
  }

  h3 {
    font-size: clamp(20px, 4vw, 35px);
    font-weight: bold;
    color: white;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const ChatBox = styled.div`
  width: 900px;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
  position: relative;

  h3 {
    font-size: clamp(18px, 3.5vw, 33px);
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #827459;
    line-height: 60px;
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
      <img src={logo} alt="로고" />
      <Wrap>
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
      </Wrap>
    </Container>
  );
};

export default Home;
