"use client";
import { Code, Tv } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

type Props = {};

const About = (props: Props) => {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className="w-full py-16 px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top badge */}
        <div className="text-center mb-10">
          <span className="inline-block bg-gradient-to-r from-primary-color/30 to-primary-color/10 text-primary-color px-5 py-2 rounded-full font-medium text-lg">
            About
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I build **scalable full-stack web applications** with **MongoDB, Express, React, and Node.js**. 
            Passionate about creating **dynamic, responsive interfaces** and **efficient, maintainable backend systems**.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Tv className="h-6 w-6 text-primary-color" />,
              title: "Frontend Development",
              description:
                "Building responsive, modern interfaces with ReactJS and NextJS using clean and maintainable code.",
            },
            {
              icon: <Code className="h-6 w-6 text-primary-color" />,
              title: "Backend Development",
              description:
                "Developing efficient and scalable backend systems with Node.js and Express.",
            },
            {
              icon: (
                <svg
                  className="h-6 w-6 text-primary-color"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 7h16v10H4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: "MERN Stack Expertise",
              description:
                "Integrating MongoDB, Express, React, and Node.js to create full-stack applications with scalable architecture.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-primary-color/20 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-color/10 mb-4">
                {card.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
