import styled from "styled-components";
import emotion1 from "../components/img/emotion/emotion_1.png";
import emotion2 from "../components/img/emotion/emotion_2.png";
import emotion3 from "../components/img/emotion/emotion_3.png";
import chat1 from "../components/img/chat/chat1_2.png";
import { Link } from "react-router-dom";

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
  }
`;



const ScoreDisplay = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  position: absolute;
  top: 80px;
  

  span {
    font-weight: bold;
    color: #f0c674;
  }
`;

const Loading = ({ correctCount, totalQuestions }) => {
  return (
    <Container>
      <ScoreDisplay>
        맞춘 갯수: <span>{correctCount}/10</span>
      </ScoreDisplay>
      {correctCount <= 3 && (
        <>
          <Npc>
            <img src={emotion2} alt="여욱이 하" />
          </Npc>
          <Link to={"/ending"}>
            <Chat>
              <img src={chat1} alt="말풍선이미지" />
              <h2>
                이야~ 오늘도 손님 덕분에
                <br />
                기분이 하늘을 찌릅니다요!
              </h2>
            </Chat>
          </Link>
        </>
      )}
      {correctCount > 3 && correctCount <= 8 && (
        <>
          <Npc3>
            <img src={emotion3} alt="여욱이 중" />
          </Npc3>
          <Link to={"/ending"}>
            <Chat>
              <img src={chat1} alt="말풍선이미지" />
              <h2>
                쳇, 제법 눈썰미가
                <br />
                좋으신 것 같습니다요~
              </h2>
            </Chat>
          </Link>
        </>
      )}
      {correctCount > 8 && (
        <>
          <Npc>
            <img src={emotion1} alt="여욱이 상" />
          </Npc>
          <Link to={"/ending"}>
            <Chat>
              <img src={chat1} alt="말풍선이미지" />
              <h2>
                흑흑, 손님!
                <br />
                진품만 쏙쏙 고르셨군요.
              </h2>
              
            </Chat>
          </Link>
        </>
      )}
    </Container>
  );
};

export default Loading;
