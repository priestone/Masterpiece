import styled from "styled-components";
import endingFloor from "./backgroundImg/endingFloor.png";
import endingBg from "./backgroundImg/endingBg.jpg";
import endingMoBg from "./backgroundImg/endingMoBg.jpg";
import paintframe from "../components/img/paintframe.png";
import chat2_2 from "../components/img/chat/chat2_2.png";
import chat3 from "../components/img/chat/chat3.png";
import body from "../components/img/npc/2_body.png";
import head from "../components/img/npc/2_head.png";
import cursor from "../components/img/cursor.png";
import PaintingSlider from "../components/PaintingSlider";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${endingBg});
  background-position: cover;
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

  .head {
    display: none;
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
    width: 100px;
    bottom: 22%;
    left: 65%;
    .head {
      display: block;
    }
  }
`;

// const PaintingWrap = styled.div`
//   width: 100%;
//   max-width: 1920px;
//   display: flex;
//   justify-content: space-around;
// `;

// const Painting = styled.div`
//   img {
//     width: 300px;
//     height: 300px;
//   }
// `;

const Chat = styled.div`
  width: 700px;
  position: absolute;
  bottom: 8%;
  left: 34%;
  z-index: 10;
  transform: translateX(-35%);

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
    width: 380px;
    left: 36%;
    bottom: 25%;

    h2 {
      font-size: 14px;
      left: 65%;
      top: 20%;
      line-height: 35px;
    }
  }
`;

const SubChat = styled.div`
  position: absolute;
  top: -30%;
  right: -10%;
  color: #827459;
  img {
    width: 220px;
  }

  p {
    position: absolute;
    top: 28%;
    left: 16%;
    z-index: 11;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  h3 {
    position: absolute;
    top: 56%;
    left: 16%;
    z-index: 11;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 180px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 440px) {
    top: -45%;
    right: -5%;
    img {
      width: 140px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const SubText = styled.div`
  img {
    width: 40px;
    position: absolute;
    top: 28%;
    left: -8%;
    /* display: none; */
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
  return (
    <Container>
      <Npc>
        <img className="body" src={body} alt="부엉이" />
        <img className="head" src={head} alt="부엉이머리" />
      </Npc>

      {/* <PaintingWrap>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
      </PaintingWrap> */}

      <PaintingSlider />

      <Chat>
        <img src={chat2_2} alt="말풍선이미지" />
        <h2>
          괜찮으시다면.. <span>작품</span>에 대해서 <br /> 잠시 설명을
          해드릴까요?
        </h2>
        <SubChat>
          <img src={chat3} alt="선택말풍선이미지" />
          <SubText>
            <img src={cursor} alt="손가락" />
            <p>응 좋아!</p>
          </SubText>
          <SubText>
            <img src={cursor} alt="손가락" id="secondCusor" />
            <h3>아니 사양할게.</h3>
          </SubText>
        </SubChat>
      </Chat>
      <ButtonWrap>
        <Button className="result">결과보기</Button>
        <Button className="home">홈으로</Button>
      </ButtonWrap>
      <img
        src={endingFloor}
        alt="floor"
        id="floorBg"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          // zIndex: "-1",
        }}
      />
    </Container>
  );
};

export default Ending;
