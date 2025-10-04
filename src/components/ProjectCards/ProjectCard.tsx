import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { GoProjectSymlink } from 'react-icons/go'

type Repo = {
  name: string
  private: boolean
  html_url: string
  description: string
  languages_url: { [key: string]: number }
  created_at: Date
  homepage: string
}

interface ProjectCardProps {
  repo: Repo
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  const totalBites: number = Object.values(repo.languages_url).reduce(
    (acc, value) => acc + value,
    0
  )
  const techsPercent: { [key: string]: number } = {}

  for (const [i, value] of Object.entries(repo.languages_url)) {
    techsPercent[i] = (value / totalBites) * 100
  }

  repo.name = repo.name.split('-').join(' ')

  return (
    <>
      <li className='overflow-hidden bg-white border border-neutral-200 relative rounded-2xl w-full flex flex-col'>
        <div className='w-full h-[300px] overflow-hidden'>
          <img
            className='w-full backface-hidden duration-300 hover:scale-105 object-cover object-top transition-transform'
            src={`${repo.html_url}/blob/main/demo.jpg?raw=true`}
            alt={repo.name}
          />
        </div>

        <div className='p-2.5 flex grow flex-col gap-2'>
          <h2>{repo.name}</h2>
          <div className='grid grid-cols-2 gap-1.5'>
            {Object.entries(techsPercent).map(([tech, percent]) => (
              <span
                key={tech}
                className='text-sm font-bold border border-gray-400 rounded-b-sm py-0.5 px-2 cursor-default'>
                {tech}: {percent.toFixed(1)}%
              </span>
            ))}
          </div>

          <p className='flex grow px-1 max-h-[200px] overflow-auto'>{repo.description}</p>

          <div className='flex justify-between items-stretch flex-wrap gap-1.5 select-none'>
            <div className='flex flex-wrap justify-center gap-1.5'>
              <Link
                className='flex gap-1 items-center rounded-[4px] text-[1.1rem] bg-[var(--primary)] px-4 py-1'
                href={repo.html_url}
                target='_blank'
                passHref>
                <BsGithub /> GitHub
              </Link>
              <Link
                className='flex gap-1 items-center rounded-[4px] text-[1.1rem] bg-[var(--primary)] px-4 py-1'
                href={repo.homepage}
                target='_blank'
                passHref>
                <GoProjectSymlink /> Deploy
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
