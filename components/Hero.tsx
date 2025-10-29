"use client";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from 'framer-motion'
import Image from "next/image";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className={` w-full lg:flex justify-between py-24 px-16 bg-white relative "
        }`}
      id="home"
    >
      <div className="w-[50%] mt-2" >
        <div>
          <pre
            className="text-[17px] text-primary-color top-1"
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
            Muhammad <br /> Safian
          </h1>
          <p
            className={`text-[15px] font-semibold text-gray-700
              }`}
          >
            I am a MERN stack developer with experience in building modern and
            responsive web applications. I work with MongoDB, Express.js, React,
            and Node.js to create efficient and user-friendly solutions. I enjoy
            learning new technologies and improving my skills to deliver better
            results in every project.
          </p>
          <motion.div
            className="mt-10 "
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sm:w-[150px] flex justify-center items-center gap-2 border mt-5 sm:mt-0 h-[45px] rounded-md cursor-pointer text-white bg-primary-color/80 font-bold">
              Let's Connect
            </div>

          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center border-4 h-[35%] mt-12 mr-10 border-primary-color rounded-xl">
        {/* <div className="">
          <Image src={'/assests/channels4_profile.jpg'} width={20} height={20} alt="" className="rounded-[10px] h-[350px] w-[350px] bg-cover" />
        </div> */}
      </div>

    </div>
  );
};

export default Hero;
