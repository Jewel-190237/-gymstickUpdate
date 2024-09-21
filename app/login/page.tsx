'use client'
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Checkbox, Form } from 'antd';
import Link from 'next/link';
const page: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const inputField = ['email', 'password']
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log({ ...values, checked });
        form.resetFields();
    };
    return (
        <div>
            <BasicHeader heading='Log In' subHeading='Home' />
            <div className='px-8 md:px-0 mt-4 max-w-[1320px] mx-auto '>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <p className='login-heading font-montserrat'>Welcome back.</p>
                    <div className='flex mt-[68px] flex-row items-center space-x-2'>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                        <p className='description mx-2 text-center'>Sign in with your email</p>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                    </div>
                    <div className='mt-4 md:mt-10'>
                        <Form  onFinish={onFinish} form={form}>
                            {inputField.map((field) => (
                                <FormInput
                                    key={field}
                                    name={field}
                                    type={field}
                                    label={`${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                                    placeholder={`Please Provide Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                    rules={[{ required: true, message: `Please provide your ${field.charAt(0).toUpperCase() + field.slice(1)}` }]}
                                    className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                                />))}
                        </Form>
                    </div>
                    <Checkbox className='description mt-4' onChange={e => setChecked(e.target.checked)}>Remember Me?</Checkbox>                            <div className='mt-[14px]'><Link className='!text-primary description' href='/forgatpassword'>Forgat Password</Link></div>
                    <button type='submit' className='auth-button font-poppins py-4'>Continue</button>
                    <p className='mt-[29px] description'>New Here ? <Link className='text-primary' href='/signup'>Please Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default page;