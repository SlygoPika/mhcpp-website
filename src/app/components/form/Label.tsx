import React, { FunctionComponent } from "react";

type LabelProps = {
    children?: React.ReactNode;
    required?: boolean;
};

const Label : FunctionComponent<LabelProps> = (props) => {
    return (
        <div className="mt-4">
            <label className="text-2xl">{props.children} {props.required ? <span className="text-logored">*</span> : null}</label>
        </div>
    );
}

export default Label;