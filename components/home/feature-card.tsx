import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

interface FeatureCardProps {
    feature: any;
}
const FeatureCard: React.FC<FeatureCardProps> = ({feature}) => {

    return (
        <div className='bg-white cursor-pointer  shadow-sm hover:bg-primary duration-700 w-full rounded-[4px] hover:text-white group shadow-custom-light' style={{boxShadow:'0px 0px 20px 0px rgba(0, 0, 0, 0.10)'
        }}>
            <div className='py-12 flex flex-col text-center items-center'>
                <div className='mb-[30px] w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-custom-light bg-white 'style={{filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10))'}}>
                    <div className=' flex items-center justify-center p-3'>
                        <Image
                            src={feature?.image}
                            width={50}
                            height={50}
                            alt={feature?.image}
                            className='object-cover'
                        />
                    </div>
                </div>

                <div className='space-y-6 pb-16'>
                    <h1 className='text-xl font-semibold'>{feature?.title}</h1>
                    <h3 className='text-[16px]'>{feature?.description}</h3>
                </div>
                <div className='p-4 rounded-full bg-primary group-hover:bg-white'>
                    <FaArrowRight className='text-white group-hover:text-primary' />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;