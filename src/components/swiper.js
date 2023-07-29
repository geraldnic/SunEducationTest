// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Box, Image } from "@chakra-ui/react";

import DioLiving from "../assets/icons/swiper/dioLiving.png";
import Hippo from "../assets/icons/swiper/hippo.png";
import HomeAndLiving from "../assets/icons/swiper/homeAndLiving.png";
import Ilios from "../assets/icons/swiper/ilios.png";
import Melandas from "../assets/icons/swiper/melandas.png";

const swipers = [Hippo, HomeAndLiving, Ilios, DioLiving, Melandas];

export default function SwiperComponent() {
  return (
    <Box
      maxW={"75%"}
      textAlign={"center"}
      mx={"auto"}
      my={10}
      position={"relative"}
    >
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        style={{
          "--swiper-pagination-color": "#FFCE07",
          "--swiper-pagination-bullet-inactive-color": "#C4C4C4",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "13px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
        }}
      >
        {swipers.map((item) => (
          <SwiperSlide>
            <Box h={"230px"}>
              <Image src={item} w={"200px"} />
            </Box>
          </SwiperSlide>
        ))}

        {/* mapping ulang untuk melihat fitur swiper */}
        {swipers.map((item) => (
          <SwiperSlide>
            <Box h={"170px"}>
              <Image src={item} w={"200px"} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
