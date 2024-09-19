'use client';
import React, { useState, useEffect } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Pagination } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import BasicHeader from '../../components/common/basic-header';
import ShopCard from '../../components/home/shop-card';

const items: MenuProps['items'] = [
    { label: 'All Categories', key: 'All' },
    { label: 'dumbbell', key: 'dumbbell' },
    { label: 'outfit', key: 'outfit' },
    { label: 'Whey protein', key: 'protein' },
    { label: 'Shoes', key: 'shoes' },
    { label: 'Bags', key: 'bags' },
];

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
    {
        _id: "64f0cabe65f1b2b6c5e432b0",
        status: "Sale Now",
        rate: 4,
        name: "athleisure outfit",
        price: 100.0,
        image: "/whey.png",
        category: "outfit",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b1",
        status: "Sale Now",
        rate: 4,
        name: "whey protein",
        price: 80.89,
        image: "/whey.png",
        category: "protein",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b2",
        status: "Sold Out",
        rate: 4,
        name: "vegan protein",
        price: 60.0,
        image: "/whey.png",
        category: "protein",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b3",
        status: "Sale Now",
        rate: 5,
        name: "casein protein",
        price: 100.5,
        image: "/whey.png",
        category: "protein",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b4",
        status: "Sold Out",
        rate: 3,
        name: "egg white protein",
        price: 40.3,
        image: "/whey.png",
        category: "protein",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b5",
        status: "Sale Now",
        rate: 4,
        name: "plant-based protein",
        price: 75.0,
        image: "/whey.png",
        category: "protein",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b6",
        status: "Sale Now",
        rate: 4,
        name: "gym bag",
        price: 40.0,
        image: "/whey.png",
        category: "bags",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b7",
        status: "Sold Out",
        rate: 5,
        name: "travel bag",
        price: 150.0,
        image: "/whey.png",
        category: "bags",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b8",
        status: "Sale Now",
        rate: 4,
        name: "duffle bag",
        price: 90.0,
        image: "/whey.png",
        category: "bags",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432b9",
        status: "Sold Out",
        rate: 4,
        name: "backpack",
        price: 60.0,
        image: "/whey.png",
        category: "bags",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432c0",
        status: "Sale Now",
        rate: 3,
        name: "sports bag",
        price: 50.0,
        image: "/whey.png",
        category: "bags",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432c1",
        status: "Sale Now",
        rate: 4,
        name: "running shoes",
        price: 130.0,
        image: "/whey.png",
        category: "shoes",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432c2",
        status: "Sold Out",
        rate: 5,
        name: "basketball shoes",
        price: 200.0,
        image: "/whey.png",
        category: "shoes",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432c3",
        status: "Sale Now",
        rate: 4,
        name: "training shoes",
        price: 100.0,
        image: "/whey.png",
        category: "shoes",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432c4",
        status: "Sold Out",
        rate: 4,
        name: "hiking shoes",
        price: 150.0,
        image: "/whey.png",
        category: "shoes",
    },
    {
        _id: "64f0cabe65f1b2b6c5e432c5",
        status: "Sale Now",
        rate: 3,
        name: "casual shoes",
        price: 80.0,
        image: "/whey.png",
        category: "shoes",
    },
];

const Shop: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const pageSize = 8;

    useEffect(() => {
        setCurrentPage(1);
        setSelectedCategory('Select Category');
    }, [searchQuery]);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === 'Select Category' || selectedCategory === 'All' || product.category === selectedCategory)
    );

    const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <section className=''>
            <BasicHeader heading='Shop' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 mt-4'>
                <div className='flex flex-col md:flex-row border w-full mx-auto rounded'>
                    <div className='flex-none w-[310px] hidden md:flex space-x-6 py-[22px] text-white items-center bg-primary'>
                        <RiMenu2Fill className='ml-6 hidden md:block' />
                        <p className='capitalize text-[16px] font-medium hidden md:block'>browse all categories</p>
                    </div>
                    <div className='flex-1 border md:border-0 hidden md:block'>
                        <Input
                            className='py-[22px] text-[20px] border-none'
                            placeholder="search all product"
                            prefix={<SearchOutlined className='ml-12 mr-4 text-2xl' />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className='flex-none w-[240px] items-center border md:border-t-0 md:border-b-0 border-l md:border-r-0 hidden md:flex'>
                        <Dropdown menu={{ items, onClick: ({ key }) => { setSelectedCategory(key === 'All' ? 'Select Category' : key); setCurrentPage(1); }}} trigger={['hover']}>
                            <Space className='ml-10 text-[16px] space-x-4 cursor-pointer'>
                                <span className="capitalize">{selectedCategory}</span>
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </div>
                    <div className='px-10 flex justify-between text-4xl md:hidden items-center py-4 bg-primary'>
                        <RiMenu2Fill className='text-white' />
                        <SearchOutlined onClick={() => setSearchVisible(!searchVisible)} className='text-white cursor-pointer' />
                        <Dropdown menu={{ items, onClick: ({ key }) => { setSelectedCategory(key === 'All' ? 'Select Category' : key); setCurrentPage(1); }}} trigger={['hover']}>
                            <DownOutlined className='text-white text-3xl cursor-pointer' />
                        </Dropdown>
                    </div>
                    {searchVisible && (
                        <div className='flex-none w-full border md:hidden'>
                            <Input
                                className='py-[22px] text-[20px] border-none'
                                placeholder="search all product"
                                prefix={<SearchOutlined className='ml-2 mr-4 text-2xl' />}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    )}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14'>
                    {paginatedProducts.length ? (
                        paginatedProducts.map(product => (
                            <Link key={product._id} href={`/shop/_${product._id}`} passHref>
                                <ShopCard data={product} />
                            </Link>
                        ))
                    ) : (
                        <div className='col-span-full text-center'>No products found</div>
                    )}
                </div>
                <Pagination align='center' className='!mt-[50px]' current={currentPage} pageSize={pageSize} total={filteredProducts.length} onChange={setCurrentPage} />
            </div>
        </section>
    );
};

export default Shop;
