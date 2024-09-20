import Icon from "../common/icon";
import Button from "../common/button";
import React from "react";
import {Upload, Form} from "antd";
import {FiPause, FiPlus, FiTrash} from "react-icons/fi";

interface ImageCardsProps {
    name: String | [String],
    label?: String,
    max?: number,
    required?: boolean

}

export const ImageCards  = ({name, label, max = 5, required}: ImageCardsProps) => {
    const Input = ({value, onChange}: any) => {

        let urls = value?.map((image: any) => {
            return typeof image === 'string' ? image : URL.createObjectURL(image)
        })


        const removeImage = (index: number) => {
            let all = [...value]
            all.splice(index, 1)
            onChange(all)
        }


        return (
            <div className="flex flex-wrap gap-6">
                {urls?.map((image: any, index: number) => (
                    <div className="relative" key={index}>
                        <div
                            role="button"
                            onClick={() => removeImage(index)}
                            className="absolute right-4 top-4 bg-white shadow-sm rounded p-2">
                            <FiTrash className="text-red-500" size={18}/>
                        </div>
                        <img
                            src={image}
                            className="w-60 h-40 object-cover rounded-md border-2 border-secondary3 border-dashed"
                            alt=""
                        />
                    </div>
                ))}
                {value?.length < max && (
                    <div
                        role="button"
                        onClick={() => {
                            let input = document.createElement('input')
                            input.type = 'file'
                            input.accept = 'image/*'
                            input.multiple = true
                            input.click()
                            input.onchange = (e: any) => {
                                let files = e.target.files
                                if (files.length > 0) {
                                    let all  =[...value, ...Object.values(files)]
                                    onChange(all.slice(0, max))
                                }
                            }
                        }}
                        className="w-60 h-40 border-2 border-secondary3 border-dashed rounded flex justify-center items-center">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <FiPlus size={40} className="text-main"/>
                            <p className="text-xs text-main font-medium">Add {value?.length > 0 ? 'More' : 'Image'}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <Form.Item
            name={name as any}
            rules={[
                {
                    required: required,
                    message: 'Please select an image'
                }
            ]}
            initialValue={[]}
        >
            <Input/>
        </Form.Item>
    )
}


interface ImageInputProps {
    label: String,
    name: String | [String],
    required?: boolean,
    multiple?: boolean
}

const ImageInput = ({label, name, required, multiple}: ImageInputProps) => {
    const Input = ({value, onChange}: any) => {
        return (
            <Upload.Dragger
                fileList={(multiple ? value : value && [value]) || []}
                beforeUpload={() => false}
                onChange={value => {
                    onChange(multiple ? value.fileList : value.file)
                }}
                className="text-center flex flex-col items-center ">
                <p className="ant-upload-drag-icon flex justify-center mb-5">
                    <Icon name="uploader"/>
                </p>
                <p className="text-lg font-medium">{label}</p>
                <p className="text-sm text-gray-500 !mb-5">JPEG or PNG only</p>
                <Button className="!px-4 !py-2">Choose File</Button>
            </Upload.Dragger>
        )
    }



    return (
        <Form.Item
            name={name as any}
            rules={[
                {
                    required: true,
                    message: 'Please select an image'
                }
            ]}

        >
           <Input/>
        </Form.Item>
    )
}

export default ImageInput