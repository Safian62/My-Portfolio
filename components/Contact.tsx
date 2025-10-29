'use client'
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Mail, Map, MapPin, Phone, Pin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { contactData } from "@/data/data";
import Link from "next/link";

type Props = {};

const Contact = (props: Props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            await axios
                .post(
                    "https://api.web3forms.com/submit",
                    {
                        access_key: "df6e25c2-1fde-4fbb-a98f-f140b52539c3",
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    setName("")
                    setEmail("")
                    setSubject('')
                    setMessage("")
                });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
    return (
        <div
            className="text-center pt-20 px-6  pb-6 sm:px-16"
            id="contact"
        >
            <div>
                <span className="bg-primary-color/30 text-gray-700 px-5 py-2 rounded-2xl !font-[400] text-[18px]">
                    GET IN TOUCH
                </span>
                <h1 className="text-3xl text-secondary-text-color sm:text-5xl font-bold mt-8">
                    Let's <span className="text-primary-color">Connect</span>
                </h1>
                <p className="text-secondary-color text-[20px] mt-6 mx-auto max-w-2xl">
                    Ready to bring your ideas to life? Let's discuss how we can work
                    together to create something amazing.
                </p>
            </div>
            <div className="mt-20 lg:flex gap-16">
                {/* Left side */}
                <div className="lg:w-[40%] mb-10">
                    <div className="mt-10">
                        <h1 className="text-3xl font-bold text-secondary-color">Let's Work Together</h1>
                        <p className="text-secondary-color max-w-xl my-8 text-justify">I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. Whether you're looking for a technical leader, a full-stack developer, or a mentor for your team, I'd love to hear from you.</p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-3 ">
                            <Phone size={50} className="inline p-3 rounded-md bg-primary-color/10 text-secondary-color" />
                            <div className="text-start">
                                <h4 className="text-primary-color font-semibold">Phone</h4>
                                <p className="text-secondary-color">+92 3114545210</p>
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                            <Mail size={50} className="inline p-3 rounded-md bg-primary-color/10 text-secondary-color" />
                            <div className="text-start">
                                <h4 className="text-primary-color font-semibold">Email</h4>
                                <p className="text-secondary-color">meharsafian62@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                            <MapPin size={50} className="inline p-3 rounded-md bg-primary-color/10 text-secondary-color" />
                            <div className="text-start">
                                <h4 className="text-primary-color font-semibold">Address</h4>
                                <p className="text-secondary-color">Lahore, Punjab,     Pakistan</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right side */}
                <div className="lg:w-[48%]">
                    <Card className="text-start border border-primary-color/20 hover:border-primary-color bg-primary-color/10">
                        <CardHeader>
                            <h3 className="text-2xl font-bold text-secondary-color" >
                                Send a <span>Message</span>
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className=" sm:flex gap-4">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            type="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your name"
                                            id="name"
                                        />
                                    </div>
                                    <div className="mt-5 sm:mt-0">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            id="email"
                                        />
                                    </div>
                                </div>
                                <Label htmlFor="subject" className="mt-8">
                                    Subject
                                </Label>
                                <Input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="What's this about?"
                                    name="subject"
                                    id="subject"
                                />
                                <Label htmlFor="message" className="mt-8 mb-4">
                                    Message
                                </Label>
                                <Textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell me about Your Project..."
                                />
                                <Button className="bg-primary-color text-white mt-10 w-[100%] h-[55px] rounded-[10px] font-semibold text-[18px] shadow-md transition-all duration-600 ease-out cursor-pointer mb-5 sm:mb-0 hover:scale-103 hover:bg-primary-text-color">
                                    <span className=" mr-1 text-xl">

                                        <Send size={40} />
                                    </span>
                                    Send a Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
