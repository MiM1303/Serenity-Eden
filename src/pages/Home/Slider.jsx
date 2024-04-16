// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation } from 'swiper/modules';
import "../../App.css"


const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="slide slide1 flex items-center justify-center">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <h2 className="text-center text-base-300 leading-loose font-extrabold text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;