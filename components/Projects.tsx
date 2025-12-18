import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projectData } from "@/data/data";
import { ExternalLink, Github, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div
      className=" text-center px-6 md:px-14 pt-12 text-secondary-color"
      id="projects"
    >
      <span className="bg-primary-color/30 px-5 py-2 rounded-2xl !font-[400] text-[18px]">
        My Work
      </span>
      <h2 className="mt-6 text-4xl font-semibold text-secondary-color">
        Recents <span className="text-primary-color">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {projectData.map((project, index) => (
          <Card
            className="text-start pt-5 border-primary-color relative group"
            key={index}
          >
            <CardContent className="mb-16">
              <div className="relative overflow-hidden rounded-xl h-48">
                {" "}
                <Image
                  src={project.img}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />{" "}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-primary-color font-bold text-xl mt-3">
                {project.title}
              </h2>
              <p className="text-secondary-color text-justify mt-3 line-clamp-5 ">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex w-full justify-between absolute bottom-0 gap-2">
                <Link href={project.url} target="_blank" className="w-[80%] text-center rounded-sm border bg-primary-color hover:bg-primary-color">

              <Button
                size="sm"
                variant="outline"
                className="flex-1 text-white text-sm bg-primary-color hover:bg-primary-color border-primary-color hover:text-white"
              >
                  <ExternalLink size={16} className="mr-2 inline mb-1" /> Live
                  Demo{" "}
              </Button>

                </Link>
              <Button
                size="sm"
                variant="outline"
                className="bg-primary-color text-white hover:bg-primary-color hover:text-white"
              >
                <Link href={project.code} target="_blank">
                  <Github size={16} />
                </Link>
              </Button>{" "}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
