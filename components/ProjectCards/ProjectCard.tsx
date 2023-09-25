import React from "react";
import projectsData from "./dataProjects";
import Link from "next/link";

// Imports de icons
import {
  BsGithub,
  BsEye,
  BsFillInfoCircleFill,
  BsCalendar2Date,
} from "react-icons/bs";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { MdReadMore } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

interface Project {
  date: string;
  name: string;
  src: string;
  desc: string;
  github: string;
  deploy: string;
  link: string;
  code?: {
    html5?: boolean;
    css3?: boolean;
    javascript?: boolean;
    reactjs?: boolean;
    nextjs?: boolean;
    typescript?: boolean;
  };
}

projectsData.sort((a, b) => (a.date > b.date ? -1 : 1));

function ProjectList() {
  return (
    <>
      {projectsData.map((project: Project, index: number) => (
        <li
          className="flex flex-col gap-1 p-2 bg-secondary shadow-lg rounded-md overflow-hidden border-1 border-solid border-border"
          key={index}
        >
          <div className="flex flex-col text-center p-0.5 bg-primary rounded">
            <h2>{project.name}</h2>
            <span className="bg-secondary text-text text-[.8rem] rounded p-1">
              <BsCalendar2Date className="fill-text relative top-[1px]" />{" "}
              {project.date}
            </span>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-md overflow-hidden max-w-full shadow-inherit"
              src={project.src}
              alt={project.name}
            />
          </div>
          <div className="flex justify-center">
            {project.code && (
              <span id="tec-icons" className="flex gap-x-1 text-[1.2rem]">
                {project.code.html5 ? <IoLogoHtml5 /> : null}
                {project.code.css3 ? <IoLogoCss3 /> : null}
                {project.code.javascript ? <IoLogoJavascript /> : null}
                {project.code.reactjs ? <IoLogoReact /> : null}
                {project.code.nextjs ? <TbBrandNextjs /> : null}
                {project.code.typescript ? <SiTypescript /> : null}
              </span>
            )}
          </div>
          <p>{project.desc}</p>
          <div className="bg-primary p-3 flex items-center justify-between gap-1 rounded">
            <a
              className={"font-semibold text-center text-text"}
              href={project.github}
              target="_blank"
            >
              <BsGithub className="relative top-0.5" /> GitHub
            </a>
            <a
              className={"font-semibold text-text text-center"}
              href={project.deploy}
              target="_blank"
            >
              <BsEye className="relative top-0.5" /> Deploy
            </a>
            <Link
              className={"font-semibold text-text text-center"}
              href={project.link}
            >
              <MdReadMore className="relative top-0.5" /> Mais
            </Link>
          </div>
        </li>
      ))}
    </>
  );
}

export default ProjectList;
