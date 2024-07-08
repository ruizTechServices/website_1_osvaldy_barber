"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function ContactForm() {
    // State for storing form field values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent form from refreshing the page on submit
        console.log("Form Data Submitted:", formData);
        // Optionally, reset the form here if needed
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="w-[200px] md:container md:mx-auto border-2 ml-[150px] mt-[200px] p-5 md:w-[300px]">
            <form className="flex flex-col w-fit text-white gap-3" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <Input
                        className="text-black w-full"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Input
                        className="text-black w-full"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="text-black rounded-xl w-full"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default ContactForm;
