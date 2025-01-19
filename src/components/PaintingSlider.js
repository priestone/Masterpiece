import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import paintframe from "../components/img/paintframe.png";
import styled from "styled-components";
import real1 from "../imgs/real/real1.jpg";

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 480px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .swiper-slide img {
    width: 400px;
    height: 400px;
    background-color: lightsalmon;

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
  return (
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
      <SwiperSlide>
        <img src={paintframe} alt="작품_1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_5" />
      </SwiperSlide>
    </CustomSwiper>
  );
};

export default PaintingSlider;
