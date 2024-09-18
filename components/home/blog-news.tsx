"use client";
import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { PiBowlFoodFill } from "react-icons/pi";
import { GiCycling } from "react-icons/gi";
import { FaHandRock } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { TbSwimming } from "react-icons/tb";
import { FaPersonRunning } from "react-icons/fa6";
import BannerTitle from '../common/banner-title';
import Button from '../common/button';


const serviceData = [
    { image: PiBowlFoodFill, title: "Nutrition Counseling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: FaHandRock, title: "gym fitness class", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GiWeightLiftingUp, title: "Power Lifting", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: CgGym, title: "Body Building", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GiCycling, title: "Cycling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GrYoga, title: "Yoga", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: TbSwimming, title: "Swimming", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: FaPersonRunning, title: "Running", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GiCycling, title: "Cycling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: GrYoga, title: "Yoga", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: TbSwimming, title: "Swimming", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight },
    { image: FaPersonRunning, title: "Running", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', icon: GoArrowRight }
];
const BlogNews: React.FC = () => {
    return (
        <section className='container lg:my-[120px] my-[60px] '>
            <div className='flex justify-between items-end '>
                <BannerTitle subtitle={"blog  and news"} title={"took a look  at our latest news"} className={''} />
                <button className='text-primary text-base underline cursor-pointer md:block hidden capitalize'>all news</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:mt-[50px] mt-[30px]'>
                {serviceData?.slice(0, 8).map((service, index) => (
                    <div key={index} className='shadow-custom-light bg-white hover:bg-primary group rounded p-6 transition-transform transform hover:scale-105 box-shadow' >
                        <div className='flex items-center gap-4  '>
                            <div className='rounded-full bg-primary p-4 group-hover:bg-white'>
                                <service.image className='text-white text-3xl group-hover:text-primary' />
                            </div>
                            <h4 className='service-heading group-hover:text-white'>{service.title}</h4>
                        </div>
                        <p className='mt-4 description group-hover:text-white'>{service.description}</p>
                        <div className='mt-6 flex gap-2 items-center'>
                            <p className='service-description group-hover:text-white'>{service.button}</p>
                            <service.icon className='text-xl group-hover:text-white' />
                        </div>
                    </div>
                ))}
                <button className='text-primary text-base underline cursor-pointer md:hidden  '>All Servics</button>
            </div>
        </section>
    );
};

export default BlogNews;