import React from "react";
import "./Technologies.css";
import DATA from "./technologies.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Technologies() {
  return (
    <section id="technologies">
      <h5>My Favorite Technologies</h5>
      <h2>Technologies</h2>
      <Swiper
        className="container technologies_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {DATA.map((item, index) => (
          <SwiperSlide key={index} className="technologies">
            <div className="client_avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <h5>{item.name}</h5>
            <small className="client_review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Technologies;
