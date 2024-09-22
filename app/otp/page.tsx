
'use client';
import React, { useRef } from 'react';
import BasicHeader from '../../components/common/basic-header';
import { Form } from 'antd';
import Link from 'next/link';
import { InputNumber } from 'antd';

const Page: React.FC = () => {
    const [form] = Form.useForm();
    const inputRefs = useRef([]);

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle form submission
    };

    const handleChange = (index, value) => {
        // Move to the next input if the value is filled
        if (value !== null && value.toString().length === 1 && index < 4) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <div>
            <BasicHeader heading='OTP' subHeading='Home' />
            <div className='px-8 lg:px-0 mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <h2 className='auth-heading font-montserrat'>Forgot Password</h2>
                    <p className='description mt-3'>please check <span className='text-primary'>support@12gmail.com</span></p>
                    <Form className='mt-6 md:mt-12 lg:mt-[104px]' onFinish={onFinish} form={form}>
                        <div className='flex justify-center space-x-2'>
                            {[0, 1, 2, 3, 4].map((_, index) => (
                                <Form.Item
                                    key={index}
                                    name={`number${index + 1}`}
                                    rules={[{ required: true, message: "Please provide a number" }]}
                                >
                                    <InputNumber
                                        ref={el => (inputRefs.current[index] = el && el.input)} // Access the input element
                                        className="border border-[#D9D9D9] w-full py-10 px-[18px] rounded bg-[#FF4E2508]"
                                        controls={false}
                                        onChange={value => handleChange(index, value)}
                                        maxLength={1}
                                    />
                                </Form.Item>
                            ))}
                        </div>
                        <Link href=''>
                            <button type='submit' className='font-poppins auth-button py-4'>Verify</button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Page;
