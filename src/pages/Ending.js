import styled from "styled-components";
import endingFloor from "./backgroundImg/endingFloor.png";
import endingBg from "./backgroundImg/endingBg.jpg";
import endingMoBg from "./backgroundImg/endingMoBg.jpg";
import chat2_1 from "../components/img/chat/chat2_1.png";
import body from "../components/img/npc/2_body.png";
import head from "../components/img/npc/2_head.png";
import PaintingSlider from "../components/PaintingSlider";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${endingBg});
  background-size: cover;
  padding-top: 50px;
  position: relative;
  @media screen and (max-width: 440px) {
    background: url(${endingMoBg});
    background-position: cover;
  }
`;

const Npc = styled.div`
  width: 170px;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 11;
  .body {
    display: block;
  }

  @media screen and (max-width: 1400px) {
    left: 6%;
    width: 150px;
  }

  @media screen and (max-width: 1000px) {
    left: 8%;
    width: 120px;
  }

  @media screen and (max-width: 440px) {
    .body {
      display: none;
    }
  }
`;

const Chat = styled.div`
  width: 700px;
  position: absolute;
  bottom: 8%;
  left: 34%;
  z-index: 10;
  transform: translateX(-35%);

  .head {
    display: none;
  }

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
    span {
      color: #0fb3cf;
    }
  }

  @media screen and (max-width: 1400px) {
    width: 550px;

    h2 {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 450px;
    left: 44%;

    h2 {
      font-size: 18px;
      left: 62%;
      top: 18%;
    }
  }
  @media screen and (max-width: 440px) {
    position: absolute;
    width: 380px;
    left: 36%;
    bottom: 25%;

    h2 {
      font-size: 14px;
      left: 66%;
      top: 20%;
      line-height: 35px;
    }

    .head {
      display: block;
      position: absolute;
      width: 100px;
      bottom: -20%;
      right: 5%;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 18%;
  right: 5%;
  z-index: 10;
  .result {
    color: #ffe000;
    background-color: #42af53;
  }

  .home {
    color: #ffe000;
    background-color: #00a47b;
  }

  @media screen and (max-width: 1400px) {
    width: 300px;
  }

  @media screen and (max-width: 1000px) {
    width: 110px;
    flex-direction: column;
    gap: 35px;
    right: 5%;
    bottom: 9%;
  }
  @media screen and (max-width: 440px) {
    width: 300px;
    flex-direction: row;
    justify-content: space-between;
    bottom: 12%;
    right: 15%;
  }
`;
const Button = styled.button`
  all: unset;
  width: 160px;
  height: 80px;
  text-align: center;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 1400px) {
    width: 140px;
    height: 65px;
    font-size: 20px;
  }

  @media screen and (max-width: 1000px) {
    width: 110px;
    height: 45px;
    font-size: 20px;
    border-radius: 10px;
  }
`;

const Ending = () => {
  const location = useLocation();
  const selectedRealImages = location.state?.selectedRealImages || [];

  return (
    <Container>
      <Npc>
        <img className="body" src={body} alt="부엉이" />
      </Npc>

      <PaintingSlider paintings={selectedRealImages} />

      <Chat>
        <img src={chat2_1} alt="말풍선이미지" />
        <img className="head" src={head} alt="부엉이머리" />
        <h2>
          <span>작품</span>을 클릭해보시면 <br />
          자세한 설명을 보실 수 있답니다!
        </h2>
      </Chat>
      <ButtonWrap>
        <Link to="/main">
          <Button className="result">다시하기</Button>
        </Link>
        <Link to="/">
          <Button className="home">홈으로</Button>
        </Link>
      </ButtonWrap>
      <img
        src={endingFloor}
        alt="floor"
        id="floorBg"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      />
    </Container>
  );
};

export default Ending;
