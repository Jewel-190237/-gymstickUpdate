import Image from 'next/image';
import React from 'react';
import Button from '../common/button';

const Hero: React.FC = () => {
    return (
        <div className="relative" >
            <Image src={'/banner.png'} width={500} height={500} alt='banner' className='absolute w-full h-full ' />
            <div className='relative bg-[#001223]/90 w-full lg:h-[100vh] md:h-[68.7vh] overflow-hidden'>
                <Image src={'/banner-vector.png'} width={500} height={500} alt='banner' className='absolute md:top-[78px] lg:top-[125px] w-[55%] h-[55vh] right-0 lg:h-[80vh] md:block hidden ' />
                <div className='flex 2xl:ms-[300px] h-full w-fit mx-auto px-4 2xl:px-0 hero-content  '>
                    <div className='max-w-[1320px] mx-end px-4 2xl:px-0 xl:h-[86%] lg:h-[83%] h-[50%] md:top-[80px] lg:top-0   relative mt-20 py-20 md:py-0'>
                        <div className='h-full xl:w-[680px]  flex flex-col justify-center'>
                            <h1 className='text-white xl:mb-10 mb-6 largeHeading capitalize'>achieve your fitness<span className='text-primary'> goals with gymStick</span>
                            </h1>
                            <p className=' text-gray-300'>At fitness queen gym, we are dedicated to empowering woman like you to achieve their fitness goals in a supportive and.</p>
                            <div className='xl:mt-[56px] mt-10 flex items-center md:gap-10 gap-2'>
                                <Button className="button text-white "> Start your journey</Button>
                                <Button className="button text-white "> Learn More</Button>
                            </div>
                        </div>
                    </div>
                    <div className='   hidden lg:top-[125px] 2xl:h-[86%] lg:h-[83%] top-16 hero-img  h-[60vh] relative  w-fit md:flex flex-col justify-end   '>
                        <Image src={'/hero.png'} width={600} height={400} alt='hero' className='w-[788px] h-full ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

