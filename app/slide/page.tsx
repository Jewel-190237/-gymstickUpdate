'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function App() {
    const swipperRef = useRef(null);

    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);

    const Next = () => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.slideNext();
        }
    };

    const Previous = () => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.slidePrev();
        }
    };

    const slider = [
        { _id: 1, title: 'slide 1', description: 'swipper slider description 1' },
        { _id: 2, title: 'slide 2', description: 'swipper slider description 2' },
        { _id: 3, title: 'slide 3', description: 'swipper slider description 3' },
        { _id: 4, title: 'slide 4', description: 'swipper slider description 4' },
        { _id: 5, title: 'slide 5', description: 'swipper slider description 5' },
        { _id: 6, title: 'slide 6', description: 'swipper slider description 6' },
        { _id: 7, title: 'slide 7', description: 'swipper slider description 7' },
        { _id: 8, title: 'slide 8', description: 'swipper slider description 8' }
    ];

    return (
        <section className='max-w-[1320px] mx-auto'>
            <div className='slider-style overflow-hidden'>
                <div className='flex items-center justify-end space-x-6 mt-6 mr-2'>
                    <button onClick={Previous} className='swipper-button'>
                        <MdKeyboardArrowLeft size={40} />
                    </button>
                    <button onClick={Next} className='swipper-button'>
                        <MdKeyboardArrowRight size={40} />
                    </button>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true} // rotation
                    autoplay={{
                        delay: 2000, // 3 seconds
                        disableOnInteraction: false, // Keep autoplay on interaction
                    }}
                    // breakpoints={{
                    //     640: { // Small devices (tablets)
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //     },
                    //     768: { // Medium devices (small laptops)
                    //         slidesPerView: 2,
                    //         spaceBetween: 24,
                    //     },
                    //     1024: { // Large devices (desktops)
                    //         slidesPerView: 3,
                    //         spaceBetween: 24,
                    //     },
                    //     1280: { // Extra large devices (large desktops)
                    //         slidesPerView: 4,
                    //         spaceBetween: 24,
                    //     },
                    // }}
                    modules={[Keyboard, Pagination, Navigation, Autoplay]}
                    ref={swipperRef}
                    className="mt-10"
                >
                    {slider.map((slide) => (
                        <SwiperSlide key={slide._id}>
                            <div className='py-40 bg-black text-white rounded-3xl'>
                                <h1 className='text-center text-8xl capitalize'>{slide.title}</h1>
                                <p className='text-center text-5xl capitalize mt-6'>{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
