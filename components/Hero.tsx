"use client";
import React from "react";
import { motion } from 'framer-motion'
import Image from "next/image";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className={` w-full flex flex-col-reverse items-center lg:flex lg:flex-row justify-between pt-28 pb-10 px-6 md:px-16 bg-white relative "
        }`}
      id="home"
    >
      <div className=" lg:text-start mt-10 lg:w-[50%] lg:mt-2" >
        <div className="flex flex-col lg:items-start items-center ">
          <pre
            className="text-[17px] text-primary-color top-1 ml-1 md:ml-0"
          >
            MERN STACK DEVELOPER
          </pre>
          <h2
            className={`text-5xl font-bold mt-2  text-gray-800
              }`}
          >
            Hey! I Am
          </h2>
          <h1
            className={`text-[50px] font-bold my-4  text-primary-color
              }`}
          >
            Muhammad Safian
          </h1>
          <p
            className={`text-[15px] font-semibold text-gray-700
              }`}
          >
            As a MERN Stack Engineer, I specialize in building modern,
            high-performance web applications. With expertise in both Frontend and Backend development,
            I leverage MongoDB, Express.js, React, and Node.js to create scalable solutions.
            My experience spans across responsive frontend interfaces and robust backend architectures,
            delivering exceptional user experiences and efficient server-side solutions.
          </p>
          <div
            className="mt-10 flex gap-5"
          >
            <div
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-[140px] md:w-[170px] flex justify-center items-center gap-2 border mt-5 sm:mt-0 h-[50px] rounded-md cursor-pointer text-white bg-primary-color transition duration-300 hover:scale-105 font-bold">
              Let's Connect
            </div>
            <div
              onClick={() => {
                const contactSection = document.getElementById('projects');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-[140px] md:w-[170px] flex justify-center items-center gap-2 border mt-5 sm:mt-0 h-[50px] rounded-md cursor-pointer text-white bg-primary-color transition duration-300 hover:scale-105 font-bold">
              View my work
            </div>

          </div>
        </div>
      </div>
      <div className="flex w-fit justify-center items-center border-4 h-[35%] lg:mt-12 lg:mr-10 border-primary-color rounded-xl">
        <div className="">
          <img
            src="assests/safian-photo.png"
            alt="profile"
            className="rounded-[10px] h-[385px] w-[340px] object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;
