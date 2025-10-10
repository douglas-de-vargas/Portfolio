type Projects = {
  name: string
  description: string
  technologies: string[]
  github: string
  deploy: string
}

export interface ProjectCardProps {
  project: Projects
}

export const gitHubLink: string = 'https://github.com/douglas-de-vargas?tab=repositories'
export const linkedInLink: string = 'https://www.linkedin.com/in/douglas-de-vargas/'

export const allProjects: Projects[] = [
  {
    name: 'App de Entregas',
    description:
      'Este projeto demonstra minha capacidade de criar soluções práticas e eficientes. O aplicativo simplifica pedidos de entrega, oferecendo uma experiência personalizada para qualquer empresa local, evidenciando minha habilidade em desenvolver soluções adaptáveis às demandas do mercado de delivery.',
    technologies: ['NextJs', 'ReactJs', 'TypeScript', 'Sass'],
    github: 'https://github.com/douglas-de-vargas/Delivery-App',
    deploy: 'https://delivery-app-amber-alpha.vercel.app'
  },
  {
    name: 'Super Mário Run',
    description:
      'Este projeto foi desenvolvido visando aprofundar meu conhecimento em UX e front-end. Implementei variáveis de controle, lógica e cálculos, adquirindo experiência prática e reforçando meu aprendizado.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/douglas-de-vargas/Super-Mario',
    deploy: 'https://super-mario-zeta.vercel.app'
  },
  {
    name: 'Hora Agora',
    description:
      'O app exibe a hora acompanhada de uma saudação personalizada de bom dia, tarde ou noite além de apresentar imagens diferentes para cada período do dia, oferecendo uma experiência agradável a cada momento.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/douglas-de-vargas/Horas-do-dia',
    deploy: 'https://douglas-de-vargas.github.io/Horas-do-dia'
  },
  {
    name: 'Gerador de senhas',
    description:
      'Este foi meu primeiro projeto usando JavaScript, serve para gerar senhas seguras com caracteres aleatórios, o número de caracteres pode ser definido pelo usuário e copiado clicando no botão "copiar".',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/douglas-de-vargas/Password-generator',
    deploy: 'https://douglas-de-vargas.github.io/Password-generator'
  },
  {
    name: 'Calculadora de IMC',
    description:
      'Calcule seu IMC de forma simples e precisa. Informe sua altura e peso para obter imediatamente o seu Índice de Massa Corporal (IMC), acompanhado da classificação correspondente segundo os padrões de saúde.',
    technologies: ['Vite', 'ReactJs', 'JavaScript', 'CSS'],
    github: 'https://github.com/douglas-de-vargas/imc-calculator',
    deploy: 'https://calculadora-imc-dusky.vercel.app/'
  },
  {
    name: 'Lista de Tarefas',
    description:
      'Organize suas tarefas com eficiência. Adicione, edite e conclua suas atividades de forma prática. Mantenha o controle do seu dia a dia com uma lista de tarefas clara e acessível para todos os momentos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/douglas-de-vargas/todo-list',
    deploy: 'https://douglas-de-vargas.github.io/todo-list'
  }
]
