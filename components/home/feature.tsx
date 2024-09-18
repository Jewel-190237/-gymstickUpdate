'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BannerTitle from '../common/banner-title';
import FeatureCard from './feature-card';

interface Feature {
  image: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const featureData: Feature[] = [
    { image: "/sehedul.png", title: "Scheduling", description: "Book your favorite classes online" },
    { image: "/personal.png", title: "Personal Training", description: "Get personalized training plans" },
    { image: "/group.png", title: "Group Training", description: "Join a variety of group classes" },
    { image: "/membership.png", title: "Flexibility", description: "Flexible class schedules for you" },
    { image: "/sehedul.png", title: "Scheduling", description: "Book your favorite classes online" },
    { image: "/personal.png", title: "Personal Training", description: "Get personalized training plans" },
    { image: "/group.png", title: "Group Training", description: "Join a variety of group classes" },
    { image: "/membership.png", title: "Flexibility", description: "Flexible class schedules for you" },
  ];

  return (
    <div className='relative max-w-[1320px] px-4 md:px-0 mx-auto lg:my-[120px] my-[60px]  '>
        <BannerTitle className={"items-center"} title='why choose us ?' subtitle='Features'/>
      <div className='overflow-hidden mt-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween= {24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
           
            768: {
              slidesPerView: 2, 
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 3, 
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24
            },
          }}
          modules={[Pagination]}
          className="!pb-16 !px-3 !pt-5"
        >
          {featureData.map((feature, index) => (
            <SwiperSlide key={index}>
              <FeatureCard feature={feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
