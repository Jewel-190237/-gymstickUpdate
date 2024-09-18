'use client';
import React, { useEffect, useRef } from 'react';
import BannerTitle from '../common/banner-title';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TeamCard from './team-card';

const Team = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, []);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const teams = [
        {_id:'1', image:'/team1.png', name: "Dianne Russell", role: "Gym Instructor" },
        {_id:'2', image:'/team2.png', name: "Jane Cooper", role: "Yoga Instructor" },
        {_id:'3', image:'/team3.png', name: "Kristin Watson", role: "Pilates Trainer" },
        {_id:'4', image:'/team4.png', name: "Wade Warren", role: "Bodybuilding Coach" },  
        {_id:'1', image:'/team1.png', name: "Dianne Russell", role: "Gym Instructor" },
        {_id:'2', image:'/team2.png', name: "Jane Cooper", role: "Yoga Instructor" },
        {_id:'3', image:'/team3.png', name: "Kristin Watson", role: "Pilates Trainer" },
        {_id:'4', image:'/team4.png', name: "Wade Warren", role: "Bodybuilding Coach" },  
    ];
    return (
        <div className='container  h-fit'>
            <div className='flex justify-between items-center'>
                <BannerTitle subtitle={'team'} title={'meet the pros'} className={''} />
                <div className='flex items-center gap-6 mt-6 '>
                    <button onClick={goPrev} className='w-[40px] h-[40px] rounded-full box-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-500'><MdKeyboardArrowLeft size={30} /></button>
                    <button onClick={goNext} className='w-[40px] h-[40px] rounded-full box-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-500'><MdKeyboardArrowRight size={30} /></button>
                </div>
            </div>
            <div className='overflow-hidden mt-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{

                        668: {
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
                    className='!p-1'
                    ref={swiperRef}
                >
                    {teams?.map((team, index) => (
                        <SwiperSlide key={index}>
                            <TeamCard team={team} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Team;