'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ProductButton from '../common/productButton';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    size: number;
}
const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, size }) => {

    const [count, setCount] = useState<number>(1);

    const increment = () => {
        if (count < 10) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };
    return (
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 pt-10 border-t border-[#D9D9D9] mb-10'>
            <div><Image className='rounded' src={image} alt="shop" width={230} height={300} /></div>
            <div className='flex-1'>
                <div className='product-heading flex flex-col md:flex-row md:justify-between md:items-center'>
                    <p className='mt-4 md:mt-0'>{name}</p>
                    <p className='mt-2 md:mt-0'>${price.toFixed(2)}</p>
                </div>
                <div className='description mt-6 space-y-[10px]'>
                    <p>Size: {size} KG</p>
                    <p>Quantity: {count} pcs</p>
                </div>
                <div className='flex items-center justify-between mt-10'>
                    <ProductButton count={count} onDecrement={decrement} onIncrement={increment} />
                    <button className='card-button'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
