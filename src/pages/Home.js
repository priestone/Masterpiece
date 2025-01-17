import React, { useState } from "react";
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
  overflow-x: hidden;

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

  a {
    width: 100%;
    height: 100vh;
    z-index: 1;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }

  h3 {
    font-size: 25px;
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Chat = styled.div`
  width: 600px;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

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
    cursor: pointer;
  }
`;

const Npc1 = styled.div`
  width: 15%;
  position: absolute;
  bottom: 5%;
  right: 8%;
  z-index: 999;
  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1400px) {
    width: 16%;
  }

  @media screen and (max-width: 1000px) {
    width: 18%;
  }
`;

const Home = () => {
  const dialogues = [
    "자자! 둘러보시죠~! / 찬~찬히 둘러보셔도 됩니다요!",
    "앗! 아이고 아이고~  / 반갑습니다, 반갑습니다~!!",
    "헷헷헷, 훌륭한 미술품들을 / 어디 한번 보고 가시렵니까?",
  ];

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const handleChatClick = () => {
    setCurrentDialogueIndex((prevIndex) => (prevIndex + 1) % dialogues.length);
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="로고" />
      </Logo>
      <Wrap>
        <Chat>
          <img src={chat1} alt="말풍선이미지" />
          <h2 onClick={handleChatClick}>
            {dialogues[currentDialogueIndex].split(" / ").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
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

