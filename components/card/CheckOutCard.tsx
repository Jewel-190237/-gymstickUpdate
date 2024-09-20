import Image from 'next/image';
import React from 'react';
interface CheckOutCardProps {
    image: string;
    name: string;
    price: number;
    quantity: number;
}

const CheckOutCard:React.FC<CheckOutCardProps> = ({image, name, price, quantity}) => {
    return (
        <div className='flex font-poppins space-x-6 pt-10 border-t border-[#D9D9D9] mb-10'>
            <div><Image className='rounded' src={image} alt="shop" width={100} height={100} /></div>
            <div className='flex-1'>
                <div className='product-description space-y-4 text-[14px] font-semibold'>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-primary'>${price.toFixed(2)}</p>
                    <p className='!font-normal'>Quantity: {quantity} pcs</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOutCard;