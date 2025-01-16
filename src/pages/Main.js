import styled from "styled-components";
import mainBg from "./backgroundImg/mainBg.jpg";
import mainBox from "./backgroundImg/mainBox.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${mainBg});

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
const Main = () => {
  return (
    <Container>
      <img src={mainBox} alt="박스배경" />
    </Container>
  );
};

export default Main;
