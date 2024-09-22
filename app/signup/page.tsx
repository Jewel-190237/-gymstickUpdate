'use client';
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Checkbox, Form, Radio } from 'antd';
import Link from 'next/link';
import { useForm } from 'antd/es/form/Form';
const Page: React.FC = () => {
    const [form] = useForm();
    const [role, setRole] = useState('user');
    const [checked, setChecked] = useState(false);

    const onFinish = (values) => {
        console.log({ ...values, role, checked });
        form.resetFields();
    };
    return (
        <div>
            <BasicHeader heading='Create An Account' subHeading='Home' />
            <div className='px-8 md:px-0 mt-0 md:mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <h2 className='auth-heading font-montserrat'>let’s join us</h2>
                    <Radio.Group onChange={e => setRole(e.target.value)} value={role} className='mt-3 md:mt-5 flex justify-center space-x-0 md:space-x-4'>
                        <Radio className='description font-poppins' value='user'>Sign Up User</Radio>
                        <Radio className='description font-poppins' value='trainer'>Sign Up Trainer</Radio>
                    </Radio.Group>
                    <div className='flex mt-5 md:mt-10 flex-row items-center space-x-2'>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                        <p className='description mx-2 text-center'>Sign in with your email</p>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                    </div>
                    <Form className='mt-4 md:mt-[34px]' form={form} onFinish={onFinish}>
                        <FormInput
                            label='Name'
                            placeholder='Name'
                            name='name'
                            type='text'
                            rules={[{ required: true, message: "Please provide your Name" }]}
                            className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E2508]"
                        />
                        <FormInput
                            label='Email'
                            placeholder='Email'
                            name='email'
                            type='email'
                            rules={[{ required: true, message: "Please provide your Email" }]}
                            className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E2508]"
                        />
                        <FormInput
                            label='Password'
                            placeholder='Password'
                            name='password'
                            type='password'
                            rules={[{ required: true, message: "Please provide your Password" }]}
                            className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
                        />
                        <FormInput
                            label='Re-Type Password'
                            placeholder='Re-Type Password'
                            name='reTypePassword'
                            type='password'
                            rules={[{ required: true, message: "Please provide your Re-Type Password" }]}
                            className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
                        />

                        <Checkbox className='description mt-[22px]' onChange={e => setChecked(e.target.checked)}>Remember Me?</Checkbox>
                        <button type='submit' className='auth-button font-poppins mt-[34px] py-4'>Continue</button>
                    </Form>
                    <p className='mt-3 md:mt-[29px] description !text-center'>Already have an account? <Link className='text-primary' href='/login'> Log in now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Page;
