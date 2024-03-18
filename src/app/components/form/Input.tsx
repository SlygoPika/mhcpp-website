import React, { FunctionComponent } from "react";

type InputProps = {
    type: string;
    name: string;
    value: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input : FunctionComponent<InputProps> = (props) => {
    return (
        <div>
            <input type={props.type} name={props.name} onChange={(e) => props.onChange(e)} value={props.value} required={true} autoComplete="off"
            className="my-2 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
    );
}

export default Input;