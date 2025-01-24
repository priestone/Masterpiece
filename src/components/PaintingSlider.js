import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import paintframe from "../components/img/paintframe.png";
import styled from "styled-components";
import real_0 from "../imgs/real/real_0.jpg";
import EndingModal from "./EndingModal";
import { useState } from "react";

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 480px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media screen and (max-width: 440px) {
      height: 360px;
    }
  }

  .frame {
    position: absolute;
    width: 450px;
    height: 450px;
    z-index: 10;
  }

  .artwork {
    position: absolute;
    width: 400px;
    height: 400px;
    z-index: 9;
    object-fit: cover;
  }

  .swiper-slide img {
    width: 400px;
    height: 400px;
    /* background-color: lightsalmon; */

    @media screen and (max-width: 440px) {
      width: 270px;
      height: 270px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffb400;
    @media screen and (max-width: 440px) {
      transform: translateY(-40px);
    }
  }

  .swiper-pagination {
    @media screen and (max-width: 440px) {
      display: none;
    }
  }

  .swiper-pagination-bullet {
    background: #ffb400;
    width: 14px;
    height: 14px;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background: #444;
  }
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
        spaceBetween={60}
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          1400: { slidesPerView: 3, spaceBetween: 40 },
          1000: { slidesPerView: 2, spaceBetween: 30 },
          440: { slidesPerView: 1, spaceBetween: 20 },
        }}
        style={{ paddingBottom: "30px" }}
      >
        {paintings.map((painting) => (
          <SwiperSlide key={painting.id} onClick={() => openModal(painting)}>
            <img className="frame" src={paintframe} alt="frame" />
            <img
              className="artwork"
              src={getImageById(painting.id) || real_0}
              alt={painting.title}
            />
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
