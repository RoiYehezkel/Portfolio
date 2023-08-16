import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const DATA = [
  {
    avatar: AVTR1,
    name: "Roi Yehezkel",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    avatar: AVTR2,
    name: "Roi Yehezkel",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    avatar: AVTR3,
    name: "Roi Yehezkel",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    avatar: AVTR4,
    name: "Roi Yehezkel",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

function Testimonials() {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {DATA.map((item, index) => (
          <SwiperSlide key={index} className="testimonials">
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

export default Testimonials;
