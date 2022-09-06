import { motion } from 'framer-motion';
import {
    motionSendButton,
    motionSending,
} from '../../transitions/transContact';
import React, { useEffect, useState, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import { BiMailSend } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { BsFillCheckCircleFill } from 'react-icons/bs';
interface FormData {
    fullname?: string;
    email: string;
    message: string;
}

interface data {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [valid, setValid] = useState<boolean>(false);
    const [sending, setSending] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        email: '',
        message: '',
    });

    const onChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormData((data) => {
            return {
                ...data,
                [e.target.name]: e.target.value,
            };
        });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        const currentForm = form.current;
        if (currentForm == null) return;
        const user: data = {
            serviceId: process.env.EMAILJS_SERVICE_ID || '',
            templateId: process.env.EMAILJS_TEMPLATE_ID || '',
            publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
        };
        console.log(user);
        emailjs
            .sendForm(
                user.serviceId,
                user.templateId,
                currentForm,
                user.publicKey
            )
            .then(
                (result) => {
                    if (result.text === 'OK') {
                        setSending(false);
                        setSuccess(true);
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setFormData({
            fullname: '',
            email: '',
            message: '',
        });
    };

    const checkStatus = () => {
        if (sending && !success) {
            return (
                <span className="flex items-center justify-center gap-2">
                    Sending Message
                    <motion.span variants={motionSending} animate="animate">
                        <BiMailSend className="text-3xl" />
                    </motion.span>
                </span>
            );
        } else if (!sending && !success) {
            return (
                <span className="flex items-center justify-center gap-2 ">
                    Send Message
                    <FiSend />
                </span>
            );
        } else if (!sending && success) {
            return (
                <span className="flex items-center justify-center gap-2  ">
                    Message Sent
                    <BsFillCheckCircleFill />
                </span>
            );
        }
    };

    useEffect(() => {
        if (formData.email.length > 0 && formData.message.length > 0) {
            setValid(true);
        }
        console.log(valid);
    }, [formData, valid]);

    return (
        <main className="h-full max-w-xl mx-auto ">
            <div className="mx-auto   py-6 flex flex-col items-center justify-center ">
                <h2 className="text-center text-2xl font-text  text-main-teal-dark font-bold mb-4">
                    Get in Touch
                </h2>
                <form
                    ref={form}
                    onSubmit={onSubmit}
                    className=" max-w-sm space-y-5"
                >
                    <div className=" flex justify-center items-center mt-2 ">
                        <label className="relative cursor-pointer ">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="h-10 tablet:min-w-[300px]      min-w-[250px] px-4  text-md  border-main-teal-light border-2 rounded-lg border-opacity-85 outline-none focus:border-main-teal-light placeholder-main-teal-light placeholder-opacity-0 transition duration-200"
                                value={formData.fullname}
                                onChange={onChange}
                            />
                            <span className="text-md text-slate-700 text-opacity-80 bg-white absolute left-3 top-1.5 px-1 transition duration-200 input-text">
                                Full Name
                            </span>
                        </label>
                    </div>
                    <div className=" flex justify-center items-center mt-2 ">
                        <label className="relative cursor-pointer ">
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="h-10 tablet:min-w-[300px]      min-w-[250px] px-4  text-md  border-main-teal-light border-2 rounded-lg border-opacity-85 outline-none focus:border-main-teal-light placeholder-main-teal-light placeholder-opacity-0 transition duration-200"
                                value={formData.email}
                                onChange={onChange}
                            />
                            <span className="text-md text-slate-700 text-opacity-80 bg-white absolute left-3 top-1.5 px-1 transition duration-200 input-text">
                                Email
                            </span>
                        </label>
                    </div>
                    <div className=" flex justify-center items-center mt-2 ">
                        <label className="relative cursor-pointer ">
                            <textarea
                                name="message"
                                placeholder="message"
                                className=" tablet:min-w-[300px]      min-w-[250px] px-4 py-2 text-md  border-main-teal-light border-2 rounded-lg border-opacity-85 outline-none focus:border-main-teal-light placeholder-main-teal-light placeholder-opacity-0 transition duration-200"
                                rows={5}
                                value={formData.message}
                                onChange={onChange}
                            ></textarea>
                            <span className="text-md text-slate-700 text-opacity-80 bg-white absolute left-3 top-1.5 px-1 transition duration-200 input-text">
                                Message
                            </span>
                        </label>
                    </div>
                    {valid && (
                        <motion.button
                            variants={motionSendButton}
                            initial="initial"
                            animate="final"
                            className="rounded-md w-full  flex gap-2 justify-center items-center text-white px-5 py-2  bg-main-teal-light hover:bg-main-teal-light/80 hover:scale-105 transition ease-in-out"
                        >
                            {checkStatus()}
                        </motion.button>
                    )}
                </form>
            </div>
        </main>
    );
};

export default Contact;
