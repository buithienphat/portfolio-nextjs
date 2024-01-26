"use client";
import { dataProject } from "@/constans/dataProject";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectSection = async () => {
    const data = await dataProject.reverse().map((data) => data);

    return (
        <section id="project" className="py-16 px-4 text-center">
            <h2 className="text-white text-4xl font-bold mb-4">My Projects</h2>
            <div></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {data.map((data) => {
                    const { img, name, description, link, id } = data;
                    return (
                        <div key={id} className="text-left">
                            <div
                                className="h-52 md:h-72 rounded-xl overflow-hidden"
                                style={{
                                    background: `url('${img}')`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="h-full w-ful bg-[#181818] opacity-0 hover:opacity-90 duration-300 flex items-center justify-center gap-8">
                                    <Link
                                        href={"/"}
                                        className="h-12 w-12 flex items-center"
                                    >
                                        <Image
                                            src={"/images/code-solid.svg"}
                                            width={200}
                                            height={200}
                                            alt="expand"
                                        />
                                    </Link>
                                    <Link
                                        href={link}
                                        target="_blane"
                                        className="h-10 w-10 flex items-center"
                                    >
                                        <Image
                                            src={"/images/expand-solid.svg"}
                                            width={200}
                                            height={200}
                                            alt="expand"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold my-3">
                                {name} website
                            </h3>
                            <p className="text-main">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectSection;
