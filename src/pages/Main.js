import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainMoBg from "./backgroundImg/mainMoBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import cursor from "../components/img/cursor.png";
import homeBtn from "../components/img/homeBtn.png";
import npc1body from "../components/img/npc/1_body.png";
import npc1head from "../components/img/npc/1_head.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import chat3 from "../components/img/chat/chat3.png";
import closeBtn from "../components/img/downarrow.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const HomeBtn = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  background: url(${homeBtn}) no-repeat center / cover;
`;

const EndBtn = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  background: url(${homeBtn}) no-repeat center / cover;
`;

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

  :nth-child(2) {
    background-color: green;
  }

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
  min-width: 400px;

  #frame {
    height: 420px;
  }

  @media screen and (max-width: 1400px) {
    width: 300px;
    height: 300px;
    min-width: 300px;

    #frame {
      height: 320px;
    }
  }

  @media screen and (max-width: 440px) {
    width: 150px;
    height: 150px;
    min-width: 150px;

    #frame {
      height: 170px;
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
  right: -14%;
  color: #827459;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 240px;
  height: 170px;

  img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 240px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
    margin-left: 50px;
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    z-index: 10;
    margin-left: 50px;
    cursor: pointer;
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    z-index: 10;
    margin-left: 50px;
    cursor: pointer;
  }

  #npc-head {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    width: 180px;
    height: 128px;
    gap: 10px;

    img {
      width: 180px;
    }

    p,
    h3,
    h4 {
      margin-left: 40px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 140px;
    height: 99px;
    gap: 2px;

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
    top: -75%;
    right: 0%;

    img {
      width: 150px;
    }

    p,
    h3,
    h4 {
      font-size: 14px;
    }

    #npc-head {
      display: block;
      width: 100px;
      position: absolute;
      bottom: -100px;
      right: -10%;
      top: auto;
      left: auto;
    }
  }
`;

const SubText = styled.div`
  display: flex;
  /* width: 240px; */
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    width: 40px;
    position: absolute;
    top: 7%;
    left: 0%;
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

  @media screen and (max-width: 1400px) {
    img {
      left: -6%;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 30px;
      left: 0%;
      top: 12%;
    }
  }

  @media screen and (max-width: 440px) {
    img {
      width: 20px;
      left: 7%;
      top: 30%;
    }
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 500px;

  @media screen and (max-width: 440px) {
    width: 300px;
  }
`;

const EnlargedPainting = styled.div`
  width: 500px;
  height: 500px;
  text-align: center;
  background-color: salmon;
  z-index: 11;
  /* overflow:; */

  img {
    width: 500px;
    position: absolute;
    top: -80px;
    left: 0;
  }

  @media screen and (max-width: 440px) {
    height: 300px;
    width: 300px;

    img {
      width: 300px;
      top: -48px;
    }
  }
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 10;

  @media screen and (max-width: 1400px) {
    bottom: -20%;
  }

  @media screen and (max-width: 440px) {
    bottom: -20%;
  }
`;

const Main = () => {
  const [conversationStage, setConversationStage] = useState(0); //대화관련 상태 입니다.
  const [selectedPainting, setSelectedPainting] = useState(null); //모달(확대) 상태 입니다.

  const aiContext = require.context("../imgs/ai", false, /\.(png|jpe?g|svg)$/);
  const realContext = require.context(
    "../imgs/real",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const aiImages = aiContext.keys().map(aiContext);
  const realImages = realContext.keys().map(realContext);

  const [paintings, setPaintings] = useState([
    { id: "left", background: "" },
    { id: "right", background: "" },
  ]);

  useEffect(() => {
    const randomAi = getRandomImage(aiImages);
    const randomReal = getRandomImage(realImages);

    const isAiLeft = Math.random() < 0.5; // 50% 확률

    if (isAiLeft) {
      setPaintings([
        { id: "left", background: randomAi },
        { id: "right", background: randomReal },
      ]);
    } else {
      setPaintings([
        { id: "left", background: randomReal },
        { id: "right", background: randomAi },
      ]);
    }
  }, []);

  function getRandomImage(imageList) {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }

  const getChatText = () => {
    switch (conversationStage) {
      case 0:
        return (
          <>
            히야~ 정말 멋진 그림들입니다요! <br />
            자세히 살펴 보시죠~ 헷헷헷
          </>
        );
      case 1:
        return (
          <>
            오~ 좀 더 자세히 보시겠습니까? <br />
            어떤 그림이 궁금하시죠?
          </>
        );
      case 2:
        return (
          <>
            오! 손님, 결정하셨습니까? <br />
            어떤 작품을 구매하시겠습니까요?
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <img src={mainBox} alt="박스배경" id="boxBg" />
      {/* <Blur></Blur> */}

      <Link to={"/#"}>
        <HomeBtn>홈 가기</HomeBtn>
      </Link>

      <Link to={"/ending"}>
        <EndBtn>엔딩 가기</EndBtn>
      </Link>

      <Npc>
        <img src={npc1body} alt="여욱이" id="npc-body" />
      </Npc>

      <PaintingWrap>
        <Painting
          style={{
            backgroundImage: `url(${paintings[0].background})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
        <Painting
          style={{
            backgroundImage: `url(${paintings[1].background})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
      </PaintingWrap>

      <Chat>
        <img src={chat1_1} alt="말풍선이미지" />
        <h2>{getChatText()}</h2>

        <SubChat>
          <img src={chat3} alt="선택말풍선이미지" />
          <img src={npc1head} alt="여욱이" id="npc-head" />

          {/* 단계별 버튼 표시 */}
          {conversationStage === 0 && (
            <>
              <SubText onClick={() => setConversationStage(1)}>
                <img src={cursor} alt="손가락" />
                <p>자세히 볼래!</p>
              </SubText>
              <SubText onClick={() => setConversationStage(2)}>
                <img src={cursor} alt="손가락" />
                <h3>선택할래!</h3>
              </SubText>
            </>
          )}

          {conversationStage === 1 && (
            <>
              <SubText onClick={() => setSelectedPainting("left")}>
                <img src={cursor} alt="손가락" />
                <p>왼쪽 그림!</p>
              </SubText>
              <SubText onClick={() => setSelectedPainting("right")}>
                <img src={cursor} alt="손가락" />
                <h3>오른쪽 그림!</h3>
              </SubText>
              <SubText onClick={() => setConversationStage(0)}>
                <img src={cursor} alt="손가락" />
                <h4>안궁금해!</h4>
              </SubText>
            </>
          )}

          {conversationStage === 2 && (
            <>
              <SubText>
                <img src={cursor} alt="손가락" />
                <p>왼쪽 그림!</p>
              </SubText>
              <SubText>
                <img src={cursor} alt="손가락" />
                <h3>오른쪽 그림!</h3>
              </SubText>
              <SubText onClick={() => setConversationStage(0)}>
                <img src={cursor} alt="손가락" />
                <h4>다시 볼래!</h4>
              </SubText>
            </>
          )}
        </SubChat>
      </Chat>

      {selectedPainting && (
        <ModalBackground onClick={() => setSelectedPainting(null)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedPainting(null)}>
              <img src={closeBtn} alt="팝업창닫기" />
            </CloseButton>
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
            >
              <TransformComponent>
                <EnlargedPainting
                  style={{
                    backgroundImage: `url(${
                      selectedPainting === "left"
                        ? paintings[0].background
                        : paintings[1].background
                    })`,
                    backgroundSize: "cover", // 선택
                    backgroundPosition: "center", // 선택
                  }}
                >
                  {/* {selectedPainting === "left" ? (
                    <img src={paintframe} alt="왼쪽그림확대" />
                  ) : (
                    <img src={paintframe} alt="오른쪽그림확대" />
                  )} */}
                </EnlargedPainting>
              </TransformComponent>
            </TransformWrapper>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
};

export default Main;
