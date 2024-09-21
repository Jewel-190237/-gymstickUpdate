'use client';
import React, { useState } from 'react';
import BasicHeader from '../../components/common/basic-header';
import FormInput from '../../components/form/input';
import { Form, Modal } from 'antd';

const Page: React.FC = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pinCode, setPinCode] = useState<string>('');

    const onFinish = ({ email: string }) => {
        const generatedPin = Math.floor(10000 + Math.random() * 90000).toString();
        setPinCode(generatedPin);
        setIsModalVisible(true);
        form.resetFields();
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <BasicHeader heading='Forgot Password' subHeading='Home' />
            <div className='px-8 lg:px-0 mt-4 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-10 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <p className='login-heading font-montserrat'>Forgot Password</p>
                    <p className='description mt-3'>Please confirm your email address below and we will send you a verification code.</p>
                    <Form className='mt-6 md:mt-12 lg:mt-[104px]' onFinish={onFinish} form={form}>
                        <FormInput
                            label='Email:'
                            name="email"
                            type="email"
                            placeholder="Email"
                            rules={[{ required: true, message: "Please provide Email" }]}
                            className="border border-[#D9D9D9] w-full p-[18px] rounded bg-[#FF4E251A]"
                        />
                        <button type='submit' className='font-poppins auth-button py-4'>Continue</button>
                    </Form>
                </div>
            </div>
            <Modal title="Verification Code" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <div className="flex space-x-6 justify-center">
                    {pinCode.split('').map((digit, index) => (
                        <div key={index} className="flex items-center justify-center px-4 py-3 bg-primary text-white rounded">
                            {digit}
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-center">
                    <p className="description">Please enter the code to verify your email.</p>
                </div>
            </Modal>
        </div>
    );
};

export default Page;
