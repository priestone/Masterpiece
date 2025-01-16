import styled from "styled-components";
import homeBg from "./backgroundImg/homeBg.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${homeBg});
`;
const Logo = styled.div``;

const Home = () => {
  return (
    <Container>
      <Logo></Logo>
    </Container>
  );
};

export default Home;
