/* eslint-disable @next/next/no-img-element */
import React from 'react'
import projectsData from './dataProjects'
import Link from 'next/link'

// Imports de icons
import { BsGithub, BsFillInfoCircleFill, BsCalendar2Date } from 'react-icons/bs'
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact } from 'react-icons/io5'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GoProjectSymlink } from 'react-icons/go'

interface Project {
  date: string
  name: string
  src: string
  desc: string
  github: string
  deploy: string
  link: string
  code?: {
    html5?: boolean
    css3?: boolean
    tailwindcss?: boolean
    javascript?: boolean
    reactjs?: boolean
    nextjs?: boolean
    typescript?: boolean
  }
}

projectsData.sort((a, b) => (a.date > b.date ? -1 : 1))

function ProjectList() {
  return (
    <>
      {projectsData.map((project: Project, index: number) => (
        <li
          className="relative flex flex-col md:w-72 gap-1 p-2 bg-secondary shadow-lg rounded-md overflow-hidden border-1 border-solid border-border"
          key={index}
        >
          <div id="image-project" className="flex justify-center relative shadow-inherit">
            <Link href={project.deploy} passHref target="_blank">
              <img
                className="overflow-hidden w-full h-52 rounded-md object-cover"
                src={project.src}
                alt={project.name}
              />
            </Link>
          </div>
          <div id="date-icons" className="flex items-center justify-between">
            <span className="flex gap-1 text-[.95rem]">
              <BsCalendar2Date />
              {project.date}
            </span>
            {project.code && (
              <span className="flex gap-1 text-[1.3rem]">
                {project.code.html5 ? <IoLogoHtml5 /> : null}
                {project.code.css3 ? <IoLogoCss3 /> : null}
                {project.code.tailwindcss ? <SiTailwindcss /> : null}
                {project.code.javascript ? <IoLogoJavascript /> : null}
                {project.code.reactjs ? <IoLogoReact /> : null}
                {project.code.nextjs ? <TbBrandNextjs /> : null}
                {project.code.typescript ? <SiTypescript /> : null}
              </span>
            )}
          </div>
          <h2>{project.name}</h2>
          <p className="grow">{project.desc}</p>
          <div className="bg-primary p-3 flex items-center justify-around rounded">
            <a className={'font-semibold text-center text-text'} href={project.github} target="_blank">
              <BsGithub className="relative top-0.5" /> GitHub
            </a>
            <a className={'font-semibold text-text text-center'} href={project.deploy} target="_blank">
              <GoProjectSymlink className="relative top-0.5" /> Deploy
            </a>
          </div>
        </li>
      ))}
    </>
  )
}

export default ProjectList
