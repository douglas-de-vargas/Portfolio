export interface iProjectProps {
  date: string
  name: string
  images: {
    image: string
    image1?: string
    image2?: string
    image3?: string
    image4?: string
  }
  desc: string
  github: string
  deploy: string
  link?: string
  techs?: string[]
}

export const projects: iProjectProps[] = [
  {
    date: '26/11/2023',
    name: 'Super-Mario JavaScript',
    images: {
      image: '/images/projects/super-mario/super-mario-game-over.jpg',
      image1: '/images/projects/super-mario/super-mario.jpg'
    },
    github: 'https://github.com/douglas-de-vargas/Super-Mario',
    deploy: 'https://super-mario-zeta.vercel.app/',
    link: '#',
    desc: `Este projeto foi inspirado em outro já existente. No entanto, escrevi o código completamente do zero, pois acredito que copiar códigos não contribui para a minha evolução.

O objetivo foi aprofundar meu entendimento nas mecânicas de JavaScript, UX e front-end.

Ao longo do processo, aprendi a implementar variáveis de controle, lógica e cálculos, mesmo em uma aplicação relativamente simples.

Adquiri uma valiosa experiência prática e conceitual.

Obs: Desenvolvi todo o código pelo celular, talvez jogar em um dispositivo móvel proporcione uma imersão melhor.`,
    techs: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    date: '26/11/2023',
    name: 'Aplicativo de pedidos',
    images: {
      image: '/images/projects/delivery-app/delivery-gas.jpg',
      image1: '/images/projects/delivery-app/delivery-gas1.jpg',
      image2: '/images/projects/delivery-app/delivery-gas2.jpg'
    },
    github: 'https://github.com/douglas-de-vargas/gas2irmaos',
    deploy: 'https://gas2irmaos.vercel.app/',
    link: '#',
    desc: `Este projeto destaca minha habilidade em desenvolver soluções práticas. Criado para simplificar pedidos de entrega, o aplicativo oferece uma experiência personalizada com base em qualquer empresa local. Este showcase demonstra minha capacidade de criar soluções eficientes e adaptáveis para diversas necessidades de delivery.`,
    techs: ['Sass', 'NextJs', 'TypeScript']
  },
  {
    date: '01/09/2023',
    name: 'Gerador de Senhas',
    images: {
      image: '/images/projects/gerador-de-senhas/password1.jpg',
      image1: '/images/projects/gerador-de-senhas/password2.jpg',
      image2: '/images/projects/gerador-de-senhas/password3.jpg',
      image3: '/images/projects/gerador-de-senhas/password4.jpg'
    },
    github: 'https://github.com/douglas-de-vargas/Password-generator',
    deploy: 'https://douglas-de-vargas.github.io/Password-generator',
    link: '/password-generator',
    desc: 'Este foi o meu primeiro projeto usando JavaScript, serve para gerar senhas seguras com caracteres aleatórios, o número de caracteres pode ser definido pelo usuário',
    techs: [
      'html5',
      'css3',
      'javascript'
    ]
  },
  {
    date: '08/09/2023',
    name: 'Lista de Tarefas',
    images: {
      image: '/images/projects/todo-list/todo2.jpg',
      image1: '/images/projects/todo-list/todo1.jpg'
    },
    github: 'https://github.com/douglas-de-vargas/Lista-de-tarefas',
    deploy: 'https://douglas-de-vargas.github.io/Lista-de-tarefas',
    link: '/lista-de-tarefas',
    desc: 'Permite a criação, conclusão e exclusão de tarefas em lista',
    techs: 
      ['html5',
      'css3',
      'javascript']
  },
  {
    date: '02/10/2023',
    name: 'Horário Atual',
    images: {
      image: '/images/projects/horas-do-dia/Screenshot_1.png',
      image1: '/images/projects/horas-do-dia/bHorasDoDia.jpg',
      image2: '/images/projects/horas-do-dia/Screenshot_2.png',
      image3: '/images/projects/horas-do-dia/HorasDoDia_.jpg'
    },
    github: 'https://github.com/douglas-de-vargas/Horas-do-dia',
    deploy: 'https://douglas-de-vargas.github.io/Horas-do-dia',
    link: '/horas-do-dia',
    desc: `Este projeto me proporcionou um entendimento mais profundo dos conceitos fundamentais de manipulação do DOM com JavaScript e também sobre estilização usando CSS. Embora seja um projeto simples, ele me permitiu adquirir conhecimentos essenciais que abriram portas para o desenvolvimento de futuros projetos com base nas tecnologias que aprendi aqui. Esta aplicação tem como objetivo fornecer informações precisas sobre a data e hora, juntamente com uma saudação personalizada que varia de acordo com o período atual do dia para o usuário.`,
    techs: [
      'html5',
      'css3',
      'javascript'
    ]
  },
  {
    date: '14/09/2023',
    name: 'Calculadora de Imc',
    images: {
      image: '/images/projects/calculadora-imc/imc1.jpg',
      image1: '/images/projects/calculadora-imc/imc2.jpg',
      image2: '/images/projects/calculadora-imc/imc3.jpg'
    },
    github: 'https://github.com/douglas-de-vargas/Calculadora-imc',
    deploy: 'https://calculadora-imc-dusky.vercel.app',
    link: '/calculadora-imc',
    desc: 'Calcula o índice de massa corporal do usuário',
    techs: [
      'css3',
      'javascript',
      'reactjs'
    ]
  }
]
