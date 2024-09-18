import { Form } from "antd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

interface CountryInputProps {
    name: string,
    label: string,
    setCountry?: any,
    whitelist?: any,
    required?: boolean
}

let props = {
    className: "form-select-country focus:border-primary focus:outline-primary focus:ring-0 hover:border-primary px-2"
}


const CountryInput = ({ name = 'country', label = 'Country', setCountry, whitelist, required }: CountryInputProps) => {


    return (
        <Form.Item
            name={name}
            label={label}
            rules={[
                { required: required, message: "Please provide country" },
            ]}
            className="mb-6"
            initialValue="">
            {/* @ts-ignore */}
            <CountryDropdown
                valueType="full"
                whitelist={whitelist}
                onChange={val => setCountry && setCountry(val)}
                {...props}
            />
        </Form.Item>
    )
}
export default CountryInput

export const CityInput = ({ name = 'city', label = 'City', country, onSelect, required }) => {
    return (
        <Form.Item
            name={name}
            label={label}
            rules={[
                { required: required, message: "Please provide city/region" },
            ]}
            className="mb-6"
            initialValue="">
            {/* @ts-ignore */}
            <RegionDropdown
                valueType="full"
                country={country}
                onChange={onSelect}
                countryValueType="full"
                {...props} />
        </Form.Item>
    )
}