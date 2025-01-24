import React, { useState } from "react";
import styled from "styled-components";
import emotion1 from "../components/img/emotion/emotion_1.png";
import emotion2 from "../components/img/emotion/emotion_2.png";
import emotion3 from "../components/img/emotion/emotion_3.png";
import chat1 from "../components/img/chat/chat1_2.png";
import { useNavigate } from "react-router-dom";

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
    width: 300px;
    height: auto;
    transform: translateX(20px);
  }
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
`;

const Npc3 = styled.div`
  img {
    width: 200px;
    height: auto;
    transform: translateX(20px);
  }
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
`;

const Chat = styled.div`
  width: 600px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

  h2 {
    width: 400px;
    position: absolute;
    top: 24%;
    left: 54%;
    transform: translateX(-50%);
    font-size: 23px;
    font-family: "Noto Sans KR";
    font-weight: bold;
    line-height: 50px;
    color: #827459;
    cursor: pointer;
  }

  span {
    color: #0fb3cf;
    font-weight: bold;
    margin-left: 8px;
  }

  @media screen and (max-width: 440px) {
    width: 330px;
    position: absolute;
    bottom: 25%;
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
  }
`;

const CorrectCountSpan = styled.span`
  color: #0fb3cf;
  font-weight: bold;
`;

const Loading = ({ correctCount }) => {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState(
    `히야~ 손님께서는 ${correctCount}개의 진품을 구매하셨습니다요!`
  );
  const navigate = useNavigate();

  const handleChatClick = () => {
    if (clickCount === 0) {
      // 첫 번째 클릭: 맞춘 갯수에 따른 메시지
      if (correctCount <= 3) {
        setMessage("이야~ 오늘도 손님 덕분에 기분이 하늘을 찌릅니다요!");
      } else if (correctCount <= 8) {
        setMessage("쳇, 제법 눈썰미가 좋으신 것 같습니다요~");
      } else {
        setMessage("흑흑, 손님! 진품만 쏙쏙 고르셨군요.");
      }
    } else if (clickCount === 1) {
      // 두 번째 클릭: 엔딩 페이지로 이동
      navigate("/ending");
    }

    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      {correctCount <= 3 && (
        <Npc>
          <img src={emotion2} alt="여욱이 하" />
        </Npc>
      )}
      {correctCount > 3 && correctCount <= 8 && (
        <Npc3>
          <img src={emotion3} alt="여욱이 중" />
        </Npc3>
      )}
      {correctCount > 8 && (
        <Npc>
          <img src={emotion1} alt="여욱이 상" />
        </Npc>
      )}

      <Chat>
        <img src={chat1} alt="말풍선이미지" />
        <h2 onClick={handleChatClick}>
          히야~ 손님께서는
          <span>{correctCount}개</span>의 <br />
          진품을 구매하셨습니다요!
        </h2>
      </Chat>
    </Container>
  );
};

export default Loading;
