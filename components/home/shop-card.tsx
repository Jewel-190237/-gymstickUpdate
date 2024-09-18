import Image from 'next/image';
import React from 'react';
import { Rate } from "antd";
import { TbShoppingBag } from 'react-icons/tb';
import { PiHeartLight } from 'react-icons/pi';
import { CgEye } from 'react-icons/cg';

interface ShopCardProps {
    data?: any;
  }
const ShopCard: React.FC<ShopCardProps> = ({data}) => {
    return ( 
        <div className="rounded hover:scale-105 transition-all duration-150 w-full  mx-auto border overflow-hidden">
            <div className='relative mx-auto h-294 w-full rounded   '>
                <Image src={data?.image} alt="shop" width={310} height={294} className="w-full" />
                <div className='absolute top-0 status bg-primary w-[115px] h-[115px]'> 
                    <p  className='text-white flex mt-2 items-center -rotate-45'>{data?.status}</p> </div>
            </div>
            <div className="text-center flex flex-col gap-2 py-6">
                <h6 className="capitalize text-[16px] font">{data?.name}</h6>
                <Rate className='text-primary' disabled defaultValue={data?.rate} />
                <h6 className="text-[16px] font-semibold">${data?.price}</h6>
                <div className="flex gap-[14px] justify-center">
                    <button className="p-1 hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded cursor-pointer">
                        <TbShoppingBag size={24} />
                    </button>
                    <button className="p-1 hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded cursor-pointer">
                        <PiHeartLight size={24} />
                    </button>
                    <button className="p-1 hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded cursor-pointer">
                        <CgEye size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;