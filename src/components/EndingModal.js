import styled from "styled-components";
import downarrow from "../components/img/downarrow.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  display: flex; /* Flexbox 사용 */
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  max-width: 80%;
  height: 100%;
  max-height: 90%;
  padding: 20px;
  border-radius: 10px;

  @media screen and (max-width: 440px) {
    flex-direction: column;
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding-right: 300px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e9e4d3;

  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  @media screen and (max-width: 440px) {
    h2 {
      font-size: 20px;
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
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  img {
    width: 45px;
    height: 32px;
    fill: #ffb400;
    transition: fill 0.3s;
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
