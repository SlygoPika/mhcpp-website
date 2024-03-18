"use client";
import React, {useState} from "react";
import {
    FormControl,
} from "@chakra-ui/react";

import Input from "./form/Input";
import Label from "./form/Label";
import TextArea from "./form/TextArea";
import Button from "./Button";

const initValues = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
};

const initState = {values: initValues};

const EmailForm = () => {
    const [state, setState] = useState(initState);
    const {values} = state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setState((prev) => ({
            ...prev, 
            values: {
                ...prev.values,
                [name]: value,
            },
        }));
    }

    return (
        <div>
            <h3 className="my-12 text-center text-black text-3xl font-bold">Sponsor <span className="text-red-900">MHCPP</span></h3>
            <FormControl>
                <Label required={true}>Name</Label>
                <Input type="text" name="Name" required={true} value={values.Name} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <Label required={true}>Email</Label>
                <Input type="email" name="Email" required={true} value={values.Email} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <Label required={true}>Subject</Label>
                <Input type="text" name="Subject" required={true} value={values.Subject} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <Label required={true}>Message</Label>
                <TextArea name="Message" required={true} value={values.Message} onChange={handleChange} />
            </FormControl>
            <div className="mt-8 ml-2">
                <Button text="Send" textSize="xl" />
            </div>
            
        </div>
    );
}

export default EmailForm;