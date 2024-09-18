import React from 'react';
import BannerTitle from '../common/banner-title';
import Image from 'next/image';
import Button from '../common/button';


const AboutUs = () => {
    return (
        <div className='lg:mb-[120px] mb-[60px] flex lg:flex-row flex-col items-center container xl:gap-[104px] gap-10'>
            <div className='lg:w-1/2 w-full '>
                <Image src={'/about.png'} width={500} height={500} alt='imge' className='w-full h-full ' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <BannerTitle className={'items-start'} subtitle={'About Us'} title={" we are pushing the limit of your core strength"} />
                <p className='description line-clamp-3 lg:my-10 mt-2 mb-10'>
                    Welcome to this comprehensive guide on the Apple Vision Pro features, where we
                    delve deep into the innovative advancements of this ground technology. Apple
                    has always been at technological innovation, and the Vision Pro features
                </p>
                <Button className='text-black hover:text-white'>Read More</Button>
            </div>
        </div>
    );
};

export default AboutUs;