import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainMoBg from "./backgroundImg/mainMoBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import cursor from "../components/img/cursor.png";
import npc1body from "../components/img/npc/1_body.png";
import npc1head from "../components/img/npc/1_head.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import chat3 from "../components/img/chat/chat3.png";
import { useState } from "react";

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

  @media screen and (max-width: 440px) {
    background: url(${mainMoBg});
  }
`;

const Npc = styled.div`
  position: absolute;
  bottom: 8%;
  left: 20%;
  transform: scaleX(-1);
  width: 120px;

  @media screen and (max-width: 1400px) {
    left: 10%;
    width: 100px;
  }

  @media screen and (max-width: 1000px) {
    left: 5%;
    width: 80px;
  }

  @media screen and (max-width: 440px) {
    #npc-body {
      display: none;
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

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 440px) {
    width: 90%;
    top: 24%;
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

  @media screen and (max-width: 440px) {
    width: 150px;
    height: 150px;

    #frame {
      height: 150px;
    }
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

  @media screen and (max-width: 440px) {
    width: 340px;
    bottom: 30%;
    left: 50%;

    h2 {
      width: 200px;
      font-size: 14px;
      left: 50%;
      line-height: 24px;
    }
  }
`;

const SubChat = styled.div`
  position: absolute;
  top: -8%;
  right: -13%;
  color: #827459;

  display: flex;
  flex-direction: column;
  width: 180px;
  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 240px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    z-index: 10;
    cursor: pointer;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    z-index: 10;
    cursor: pointer;
  }

  #npc-head {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    img {
      width: 180px;
    }

    p,
    h3,
    h4 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 140px;
    }

    p,
    h3,
    h4 {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 440px) {
    top: -40%;
    right: 2%;

    img {
      width: 100px;
    }

    p,
    h3,
    h4 {
      font-size: 10px;
    }

    #npc-head {
      display: block;
      width: 80px;
      position: absolute;
      bottom: -90px;
      right: -16%;
    }
  }
`;

const SubText = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 40px;
    /* position: absolute;
    top: 26%;
    left: -8%; */
    display: none;
  }

  &:hover img {
    display: block;
  }

  #secondCusor {
    /* top: 56%; */
  }

  #thirdCusor {
    /* top: 76%; */
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 30px;
    }
  }

  @media screen and (max-width: 440px) {
    img {
      width: 20px;
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
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <Container>
      <img src={mainBox} alt="박스배경" id="boxBg" />
      {/* <Blur></Blur> */}

      <Npc>
        <img src={npc1body} alt="여욱이" id="npc-body" />
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
        {!isSelected ? (
          <h2>
            히야~ 정말 멋진 그림들입니다요! <br />
            자세히 살펴 보시죠~ 헷헷헷
          </h2>
        ) : (
          <h2>
            오! 손님, 결정하셨습니까? <br />
            어떤 작품을 구매하시겠습니까요?
          </h2>
        )}
        <SubChat>
          <img src={chat3} alt="선택말풍선이미지" />
          <img src={npc1head} alt="여욱이" id="npc-head" />
          {/* isSelected 상태에 따라 SubText 내부 문구도 조건부 렌더링 */}
          {!isSelected ? (
            <>
              <SubText>
                <img src={cursor} alt="손가락" />
                <p>좀 더 자세히 볼래!</p>
              </SubText>
              {/* 이곳에 클릭 이벤트를 연결해서 상태 변경 */}
              <SubText onClick={handleSelect}>
                <img src={cursor} alt="손가락" id="secondCusor" />
                <h3>선택할래!</h3>
              </SubText>
            </>
          ) : (
            <>
              <SubText>
                <img src={cursor} alt="손가락" />
                <p>왼쪽 그림!</p>
              </SubText>
              <SubText>
                <img src={cursor} alt="손가락" id="secondCusor" />
                <h3>오른쪽 그림!</h3>
              </SubText>
              <SubText>
                <img src={cursor} alt="손가락" id="thirdCusor" />
                <h4>다시 볼래!</h4>
              </SubText>
            </>
          )}
        </SubChat>
      </Chat>
    </Container>
  );
};

export default Main;
