//Tipagem
export interface iProjectProps {
  date: string
  inProduction?: boolean
  name: string
  image: string
  images?: {
    image1?: string
    image2?: string
    image3?: string
    image4?: string
  }
  desc: string
  github: string
  deploy: string
  link?: string
  code?: {
    html5?: boolean
    css3?: boolean
    sass?: boolean
    tailwindcss?: boolean
    javascript?: boolean
    reactjs?: boolean
    nextjs?: boolean
    typescript?: boolean
  }
}

export const projects = [
  /* Exemplo para novos projetos
  {
    date: 'DD/MM/AAAA',
    name: '',
    image: '/images/projects/',
    images: {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
    }
    github: '',
    deploy: '',
    link: '#',
    desc: ``,
    code: {
      html5: true,
      css3: true,
      sass: true,
      javascript: true,
      reactjs: true,
      nextjs: true,
      tailwindcss: true,
      typescript: true
    }
  }, */
  {
    date: '18/11/2023',
    name: 'Jogo do Super-Mario em JavaScript',
    image: '/images/projects/super-mario/super-mario-game-over.jpg',
    github: 'https://github.com/S1NS3RO/Super-Mario',
    deploy: 'https://super-mario-zeta.vercel.app/',
    link: '#',
    desc: `Este projeto foi inspirado em outro já existente. No entanto, escrevi o código completamente do zero, pois acredito que copiar códigos não contribui para a minha evolução.

O objetivo foi aprofundar meu entendimento nas mecânicas de JavaScript, UX e front-end.

Ao longo do processo, aprendi a implementar variáveis de controle, lógica e cálculos, mesmo em uma aplicação relativamente simples.

Adquiri uma valiosa experiência prática e conceitual.

Obs: Desenvolvi todo o código pelo celular, talvez jogar em um dispositivo móvel proporcione uma imersão melhor.`,
    code: {
      html5: true,
      css3: true,
      javascript: true
    }
  },
  {
    date: '02/11/2023',
    name: 'Aplicativo de pedidos',
    image: '/images/projects/projectgas2irmaos.jpg',
    github: 'https://github.com/S1NS3RO/gas2irmaos',
    deploy: 'https://gas2irmaos.vercel.app/',
    link: '#',
    desc: `Este projeto destaca minha habilidade em desenvolver soluções práticas. Criado para simplificar pedidos de entrega, o aplicativo oferece uma experiência personalizada com base em qualquer empresa local. Este showcase demonstra minha capacidade de criar soluções eficientes e adaptáveis para diversas necessidades de delivery.`,
    code: {
      sass: true,
      nextjs: true,
      typescript: true
    }
  },
  {
    date: '01/09/2023',
    name: 'Gerador de Senhas',
    image: '/images/projects/GeradorDeSenhas.jpg',
    github: 'https://github.com/S1NS3RO/Password-generator',
    deploy: 'https://s1ns3ro.github.io/Password-generator',
    link: '/password-generator',
    desc: 'Este foi o meu primeiro projeto usando JavaScript, serve para gerar senhas seguras com caracteres aleatórios, o número de caracteres pode ser definido pelo usuário',
    code: {
      html5: true,
      css3: true,
      javascript: true
    }
  },
  {
    date: '08/09/2023',
    name: 'Lista de Tarefas',
    image: '/images/projects/ListaDeTarefas.jpg',
    github: 'https://github.com/S1NS3RO/Lista-de-tarefas',
    deploy: 'https://s1ns3ro.github.io/Lista-de-tarefas',
    link: '/lista-de-tarefas',
    desc: 'Permite a criação, conclusão e exclusão de tarefas em lista',
    code: {
      html5: true,
      css3: true,
      javascript: true
    }
  },
  {
    date: '02/10/2023',
    name: 'Horário Atual',
    image: '/images/projects/HorasDoDia_.jpg',
    github: 'https://github.com/S1NS3RO/Horas-do-dia',
    deploy: 'https://s1ns3ro.github.io/Horas-do-dia',
    link: '/horas-do-dia',
    desc: `Este projeto me proporcionou um entendimento mais profundo dos conceitos fundamentais de manipulação do DOM com JavaScript e também sobre estilização usando CSS. Embora seja um projeto simples, ele me permitiu adquirir conhecimentos essenciais que abriram portas para o desenvolvimento de futuros projetos com base nas tecnologias que aprendi aqui. Esta aplicação tem como objetivo fornecer informações precisas sobre a data e hora, juntamente com uma saudação personalizada que varia de acordo com o período atual do dia para o usuário.`,
    code: {
      html5: true,
      css3: true,
      javascript: true
    }
  },
  {
    date: '14/09/2023',
    name: 'Calculadora de Imc',
    image: '/images/projects/CalculadoraImc.jpg',
    github: 'https://github.com/S1NS3RO/Calculadora-imc',
    deploy: 'https://calculadora-imc-dusky.vercel.app',
    link: '/calculadora-imc',
    desc: 'Calcula o índice de massa corporal do usuário',
    code: {
      css3: true,
      javascript: true,
      reactjs: true
    }
  }
]
