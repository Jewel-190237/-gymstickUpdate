"use client";
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from './testimonial-card';
import BannerTitle from '../common/banner-title';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Testimonial = () => {
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

    const allReviews = [
        { _id: "1", rate: 5, review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Sandra Garica", role: "Manager" },
        { _id: "2", rate: 4, review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Renee Garica", role: "Car Racer" },
        { _id: "3", rate: 3, review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Nijam Hossen", role: "Bike Racer" },
        { _id: "4", rate: 3.5, review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Mahedi Hassan", role: "Bike Maker" },
        { _id: "5", rate: 4.5, review: "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have been hiring people in this space for a number of years and I that can I have been hiring people in this space for a ", name: "Adnan Khan", role: "Bike Clener" },
    ];

    return (
        <div className='container my-20 '>
            <div className='w-full flex flex-col-reverse lg:flex-row gap-11'>
                <div className='overflow-hidden lg:w-3/5 w-full '>
                    <div className='flex items-center justify-end gap-6  lg:hidden me-4'>
                        <button onClick={goPrev} className='w-[30px] h-[30px] rounded-full box-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-500'><MdKeyboardArrowLeft size={25} /></button>
                        <button onClick={goNext} className='w-[30px] h-[30px] rounded-full box-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-500'><MdKeyboardArrowRight size={25} /></button>
                    </div>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },

                        }}
                        className="!px-1"
                    >
                        {allReviews.map((allreview, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard allreview={allreview} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='lg:w-2/5'>
                    <BannerTitle className={''} subtitle={'Testimonial'} title={'our client feedback'} />
                    <p className='description lg:mt-10 mt-5'>
                        I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that understands your needs.
                    </p>
                    <div className='md:flex items-center gap-6 mt-6 hidden'>
                        <button onClick={goPrev} className='w-[40px] h-[40px] rounded-full box-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-500'><MdKeyboardArrowLeft size={30} /></button>
                        <button onClick={goNext} className='w-[40px] h-[40px] rounded-full box-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-500'><MdKeyboardArrowRight size={30} /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Testimonial;
