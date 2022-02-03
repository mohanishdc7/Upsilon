import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import required modules
import { FreeMode, Pagination } from "swiper";

import styles from "./MostPopularCourses.module.css";
import CourseCard from "../UI/CourseCard";

const MostPopularCourses = () => {
  return (
    <div className={styles.body + " bg-dark py-4"}>
      <h1 className='fs-1 fw-bold mb-4 text-light'>Most Popular Courses</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        className='mySwiper'
      >
        {/* <SwiperSlide className={styles.SwiperSlide}>
          <CourseCard />
        </SwiperSlide> */}
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MostPopularCourses;
