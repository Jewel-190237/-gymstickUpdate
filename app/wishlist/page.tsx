import React from 'react';
import Link from 'next/link';
import BasicHeader from '../../components/common/basic-header';
import ProductCard from '../../components/card/ProductCard';
const products = [{ image: '/whey.png', name: 'impact whey protein', price: 80.89, size: 1 }, { image: '/whey.png', name: 'impact whey protein', price: 80.89, size: 1 }];
const Page: React.FC = () => {
    return (
        <section className=''>
            <BasicHeader heading='wish list' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0'>
                <p className='shop-heading mt-4 font-montserrat'>Wish List</p>
                <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-[136px] mt-14'>
                    <div className='w-full lg:w-2/3'>
                        {
                            products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    size={product.size}
                                />
                            ))
                        }
                    </div>
                    <div className='mt-8 lg:mt-0 w-full lg:w-1/3 '>
                        <div className='rounded p-6 border border-[#D9D9D9]'>
                            <p className='text-1 font-bold text-[28px]'>Total Card</p>
                            <div className='mt-14 text-[18px] font-light text-[#534C4C]'>
                                <div className='flex justify-between pb-[18px] border-[#D9D9D9] border-b'>
                                    <p>SubTotal</p>
                                    <p>$161.78</p>
                                </div>
                                <div className='flex justify-between py-[18px] border-[#D9D9D9] border-b'>
                                    <p>Tax</p>
                                    <p>$10.00</p>
                                </div>
                                <div className='flex justify-between py-[18px] border-[#D9D9D9] border-b'>
                                    <p className='font-semibold text1'>Total</p>
                                    <p>$171.78</p>
                                </div>
                                <p className='mt-4'>shopping cost calculate at checkout *</p>
                            </div>
                        </div>
                       <Link href='/checkout'> <button className='process-button'> Proceed to Checkout</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;