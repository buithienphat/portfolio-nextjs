"use client";
import Image from "next/image";
import React, { useState } from "react";

const AboutSection = () => {
    const [aboutTab, setAboutTab] = useState("skill");

    return (
        <section
            id="about"
            className="py-16 px-4 md:grid md:grid-cols-2 md:flex-row gap-8 items-center lg:items-start"
        >
            <div>
                <Image
                    src={"/images/about-image.webp"}
                    width={500}
                    height={500}
                    alt="About Img"
                />
            </div>
            <div className="max-md:mt-5">
                <div>
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p>
                        I am a full stack web developer with a passion for
                        creating interactive and responsive web applications. I
                        have experience working with JavaScript, React, Redux,
                        Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and
                        Git. I am a quick learner and I am always looking to
                        expand my knowledge and skill set. I am a team player
                        and I am excited to work with others to create amazing
                        applications.
                    </p>
                </div>
                <div>
                    <div className="my-8 flex gap-3">
                        <div
                            className="cursor-pointer"
                            onClick={() => setAboutTab("skill")}
                        >
                            <p
                                className={`font-semibold text-main  ${
                                    aboutTab === "skill" && "text-white"
                                }`}
                            >
                                Skills
                            </p>
                            <div
                                className={`h-1 bg-orange-300 mt-1 duration-300 ${
                                    aboutTab === "skill" ? "w-full" : "w-0"
                                }`}
                            ></div>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => setAboutTab("education")}
                        >
                            <p
                                className={`font-semibold text-main ${
                                    aboutTab === "education" && "text-white"
                                }`}
                            >
                                Education
                            </p>
                            <div
                                className={`h-1 bg-orange-300 mt-1 duration-300 ${
                                    aboutTab === "education" ? "w-full" : "w-0"
                                }`}
                            ></div>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => setAboutTab("certification")}
                        >
                            <p
                                className={`font-semibold text-main ${
                                    aboutTab === "certification" && "text-white"
                                }`}
                            >
                                Certifications
                            </p>
                            <div
                                className={`h-1 bg-orange-300 mt-1 duration-300 ${
                                    aboutTab === "certification"
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    {aboutTab === "skill" && (
                        <ul className="list-disc pl-3">
                            <li>HTML</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>TypeSctipt</li>
                            <li>NextJs</li>
                        </ul>
                    )}
                    {aboutTab === "education" && (
                        <ul className="list-disc pl-3">
                            <li>Certification Training: CFD Circle</li>
                        </ul>
                    )}
                    {aboutTab === "certification" && (
                        <ul className="list-disc pl-3">
                            <li>Web Bootcamp from Udemy</li>
                            <li>Javascript for Newbie from Udemy</li>
                            <li>Frontend Master from CFD cricle</li>
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
