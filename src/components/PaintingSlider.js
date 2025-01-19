import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import paintframe from "../components/img/paintframe.png";
import styled from "styled-components";
import real1 from "../imgs/real/real1.jpg";
import EndingModal from "./EndingModal";
import { data } from "../data/Data";
import { useState } from "react";

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 480px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
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
      width: 300px;
      height: 300px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffb400;
  }

  .swiper-pagination-bullet {
    background: #ffb400;
  }
`;

const PaintingSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);

  const openModal = (painting) => {
    setSelectedPainting(painting);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPainting(null); // 선택 데이터 초기화
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
        {data.real.map((painting) => (
          <SwiperSlide key={painting.id} onClick={() => openModal(painting)}>
            <img className="frame" src={paintframe} alt="frame" />
            <img
              className="artwork"
              src={painting.image || real1}
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
