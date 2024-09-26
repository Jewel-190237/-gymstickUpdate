'use client';
import React from 'react';
import BasicHeader from '../../components/common/basic-header';

const Page: React.FC = () => {
    const slider = [
        { _id: 1, title: 'slide 1', description: 'swipper slider description 1' },
        { _id: 2, title: 'slide 2', description: 'swipper slider description 2' },
        { _id: 3, title: 'slide 3', description: 'swipper slider description 3' },
        { _id: 4, title: 'slide 4', description: 'swipper slider description 4' },
        { _id: 5, title: 'slide 5', description: 'swipper slider description 5' },
        { _id: 6, title: 'slide 6', description: 'swipper slider description 6' },
        { _id: 7, title: 'slide 7', description: 'swipper slider description 7' },
        { _id: 8, title: 'slide 8', description: 'swipper slider description 8' },
        { _id: 9, title: 'slide 9', description: 'swipper slider description 9' },
        { _id: 10, title: 'slide 10', description: 'swipper slider description 10' },
        { _id: 11, title: 'slide 11', description: 'swipper slider description 11' },
        { _id: 12, title: 'slide 13', description: 'swipper slider description 12' }
    ];
    return (
        <section>
            <BasicHeader heading='Animation' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
                    { slider.map((slide) => (
                        <div className='text-white bg-black rounded-2xl py-20'>
                            <h2 className='text-4xl text-center capitalize'>{slide.title}</h2>
                            <p className='text-2xl text-center mt-10 capitalize'>{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;