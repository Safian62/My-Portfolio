import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import eShopImage from '../public/assests/Screenshot 2025-10-04 183911.png'
import eLearningImage from '../public/assests/Screenshot 2025-10-04 185240.png'
import realstateImage from '../public/assests/Screenshot 2025-10-04 190154.png'

export const contactData = [
    {
        icon: Mail,
        bgColor: "bg-cyan-500",   // ✅ correct
        name: "Mail",
        purpose: "Send me a mail",
        title: "meharsafian62@gmail.com",
        url: 'mailto:meharsafian62@gmail.com'
    },
    {
        icon: Linkedin,
        bgColor: "bg-blue-500",   // ✅ correct
        name: "Linkedin",
        purpose: "Professional Work",
        title: "Connect with me",
        url: 'https://linkedin.com'
    },
    {
        icon: Github,
        bgColor: "bg-gray-700",   // ✅ correct
        name: "Github",
        purpose: "Open source projects",
        title: "View my code",
        url: 'https://github.com/Safian62'
    },
    {
        icon: MapPin,
        bgColor: "bg-green-500",  // ✅ correct
        name: "Location",
        purpose: "Based in",
        title: "Remote / Pakistan",
        url: '#'
    },
];

export const projectData = [
    {
        img: eShopImage,
        technologies: [
            'REACT',
            'NODE',
            'SOCKET',
            'TAILWIND',
            'REDUX',
        ],
        title: 'E-SHOP',
        description: 'E-Commerce Platform – A full-stack MERN e-commerce website with admin, seller, and user dashboards, product management, and secure payments via Stripe. Built with React, Tailwind, Node.js, Express, and MongoDB for a scalable and responsive experience.',
        url: 'https://multivender-kzk1.vercel.app/',
        code: 'https://github.com/Safian62/multivender'
    },
    {
        img: eLearningImage,
        technologies: [
            'NEXT',
            'NODE',
            'SOCKET',
            'TAILWIND',
            'RTK',
            'TS'
        ],
        title: 'E-LEARNING',
        description: 'Learning Management System (LMS) – A scalable Next.js + TypeScript based platform with admin and user dashboards, course creation & management, enrollment tracking, and business features. Built using MERN stack + Redux Toolkit (RTK) with Tailwind CSS for a modern, responsive UI.',
        url: 'https://lms-client-theta-black.vercel.app/',
        code: 'https://github.com/Safian62/LMS'
    },
    {
        img: realstateImage,
        technologies: [
            'REACT',
            'TAILWIND',
            'JS',
        ],
        title: 'REAL-STATE',
        description: 'Real Estate Website (Clone) – A responsive React + JavaScript application styled with Tailwind CSS, showcasing property listings with images, details, and a modern UI. Built as a clone project to practice front-end development and design for real estate platforms.',
        url: 'https://real-state-wheat-two.vercel.app/',
        code: 'https://github.com/Safian62/realState'
    },
]

export const SkillsData = {

    frontend: [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhcIfztQvmeSxIAEN2CSfptNqoLh35xXtBg&s',
            name: 'Html 5'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B0jgb556iB3bft4AYqEReM2wopQYyxYWmQ&s',
            name: 'Css'
        },
        {
            img: 'https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png',
            name: 'Java Script'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png',
            name: 'Type Script'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s',
            name: 'React.js'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c6a8m-Dr93Lf1zVkHq6zZoHdLun4eNO1pw&s',
            name: 'React Native'
        },
        {
            img: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
            name: 'Next.js'
        },



        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png',
            name: 'Tailwind CSS'
        },
        {
            img: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
            name: 'Redux'
        },
    ],
    backend: [
        {
            img: 'https://images.seeklogo.com/logo-png/47/1/node-js-logo-png_seeklogo-479905.png',
            name: 'Node js'
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/C560BAQFK5nEFJqpDyg/company-logo_200_200/company-logo_200_200/0/1630639402984/exp_recruitment_logo?e=2147483647&v=beta&t=Byu-ALIrBki9cUjqVDkhPh-2nRgU3saviNrp8KjK8qs',
            name: 'Express'
        },
        {
            img: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
            name: 'MongoDB'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbuTCnPv7wAsOzmJ8x24tK7Wgbz6SfccUKQ&s',
            name: 'Redis'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
            name: 'SocketIO'
        },
    ],
    tools: [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2JEzCppRpKpOx5u62PHXEfEO2dCHNFUg2A&s',
            name: 'Vs Code'
        },
        {
            img: 'https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj',
            name: 'GitHub'
        },
         {
            img: 'https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj',
            name: 'Git'
        },
        {
            img: 'https://pipedream.com/s.v0/app_XaLh2x/logo/orig',
            name: 'Vercel'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AaztiWmGTUTLl0bJNvQE-HyOtqyWLY4I4g&s',
            name: 'Stripe'
        },
         {
            img: 'https://pbs.twimg.com/profile_images/1534945114807644173/h22f7y8F_400x400.png',
            name: 'Postman'
        }
    ]

}