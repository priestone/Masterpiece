import React, { useState } from "react";
import styled from "styled-components";
import emotion1 from "../components/img/emotion/emotion_1.png";
import emotion2 from "../components/img/emotion/emotion_2.png";
import emotion3 from "../components/img/emotion/emotion_3.png";
import chat1 from "../components/img/chat/chat1_2.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 80px;
`;

const Npc = styled.div`
  img {
    width: 300px;
    height: auto;
  }
`;

const Chat = styled.div`
  width: 640px;
  position: absolute;
  bottom: 8%;
  left: 52%;
  transform: translateX(-50%);

  h2 {
    width: 400px;
    position: absolute;
    top: 24%;
    left: 52%;
    transform: translateX(-50%);
    font-size: 26px;
    font-weight: bold;
    line-height: 50px;
    color: #827459;
  }

  @media screen and (max-width: 1400px) {
    width: 600px;
  }

  @media screen and (max-width: 1000px) {
    width: 500px;

    h2 {
      font-size: 20px;
      left: 60%;
      line-height: 40px;
    }
  }
`;

const Loading = (correctCount) => {
  // const [correctCount, setCorrectCount] = useState(0);

  return (
    <Container>
      {correctCount <= 3 && (
        <>
          <Npc>
            <img src={emotion1} alt="여욱이 하" />
          </Npc>
          <Chat>
            <img src={chat1} alt="말풍선이미지" />
            <h2>
              흑흑, 손님!
              <br />
              진품만 쏙쏙 고르셨군요.
            </h2>
          </Chat>
        </>
      )}
      {correctCount > 3 && correctCount <= 8 && (
        <>
          <Npc>
            <img src={emotion3} alt="여욱이 중" />
          </Npc>
          <Chat>
            <img src={chat1} alt="말풍선이미지" />
            <h2>
              쳇, 제법 눈썰미가
              <br />
              좋으신 것 같습니다요~
            </h2>
          </Chat>
        </>
      )}
      {correctCount > 8 && (
        <>
          <Npc>
            <img src={emotion2} alt="여욱이 상" />
          </Npc>
          <Chat>
            <img src={chat1} alt="말풍선이미지" />
            <h2>
              이야~ 오늘도 손님 덕분에
              <br />
              기분이 하늘을 찌릅니다요!
            </h2>
          </Chat>
        </>
      )}
    </Container>
  );
};

export default Loading;
