"use client";
import React from 'react';
import Link from 'next/link';
import BasicHeader from '../../components/common/basic-header';
import CheckOutCard from '../../components/card/CheckOutCard';
import { Form } from 'antd';
import FormInput from '../../components/form/input';
import Button from '../../components/common/button';
const products = [{ image: '/whey.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 }, { image: '/whey.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 }];
const page: React.FC = () => {
    const [form] = Form.useForm();
    const onFinish = (values: { weight: number; height: number }) => {
        form.resetFields();
    };
    return (
        <section className=''>
            <BasicHeader heading='check out' subHeading='home' />
            <div className='max-w-[1320px] mx-auto px-8 md:px-0'>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-[90px] lg:space-x-[136px] mt-4'>
                    <div className='w-full md:w-2/3'>
                        <p className='shop-heading font-montserrat'>shopping cart</p>
                        <div className='mt-16 w-full'>
                            <Form form={form} onFinish={onFinish} className="w-full">
                                <div className="space-y-2 w-full">
                                    <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center space-x-6'>
                                        <FormInput
                                            label='First Name'
                                            name="FName"
                                            type="text"
                                            placeholder="Enter Your FIrst Name"
                                            rules={[{ required: true, message: "Please provide First Name" }]}
                                            className="border w-full p-[18px] rounded"
                                        />
                                        <FormInput
                                            label='Last Name'
                                            name="LName"
                                            type="text"
                                            placeholder="Enter Your FIrst Name"
                                            rules={[{ required: true, message: "Please provide your Last Name" }]}
                                            className="border w-full p-[18px] rounded"
                                        />
                                    </div>
                                    <FormInput
                                        name="age"
                                        type="number"
                                        placeholder="Age"
                                        rules={[{ required: true, message: "Please provide your Age" }]}
                                        className="border w-full p-[18px] rounded"
                                    />
                                    <FormInput
                                        name="age"
                                        type="number"
                                        placeholder="Age"
                                        rules={[{ required: true, message: "Please provide your Age" }]}
                                        className="border w-full p-[18px] rounded"
                                    />

                                </div>
                                <Button type="submit" className="button mt-7 hover:text-white">
                                    Calculate
                                </Button>
                            </Form>
                        </div>
                        <p className='my-10 text-1 font-semibold text-[24px]'>Payment Method</p>
                        <div className='border rounded'>
                            <div className='p-5 border border-b flex text-[16px] font-medium space-x-2'>
                                <input className='text-3xl' type="radio" name="paymentMethod" id="creditCart" />
                                <label htmlFor="creditCart">Credit Card</label>
                            </div>
                            <div className='p-5 flex text-[16px] font-medium space-x-2'>
                                <input className='text-3xl text-primary bg-primary' type="radio" name="paymentMethod" id="payPal" />
                                <label htmlFor="payPal">Paypal</label>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 '>
                        <div className=''>
                            <p className='text-1 font-bold text-[28px]'>Order Summary</p>
                            <div className='mt-16'>
                                {
                                    products.map((product, index) => (
                                        <CheckOutCard key={index} image={product.image} name={product.name} price={product.price} quantity={product.quantity} />
                                    ))
                                }
                            </div>
                            <div className='p-6 mt-[45px] rounded text-[18px] font-light text-[#534C4C] border border-[#D9D9D9]'>
                                <div className='flex justify-between pb-[18px]'>
                                    <p>SubTotal</p>
                                    <p>$161.78</p>
                                </div>
                                <div className='flex justify-between py-[18px]'>
                                    <p>Tax</p>
                                    <p>$10.00</p>
                                </div>
                                <div className='flex justify-between py-[18px]'>
                                    <p className='font-semibold text1'>Total</p>
                                    <p>$171.78</p>
                                </div>
                                <p className='mt-4'>shopping cost calculate at checkout *</p>
                            </div>
                            <p className='mt-6 text-justify font-normal text-secondary text-[16px]'>
                                Your personal data helps us efficiently process and f
                                ulfill your order, ensuring a smooth and personalized shopping experience.
                            </p>
                        </div>
                        <Link href=''> <button className='process-button'>Place Order</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;