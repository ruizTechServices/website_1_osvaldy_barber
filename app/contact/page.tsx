"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase/client";

// Make this entire thing into a component and place it in the main page
// It is already connected and working with the database
function ContactForm() {
    // State for storing form field values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // State for storing validation errors
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevState) => ({
            ...prevState,
            [name]: "",
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault(); // Prevent form from refreshing the page on submit
        console.log("Form Data Submitted:", formData);

        // Check for empty fields and set error messages
        const newErrors = {
            name: formData.name ? "" : "Write your full name",
            email: formData.email ? "" : "Write an email",
            message: formData.message ? "" : "Write a message",
        };
        setErrors(newErrors);

        // If there are any errors, do not submit the form
        if (Object.values(newErrors).some((error) => error !== "")) {
            return;
        }

        const { data, error } = await supabase.from("Contact").insert([
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
        ]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("Data inserted successfully:", data);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <div className="grid col-start-5 mt-48 ml-20 md:col-start-5 w-[200px] md:container md:mx-auto border-2 p-5 md:w-[300px]">
            <form
                className="flex flex-col w-fit text-white gap-3"
                onSubmit={handleSubmit}
            >
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
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
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
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}
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
                    {errors.message && (
                        <p className="text-red-500">{errors.message}</p>
                    )}
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default ContactForm;
