import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";
import paintframe from "../components/img/paintframe.png";
import chat1_1 from "../components/img/chat/chat1_1.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${mainBg});
`;

const BgBox = styled.div`
  img {
    position: absolute;
    bottom: -140px;
    left: 0;
  }

  @media screen and (max-width: 1000px) {
    img {
      bottom: 0;
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
`;

const Painting = styled.div`
  width: 400px;
  height: 400px;
  background-color: salmon;

  #frame {
    height: 400px;
  }
`;

const Chat = styled.div``;

const Main = () => {
  return (
    <Container>
      <BgBox>
        <img src={mainBox} alt="박스배경" />
      </BgBox>

      <PaintingWrap>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
        <Painting>
          <img src={paintframe} alt="액자사진" id="frame" />
        </Painting>
      </PaintingWrap>

      <Chat>
        <img src={chat1_1} alt="" />
      </Chat>
    </Container>
  );
};

export default Main;
