'use client';
import React, { useState } from 'react';
import ShopCard from './shop-card';
import BannerTitle from '../common/banner-title';
import Button from '../common/button';

const Shop = () => {
    const products = [
        {
            _id: "64f0cabe65f1b2b6c5e432a1",
            status: "Sale Now",
            rate: 4,
            name: "whey protein",
            price: 80.89,
            image: "/whey.png",
            category: "dumbbell",
        },
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

    const uniqueCategories = ['All', ...Array.from(new Set(products.map((product) => product.category)))];
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showAllCategories, setShowAllCategories] = useState(false);
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter((product) => product.category === selectedCategory.toLowerCase());
    const displayedCategories = showAllCategories ? uniqueCategories : uniqueCategories.slice(0, 4);

    return (
        <div className='container lg:mt-[120px] mt-[60px]'>
            <BannerTitle className={"items-center"} title="here you can buy any thing" subtitle={"Shop"} />
            <div className=" mx-auto mt-[56px]">
                <div className={`flex border w-full overflow-x-auto mx-auto rounded sm:w-[566.5px] xl:w-fit  hide-scrollbar `}>
                    {displayedCategories.map((category) => (
                        <button
                            key={category}
                            className={`px-[34px] py-4 capitalize ${selectedCategory === category ? 'bg-orange-500 text-white rounded' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                    {uniqueCategories.length > 4 && (
                        <button
                            className="px-[34px] py-4 bg-gray-200 rounded"
                            onClick={() => setShowAllCategories(!showAllCategories)}
                        >
                            {showAllCategories ? 'Less' : 'More'}
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[56px]">
                    {filteredProducts?.slice(0, 8)?.map((data) => (
                        <ShopCard key={data?._id} data={data} />
                    ))}
                </div>
                <div className="flex justify-center my-8">
                    <Button className="hover:text-white hover:bg-primary">
                        View All Products
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Shop;