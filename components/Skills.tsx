'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { CodeXml, Crown, Server, Wrench } from 'lucide-react'
import { SkillsData } from '@/data/data'
import SkillsCard from '../components/SkillsCard'


type Props = {}

const Skills = (props: Props) => {
    const [active, setActive] = useState('frontend')
    return (
        <div className=' px-16 pt-8' id='skills'>
            <div className='w-full text-center mb-10 text-secondary-color'>
                <span className="bg-primary-color/20 px-5 mt py-2 rounded-2xl !font-[400] text-[18px]">
                    My Skills Progress So Far
                </span>               
                 <h1 className='text-secondary-color text-4xl font-semibold mt-6'>My  <span className='text-primary-color'>Skills</span></h1>
            </div>
            <div className="w-full flex flex-wrap gap-1 sm:gap-10 justify-center rounded-2xl py-2 mb-20 bg-primary-color/10 h-full shadow-2xl">
                <Button
                    className={`h-[70px] relative w-[150px] sm:w-[220px] rounded-2xl cursor-pointer ${active === "frontend"
                        ? "bg-cyan-500 !text-white hover:bg-cyan-500"
                        : "bg-white hover:bg-gray-50 !text-white"
                        } transition duration-500 hover:scale-104 `}
                    onClick={() => setActive("frontend")}
                >
                    {active === "frontend" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-background-color/10 to-transparent w-1/2 slideAnimation"></div>
                    )}

                    <span
                        className={`${active === "frontend" ? "!text-white" : "!text-black"
                            } p-2 border-2 rounded-xl `}
                    >
                        <CodeXml size={40} />
                    </span>
                    <span
                        className={` ${active === "frontend" ? "!text-white" : "!text-gray-700"
                            } text-[18px] sm:text-xl`}
                    >
                        Frontend
                    </span>
                </Button>
                <Button
                    className={`h-[70px] relative w-[150px] sm:w-[220px] rounded-2xl cursor-pointer ${active === "backend"
                        ? "bg-blue-500 !text-white hover:bg-blue-500"
                        : "bg-white hover:bg-gray-50 !text-white"
                        } transition duration-500 hover:scale-104 `}
                    onClick={() => setActive("backend")}
                >
                    {active === "backend" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-background-color/10 to-transparent w-1/2 slideAnimation"></div>
                    )}
                    <span
                        className={`${active === "backend" ? "!text-white" : "!text-black"
                            } p-2 border-2 rounded-xl `}
                    >
                        <Server size={40} />
                    </span>
                    <span
                        className={` ${active === "backend" ? "!text-white" : "!text-gray-700"
                            } text-[18px] sm:text-xl`}
                    >
                        Backend
                    </span>
                </Button>
                <Button
                    className={`h-[70px] relative w-[150px] sm:w-[220px] rounded-2xl cursor-pointer ${active === "tools"
                        ? "bg-indigo-500 !text-white hover:bg-indigo-500"
                        : "bg-white hover:bg-gray-50 !text-white"
                        } transition duration-500 hover:scale-104 `}
                    onClick={() => setActive("tools")}
                >
                    {active === "tools" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-background-color/10 to-transparent w-1/2 slideAnimation"></div>
                    )}

                    <span
                        className={`${active === "tools" ? "!text-white" : "!text-black"
                            } p-2 border-2 rounded-xl `}
                    >
                        <Wrench size={40} />
                    </span>
                    <span
                        className={` ${active === "tools" ? "!text-white" : "!text-gray-700"
                            } text-[13px] sm:text-xl`}
                    >
                        Tools & DevOps
                    </span>
                </Button>
            </div>
            <div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 pb-20">
                {active === "frontend" &&
                    SkillsData.frontend.map((item: any, index: number) => (
                        <SkillsCard item={item} key={index} />
                    ))}
                {active === "backend" &&
                    SkillsData.backend.map((item: any, index: number) => (
                        <SkillsCard item={item} key={index} />
                    ))}
                {active === "tools" && (
                    SkillsData.tools.map((item: any, index: number) => (
                        <SkillsCard item={item} key={index} />
                    ))
                )}
            </div>
        </div >

    )
}

export default Skills