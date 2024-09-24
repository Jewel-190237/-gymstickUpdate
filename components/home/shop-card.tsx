import Image from 'next/image';
import React from 'react';
import { Rate } from "antd";
import { TbShoppingBag } from 'react-icons/tb';
import { PiHeartLight } from 'react-icons/pi';
import { CgEye } from 'react-icons/cg';
import Link from 'next/link';
import Swal from 'sweetalert2';

interface ShopCardProps {
    data?: any;
}

const ShopCard: React.FC<ShopCardProps> = ({ data }) => {
    const handleClick = (value) => {
        Swal.fire({
            title: "Great!",
            html: `
                <div class="swal-content">
                    <p class="swal-title">
                        <strong>${data?.name}</strong> added successfully
                    </p>
                    <div class="swal-link">
                        <a href="${value === 'cart' ? '/cart' : '/wishlist'}" class="alertButton">View ${value === 'cart' ? 'Cart' : 'Wish List'}</a>
                    </div>
                </div>
            `,
            icon: "success",
            showCancelButton: false,
            confirmButtonText: 'Close',
            confirmButtonColor: '#E67529',
            customClass: { popup: 'swal-popup' }
        });
    };

    return (
        <div className="rounded hover:scale-105 transition-all duration-150 w-full mx-auto border overflow-hidden">
            <div className='relative mx-auto h-294 w-full rounded'>
                <Image src={data?.image} alt="shop" width={310} height={294} className="w-full" />
                <div className='absolute top-0 status bg-primary w-[115px] h-[115px]'>
                    <p className='text-white flex mt-2 items-center -rotate-45'>{data?.status}</p>
                </div>
            </div>
            <div className="text-center flex flex-col gap-2 py-6">
                <h6 className="capitalize text-[16px] font">{data?.name}</h6>
                <Rate className='text-primary' disabled defaultValue={data?.rate} />
                <h6 className="text-[16px] font-semibold">${data?.price}</h6>
                <div className="flex gap-[14px] justify-center">
                    <button onClick={() => handleClick('cart')} className="shop-button">
                        <TbShoppingBag size={24} />
                    </button>
                    <button onClick={() => handleClick('wishlist')} className="shop-button">
                        <PiHeartLight size={24} />
                    </button>
                    <Link href={`/shop/_${data?._id}`}>
                        <button className="shop-button">
                            <CgEye size={24} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;


