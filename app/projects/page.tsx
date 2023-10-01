import ProjectList from '../components/ProjectCards/ProjectList'

function Projects() {
  return (
    <>
      <h1>Meus Projetos</h1>
      <p className='mb-2'>
        Este portfólio foi o meu primeiro projeto criado em{' '}
        <strong>Next.js</strong>, abaixo você poderá ver outros projetos que fiz
        na intenção de aprender sobre as tecnologias front-end e desenvolver
        minhas habilidades como desenvolvedor.
      </p>
      <section id='project-list'>
        <ProjectList />
      </section>
    </>
  )
}

export default Projects
