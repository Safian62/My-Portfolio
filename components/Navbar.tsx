"use client";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Handle hash change (URL)
  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#")) {
        const id = hash.slice(1);
        if (id) setActiveId(id);
      }
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const linkClasses = (id: string) =>
    `hover:text-primary-color transition-all ${activeId === id
      ? "text-primary-color pb-0.5 px-1 border-b-2 border-primary-color font-semibold"
      : "text-gray-700"
    }`;

  // 👇 Navigation items list
  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "My Work", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center px-16 py-1 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        } fixed w-full z-50`}
      suppressHydrationWarning={true}
    >
      {/* Logo */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZm8xP8OfwmendiuVPp4TMlB3-XUW6YMEILg&s" className="h-20 w20" alt="" />

      {/* Navigation */}
      <div className="flex gap-10 items-center">
        <ul className="hidden md:flex gap-8 items-center font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="">
              <a 
                href={item.href}
                className={linkClasses(item.id)}
                onClick={(e) => {
                  if (item.id === "home") {
                    e.preventDefault();
                    setActiveId("home");
                    history.replaceState(null, "", "#");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="http://github.com/Safian62"
              target="_blank"
              className="bg-[#f1f5f9] p-2.5 rounded-lg ml-10 cursor-pointer text-gray-700"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/m-safian-aa9619386"
              target="_blank"
              className="bg-[#f1f5f9] text-gray-700 p-2.5 rounded-lg cursor-pointer"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Resume Button */}
            <div className="sm:w-[120px] flex justify-center items-center gap-2 border mt-5 sm:mt-0 h-[45px] rounded-md cursor-pointer text-white bg-primary-color/80">
              <Download size={18} /> Resume
            </div>
        </ul>
      </div>
    </nav>
  );
}
