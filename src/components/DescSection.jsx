import React from "react";

const DescSection = () => {
    return (
        <section className="lg:px-16 sm:py-16">
            <div className="text-center text-4xl font-bold flex flex-col md:flex-row items-center gap-8 md:border border-[#33353f] px-16 py-8 justify-between">
                <div className="flex flex-col">
                    <p>100+</p>
                    <span className="text-base text-[#adb7be]">Project</span>
                </div>
                <div className="flex flex-col">
                    <p>~100</p>
                    <span className="text-base text-[#adb7be]">Users</span>
                </div>
                <div className="flex flex-col">
                    <p>8</p>
                    <span className="text-base text-[#adb7be]">Awards</span>
                </div>
                <div className="flex flex-col">
                    <p> &gt; 1</p>
                    <span className="text-base text-[#adb7be]">Years</span>
                </div>
            </div>
        </section>
    );
};

export default DescSection;
