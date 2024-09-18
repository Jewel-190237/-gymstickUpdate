import Image from 'next/image';
import React from 'react';
const BannerTitle = ({title,subtitle,className}) => {
    return (
        <div className={`flex flex-col  lg:gap-6  gap-2 ${className}`}>
            <h2 className='text-[#E67529] heading2 flex items-center gap-[13px] '>
                <Image  src="/tala.png" alt="lock" width={100} height={80} className='w-[24px] h-[24px]' />
                <span className='capitalize'>{subtitle}</span></h2>
            <h1 className='heading line-clamp-2 capitalize'>{title}</h1>
        </div>
    );
};

export default BannerTitle;