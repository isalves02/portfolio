import { DataContentProps } from "../model";
 

const now = new Date();
const yearsAsSoftwareEngineer = Math.floor((now.getFullYear() - 2020) - .5);

const urlCVPT = 'https://drive.google.com/file/d/1lkHTvFawmS7hOUW_KW8Gr0v7Fjekg7S8/view?usp=sharing';
const urlCVEN = 'https://drive.google.com/file/d/1yWZy9UmhW4H17N6tESnxjmc1WWQwB6DA/view?usp=sharing';

export const dataEN: DataContentProps = {
  menu: {
    nav: [ 
      {href: '#works', name: 'Works'},
      {href: '#about', name: 'About'},
      {href: 'mailto:isabel_alves02@hotmail.com', name: 'Contact'},
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/isalves02' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isabel-alves-6766901aa/?locale=en_US' },
    ]
  },
  intro: {
    title: `I'm Isabel, a software engineer specialized in front-end development with ${yearsAsSoftwareEngineer}+ years of experience, driven by curiosity.`,
    tags: [
      `${yearsAsSoftwareEngineer}+ years of exp.`,
      'Front-end development',
      'JS and JS-based frameworks',
      'UI enthusiast'
    ],
    location: 'Based in Bahia, Brazil.',
    textButton: 'See Works',
  },
  works: {
    title: 'Selected works',
    works: [
      {
        name: 'Konecta Libras',
        imgUrl: 'konecta-libras.jpg',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'UML'],
        designedBy: 'Designed by: Isabel Alves',
        url: 'https://github.com/isalves02/konecta-libras',
        urlDescription: 'See github'
      },
      {
        name: 'Chama pra dançar',
        imgUrl: 'chama-dancar.jpg',
        tags: ['Angular', 'TypeScript', 'WordPress as CMS', 'JQuery', 'PHP', 'MySQL'],
        designedBy: 'Designed by: Quântica Comunicação',
        url: 'https://chamapradancar.com.br',
        urlDescription: 'See website'
      },
      {
        name: 'Elsimar Coutinho',
        imgUrl: 'elsimar.jpg',
        tags: ['Angular', 'TypeScript', 'WordPress as CMS', 'JQuery', 'PHP', 'MySQL'],
        designedBy: 'Designed by: Quântica Comunicação',
        url: 'https://elsimarcoutinho.com.br/en/',
        urlDescription: 'See website'
      },
      {
        name: 'MS Máquinas',
        imgUrl: 'ms-maquinas.png',
        tags: ['React', 'TypeScript', 'WordPress as CMS', 'PHP', 'MySQL'],
        designedBy: 'Designed by: Isabel Alves',
        url: 'https://msmaquinas.com.br/',
        urlDescription: 'See website'
      }
    ]
  },
  about: {
    title: 'About',
    aboutSubtitle: 'Developer and hit the gym everyday.',
    text: [
      'Born and rased in Bahia, Brazil, since 2020 I have worked as a software engineer, specializing in front-end applications for companies both within and outside the state. My experience includes web development and mobile app maintenance.',
      'I am driven by curiosity and a passion for developing ideas that create tangible business impact while contributing to making the world a little better.',
      'In my downtime, I usually go to the gym, practice yoga, watch One Piece and explore new coffee shops.',
    ],
    skillSubtitle: 'Skills',
    stacks: [
      'React',
      'Angular',
      'JavaScript',
      'TypeScript',
      'CSS + CSS preprocessors',
      'TailwindCSS',
      'Java',
      'MySQL',
      'PHP',
      'WordPress',
      'Git',
      'GitHub',
      'Figma',
      'UI',
    ],
    cvURL: urlCVPT,
  },
  contact: {
    title: 'Let’s talk!',
    subtitle: 'Drop me a line', 
    links: [
      { name: 'GitHub', url: 'https://github.com/isalves02' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isabel-alves-6766901aa/?locale=en_US' },
      { name: 'See Full CV', url: urlCVPT},
    ]
  },
  copyright: {
    text: 'Developer with love'
  }
}

export const dataPT: DataContentProps = {
  menu: {
    nav: [
      {href: '#trabalhos', name: 'Trabalhos'},
      {href: '#sobre', name: 'Sobre'},
      {href: 'mailto:isabel_alves02@hotmail.com', name: 'Contato'},
    ],
    links: [
      { name: 'GitHub', url: 'https://github.com/isalves02' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isabel-alves-6766901aa/?locale=pt_BR' },
    ],
  },
  intro: {
    title: `Sou Isabel, engenheira de software especializada em desenvolvimento front-end com +${yearsAsSoftwareEngineer} anos de experiência, movida pela curiosidade.`,
    tags: [
      `${yearsAsSoftwareEngineer}+ anos de exp.`,
      'Desenvolvimento front-end',
      'JS e frameworks baseados em JS',
      'Entusiasta de UI'
    ],
    location: 'Moro na Bahia, Brasil.',
    textButton: 'Ver Trabalhos',
  },
  works: {
    title: 'Trabalhos selecionados',
    works: [
      {
        name: 'Konecta Libras',
        imgUrl: 'konecta-libras.jpg',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'UML'],
        designedBy: 'Design por: Isabel Alves',
        url: 'https://github.com/isalves02/konecta-libras',
        urlDescription: 'Ver github'
      },
      {
        name: 'Chama pra dançar',
        imgUrl: 'chama-dancar.jpg',
        tags: ['Angular', 'TypeScript', 'WordPress como CMS', 'JQuery', 'PHP', 'MySQL'],
        designedBy: 'Design por: Quântica Comunicação',
        url: 'https://chamapradancar.com.br',
        urlDescription: 'Ver website'
      },
      {
        name: 'Elsimar Coutinho',
        imgUrl: 'elsimar.jpg',
        tags: ['Angular', 'TypeScript', 'WordPress como CMS', 'JQuery', 'PHP', 'MySQL'],
        designedBy: 'Design por: Quântica Comunicação',
        url: 'https://elsimarcoutinho.com.br/pt/',
        urlDescription: 'Ver website'
      },
      {
        name: 'MS Máquinas',
        imgUrl: 'ms-maquinas.png',
        tags: ['React', 'TypeScript', 'WordPress como CMS', 'PHP', 'MySQL'],
        designedBy: 'Design por: Isabel Alves',
        url: 'https://msmaquinas.com.br/',
        urlDescription: 'Ver website'
      }
    ]
  },
  about: {
    title: 'Sobre',
    aboutSubtitle: 'Desenvolvo e vou à academia todos os dias.',
    text: [
      'Nascida e criada na Bahia, Brasil, desde 2020 trabalho como engenheira de software, especializada em aplicações front-end para empresas dentro e fora do estado. Minha experiência inclui desenvolvimento web e manutenibilidade de aplicativos móveis.',
      'Sou movida pela curiosidade e pela paixão de desenvolver ideias que geram impactos tangíveis nos negócios, contribuindo para tornar o mundo um pouco melhor.',
      'No meu tempo livre, costumo ir à academia, praticar yoga, assistir One Piece e explorar novas cafeterias.',
    ],
    skillSubtitle: 'Habilidades',
    stacks: [
      'React',
      'Angular',
      'JavaScript',
      'TypeScript',
      'CSS + Pré-processadores CSS',
      'TailwindCSS',
      'Java',
      'PHP',
      'MySQL',
      'WordPress',
      'Git',
      'GitHub',
      'Figma',
      'UI',
    ],
    cvURL: urlCVEN,
  },
  contact: {
    title: 'Vamos conversar!',
    subtitle: 'Entre em contato', 
    links: [
      { name: 'GitHub', url: 'https://github.com/isalves02' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isabel-alves-6766901aa/?locale=en_US' },
      { name: 'Ver CV Completo', url: urlCVEN },
    ]
  },
  copyright: {
    text: 'Desenvolvido com amor'
  }
}
