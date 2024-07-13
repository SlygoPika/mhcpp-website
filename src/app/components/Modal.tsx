"use client"
import React, { FunctionComponent, useState } from "react";
import Button from "./Button";

type ModalProps = {
    buttonText : string;
    children: React.ReactNode;
};

const Modal : FunctionComponent<ModalProps> = ({buttonText, children}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {showModal ? 
                <div className="fixed inset-0 bg-slate-700/30 flex justify-center items-center z-50 transition-all duration-200 ease-in-out">
                    <div className="max-h-[calc(100vh - 5em)] h-fit w-2/3 scale-90
                            overscroll-contain rounded-3xl bg-gradient-to-r from-lightred to-orange-50 p-6 text-black shadow-2xl transition">
                            <div className="mx-8 my-5">
                                <div className="h-fit w-fit bg-red-200 hover:bg-logored/60 rounded-full p-2 absolute top-8 right-12"
                                onClick={() => setShowModal(false)}>
                                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                </div>
                                {children}
                            </div>
                    </div>
                </div> : 
                null
            }
            <Button text={buttonText} onClick={() => setShowModal(true)} />
        </div>
    );
}

export default Modal;