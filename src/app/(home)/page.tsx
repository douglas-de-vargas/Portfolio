import ProjectCard from '@/components/ProjectCards/ProjectCard'
import { projects } from '@/data/dataProjects'

const totalProjects = projects.length

export default function Home() {
  return (
    <>
      <section className='py-4'>
        <h1>Meus Projetos</h1>
        <p>
          Este portfólio foi o meu primeiro projeto criado em <strong>Next.js</strong>, abaixo você
          poderá ver outros projetos que fiz na intenção de aprender sobre as tecnologias front-end
          e desenvolver minhas habilidades como desenvolvedor.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <p>
          Exibindo {totalProjects} de {totalProjects} projetos.
        </p>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <ProjectCard />
        </ul>
      </section>
    </>
  )
}
