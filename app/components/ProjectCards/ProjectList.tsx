import projectsData from './dataProjects'
import Link from 'next/link'
import { BsGithub, BsCalendar2Date } from 'react-icons/bs'
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact
} from 'react-icons/io5'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GoProjectSymlink } from 'react-icons/go'
import { Project, formatDate } from './ProjectCard'

function ProjectList() {
  return (
    <>
      {projectsData.map((project: Project, index: number) => {
        const formattedDate: string = formatDate(project.date)
        return (
          <article
            id='project'
            key={index}>
            <h2>{project.name}</h2>
            <span className='flex gap-1 text-[.95rem]'>
              <BsCalendar2Date className='relative top-[1px]' />
              {formattedDate}
            </span>
            <p className='grow'>{project.desc}</p>
            <div
              id='image-project'
              className='flex justify-center relative'>
              <Link
                href={project.deploy}
                target='_blank'
                passHref>
                <img
                  src={project.src}
                  alt={project.name}
                />
              </Link>
            </div>
            <div>
              {project.code && (
                <span id='tech-icons'>
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
            <div className='flex items-center justify-center gap-2 rounded'>
              <Link
                className={'py-2 grow text-center bg-projbuttons rounded'}
                href={project.github}
                target='_blank'
                passHref>
                <BsGithub className='fill-link relative top-0.5' /> GitHub
              </Link>
              <Link
                className={'py-2 grow text-center bg-projbuttons rounded'}
                href={project.deploy}
                target='_blank'
                passHref>
                <GoProjectSymlink className='fill-link relative top-0.5' />{' '}
                Deploy
              </Link>
            </div>
          </article>
        )
      })}
    </>
  )
}
export default ProjectList
