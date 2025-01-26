import React, { useState } from "react";
import styled from "styled-components";
import homeBg from "./backgroundImg/homeBg.jpg";
import homeMoBg from "./backgroundImg/homeMoBg.jpg";
import logo from "../components/img/Logo.svg";
import { Link } from "react-router-dom";
import chat1 from "../components/img/chat/chat1_2.png";
import npc1body from "../components/img/npc/1_body.png";
import npc1head from "../components/img/npc/1_head.png";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${homeBg}) no-repeat center;
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

  @media screen and (max-width: 440px) {
    background: url(${homeMoBg});
  }
`;

const Logo = styled.div`
  img {
    width: 800px;
    height: auto;
    margin: -20px auto;
  }

  @media screen and (max-width: 1400px) {
    img {
      width: 700px;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 600px;
    }
  }

  @media screen and (max-width: 440px) {
    img {
      margin: 30px auto;
      width: 416px;
    }
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
  bottom: 150px;

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

  @media screen and (max-width: 1400px) {
    h3 {
      font-size: 23px;
    }
  }

  @media screen and (max-width: 1000px) {
    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 440px) {
    h3 {
      width: 210px;
      font-size: 18px;
      bottom: -80px;
    }
  }
`;

const Chat = styled.div`
  width: 600px;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

  #npc-head {
    display: none;
  }

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

  @media screen and (max-width: 440px) {
    width: 330px;
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);

    h2 {
      position: absolute;
      top: 28%;
      left: 54%;
      transform: translateX(-50%);
      width: 200px;
      font-size: 15px;
      left: 50%;
      line-height: 24px;
    }

    #npc-head {
      display: block;
      width: 135px;
      position: absolute;
      bottom: 50px;
      right: -20px;
    }
  }
`;

const Npc1 = styled.div`
  width: 15%;
  position: absolute;
  bottom: 5%;
  right: 8%;
  z-index: 99;
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
  @media screen and (max-width: 440px) {
    #npc-body {
      display: none;
    }
    #npc-head {
      display: block;
      width: 135px;
      position: absolute;
      bottom: 160px;
      right: -20px;
    }
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
      <Helmet>
        <title>누군가의 섬</title>
      </Helmet>
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
          <img src={npc1head} alt="여욱이전신" id="npc-head" />
        </Chat>
        <Link to={"/main"}>
          <h3>화면을 터치해 시작해보세요</h3>
        </Link>
      </Wrap>

      <Npc1>
        <img src={npc1body} alt="여욱이전신" id="npc-body" />
      </Npc1>
    </Container>
  );
};

export default Home;
