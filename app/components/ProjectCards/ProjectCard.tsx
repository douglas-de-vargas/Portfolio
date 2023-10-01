import projectsData from './dataProjects'

import { ProjectList } from './ProjectList'

export interface Project {
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

// Projetos mais recentes primeiro
projectsData.sort((a, b) => {
  const dataA = new Date(a.date.split('/').reverse().join('/'))
  const dataB = new Date(b.date.split('/').reverse().join('/'))
  return dataB.getTime() - dataA.getTime()
})

// Formata a data em ex: Set. 2023
export function formatDate(date: string): string {
  // Quebrar a data em partes
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

  // Transforma o índice do array acima em decimal e diminui 1 para ter acesso ao mês correto
  const monthNamed = monthNames[parseInt(month, 10) - 1]

  // Retorna a data formatada para o local onde a função foi chamada
  return `${monthNamed}. ${year}`
}

export default ProjectList
