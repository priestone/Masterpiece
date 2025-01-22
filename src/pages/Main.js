import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainMoBg from "./backgroundImg/mainMoBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import cursor from "../components/img/cursor.png";
import homeBtn from "../components/img/homBtn.svg";
import npc1body from "../components/img/npc/1_body.png";
import npc1head from "../components/img/npc/1_head.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import chat3 from "../components/img/chat/chat3.png";
import closeBtn from "../components/img/downarrow.svg";
import neoguri from "../components/img/neogurinew.png";
import museum from "../components/img/museum.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Loading from "../components/Loading";

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
    background-color: green;
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
    bottom: 20%;
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
  right: -16%;
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
    right: -12%;

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
    right: -8%;

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
  /** 1) 라운드/정답/대화 등 상태들 */
  const [roundCount, setRoundCount] = useState(1); // 1~10까지 문제
  const [correctCount, setCorrectCount] = useState(0);
  const [conversationStage, setConversationStage] = useState(0);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [seenRealIds, setSeenRealIds] = useState([]);
  const [dialogueLines, setDialogueLines] = useState(["", ""]);

  /** 게임이 끝났는지 여부: 끝나면 <Loading>만 표시 */
  const [isGameOver, setIsGameOver] = useState(false);

  const RandomChat = () => {
    const idx = Math.floor(Math.random() * randomDialogues.length);
    setDialogueLines(randomDialogues[idx]);
  };

  useEffect(() => {
    // 컴포넌트가 마운트된 직후, 한 번만 실행
    localStorage.removeItem("seenRealIds");
    setSeenRealIds([]); // state도 초기화
  }, []); // 빈 배열

  // 파일 경로(ex: ".../real_4.jpg")에서 숫자(ID)만 뽑아내는 함수
  const extractRealIdFromPath = (filePath) => {
    // 경로 → 파일명 추출
    const fileName = filePath.split("/").pop(); // "real_4.jpg" 등
    // 정규식으로 real_숫자. 에 해당하는 부분 찾기
    const match = fileName.match(/real_(\d+)\./);
    if (!match) return null;
    return parseInt(match[1], 10); // "4" → 정수 4
  };

  /** 2) 폴더에서 이미지 불러오기 → 초기 state로 복사 */
  const aiContext = require.context("../imgs/ai", false, /\.(png|jpe?g|svg)$/);
  const realContext = require.context(
    "../imgs/real",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const aiImages = aiContext.keys().map(aiContext);
  const realImages = realContext.keys().map(realContext);

  // unused 배열에 처음에만 복사 (마운트 시 1회)
  const [aiUnused, setAiUnused] = useState(() => [...aiImages]);
  const [realUnused, setRealUnused] = useState(() => [...realImages]);

  /** 3) 현재 라운드에서 보여줄 그림 2장 (AI 1, REAL 1) */
  const [paintings, setPaintings] = useState([
    { id: "left", background: "", type: "" },
    { id: "right", background: "", type: "" },
  ]);

  // ------------------------- 게임/문제 출제 로직 -------------------------
  /** 새 문제(라운드) 불러오기 */
  const loadNewQuestion = () => {
    // 이미 10라운드를 모두 마쳤다면 더 이상 문제 없음.
    if (roundCount > 10) {
      endGame();
      return;
    }

    // 더 이상 뽑을 이미지가 없을 때
    if (aiUnused.length === 0 || realUnused.length === 0) {
      endGame();
      return;
    }

    // AI/REAL 각각 1장씩 랜덤 추출
    const aiIndex = Math.floor(Math.random() * aiUnused.length);
    const realIndex = Math.floor(Math.random() * realUnused.length);

    const selectedAi = aiUnused[aiIndex];
    const selectedReal = realUnused[realIndex];

    // 50% 확률로 왼쪽=AI / 오른쪽=REAL 또는 반대
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

    // 뽑은 2장 모두 unused 배열에서 제거
    const newAiUnused = [...aiUnused];
    newAiUnused.splice(aiIndex, 1);
    const newRealUnused = [...realUnused];
    newRealUnused.splice(realIndex, 1);

    setAiUnused(newAiUnused);
    setRealUnused(newRealUnused);

    // 대화/모달 초기화
    setConversationStage(0);
    setSelectedPainting(null);

    RandomChat();
  };

  /** 그림 선택 시 정답 체크 & 다음 문제 */
  const handleSelect = (direction) => {
    const chosen = paintings.find((p) => p.id === direction);
    const realPainting = paintings.find((p) => p.type === "real");
    if (realPainting) {
      // "real_4.jpg" → 4
      const realId = extractRealIdFromPath(realPainting.background);
      if (realId !== null) {
        // seenRealIds 배열 업데이트
        const updated = [...seenRealIds, realId];
        setSeenRealIds(updated);

        // 로컬 스토리지에도 즉시 반영
        localStorage.setItem("seenRealIds", JSON.stringify(updated));
      }
    }

    if (!chosen) return;

    // 정답 (type === "real")
    if (chosen.type === "real") {
      setCorrectCount((prev) => prev + 1);
      // alert(`정답! 현재 점수: ${correctCount + 1}`);
    } else {
      // alert(`오답! 현재 점수: ${correctCount}`);
    }

    // 만약 이번이 10라운드라면 이 선택을 마지막으로 게임 종료
    if (roundCount === 10) {
      // 마지막 정답 체크 후 바로 종료
      endGame();
    } else {
      // 아직 10라운드 미만이면 다음 문제로 진행
      setRoundCount((prev) => prev + 1);
      loadNewQuestion();
    }
  };

  /** 게임 종료 → <Loading>화면 표시로 전환 */
  const endGame = () => {
    // alert(`게임 종료!\n최종 점수: ${correctCount} / 10`);
    // 게임 화면 감추고 <Loading>만 표시
    setIsGameOver(true);
  };

  // ------------------------- 대화 관련 -------------------------
  const getChatText = () => {
    switch (conversationStage) {
      case 0:
        return (
          <>
            {dialogueLines[0]}
            <br />
            {dialogueLines[1]}
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

  // ------------------------- 첫 문제 로드 -------------------------
  useEffect(() => {
    // paintings가 비어있고, roundCount=1 일 때만 첫 문제 로드
    if (paintings[0].background === "" && !isGameOver && roundCount <= 10) {
      loadNewQuestion();
    }
    // eslint-disable-next-line
  }, [aiUnused, realUnused]);

  // ------------------------- 렌더링 -------------------------
  // 1) 게임이 끝났다면 <Loading>만 보여줌
  if (isGameOver) {
    return <Loading correctCount={correctCount} />;
  }

  // 2) 게임 진행 중이면 기존 화면 렌더

  const barWidthPercent = ((roundCount - 1) / 9) * 100;

  return (
    <Container>
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
              <SubText onClick={() => handleSelect("left")}>
                <img src={cursor} alt="손가락" />
                <p>왼쪽 그림!</p>
              </SubText>
              <SubText onClick={() => handleSelect("right")}>
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
