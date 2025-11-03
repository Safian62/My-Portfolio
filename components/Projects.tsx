import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { projectData } from '@/data/data'
import { Github, Tv } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div className=' text-center px-6 md:px-14 pt-12 text-secondary-color' id='projects'>
            <span className="bg-primary-color/30 px-5 py-2 rounded-2xl !font-[400] text-[18px]">
                My Work
            </span>
            <h2 className='mt-6 text-4xl font-semibold text-secondary-color'>Recents <span className='text-primary-color'>Projects</span></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    projectData.map((project, index) => (
                        <Card className='text-start pt-5 border-primary-color relative' key={index}>
                            <CardContent className='mb-16'>
                                <Image src={project.img} alt=""
                                    height={220} width={420}
                                    className='rounded-xl object-fill h-[250px] w-[400px]'
                                />
                                <div className='flex flex-wrap gap-2 ml-1 font-bold mt-5 text-secondary-color'>
                                    {project.technologies.map((tech, index) => (
                                        <h2 key={index}>{tech} |</h2>
                                    ))}
                                </div>
                                <h2 className='text-primary-color font-bold text-xl mt-3'>{project.title}</h2>
                                <p className='text-secondary-color text-justify mt-3'>{project.description}</p>
                            </CardContent>
                            <CardFooter className='flex w-full justify-between absolute bottom-0'>
                                <Link href={project.url} target='_blank'>
                                    <div className=" w-[130px] lg:w-[120px] xl:w-[150px] bg-primary-color text-white border mt-5 sm:mt-0 h-[50px] mr-[-8px] rounded-3xl cursor-pointer flex justify-center items-center">
                                        <span id="span" className="inline-block font-bold text-center text-[16px]">Live Demo</span>
                                    </div></Link>
                                <Link href={project.code} target='_blank'>
                                    <div className=" bg-primary-color text-white w-[130px] lg:w-[120px] xl:w-[150px] border mt-5 sm:mt-0 h-[50px] mr-[-8px] rounded-3xl cursor-pointer flex justify-center items-center">
                                        <span id="span" className="inline-block text-center text-[16px] font-bold ">Source Code</span>
                                    </div></Link>
                            </CardFooter>
                        </Card>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects
