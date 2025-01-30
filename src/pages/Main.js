import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainMoBg from "./backgroundImg/mainMoBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import homeBtn from "../components/img/homBtn.svg";
import npc1body from "../components/img/npc/1_body.png";
import closeBtn from "../components/img/downarrow.svg";
import neoguri from "../components/img/neogurinew.png";
import museum from "../components/img/museum.svg";
import loadingImg from "../components/img/loadingimg.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import Chat from "../components/Chat";
import light from "../components/img/boatlight.png"

const HomeBtn = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }

  @media screen and (max-width: 440px) {
    width: 60px;
    height: 60px;

    img {
      width: 60%;
    }
  }

  /* background: url(${homeBtn}) no-repeat center / cover; */
`;

const RoundWrap = styled.div`
  position: relative;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  width: 500px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    color: green;
    font-size: 20px;
    font-weight: 700;
  }

  #museum {
    position: absolute;
    top: -24px;
    right: -50px;
    width: 100px;
    z-index: 10;
  }

  @media screen and (max-width: 440px) {
    top: 20%;
    width: 300px;
    height: 10px;

    #museum {
      width: 60px;
      top: -20px;
      right: -20px;
    }
  }
`;

const Round = styled.div`
  width: 500px;

  @media screen and (max-width: 440px) {
    width: 300px;
  }
`;

const Bar = styled.div`
  /* width: 10px; */
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  background-color: green;
  border-radius: 20px;
  /* border-radius: 50%; */

  #neoguri {
    position: absolute;
    top: -20px;
    right: 10px;
    width: 50px;
    transform: translateX(50%);
    z-index: 11;
  }

  @media screen and (max-width: 440px) {
    height: 10px;
    #neoguri {
      width: 40px;
      top: -20px;
    }
  }
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
    /* background-color: green; */
    background: url(${loadingImg});
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 440px) {
    width: 90%;
    top: 34%;
  }
`;

const Painting = styled.div`
  width: 400px;
  height: 400px;
  /* background-color: salmon; */
  background: url(${loadingImg});
  min-width: 400px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.6);

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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
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
  /* background-color: salmon; */
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

const LightWrap = styled.div`
width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 880;
mix-blend-mode: lighten;
filter: opacity(0.6);
`;

const randomDialogues = [
  ["어떠십니까? 감히 말하건데", "손님 취향에 찰떡입니다요!"],
  ["헷, 이번에는 진짜 특급 희귀품!", "한 번 보시죠!"],
  ["흐흐~ 손님, 이건 그냥 지나치기엔", "아까운 보물입니다요!"],
  ["손님, 믿음이 중요합니다요!", "이번 작품은 대박입니다!"],
  ["히야~ 정말 멋진 그림들입니다요!", "자세히 살펴 보시죠~ 헷헷헷"],
  ["이 작품들 좀 보십시오~", "한눈에 반할만한 녀석입니다요!"],
  ["이건 진짜 물건입니다요~! ", "놓치면 아쉬울 겁니다요!"],
  ["슬쩍 한번 둘러보시죠, 손님~ ", "훌륭한 작품들입니다요! 헷헷"],
];

const Main = () => {
  const [roundCount, setRoundCount] = useState(1); // 1~10까지 문제
  const [correctCount, setCorrectCount] = useState(0); //맞춘 횟수
  const [conversationStage, setConversationStage] = useState(0); //대화 단계
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [seenRealIds, setSeenRealIds] = useState([]);
  const [dialogueLines, setDialogueLines] = useState(["", ""]);
  const [isGameOver, setIsGameOver] = useState(false); //게임 끝 확인

  // 여욱이가 매 라운드마다 랜덤하게 대사치는 함수
  const RandomChat = () => {
    const idx = Math.floor(Math.random() * randomDialogues.length);
    setDialogueLines(randomDialogues[idx]);
  };

  // 엔딩에 필요한 진품 그림 로컬스토리지에 넣는 함수
  useEffect(() => {
    (() => {
      try {
        localStorage.removeItem("seenRealIds");
        setSeenRealIds([]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // 파일 경로에서 숫자(ID)만 뽑아내는 함수
  const extractRealIdFromPath = (filePath) => {
    const fileName = filePath.split("/").pop();
    const match = fileName.match(/real_(\d+)\./);
    if (!match) return null;
    return parseInt(match[1], 10);
  };
  const aiContext = require.context("../imgs/ai", false, /\.(png|jpe?g|svg)$/);
  const realContext = require.context(
    "../imgs/real",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const aiImages = aiContext.keys().map(aiContext);
  const realImages = realContext.keys().map(realContext);

  const [aiUnused, setAiUnused] = useState(() => [...aiImages]);
  const [realUnused, setRealUnused] = useState(() => [...realImages]);

  // 호출된 그림 정보
  const [paintings, setPaintings] = useState([
    { id: "left", background: "", type: "" },
    { id: "right", background: "", type: "" },
  ]);

  const loadNewQuestion = () => {
    if (roundCount > 10) {
      endGame();
      return;
    }

    if (aiUnused.length === 0 || realUnused.length === 0) {
      endGame();
      return;
    }

    const aiIndex = Math.floor(Math.random() * aiUnused.length);
    const realIndex = Math.floor(Math.random() * realUnused.length);

    const selectedAi = aiUnused[aiIndex];
    const selectedReal = realUnused[realIndex];

    // 작품 좌우 랜덤으로 뽑는 함수수
    const isAiLeft = Math.random() < 0.5;
    let newPaintings;
    if (isAiLeft) {
      newPaintings = [
        { id: "left", background: selectedAi, type: "ai" },
        { id: "right", background: selectedReal, type: "real" },
      ];
    } else {
      newPaintings = [
        { id: "left", background: selectedReal, type: "real" },
        { id: "right", background: selectedAi, type: "ai" },
      ];
    }
    setPaintings(newPaintings);

    const newAiUnused = [...aiUnused];
    newAiUnused.splice(aiIndex, 1);
    const newRealUnused = [...realUnused];
    newRealUnused.splice(realIndex, 1);

    setAiUnused(newAiUnused);
    setRealUnused(newRealUnused);

    setConversationStage(0);
    setSelectedPainting(null);

    RandomChat();
  };

  // 작품 선택 함수
  const handleSelect = (direction) => {
    const chosen = paintings.find((p) => p.id === direction);
    const realPainting = paintings.find((p) => p.type === "real");
    if (realPainting) {
      const realId = extractRealIdFromPath(realPainting.background);
      if (realId !== null) {
        const updated = [...seenRealIds, realId];
        setSeenRealIds(updated);

        localStorage.setItem("seenRealIds", JSON.stringify(updated));
      }
    }

    if (!chosen) return;

    if (chosen.type === "real") {
      setCorrectCount((prev) => prev + 1);
    } else {
    }

    if (roundCount === 10) {
      endGame();
    } else {
      setRoundCount((prev) => prev + 1);
      loadNewQuestion();
    }
  };

  // 게임 끝나는거
  const endGame = () => {
    setIsGameOver(true);
  };

  useEffect(() => {
    if (paintings[0].background === "" && !isGameOver && roundCount <= 10) {
      loadNewQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aiUnused, realUnused]);
  // 위 주석을 달면 의존성 무시 가능

  //게임 끝나면 로딩페이지 호출
  if (isGameOver) {
    return <Loading correctCount={correctCount} />;
  }

  // 라운드 게이지 바 비율
  const barWidthPercent = ((roundCount - 1) / 9) * 100;

  return (
    <Container>
      <Helmet>
        <title>여욱이의 배</title>
      </Helmet>

      <img src={mainBox} alt="박스배경" id="boxBg" />

      <RoundWrap>
        <p>{roundCount} / 10</p>
        <Round>
          <Bar style={{ width: `${barWidthPercent}%` }}>
            <img src={neoguri} alt="너구리이미지" id="neoguri" />
          </Bar>
        </Round>
        <img src={museum} alt="박물관이미지" id="museum" />
      </RoundWrap>

      <Link to={"/#"}>
        <HomeBtn>
          <img src={homeBtn} alt="홈홈이미지" />
        </HomeBtn>
      </Link>

      <Npc>
        <img src={npc1body} alt="여욱이" id="npc-body" />
      </Npc>

      <LightWrap>
        <img src={light} alt="조명" />
        <img src={light} alt="조명" />
      </LightWrap>

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

      <Chat
        conversationStage={conversationStage}
        dialogueLines={dialogueLines}
        setConversationStage={setConversationStage}
        handleSelect={handleSelect}
        setSelectedPainting={setSelectedPainting}
      ></Chat>

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
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </TransformComponent>
            </TransformWrapper>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
};

export default Main;
