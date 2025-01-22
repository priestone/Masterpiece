import styled from "styled-components";
import angry from "../components/img/emotion/emotion_3.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  h2 {
    color: white;
    font-size: 30px;
    text-align: center;
  }

  img {
    width: 200px;
  }
`;

const Angry = styled.div``;

const PageNotFound = () => {
  return (
    <Container>
      <Angry>
        <h2>404 Not Found</h2>
        <img src={angry} alt="여욱이" />
      </Angry>
    </Container>
  );
};

export default PageNotFound;
