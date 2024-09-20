'use client'
import React from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Form } from 'antd';
const page: React.FC = () => {
    const [form] = Form.useForm();
    const onFinish = (values: { email: string }) => {
        console.log(values);
        form.resetFields();
    };
    return (
        <div>
            <BasicHeader heading='Forgat Password' subHeading='Home' />
            <div className='px-8 md:px-0 mt-4 max-w-[1320px] mx-auto '>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-[250px] py-[150px] rounded bg-opacity-10'>
                    <p className='login-heading font-montserrat'>Forgat Password</p>
                    <p className='description mt-3 '>Please confirm your email address below and we will send you a verification code.</p>
                    <Form className='mt-[104px]' onFinish={onFinish} form={form}>
                            <FormInput
                                label='Email:'
                                name="email"
                                type="email"
                                placeholder="Email"
                                rules={[{ required: true, message: "Please provide Email" }]}
                                className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                            />
                            <button type='submit' className='product-button mt-[34px] py-4 w-full'>Continue</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default page;