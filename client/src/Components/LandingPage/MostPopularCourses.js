import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import required modules
import { FreeMode, Navigation } from "swiper";

import styles from "./MostPopularCourses.module.css";
import CourseCard from "../UI/CourseCard";

const MostPopularCourses = () => {
  return (
    <section className={styles.body + " bg-dark pt-3 pb-5"}>
      <h1 className='fs-1 fw-bold mb-4 text-light'>Most Popular Courses</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        className={styles.swiper + " mySwiper"}
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
    </section>
  );
};

export default MostPopularCourses;
