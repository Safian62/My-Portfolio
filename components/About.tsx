"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BiDownload } from "react-icons/bi";

type Props = {};

const About = (props: Props) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex w-full justify-center pt-10`}
      id="about"
    >
     <h3 className="bg-primary-color/20 px-5 py-1 rounded-2xl text-secondary-color text-xl">About Me</h3>
    </div>
  );
};

export default About;
