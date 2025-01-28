import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import paintframe from "../components/img/paintframe.png";
import painting_info from "../components/img/paintinfo.jpg";
import cursor from "../components/img/cursor.png";
import styled from "styled-components";
import real_0 from "../imgs/real/real_0.jpg";
import EndingModal from "./EndingModal";
import { useState } from "react";

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 480px;

  .swiper-slide {
    height: 100%;
    min-height: 530px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    @media screen and (max-width: 440px) {
      height: 360px;
    }
  }

  .frame {
    position: absolute;
    width: 450px;
    height: 450px;
    z-index: 10;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.6);
  }

  .artwork {
    position: absolute;
    width: 400px;
    height: 400px;
    z-index: 9;
    object-fit: cover;
  }

  .info {
    position: absolute;
    bottom: -42%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
    img {
      max-width: 100px;
      height: auto;
      object-fit: contain;
      margin: 5px 0;
    }

    @media screen and (max-width: 440px) {
      bottom: -22%;
      img {
        max-width: 80px;
      }
    }
  }

  .swiper-slide img {
    width: 400px;
    height: 400px;
    cursor: pointer;

    @media screen and (max-width: 440px) {
      width: 320px;
      height: 320px;
    }
  }

  /* .swiper-button-next,
  .swiper-button-prev {
    color: #ffb400;
    @media screen and (max-width: 440px) {
      transform: translateY(-40px);
    }
  } */

  .swiper-button-next,
  .swiper-button-prev {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next {
    background-image: url(${cursor});
  }

  .swiper-button-prev {
    background-image: url(${cursor});
    transform: scaleX(-1);
  }

  .swiper-pagination {
    @media screen and (max-width: 440px) {
      display: none;
    }
  }

  /* .swiper-pagination-bullet {
    background: #ddd;
    width: 14px;
    height: 14px;
    opacity: 0.7;
    transition: 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #ffb400;
    transform: scale(1.3);
  } */
`;

const PaintingSlider = ({ paintings }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);

  const openModal = (painting) => {
    setSelectedPainting(painting);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPainting(null);
  };

  const realContext = require.context(
    "../imgs/real",
    false,
    /\.(png|jpe?g|svg)$/
  );

  // id로 이미지 찾기
  const getImageById = (id) => {
    try {
      return realContext(`./real_${id}.jpg`);
    } catch (error) {
      console.error(`error`, error);
      return null;
    }
  };

  return (
    <>
      <CustomSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation
        // pagination={{ clickable: true }}
        loop
        breakpoints={{
          1400: { slidesPerView: 3, spaceBetween: 40 },
          1000: { slidesPerView: 2, spaceBetween: 30 },
          440: { slidesPerView: 1, spaceBetween: 20 },
        }}
        // style={{ paddingBottom: "30px" }}
      >
        {paintings.map((painting) => (
          <SwiperSlide key={painting.id} onClick={() => openModal(painting)}>
            <img className="frame" src={paintframe} alt="frame" />
            <img
              className="artwork"
              src={getImageById(painting.id) || real_0}
              alt={painting.title}
            />
            <div className="info" style={{ marginBottom: "100px" }}>
              <img src={painting_info} alt="painting_info" />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>

      {selectedPainting && (
        <EndingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          painting={selectedPainting}
        />
      )}
    </>
  );
};
export default PaintingSlider;
