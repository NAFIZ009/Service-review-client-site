import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay,Pagination} from "swiper";
import { Link } from "react-router-dom";

const Slider= () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
        modules={[Autoplay,Pagination]}
        className="mySwiper rounded-xl "
      >
        <div className="overlay absolute inset-0 flex ">
            <div className="hero sm:justify-start  sm:ml-16">
                <div className="hero-content">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold text-white" style={{lineHeight:'3.5rem'}}>Assalamualykum <br /> I am <span className="text-6xl text-red-500">Nafiz Ahmed</span> <br />
                        Your <br /> <span className="text-6xl anim1">Video</span> <span className="text-6xl anim2">Walah</span>
                        </h1>

                        <p className="py-6 text-white">
                            I am a Videographer and Content Creator.Offers You Smooth Video Shooting In a Cheap Range
                        </p>
                        <Link to='/services' className="btn btn-ghost bg-white text-black hover:bg-red-300 hover:text-white">Check What I Offer</Link>
                </div>
            </div>
      </div>
        </div>
        <SwiperSlide><img src="https://i.ibb.co/BVtDG2Q/pexels-kyle-loftus-4882167.jpg" alt="pexels-kyle-loftus-4882167" border="0"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Kz58mPH/pexels-kyle-loftus-2510428.jpg" alt="pexels-kyle-loftus-2510428" border="0"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/jkKwNfQ/pexels-l-minh-3062532.jpg" alt="pexels-l-minh-3062532" border="0"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/c8pXgmd/pexels-matheus-bertelli-2608519-1.jpg" alt="pexels-matheus-bertelli-2608519-1" border="0"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/MgVxG44/pexels-kyle-loftus-3045398.jpg" alt="pexels-kyle-loftus-3045398" border="0"/></SwiperSlide>
      </Swiper>
    </>
  );
}


export default Slider;