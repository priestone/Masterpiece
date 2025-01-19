import styled from "styled-components";
import downarrow from "../components/img/downarrow.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  display: flex;
  background: #000d24;
  opacity: 0.8;
  width: 100%;
  /* max-width: 80%; */
  height: 100vh;
  /* max-height: 90%; */
  padding: 200px;

  @media screen and (max-width: 1000px) {
    padding: 100px;
  }
  @media screen and (max-width: 440px) {
    flex-direction: column;
    /* width: 90%; */
    padding: 50px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;

  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
    border: 5px solid salmon;
  }

  @media screen and (max-width: 1400px) {
    padding-right: 35px;

    img {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (max-width: 1000px) {
    padding-right: 35px;

    img {
      width: 450px;
      height: 450px;
    }
  }

  @media screen and (max-width: 440px) {
    padding-right: 0;
    img {
      width: 300px;
      height: 300px;
      margin-top: 50px;
    }
  }
`;

const TextWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e9e4d3;

  h2 {
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  p {
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  @media screen and (max-width: 1400px) {
    h2 {
      font-size: 48px;
    }

    h3 {
      font-size: 28px;
    }

    h4 {
      font-size: 28px;
    }

    p {
      font-size: 22px;
      line-height: 32px;
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 40px;
      /* text-align: center; */
    }

    h3 {
      font-size: 22px;
      /* text-align: center; */
    }

    h4 {
      font-size: 22px;
      margin-bottom: 20px;
      /* text-align: center; */
    }

    p {
      /* text-align: center; */
      font-size: 20px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 440px) {
    margin-bottom: 50px;
    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const CloseArrow = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  img {
    width: 45px;
    height: 32px;
    fill: #ffb400;
  }
`;

const EndingModal = ({ isOpen, onClose, painting }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageWrapper>
          <img src={painting.image} alt={painting.title} />
        </ImageWrapper>

        <TextWrapper>
          <h2>{painting.title}</h2>
          <h3>{painting.year}</h3>
          <h4>{painting.artist}</h4>
          <p>{painting.description}</p>
        </TextWrapper>

        <CloseArrow onClick={onClose}>
          <img src={downarrow} alt="Close Modal" />
        </CloseArrow>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EndingModal;
