import styled from "styled-components";
import npc1head from "../components/img/npc/1_head.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import chat3 from "../components/img/chat/chat3.png";
import cursor from "../components/img/cursor.png";

const ChatWrap = styled.div`
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

const Chat = ({
  conversationStage,
  dialogueLines,
  setConversationStage,
  handleSelect,
  setSelectedPainting,
}) => {
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

  return (
    <ChatWrap>
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
    </ChatWrap>
  );
};

export default Chat;
