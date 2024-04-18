// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";

import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../../App.css"


const Slider = () => {
    return (
        <div className="mb-16">
            <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0">
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/cover1.jpg')] slide  flex items-center justify-center">
                        <h2 className=" text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/cover2.jpg')] slide ">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/cover3.jpg')] slide ">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/cover4.jpg')] slide ">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;