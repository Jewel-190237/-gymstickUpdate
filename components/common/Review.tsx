import { Rate } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
const Review: React.FC = () => {
    const [like, setLike] = useState(4)
    const [dislike, setDisLike] = useState(1)
    return (
        <div className='flex flex-col md:flex-row gap-8 mt-10 border border-[#D9D9D9] rounded p-10'>
            <div className=''>
                <Image className='rounded-full mx-auto ' src='/person.png' alt='person' width={200} height={200} />
            </div>
            <div>
                <div className='flex flex-col md:flex-row items-center md:space-x-10'>
                    <Rate className='text-primary' defaultValue={5} />
                    <p className='mt-3 md:mt-0 description'>logan edward, 9 sept 2024</p>
                </div>
                <p className='mt-10 description !text-textMain !font-medium'>Awesome!</p>
                <p className='mt-4 shop-style !text-[#2B2B2BCC] description'>Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum. Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum.</p>
                <div className='mt-6 flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col md:flex-row space-x-6 items-center'>
                        <p className='description !text-textMain'>Was this review helpful?</p>
                        <div className='mt-4 md:mt-0 flex space-x-6 items-center justify-center md:justify-normal'>
                            <button onClick={() => setLike(like + 1)} className='flex items-center space-x-2'><BiLike className='text-black hover:text-primary' size={24} /> <span>{like}</span></button>
                            <button onClick={() => setDisLike(dislike + 1)} className='flex items-center space-x-2'><BiDislike className='text-black hover:text-primary' size={24} /> <span>{dislike}</span></button>
                            <FaRegComment className='text-xl text-black hover:text-primary' />
                        </div>
                    </div>
                    <button className='mt-6 md:mt-0 product-button px-8 py-4'>Comment</button>
                </div>
            </div>
        </div>
    );
};

export default Review;