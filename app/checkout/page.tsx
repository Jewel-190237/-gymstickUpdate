"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import BasicHeader from '../../components/common/basic-header';
import CheckOutCard from '../../components/card/CheckOutCard';
import { Form, Radio } from 'antd';
import FormInput from '../../components/form/input';

const products = Array(2).fill({ image: '/whey.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 });

const Page: React.FC = () => {
    const [value, setValue] = useState('Credit Card');
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values, value);
        form.resetFields();
    };

    const handlePlaceOrder = () => {
        form.validateFields()
            .then(onFinish)
            .catch(info => console.log('Validate Failed:', info));
    };
    const paymentMethod = ['Credit Card', 'PayPal']

    return (
        <section>
            <BasicHeader heading='Check Out' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto px-8 md:px-0'>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-[90px] lg:space-x-[136px] mt-4'>
                    <div className='w-full md:w-2/3'>
                        <p className='shop-heading font-montserrat'>Check Out</p>
                        <div className='checkout'>
                            <Form form={form} className='mt-16 w-full space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 items-center md:space-x-6'>
                                    <FormInput
                                        label='First Name'
                                        name='FName'
                                        type="text"
                                        placeholder='First Name'
                                        rules={[{ required: true, message: `Please provide your First Name` }]}
                                        className=" w-full p-[18px] rounded font-poppins"
                                    />
                                    <FormInput
                                        label='Last Name'
                                        name='LName'
                                        type="text"
                                        placeholder='Last Name'
                                        rules={[{ required: true, message: `Please provide your Last Name` }]}
                                        className=" w-full p-[18px] rounded"
                                    />

                                </div>
                                <FormInput
                                    label='Email'
                                    name='email'
                                    type="email"
                                    placeholder='Email'
                                    rules={[{ required: true, message: `Please provide your Email` }]}
                                    className=" w-full p-[18px] rounded"
                                />
                                <FormInput
                                    label='Phone Number'
                                    name='phone'
                                    type="number"
                                    placeholder='Phone Number'
                                    rules={[{ required: true, message: `Please provide your Phone Number` }]}
                                    className=" w-full p-[18px] rounded"
                                />
                                <FormInput
                                    label='Location'
                                    name='location'
                                    type="text"
                                    placeholder='Location'
                                    rules={[{ required: true, message: `Please provide your Location` }]}
                                    className=" w-full p-[18px] rounded"
                                />

                                <div className='grid grid-cols-1 md:grid-cols-2 items-center  md:space-x-6'>
                                    <FormInput
                                        label='Town/City'
                                        name='city'
                                        type="text"
                                        placeholder='Town/City'
                                        rules={[{ required: true, message: `Please provide your Town/City` }]}
                                        className=" w-full p-[18px] rounded"
                                    />
                                    <FormInput
                                        label='Postal Code'
                                        name='PCode'
                                        type="number"
                                        placeholder='Postal Code'
                                        rules={[{ required: true, message: `Please provide your Postal Code` }]}
                                        className=" w-full p-[18px] rounded"
                                    />
                                </div>
                            </Form>
                        </div>
                        <p className='my-10 text-1 font-semibold text-[24px]'>Payment Method</p>
                        <Radio.Group className='grid grid-cols-1 text-[16px] font-poppins border' onChange={e => setValue(e.target.value)} value={value}>
                            <Radio className={`p-4 border-[#D9D9D9] border-b w-full`} value='Credit Card'>Credit Card</Radio>
                            <Radio className={`p-4 border-[#D9D9D9] w-full`} value='Pay Pall'>Pay Pall</Radio>
                        </Radio.Group>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <div>
                            <p className='text-1 font-bold text-[28px]'>Order Summary</p>
                            <div className='mt-16'>
                                {products.map((product, index) => (
                                    <CheckOutCard key={index} {...product} />
                                ))}
                            </div>
                            <div className='p-6 mt-[45px] rounded text-[18px] font-light text-[#534C4C] border border-[#D9D9D9]'>
                                <div className='flex justify-between pb-[18px]'><p>SubTotal</p><p>$161.78</p></div>
                                <div className='flex justify-between py-[18px]'><p>Tax</p><p>$10.00</p></div>
                                <div className='flex justify-between py-[18px]'><p className='font-semibold text-1'>Total</p><p>$171.78</p></div>
                                <p className='mt-4'>Shopping cost calculated at checkout *</p>
                            </div>
                            <p className='mt-6 text-justify font-normal text-secondary text-[16px]'>
                                Your personal data helps us efficiently process and fulfill your order, ensuring a smooth and personalized shopping experience.
                            </p>
                        </div>
                        <Link href='' onClick={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
                            <button className='process-button'>Place Order</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
