import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import cursor from "../components/img/cursor.png";
import npc1body from "../components/img/npc/1_body.png";
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

const Npc = styled.div`
  position: absolute;
  bottom: 8%;
  left: 18%;
  transform: scaleX(-1);
  width: 140px;

  @media screen and (max-width: 1400px) {
    left: 10%;
    width: 100px;
  }

  @media screen and (max-width: 1000px) {
    left: 5%;
    width: 80px;
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

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const Painting = styled.div`
  width: 400px;
  height: 400px;
  background-color: salmon;

  #frame {
    height: 400px;
  }

  @media screen and (max-width: 1400px) {
    width: 300px;
    height: 300px;

    #frame {
      height: 300px;
    }
  }
`;

const Chat = styled.div`
  width: 700px;
  position: absolute;
  bottom: 10%;
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

const SubChat = styled.div`
  position: absolute;
  top: -8%;
  right: -13%;
  color: #827459;
  img {
    width: 220px;
  }

  p {
    position: absolute;
    top: 28%;
    left: 16%;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  h3 {
    position: absolute;
    top: 56%;
    left: 16%;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 1400px) {
    img {
      width: 180px;
    }

    p,
    h3 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 140px;
    }

    p,
    h3 {
      font-size: 14px;
    }
  }
`;

const SubText = styled.div`
  img {
    width: 40px;
    position: absolute;
    top: 26%;
    left: -8%;
    display: none;
  }

  &:hover img {
    display: block;
  }

  #secondCusor {
    top: 56%;
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 30px;
    }
  }
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  filter: blur(1px);
`;

const Main = () => {
  return (
    <Container>
      <img src={mainBox} alt="박스배경" id="boxBg" />
      <Blur></Blur>

      <Npc>
        <img src={npc1body} alt="여욱이" />
      </Npc>

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
          <img src={chat3} alt="선택말풍선이미지" />
          <SubText>
            <img src={cursor} alt="손가락" />
            <p>좀 더 자세히 볼래!</p>
          </SubText>
          <SubText>
            <img src={cursor} alt="손가락" id="secondCusor" />
            <h3>선택할래!</h3>
          </SubText>
        </SubChat>
      </Chat>
    </Container>
  );
};

export default Main;
