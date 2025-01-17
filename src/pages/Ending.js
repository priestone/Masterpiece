import styled from "styled-components";
import endingBg from "./backgroundImg/endingBg.jpg";
import endingFloor from "./backgroundImg/endingFloor.png";
import paintframe from "../components/img/paintframe.png";
import chat2_2 from "../components/img/chat/chat1_1.png";
import body from "../components/img/npc/2_body.png";

const Container = styled.div``;
const Imgwrap = styled.div``;
const NpcWrap = styled.div``;
const ButtonWrap = styled.div``;
const Button = styled.button``;

const Ending = () => {
  return (
    <Container>
      <Imgwrap>
        <img src={paintframe} alt="frame" />
      </Imgwrap>
      <NpcWrap>
        <img src={body} alt="부엉이" />
        <img src={chat2_2} alt="L말풍선" />
        <img src="" alt="S말풍선" />
      </NpcWrap>
      <ButtonWrap>
        <Button>결과보기</Button>
        <Button>홈으로</Button>
      </ButtonWrap>
      <img src={endingFloor} alt="bgFloor" />
    </Container>
  );
};

export default Ending;
