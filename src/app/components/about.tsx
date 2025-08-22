import React from 'react';

const About: React.FC = () => (
    <section className="section flex flex-col justify-center items-start h-screen pl-52 space-y-1">
        <div
            data-scroll
            data-scroll-speed="5"
            className="w-full flex"
        >
            <div className="text-6xl font-black text-[#e1e1e1]">
                About Me
            </div>
        </div>
        <div
            data-scroll
            data-scroll-speed="6"
            className="w-full flex"
        >
            <div className="text-[#1adfcb] text-2xl font-semibold max-w-xl">
                Vikrant Singh <br /> 25 yrs
            </div>
        </div>
        <div
            data-scroll
            data-scroll-speed="9"
            className="w-full flex"
        >
            <div className="text-[#ffffff] text-2xl max-w-xl">
                I create unconventional yet functional & visually pleasing interfaces for mobile and web
            </div>
        </div>
    </section>
);

export default About;