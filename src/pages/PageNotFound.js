import emotion_3 from "../components/img/emotion/emotion_3.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
`;
const Npc = styled.div`
  width: 250px;
  height: auto;
`;
const Chat = styled.div`
  width: 600px;
  position: relative;
  h2 {
    position: absolute;
    top: 30%;
    left: 25%;
    color: #827459;
    font-size: 23px;
    font-family: "Noto Sans KR";
    font-weight: 600;
    line-height: 38px;
    span {
      color: #0fb3cf;
    }
  }
  @media screen and (max-width: 440px) {
    width: 350px;

    h2 {
      font-size: 16px;
      line-height: 28px;
      left: 20%;
    }
  }
`;

const PageNotFound = () => {
  return (
    <Container>
      <Npc>
        <img src={emotion_3} alt="여욱이파칭" />
      </Npc>

      <Chat>
        <img src={chat1_1} alt="말풍선1" />
        <h2>
          이런, 손님... <br />
          <span>경로</span>를 잘못 찾아오셨습니다요.
        </h2>
      </Chat>
    </Container>
  );
};

export default PageNotFound;
