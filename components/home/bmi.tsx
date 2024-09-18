"use client";
import React, { useState } from "react";
import { Form, Modal } from "antd";
import BannerTitle from "../common/banner-title";
import Button from "../common/button";
import FormInput from "../form/input";
import FormSelect from "../form/select";

const BMI: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bmiValue, setBmiValue] = useState<number | null>(null);
    const [form] = Form.useForm();
    const calculateBMI = ({
        weight,
        height,
    }: {
        weight: number;
        height: number;
    }) => parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
    const onFinish = (values: { weight: number; height: number }) => {
        setBmiValue(calculateBMI(values));
        setIsModalVisible(true); 
        form.resetFields(); 
    };

    const genders = [
        { _id: "1", label: "Male", value: "Male" },
        { _id: "2", label: "Female", value: "Female" },
    ];
    const activityFactors = [
        { _id: "1", label: "Little to no exercise", value: "Little to no exercise" },
        { _id: "2", label: "Light exercise 1-3 days/week", value: "Light exercise 1-3 days/week" },
        { _id: "3", label: "Moderate exercise 3-5 days/week", value: "Moderate exercise 3-5 days/week" },
        { _id: "4", label: "Hard exercise 6-7 days/week", value: "Hard exercise 6-7 days/week" },
        { _id: "5", label: "Intense exercise or physical job", value: "Intense exercise or physical job" },
    ];

    return (
        <section className="container xlpx-0 md:px-4 lg:mb-[120px] mb-[60px]">
            <div className="flex lg:flex-row flex-col xl:gap-[136px] gap-16">
                <div className="lg:basis-1/2 basis-full border border-[#D9D9D9] px-6 h-fit rounded">
                    <h4 className="text-[28px] font-bold py-10 pr-6 font-montserrat">BMI Chart</h4>
                    <table className="border border-[#D9D9D9] w-full rounded">
                        <thead>
                            <tr className="rounded flex font-bold border-b border-[#D9D9D9] font-montserrat">
                                <th className="h-[66px] pr-0 md:pr-48 w-1/2 pt-5 border-r border-[#D9D9D9]">BMI</th>
                                <th className="h-[66px] pr-0 md:pr-28 pt-5 w-1/2">Weight Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { range: "Below 18.5", status: "Underweight" },
                                { range: "18.5 - 24.9", status: "Healthy" },
                                { range: "25.0 - 29.9", status: "Overweight" },
                                { range: "30.0 - Above", status: "Obese" },
                            ].map(({ range, status }, idx) => (
                                <tr key={idx} className="flex border-b border-[#D9D9D9] rounded">
                                    <td className="h-[66px] w-1/2 border-r border-[#D9D9D9] flex pl-6 items-center">
                                        {range}
                                    </td>
                                    <td className="h-[66px] w-1/2 flex pl-6 items-center">{status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3 className="my-10">
                        <span className="text-primary font-bold">BMR</span> metabolic rate /{" "}
                        <span className="text-primary font-bold">BMI </span>body mass index
                    </h3>
                </div>
                <div className="lg:basis-1/2 basis-full">
                    <BannerTitle
                        className={""}
                        subtitle={"Body Mass Index"}
                        title={"Calculate Your BMI"}
                    />
                    <p className="lg:mt-10 mt-5 description">
                        Use our BMI calculator to quickly assess if you are at a healthy
                        weight based on your height and weight. Track your progress and stay
                        on the path to better health.
                    </p>
                    <Form form={form} onFinish={onFinish} className="mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                            <FormInput
                                name="weight"
                                type="number"        
                                placeholder="Weight (kg)"
                                rules={[{ required: true, message: "Please provide your weight" }]}
                                className="border w-full p-[18px] rounded"
                            />
                            <FormInput
                                name="height"
                                type="number"              
                                placeholder="Height / CM"
                                rules={[{ required: true, message: "Please provide your height" }]}
                                className="border w-full p-[18px] rounded"
                            />
                            <FormInput
                                name="age"
                                type="number"
                                placeholder="Age"
                                rules={[{ required: true, message: "Please provide your Age" }]}
                                className="border w-full p-[18px] rounded"
                            />
                            <FormSelect
                                name="gender"
                                placeholder={<p className="text-gray-400">Sex</p>}
                                className="border pt-2 pb-[11px] rounded w-full px-2"
                                rules={[{ required: true, message: "Please provide your Gender" }]}
                                options={genders}
                            />
                        </div>
                        <FormSelect
                            name="activity"
                            rules={[{ required: true, message: "Please provide your activity" }]}
                            placeholder={<p className="text-gray-400 px-2">Select an activity factor</p>}
                            className="border pt-2 pb-[11px] rounded w-full"
                            options={activityFactors}
                        />
                        <Button type="submit" className="button mt-7 hover:text-white">
                            Calculate
                        </Button>
                    </Form>
                    <Modal
                        title="Your BMI Result"
                        open={isModalVisible}
                        onCancel={() => setIsModalVisible(false)}
                        footer={null}
                    >
                        <p>
                            Your BMI is: <strong>{bmiValue}</strong>
                        </p>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default BMI;
