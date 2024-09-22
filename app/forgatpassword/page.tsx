'use client';
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Form, Modal } from 'antd';
import Link from 'next/link';

const Page: React.FC = () => {
    const [form] = Form.useForm();
    const onFinish = (email) => {
        console.log({ email })
        form.resetFields();
    };
    return (
        <div>
            <BasicHeader heading='Forgot Password' subHeading='Home' />
            <div className='px-8 lg:px-0 mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <p className='auth-heading font-montserrat'>Forgat Password</p>
                    <p className='description mt-3'>Please confirm your email address below and we will send you a verification code.</p>
                    <Form className='mt-6 md:mt-12 lg:mt-[104px]' onFinish={onFinish} form={form}>
                        <FormInput
                            label='Email:'
                            name="email"
                            type="email"
                            placeholder="Email"
                            rules={[{ required: true, message: "Please provide Email" }]}
                            className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
                        />
                        <Link href='/otp'><button type='submit' className='font-poppins auth-button py-4'>Continue</button></Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Page;