import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import chat3 from "../components/img/chat/chat3.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${mainBg});
  overflow: hidden;
  position: relative;

  #boxBg {
    position: absolute;
    bottom: -140px;
    left: 0;

    @media screen and (max-width: 1000px) {
      img {
        bottom: 0;
      }
    }
  }
`;

const PaintingWrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

const Painting = styled.div`
  width: 400px;
  height: 400px;
  background-color: salmon;

  #frame {
    height: 400px;
  }
`;

const Chat = styled.div`
  width: 700px;
  position: absolute;
  bottom: 10%;
  left: 52%;
  transform: translateX(-50%);

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 26px;
  }
`;

const SubChat = styled.div`
  position: absolute;
  top: -8%;
  right: -13%;

  img {
    width: 220px;
  }

  p {
    position: absolute;
    top: 28%;
    left: 16%;
    font-size: 20px;
    font-weight: 600;
  }
  h3 {
    position: absolute;
    top: 56%;
    left: 16%;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Main = () => {
  return (
    <Container>
      <img src={mainBox} alt="박스배경" id="boxBg" />

      <PaintingWrap>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
      </PaintingWrap>

      <Chat>
        <img src={chat1_1} alt="말풍선이미지" />
        <h2>
          히야~ 정말 멋진 그림들입니다요! <br />
          자세히 살펴 보시죠~ 헷헷헷
        </h2>
        <SubChat>
          <img src={chat3} alt="선택말풍선이미지지" />
          <p>좀 더 자세히 볼래!</p>
          <h3>선택할래!</h3>
        </SubChat>
      </Chat>
    </Container>
  );
};

export default Main;
