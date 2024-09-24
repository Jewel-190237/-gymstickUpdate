'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import ProductButton from '../common/productButton';
import { BsCartPlus } from 'react-icons/bs';
import Swal from 'sweetalert2';
interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    size: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, size }) => {
    const [count, setCount] = useState<number>(1);
    const pathname = usePathname();
    console.log(pathname);

    const increment = () => {
        if (count < 10) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };
    const handleSweetAlert = () => {
        Swal.fire({
            title: "Great!",
            html: `
                <div class="swal-content">
                    <p class="swal-title">
                        <strong>${name}</strong> added successfully
                    </p>
                    <div class="swal-link">
                        <a href="/cart" class="alertButton">View Cart</a>
                    </div>
                </div>
            `,
            icon: "success",
            showCancelButton: false,
            confirmButtonText: 'Close',
            confirmButtonColor: '#E67529',
            customClass: { popup: 'swal-popup' }
        });
    }


    return (
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 pt-10 border-t border-[#D9D9D9] mb-10'>
            <div>
                <Image className='rounded' src={image} alt="shop" width={230} height={300} />
            </div>
            <div className='flex-1'>
                <div className='product-heading flex flex-col md:flex-row md:justify-between md:items-center'>
                    <p className='mt-4 md:mt-0'>{name}</p>
                    <p className='mt-2 md:mt-0'>${price.toFixed(2)}</p>
                </div>
                <div className='description mt-6 space-y-[10px]'>
                    <p>Size: {size} KG</p>
                    <p>Quantity: {count} pcs</p>
                </div>
                <div className='flex flex-col md:flex-row lg:items-start justify-between mt-10'>
                    <ProductButton count={count} onDecrement={decrement} onIncrement={increment} />
                    <div className='flex items-center mt-4 lg:mt-0 space-x-2'>
                        <button className='product-button px-6 py-4'>Remove</button>
                        {pathname !== '/cart' && (
                            <button onClick={handleSweetAlert} className='product-button px-6 py-4 flex items-center justify-center' > <span>Add to Cart</span> <BsCartPlus size={20} /> </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
