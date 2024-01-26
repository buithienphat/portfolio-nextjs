import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="grid grid-cols-1 md:grid-cols-12 items-center justify-between py-14"
        >
            <div className="col-span-8 text-center sm:text-left">
                <h1 className="text-white text-4xl mb-4 font-extrabold lg:text-8xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400">
                        Hello, I'm
                    </span>
                    <br />
                    Web Developer
                </h1>
                <p className="text-main text-base lg:text-xl mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptuous.
                </p>
                <div className="text-white font-bold">
                    <Link href={"#contact"}>
                        <button className="px-6 py-3 rounded-full w-[100%] bg-gradient-to-br from-orange-200 to-orange-400 md:w-fit mr-4 hover:from-orange-300 hover:to-orange-500">
                            Hire Me
                        </button>
                    </Link>
                    <button className="px-1 py-1 rounded-full w-[100%] bg-gradient-to-br from-orange-200 to-orange-400 mt-4 md:w-fit">
                        <span className="px-5 py-2 rounded-full block bg-[#121212]">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src={"/images/hero-image.png"}
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
