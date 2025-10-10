import { ProjectCardProps } from '@/data/projects'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { GoProjectSymlink } from 'react-icons/go'

export default async function ProjectCard({ project }: ProjectCardProps) {
  project.name = project.name.split('-').join(' ')

  return (
    <>
      <li className='overflow-hidden bg-white border border-neutral-200 relative rounded-2xl w-full flex flex-col'>
        <div className='w-full h-[300px] overflow-hidden'>
          <img
            className='w-full backface-hidden duration-300 hover:scale-105 object-cover object-top transition-transform'
            src={`images/${project.name
              .toLocaleLowerCase()
              .replaceAll(/ /g, '-')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')}.jpg`}
            alt={project.name}
          />
        </div>

        <div className='p-2.5 flex grow flex-col gap-2 border-t border-neutral-200'>
          <h2>{project.name}</h2>
          <div className='flex flex-wrap gap-1.5'>
            {project.technologies.map((tech, i) => (
              <span
                key={tech[i]}
                className='text-sm font-bold border border-gray-400 rounded-b-sm py-0.5 px-2 cursor-default'>
                {tech}
              </span>
            ))}
          </div>

          <p className='flex grow px-1 max-h-[200px] overflow-auto'>{project.description}</p>

          <div className='flex gap-1.5 select-none'>
            <Link
              className='flex gap-1 items-center rounded-[4px] text-[1.1rem] bg-[var(--primary)] px-4 py-1'
              href={project.github}
              target='_blank'
              passHref>
              <BsGithub /> GitHub
            </Link>
            <Link
              className='flex gap-1 items-center rounded-[4px] text-[1.1rem] bg-[var(--primary)] px-4 py-1'
              href={project.deploy}
              target='_blank'
              passHref>
              <GoProjectSymlink /> Visualizar
            </Link>
          </div>
        </div>
      </li>
    </>
  )
}
