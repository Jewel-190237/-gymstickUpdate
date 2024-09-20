'use client'
import React from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import Link from 'next/link';
const page: React.FC = () => {
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div>
            <BasicHeader heading='Log In' subHeading='Home' />
            <div className='px-8 md:px-0 mt-4 max-w-[1320px] mx-auto '>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-[250px] py-[150px] rounded bg-opacity-10'>
                    <p className='login-heading font-montserrat'>Welcome back.</p>
                    <div className='flex mt-[68px] flex-row items-center space-x-2'>
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div> 
                        <p className='description mx-2 text-center'>Sign in with your email</p> 
                        <div className='h-[2px] bg-[#534C4C] flex-grow'></div> 
                    </div>
                    <div className='mt-[34px]'>
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
                            rules={[{ required: true, message: "Please provide your Password " }]}
                            className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                        />
                        <Checkbox className='description mt-[22px]' onChange={onChange}>Remember Me</Checkbox>
                        <div className='mt-[14px]'><Link className='!text-primary description' href=''>Forgat Password</Link></div>
                        <button className='product-button mt-[34px] py-4 w-full'>Continue</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;