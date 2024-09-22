'use client';
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Checkbox, Form } from 'antd';
import Link from 'next/link';

const Page: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log({ ...values, checked });
        form.resetFields();
    };

    return (
        <div>
            <BasicHeader heading='Log In' subHeading='Home' />
            <div className='px-8 md:px-0 mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <p className='auth-heading font-montserrat'>Welcome back.</p>
                    <div className='flex mt-[68px] flex-row items-center space-x-2'>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                        <p className='description mx-2 text-center'>Sign in with your email</p>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                    </div>
                    <div className='mt-4 md:mt-10'>
                        <Form onFinish={onFinish} form={form}>
                            <FormInput
                                label='Email'
                                placeholder='Email'
                                name='email'
                                type='email'
                                rules={[{ required: true, message: "Please provide your Email" }]}
                                className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
                            />
                            <FormInput
                                label='Password'
                                placeholder='Password'
                                name='password'
                                type='password'
                                rules={[{ required: true, message: "Please provide your Password" }]}
                                className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
                            />
                            <Checkbox className='description mt-6' onChange={e => setChecked(e.target.checked)}>Remember Me?</Checkbox>
                            <div className='mt-3'><Link className='!text-primary description' href='/forgatpassword'>Forgot Password</Link></div>
                            <button type='submit' className='auth-button font-poppins py-4'>Continue</button>
                        </Form>
                        <p className='mt-[29px] description !text-center'>New Here? <Link className='text-primary' href='/signup'>Please Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
