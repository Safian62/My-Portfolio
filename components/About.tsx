"use client";
import { Code, Tv } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

type Props = {};

const About = (props: Props) => {
  const { theme } = useTheme();
  return (
    <section id="about" className="w-full py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top badge */}
        <div className="text-center mb-8 mx-auto">
          <span className="inline-block bg-primary-color/20 text-secondary-color px-4 py-1 rounded-full font-[400] text-[18px]">About</span>
        </div>

        <div className="gap-5 mt-10 ">
          {/* Left column: headline + paragraphs */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-color mb-6 text-center">Mern Stack Developer</h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-4xl text-center  ">
              I specialize in building scalable full-stack applications using MongoDB, Express.js, React, and Node.js, creating robust and maintainable backend systems and efficient RESTful APIs.

            </p>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-4xl text-center">
              I am passionate about integrating AI technologies like OpenAI and Gemini, performing model fine-tuning and prompt engineering to enhance application functionality and user experience.

            </p>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-4xl text-center">
              Skilled in NextJS and ReactJS, I develop dynamic and responsive user interfaces, ensuring seamless integration between frontend and backend for innovative SaaS, B2B, and B2C products.

            </p>
          </div>

          {/* Right column: role cards */}
          <aside className="flex  gap-5">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-primary-color">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-color/10 mb-3 text-secondary-color">
                <Tv />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Frontend Development</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Skilled in ReactJS and NextJS, building responsive and user-friendly interfaces with clean and maintainable code.
              </p>


            </div >

            <div className="p-6 bg-white rounded-xl shadow-sm border border-primary-color">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-color/10 mb-3">
                <Code />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Backend Development</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Proficient in Node.js and Express, designing RESTful APIs and building scalable, efficient backend systems.
              </p>

            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-primary-color">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-color/10 mb-3">
                <svg className="h-5 w-5 text-primary-color" viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">MERN Stack Development</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Skilled in MongoDB, Express.js, React, and Node.js to build full-stack applications with scalable architecture.
              </p>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
