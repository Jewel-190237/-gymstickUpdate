'use client';
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Checkbox, Form } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const Page: React.FC = () => {
    const [role, setRole] = useState('member');
    const [active, setActive] = useState('member');
    const [checked, setChecked] = useState(false);
    const [form] = Form.useForm();

    const handleClick = (value: string) => {
        setRole(value);
        setActive(value);
    };

    const onFinish = (values: any) => {
        console.log({ ...values, checked, role });
        form.resetFields();
    };

    return (
        <div>
            <BasicHeader heading='Log In' subHeading='Home' />
            <div className='px-8 md:px-0 mt-4 max-w-[1320px] mx-auto'>
                <h2 className='login-heading'>Log In Into Your Account </h2>
                <div className='mt-[116px] flex items-center flex-col md:flex-row space-x-0 md:space-x-14 lg:space-x-20 bg-primary rounded'>
                    <div className='flex-1 relative'>
                        <p className='p-0 md:p-6 mt-10 md:mt-0 text-element !text-5xl lg:!text-[130px] md:!text-6xl font-montserrat !text-center'>Gymstick</p>
                        <Image className='hidden md:flex absolute md:left-9 lg:left-40 -top-[290px]' src='/login.png' alt='Login Image ' width={350} height={780}/>
                    </div>
                    <div className='flex-1 pr-0 md:pr-16 lg:pr-[112px] py-10'>
                        <div className='text-white'>
                            <p className='text-[32px] font-bold font-montserrat'>Login as</p>
                            <div className='mt-10 flex space-x-2 md:space-x-6 lg:space-x-10 font-poppins text-[16px] font-medium'>
                                <button onClick={() => handleClick('member')} className={`${active === 'member' ? 'underline' : ''}`}>Member</button>
                                <button onClick={() => handleClick('trainer')} className={`${active === 'trainer' ? 'underline' : ''}`}>Trainer</button>
                                <button onClick={() => handleClick('admin')} className={`${active === 'admin' ? 'underline' : ''}`}>Admin</button>
                            </div>
                            <div className='mt-4 md:mt-10 login-form'>
                                <Form className='space-y-4' onFinish={onFinish} form={form}>
                                    <FormInput
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                        label='Email:'
                                        rules={[{ required: true, message: "Please provide your Email" }]}
                                        className="border custom-input text-white border-[#D9D9D9] w-full p-4 rounded bg-primary"
                                    />
                                    <FormInput
                                        name='password'
                                        placeholder='Password'
                                        type='password'
                                        label='Password:'
                                        rules={[{ required: true, message: "Please provide your Password" }]}
                                        className="border custom-input text-white border-[#D9D9D9] w-full p-4 rounded bg-primary"
                                    />
                                    <button type='submit' className='auth-button !text-primary !bg-white font-poppins py-4 !mt-12'>Log In</button>
                                </Form>
                                <p className='mt-4 !text-white description !text-left'>Already have an account ?<Link className='text-white underline' href='/login'> Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Page;
