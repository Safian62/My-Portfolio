"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / docHeight) * 100;
      setScrollPercent(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className="px-10 mt-10 lg:mt-0 sm:flex justify-between bg-white border-t py-10"
      suppressHydrationWarning
    >
      {/* Left text */}
      <div>
        <h5 className=" text-gray-700 text-center sm:text-start text-[17px]">
          © 2025 Muhammad Safian — crafted with Next.js, TypeScript, and
          Tailwind CSS.
        </h5>
        <p className="text-gray-600 mt-2 text-center sm:text-start">
          Building useful products with care, clarity, and a founder mindset.
        </p>
      </div>

      {/* Back to top inline button */}
      <div
        className="sm:w-[180px] border text-white mt-5 sm:mt-0 h-[50px] rounded-lg cursor-pointer bg-primary-color flex justify-center items-center font-bold"
        onClick={scrollToTop}
      >
        Back To Top <ArrowUp className="inline ml-1 mt-1" size={20} />
      </div>

    </footer>
  );
};

export default Footer;
