import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const Certificates = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6">
          <div className="pt-24 pb-16">
            <SectionTitle title={"Certificates"} />
          </div>
          {/* carousel */}

          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              speed={1200}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination,Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://i.postimg.cc/wv4HDrd2/UC-ba2c829d-c0c8-4543-859b-b080f7579f8f.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/SQ5ksHdN/UC-bec716f7-1c84-4bd4-b16f-54dd8777deca.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/dtyvTnNR/UC-f49c4ac1-f37a-43c4-bff0-13d7bdaf2d35.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/SsRbQGzM/UC-396c7b7c-7042-44ba-b3e6-ca1dfe844933.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/D0Mfw2hL/programming-Hero-Batch8-Certificate.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
