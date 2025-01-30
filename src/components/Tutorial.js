import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import chat1 from "../components/img/chat/chat2_2.png";
import npcBody from "../components/img/npc/2_body_2.png";
import tutorialbg1 from "../pages/backgroundImg/tutorialBg.jpg"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 10%;
`;

const Npc = styled.div`
  img {
    width: 400px;
    height: auto;
  }
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 990;

  @media screen and (max-width: 440px) {
    img {
      width: 250px;
      height: auto;
    }
  }
`;

const Chat = styled.div`
  width: 700px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

  h2 {
    width: 400px;
    position: absolute;
    top: 22%;
    left: 52%;
    transform: translateX(-52%);
    font-size: 23px;
    font-family: "Noto Sans KR";
    font-weight: bold;
    line-height: 50px;
    color: #827459;
    cursor: pointer;

    span {
      color: #0fb3cf;
      font-family: "Noto Sans KR";
      font-weight: bold;
    }
  }

  @media screen and (max-width: 440px) {
    width: 330px;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);

    h2 {
      width: 250px;
      font-size: 13px;
      line-height: 24px;
      position: absolute;
      top: 29%;
      left: 58%;
      transform: translateX(-58%);

      span {
        font-size: 13px;
      }
    }
  }
`;

const Touchtext = styled.div`
  color: white;
  font-family: "Noto Sans KR";
  font-weight: bold;
  position: absolute;
  font-size: 25px;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  animation: blink 2.5s infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.2;
    }
  }

  @media screen and (max-width: 1400px) {
    font-size: 23px;
    bottom: 7%;
  }

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    bottom: 6%;
  }

  @media screen and (max-width: 440px) {
    width: 300px;
    text-align: center;
    font-size: 18px;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${tutorialbg1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
  opacity: 0; /* 기본적으로 안 보이도록 설정 */
  animation: fadeIn 1s forwards; /* 애니메이션 추가 */
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const Tutorial = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const dialogues = [
    "에구구 보아하니 사기꾼 여욱에게 / 걸리신 것 같군요..",
    "아차~! 처음 뵙겠습니다! / 저는 박물관 관장 <span>부엉</span>이라고 합니다!",
    "여욱 녀석.. 아마 AI가 그린 정교한 가품과 / 사람이 그린 진품을 보여줄 것 입니다!",
    "손님께서는 그 두 그림을 잘 살펴보시고 / <span>사람이 그린 진품</span>을 고르시면 됩니다!",
    "그림들은 감정하신 후 저희 박물관에 / 기부해주신다면 정말 감사하겠습니다!",
    "저와 만났다는 건 둘만의 비밀입니다.. / 그럼 행운을 빌겠습니다!",
  ];

  const handleChatClick = () => {
    if (clickCount === dialogues.length - 1) {
      navigate("/main");
    } else {
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Container>
      {clickCount > 0 && (
        <Npc>
          <img src={npcBody} alt="NPC 부엉이" />
        </Npc>
      )}
     {clickCount > 0 && <Bg />}

      <Chat onClick={handleChatClick}>
        <img src={chat1} alt="말풍선이미지" />
        <h2
          dangerouslySetInnerHTML={{
            __html: dialogues[clickCount].replace(" / ", "<br />"),
          }}
        ></h2>
      </Chat>

      <Touchtext>말풍선을 터치해 계속 진행하세요</Touchtext>
    </Container>
  );
};

export default Tutorial;
