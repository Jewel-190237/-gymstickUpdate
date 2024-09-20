'use client'
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Checkbox, Form, Radio } from 'antd';
import type { CheckboxProps, RadioChangeEvent } from 'antd';
import Link from 'next/link';
import { useForm } from 'antd/es/form/Form';

const Page: React.FC = () => {
    const [form] = useForm();
    const [value, setValue] = useState('user');

    const handleCheckboxChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const handleRadioChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onFinish = (values: { email: string; password: string; confirmPassword: string }) => {
        console.log(values);
        form.resetFields();
    };

    const validateConfirmPassword = (_, value) => {
        const password = form.getFieldValue('password');
        if (!value) {
            return Promise.reject(new Error('Please re-enter your password'));
        }
        if (value !== password) {
            return Promise.reject(new Error ('Passwords do not match'));
        }
        return Promise.resolve();
    };

    return (
        <div>
            <BasicHeader heading='Create An Account' subHeading='Home' />
            <div className='px-8 md:px-0 mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-[250px] py-[150px] rounded bg-opacity-10'>
                    <h2 className='login-heading font-montserrat'>let’s join us</h2>
                    <div className='mt-5'>
                        <Radio.Group className='space-x-4' onChange={handleRadioChange} value={value}>
                            <Radio className='description font-poppins' value='user'>Sign Up User</Radio>
                            <Radio className='description font-poppins' value='trainer'>Sign Up Trainer</Radio>
                        </Radio.Group>
                    </div>
                    <div className='flex mt-10 flex-row items-center space-x-2'>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                        <p className='description mx-2 text-center'>Sign in with your email</p>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div>
                    </div>
                    <Form form={form} onFinish={onFinish}>
                        <div className='mt-[34px]'>
                            <FormInput
                                label='Name:'
                                name="name"
                                type="text"
                                placeholder="Name"
                                rules={[{ required: true, message: "Please provide Name" }]}
                                className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                            />
                            <FormInput
                                label='Email:'
                                name="email"
                                type="email"
                                placeholder="Email"
                                rules={[{ required: true, message: "Please provide Email" }]}
                                className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                            />
                            <FormInput
                                label='Password:'
                                name="password"
                                type="password"
                                placeholder="Password"
                                rules={[{ required: true, message: "Please provide your Password" }]}
                                className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                            />
                            <FormInput
                                label='Re-Type Password:'
                                type="password"
                                name='confirmPassword'
                                placeholder="Re-Type Password"
                                rules={[{  require: true , validator: validateConfirmPassword }]}
                                className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                            />
                            <Checkbox className='description mt-[22px]' onChange={handleCheckboxChange}>Remember Me ? </Checkbox>
                            <button type='submit' className='product-button mt-[34px] py-4 w-full'>Continue</button>
                        </div>
                    </Form>
                    <p className='mt-[29px] description'>Already have an account? <Link className='text-primary' href='/login'> Sign in now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Page;
