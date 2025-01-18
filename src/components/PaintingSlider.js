import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import paintframe from "../components/img/paintframe.png";
import styled from "styled-components";

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 500px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .swiper-slide img {
    width: 90%;
    height: auto;
    /* object-fit: cover; */
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
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop
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
      <SwiperSlide>
        <img src={paintframe} alt="작품_6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_8" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_9" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={paintframe} alt="작품_10" />
      </SwiperSlide>
    </CustomSwiper>
  );
};

export default PaintingSlider;
