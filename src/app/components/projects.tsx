import React from 'react';

const Projects: React.FC = () => (
    <section className="section flex flex-col justify-center items-start h-screen pl-52 space-y-1">
        <div
            data-scroll
            data-scroll-speed="6"
            className="w-full flex"
        >
            <div className="text-6xl font-black text-[#e1e1e1]">
                Projects
            </div>
        </div>
        <div
            data-scroll
            data-scroll-speed="8"
            className="w-full flex"
        >
            <div className="text-[#ffffff] text-2xl max-w-xl">
                I create unconventional yet functional & visually pleasing interfaces for mobile and web
            </div>
        </div>
    </section>
);

export default Projects;