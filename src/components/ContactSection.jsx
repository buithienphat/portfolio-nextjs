"use client";
import React, { useState } from "react";

const ContactSection = () => {
    const [error, setError] = useState("");
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!!value) {
            setError("Please enter email address");
        } else {
            setError("");
            alert("Thank you!!!");
            console.log("value", value);
        }
    };

    return (
        <section
            id="contact"
            className="md:grid md:grid-cols-2 gap-5 py-16 lg:py-24"
        >
            <div>
                <h2 className="text-4xl font-bold mb-4">Let's Connect Me</h2>
                <p className="text-main mt-3 mb-4 md:max-w-[500px]">
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!
                </p>
                <div></div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-1">
                    <label htmlFor="email">Your email *</label>
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        defaultValue={value}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="text-sm w-full block placeholder-[#9CA2A9] rounded p-2.5 mt-2 bg-main bg-[#18191e] outline-orange-300 border border-[#adb7be]"
                    />
                    <p className="text-red-400 mt-1 min-h-5">{error}</p>
                </div>
                <div className="mb-1">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Hello, there..."
                        className="text-sm w-full block placeholder-[#9CA2A9] rounded p-2.5 mt-2 bg-main bg-[#18191e] outline-orange-300 border border-[#adb7be]"
                    />
                    <p className="text-red-400 mt-1 min-h-5"></p>{" "}
                </div>
                <div className="mb-1">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Let's talk about..."
                        className="text-sm w-full h-32 block placeholder-[#9CA2A9] rounded p-2.5 mt-2 bg-main bg-[#18191e] outline-orange-300 border border-[#adb7be] resize-none"
                    ></textarea>
                    <p className="text-red-400 mt-1 min-h-5"></p>{" "}
                </div>
                <button className="h-11 text-center block w-full bg-orange-400 rounded-lg font-bold">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
