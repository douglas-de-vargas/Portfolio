import Link from 'next/link'
import { projects, iProjectProps } from '@/data/dataProjects'
import { BsGithub } from 'react-icons/bs'
import { GoProjectSymlink } from 'react-icons/go'

projects.sort((projectA, projectB) => {
  const dateProjectA = new Date(projectA.date.split('/').reverse().join('/')).getTime()
  const dateProjectB = new Date(projectB.date.split('/').reverse().join('/')).getTime()
  return dateProjectB - dateProjectA
})

export default function ProjectCard() {
  return (
    <>
      {projects.map(({ name, images, desc, github, deploy, techs }: iProjectProps) => {
        return (
          <li
            className='overflow-hidden bg-white border border-neutral-200 relative rounded-2xl w-full flex flex-col'
            key={name}>
            <div className='w-full h-[300px] overflow-hidden'>
              <img
                className='w-full backface-hidden duration-300 hover:scale-105 object-cover object-top transition-transform'
                src={images.image}
                alt={name}
              />
            </div>

            <div className='p-2.5 flex grow flex-col gap-2'>
              <h2>{name}</h2>
              <div className='flex flex-wrap gap-1.5 uppercase'>
                {techs &&
                  techs.map((tech) => (
                    <span
                      key={tech}
                      className='font-bold border border-gray-400 rounded-b-sm py-0.5 px-2 cursor-default'>
                      {tech}
                    </span>
                  ))}
              </div>

              <p className='flex grow px-1 max-h-[200px] overflow-auto'>{desc}</p>

              <div className='flex justify-between items-stretch flex-wrap gap-1.5 select-none'>
                <div className='flex flex-wrap justify-center gap-1.5'>
                  <Link
                    className='flex gap-1 items-center rounded-[4px] text-[1.1rem] bg-[var(--primary)] px-4 py-1'
                    href={github}
                    target='_blank'
                    passHref>
                    <BsGithub /> GitHub
                  </Link>
                  <Link
                    className='flex gap-1 items-center rounded-[4px] text-[1.1rem] bg-[var(--primary)] px-4 py-1'
                    href={deploy}
                    target='_blank'
                    passHref>
                    <GoProjectSymlink /> Deploy
                  </Link>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}
