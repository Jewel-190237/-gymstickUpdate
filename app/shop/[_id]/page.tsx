'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Rate, Pagination, Modal } from 'antd';
import { BsCartPlus, BsHandbag } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import BasicHeader from '../../../components/common/basic-header';
import ShopCard from '../../../components/home/shop-card';
import Review from '../../../components/card/Review';
const products = [
    {
        _id: "64f0cabe65f1b2b6c5e432a2",
        status: "Sold Out",
        rate: 4,
        name: "dumbbell set",
        price: 50.0,
        image: "/whey.png",
        category: "dumbbell",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a3",
        status: "Sold Out",
        rate: 5,
        name: "adjustable dumbbell",
        price: 70.5,
        image: "/whey.png",
        category: "dumbbell",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a4",
        status: "Sale Now",
        rate: 4,
        name: "hex dumbbell",
        price: 90.99,
        image: "/whey.png",
        category: "dumbbell",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a5",
        status: "Sold Out",
        rate: 3,
        name: "vinyl dumbbell",
        price: 35.0,
        image: "/whey.png",
        category: "dumbbell",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a6",
        status: "Sale Now",
        rate: 4,
        name: "gym outfit",
        price: 120.0,
        image: "/whey.png",
        category: "outfit",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a7",
        status: "Sold Out",
        rate: 4,
        name: "casual outfit",
        price: 60.0,
        image: "/whey.png",
        category: "outfit",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a8",
        status: "Sale Now",
        rate: 5,
        name: "sports outfit",
        price: 85.5,
        image: "/whey.png",
        category: "outfit",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432a9",
        status: "Sold Out",
        rate: 3,
        name: "yoga outfit",
        price: 45.3,
        image: "/whey.png",
        category: "outfit",
    },
]
const Wheyprotein: React.FC = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [weight, setWeight] = useState('1.5');
    const [activeButton, setActiveButton] = useState('1.5');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const pageSize = 4;
    const totalProduct = products.length;
    const paginatedProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const tabs = ['description', 'review'];
    const productWeight = ['1.5', '2.5', '5'];
    const shareIcon = [TbBrandYoutube, FaFacebookF, FaXTwitter, FaLinkedinIn]
    const handleWeightChange = (newWeight: string) => {
        setWeight(newWeight);
        setActiveButton(newWeight);
    };
    return (
        <section className=''>
            <BasicHeader heading={products[0].name} subHeading='Home' />
            <div className='max-w-[1320px] mx-auto text1 px-8 lg:px-0 mt-0 md:mt-4'>
                <div className='flex flex-col md:flex-row space-x-6'>
                    <div className='flex-1'>
                        <Image src='/whey.png' alt="shop" width={648} height={640} />
                    </div>
                    <div className='flex-1 font-poppins text-textMain'>
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                            <p className='font-normal  text-[18px]'>Protein Provider</p>
                            <div className='flex items-center space-x-5  md:mt-4 lg:mt-0'>
                                <Rate className='text-primary' defaultValue={5} />
                                <p className='text-[16px]  font-normal'>Review(3)</p>
                            </div>
                        </div>
                        <h2 className='mt-6 font-semibold text-[28px] capitalize'>Impact Whey Protein</h2>
                        <div className='mt-6 flex items-center space-x-6 text-[18px] font-semibold'>
                            <p className='text-primary'><del>$120.99</del></p>
                            <p>$80.99</p>
                            <p className='description capitalize'>(In stock)</p>
                        </div>
                        <p className='mt-10 text-[18px] font-normal'>Description</p>
                        <p className='mt-6 description'>Impact Whey Protein is a high-quality, fast-absorbing protein powder that supports muscle growth and recovery. Packed with essential amino acids, it is perfect for post-workout nutrition or boosting daily protein intake. Ideal for athletes and fitness enthusiasts looking to build strength and improve performance.</p>
                        <p className='mt-10 text-[18px] font-medium'>Size: {weight} KG</p>
                        <div className='mt-4 flex items-center space-x-2 md:space-x-6'>
                            {productWeight.map(size => (
                                <button key={size} onClick={() => handleWeightChange(size)} className={`product-button text-[12px] md:text-[16px] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 ${activeButton === size ? '!bg-primary !text-white' : ''}`} >
                                    {size} KG
                                </button>
                            ))}
                        </div>
                        <div className='mt-10 flex flex-col lg:flex-row items-center lg:space-x-6'>
                            <Link className='w-full' href='/checkout'><button className='w-full product-button  py-4 flex justify-center items-center space-x-[10px]'> <span>Buy Now</span> <BsHandbag size={20} /></button></Link>
                            <button className='w-full mt-6 lg:mt-0 product-button py-4 flex items-center justify-center space-x-[10px]' onClick={() => setIsModalVisible(true)}>
                                <span>Add to Cart</span> <BsCartPlus size={20} />
                            </button>
                        </div>
                        <p className='mt-6 text-secondary text-[16px] font-normal capitalize'>
                            Is it sold out? <span className='text-primary underline'>Join the waiting list.</span>
                        </p>
                        <div className='mt-12 flex items-center space-x-3 md:space-x-5'>
                            <p className='text-[18px] font-medium'>Share:</p>
                            {shareIcon.map((Icon, idx) => (
                                <button key={idx} className='share-button shadow-custom-light'>
                                    <Icon className='text-xl md:text-2xl' />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-[75px] md:mt-[148px]'>
                    <div className="flex space-x-3 md:space-x-[35px]">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`px-7 rounded py-3 ${activeTab === tab ? 'bg-[#E67529] text-white' : 'text-black border border-[#D9D9D9] bg-white'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="mt-10">
                        {activeTab === 'description' && <p className='description border  border-[#D9D9D9] !text-[#2B2B2BCC] py-10 px-7 rounded'>
                            Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum is that it is has normal distribution of letters, as opposed to using contents here. Lorem is an long established to fact that is one reader will be the distracted by the readable content.Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum is that it is has normal distribution of letters, as opposed to using contents here. Lorem is an long established to fact that is one reader will be the distracted by the readable content.
                        </p>}
                        {activeTab === 'review' &&  <Review /> }
                        
                    </div>
                    <div className='mt-[70px] md:mt-[140px]'>
                        <p className='text-[28px] font-semibold'>Related Products</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                            {paginatedProducts.map((product, index) => (
                                <ShopCard key={index} data={product} />
                            ))}
                        </div>
                        <Pagination align='center' current={currentPage} pageSize={pageSize} total={totalProduct} onChange={(page) => setCurrentPage(page)} className='!mt-12' />
                    </div>
                </div>
            </div>
            <Modal title="Success" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)} footer={null}>
                <div className="flex items-center justify-center flex-col w-full">
                    <p className="text-primary text-3xl mb-4">✔</p>
                    <p>Impact Whey Protein has been added to your cart.</p>
                    <Link href='/cart'><button className='product-button px-8 py-4 mt-3'>View Cart</button></Link>
                </div>
            </Modal>
        </section>
    );
};

export default Wheyprotein;
