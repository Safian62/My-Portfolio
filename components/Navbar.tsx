"use client";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


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
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const elements: HTMLElement[] = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only set activeId if element is mostly visible
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% of element visible
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
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
      className={`flex justify-between items-center px-6 lg:px-16 py-1 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        } fixed w-full z-50`}
      suppressHydrationWarning={true}
    >
      {/* Logo */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZm8xP8OfwmendiuVPp4TMlB3-XUW6YMEILg&s" className="h-20 w20" alt="" />

      {/* Navigation */}
      <div className=" hidden custom:flex gap-10 items-center">
        <ul className="flex gap-8 items-center font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="">
              <a
                href={item.href}
                className={linkClasses(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.id === "home") {
                    setActiveId("home");
                    history.replaceState(null, "", "#");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${item.id}`);
                    setActiveId(item.id);
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
              className="bg-[#f1f5f9] hover:bg-primary-color hover:text-white p-2.5 rounded-lg ml-10 cursor-pointer text-gray-700"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/m-safian-aa9619386"
              target="_blank"
              className="bg-[#f1f5f9] hover:bg-primary-color hover:text-white text-gray-700 p-2.5 rounded-lg cursor-pointer"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Resume Button */}
          <a href="/resume.pdf" download={'Muhammad_Safian_Resume.pdf'}>
            <div className="sm:w-[120px] flex justify-center items-center gap-2 border mt-5 sm:mt-0 h-[45px] rounded-md cursor-pointer text-white bg-primary-color transition duration-300 hover:scale-105">
              <Download size={18} /> Resume
            </div>
          </a>
        </ul>
      </div>
      <div className="flex text-secondary-text-color custom:hidden">
        {open ? (
          <X onClick={() => setOpen(false)} />
        ) : (
          <Menu onClick={() => setOpen(true)} />
        )}
      </div>
      {
        open && (
          <div className="fixed bg-white h-[70vh] w-[90%] p-5 bottom-10 border rounded-xl border-primary-color">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item,index)=>(
                <a key={index} href={item.href} onClick={()=>setOpen(false)} className="bg-primary-color/10 py-2 rounded px-3 font-semibold text-secondary-color">{item.label}</a>
              ))}
            </ul>
             <div className="flex w-full mt-5 justify-center gap-5">
            <Link
              href="http://github.com/Safian62"
              target="_blank"
              className="bg-[#f1f5f9] hover:bg-primary-color hover:text-white p-2.5 rounded-lg ml-10 cursor-pointer text-gray-700"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/m-safian-aa9619386"
              target="_blank"
              className="bg-[#f1f5f9] hover:bg-primary-color hover:text-white text-gray-700 p-2.5 rounded-lg cursor-pointer"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Resume Button */}
          <a href="/resume.pdf" download={'Muhammad_Safian_Resume.pdf'}>
            <div className=" w-[70%] mx-auto flex justify-center items-center gap-2 border mt-5 h-[45px] rounded-md cursor-pointer text-white bg-primary-color transition duration-300 hover:scale-105">
              <Download size={18} /> Resume
            </div>
          </a>
          </div>
        )
      }
      

    </nav>
  );
}
