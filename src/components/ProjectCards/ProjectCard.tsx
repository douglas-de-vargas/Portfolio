import '@/styles/ProjectCard.scss'

//NextJs
import Link from 'next/link'

//Data
import { projects, iProjectProps } from '@/data/dataProjects'

//Components
import Carousel from './Carousel'

//Icons
import { BsGithub, BsCalendar2Date } from 'react-icons/bs'
import { IoLogoJavascript, IoLogoCss3, IoLogoSass, IoLogoHtml5, IoLogoReact } from 'react-icons/io5'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GoProjectSymlink } from 'react-icons/go'

// Projetos mais recentes primeiro
projects.sort((a, b) => {
  const dataA = new Date(a.date.split('/').reverse().join('/'))
  const dataB = new Date(b.date.split('/').reverse().join('/'))
  return dataB.getTime() - dataA.getTime()
})

// Formata a data em ex: Set. 2023
function formatDate(date: string): string {
  const [, month, year] = date.split('/')

  const monthNames = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ]

  const monthNamed = monthNames[parseInt(month, 10) - 1]

  return `${monthNamed}. ${year}`
}

// *** //
export default function ProjectCard() {
  return (
    <>
      {projects.map(({ date, name, images, desc, github, deploy, code }: iProjectProps) => {
        const formattedDate: string = formatDate(date)
        return (
          <li
            className='bg-white border border-neutral-200 isolate relative rounded-2xl w-full'
            // className='project'
            key={name}>
            <Carousel
              name={name}
              images={images}
            />
            <div className='infos'>
              <h2>{name}</h2>

              {code && (
                <div className='techs_name'>
                  {code.nextjs && (
                    <span>
                      <TbBrandNextjs fill='transparent' />
                      Next.js
                    </span>
                  )}
                  {code.reactjs && (
                    <span>
                      <IoLogoReact fill='#18b3df' />
                      React JS
                    </span>
                  )}
                  {code.javascript && (
                    <span>
                      <IoLogoJavascript fill='#f0d81e' />
                      JavaScript
                    </span>
                  )}
                  {code.typescript && (
                    <span>
                      <SiTypescript fill='#2f74c1' />
                      TypeScript
                    </span>
                  )}
                  {code.html5 && (
                    <span>
                      <IoLogoHtml5 fill='#e95e25' />
                      HTML5
                    </span>
                  )}
                  {code.css3 && (
                    <span>
                      <IoLogoCss3 fill='#3f95d0' />
                      CSS3
                    </span>
                  )}
                  {code.sass && (
                    <span>
                      <IoLogoSass fill='#cf649a' />
                      Sass
                    </span>
                  )}
                  {code.tailwindcss && (
                    <span>
                      <SiTailwindcss fill='#36b7f0' />
                      Tailwind CSS
                    </span>
                  )}
                </div>
              )}

              <p id='description'>{desc}</p>

              {/* <span id='date'>
                  <BsCalendar2Date fill='#6e7681' /> {formattedDate}
                </span> */}

              <div className='card-actions'>
                <div id='links'>
                  <Link
                    href={github}
                    target='_blank'
                    passHref>
                    <BsGithub /> GitHub
                  </Link>
                  <Link
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
