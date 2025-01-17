import styled from "styled-components";

const Container = styled.div``;
const Imgwrap = styled.div``;
const NpcWrap = styled.div``;
const ButtonWrap = styled.div``;
const Button = styled.button``;

const Ending = () => {
  return (
    <Container>
      <Imgwrap>
        <img src={paintFrame} alt="frame" />
      </Imgwrap>
      <NpcWrap>
        <img src="" alt="부엉이" />
        <img src="" alt="L말풍선" />
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
