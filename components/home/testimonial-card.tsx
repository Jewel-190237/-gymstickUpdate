import React from 'react';
import { Flex, Rate } from 'antd';
import Image from 'next/image';

interface testimonialProps {
    allreview: any;
}
const TestimonialCard: React.FC<testimonialProps> = ({ allreview }) => {
    return (
        <div>
            <div className='relative duration-700 pb-7 hover:scale-105 '>
                <Image src={'/reviewbg.png'} alt='testi' width={500} height={300} className='absolute w-full h-full ' />
                <div className='relative '>
                    <div className='rounded testimonial-shape p-10  z-40 relative   '>
                        <div className='mb-10 '>
                            <Flex gap="middle" vertical>
                                <Rate className='text-primary' defaultValue={allreview?.rate} disabled />
                            </Flex>
                        </div>
                        <p className='text-justify description  line-clamp-5'>{allreview?.review}</p>
                    </div>
                </div>
            </div>
            <div className=' mt-4 ps-10 space-y-2'>
                <h1 className='text-xl font-medium text-primary line-clamp-1'>{allreview?.name}</h1>
                <p className='text-[#534C4C] text-lg line-clamp-1'>{allreview?.role}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
{/* <Image src={'/reviewbg.png'} alt='testi' width={500} height={300} className='absolute w-full h-full ' /> */ }