import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";
import { useEffect, useState } from "react";

interface CarouselModalProps {
  list: string[];
}

interface CarouselCardProps {
  item: string;
}

const CarouselModal: React.FC<CarouselModalProps> = ({ list }) => {
  const [currentItem, setCurrentItem] = useState("");

  const CarouselCard: React.FC<CarouselCardProps> = ({ item }) => {
    const isActive = useSwiperSlide().isActive;

    useEffect(() => {
      if (isActive) setCurrentItem(item);
    });

    return (
      <>
        <div className="w-full h-200 rounded-10 relative overflow-hidden">
          <Image
            src="/images/default_image.png"
            fill={true}
            alt="캐러셀 이미지"
            className="object-cover"
          />
        </div>
      </>
    );
  };

  return (
    <div className="w-full h-auto absolute top-[40%] transform -translate-y-1/2">
      {/* 캐러셀 */}
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={false}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <CarouselCard item="first" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard item="second" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard item="third" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard item="fourth" />
        </SwiperSlide>
      </Swiper>
      {/* 텍스트 버튼 */}
      <div className="w-11/12 h-42 mx-auto bg-white/80 rounded-8 mt-10">
        <h1 className="text-18 font-500 text-brown-700 text-center leading-42">
          {currentItem}
        </h1>
      </div>
    </div>
  );
};

export default CarouselModal;
