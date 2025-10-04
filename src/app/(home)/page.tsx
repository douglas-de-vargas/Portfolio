import ProjectCard from '@/components/ProjectCards/ProjectCard'

export type ListRepositoriesProps = {
  id: number
  name: string
  private: boolean
  html_url: string
  description: string
  languages_url: string
  created_at: Date
  homepage: string
}[]

export default async function Home() {
  const fetchRepositories: ListRepositoriesProps = await fetch(
    'https://api.github.com/users/douglas-de-vargas/repos'
  ).then((res) => res.json())

  const listRepositories = await Promise.all(
    fetchRepositories
      .filter((repo) => repo?.id !== 679955765)
      .filter((repo) => repo?.id !== 696387528)
      .map(async (repo) => {
        if (!repo.private) {
          const lang = await fetch(repo.languages_url).then((res) => res.json())
          return {
            id: repo.id,
            name: repo.name,
            private: repo.private,
            html_url: repo.html_url,
            description: repo.description,
            languages_url: lang,
            created_at: repo.created_at,
            homepage: repo.homepage
          }
        }
        return null
      })
  )

  listRepositories.sort((a, b) => {
    return new Date(b!.created_at).getTime() - new Date(a!.created_at).getTime()
  })

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
          Exibindo {listRepositories.length} de {listRepositories.length} projetos.
        </p>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {listRepositories.filter(Boolean).map((repo) => (
            <ProjectCard
              key={repo!.name}
              repo={repo!}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
