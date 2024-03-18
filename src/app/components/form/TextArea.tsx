import React, { FunctionComponent } from "react";

type TextAreaProps = {
    name: string;
    value: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea : FunctionComponent<TextAreaProps> = (props) => {
    return (
        <div>
            <textarea name={props.name} onChange={(e) => props.onChange(e)} value={props.value} required autoComplete="off" rows={6}
            className="my-2 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

        </div>
    );
}

export default TextArea;