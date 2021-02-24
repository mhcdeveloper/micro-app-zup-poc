const cursos = [
  {
    id: 1,
    situacao: 0,
    nome: 'Angular',
    descricao:
      'O curso é dividido em duas partes, na primeira você vai aprender todos os recursos nativos na prática através de diversos cenários, na segunda parte iremos desenvolver uma app Angular do zero com diversas funcionalidades e recursos até o deploy em containers Docker.',
    duracao: '120 horas',
    imagem: '/assets/angular.png'
  },
  {
    id: 2,
    situacao: 0,
    nome: 'ReactJs',
    descricao:
      'Iremos criar um e-commerce de jogos, incluindo toda a parte de pagamentos e área do cliente. Os clientes poderão fazer buscas, filtrar, adicionar ao carrinho e comprar seus jogos favoritos.',
    duracao: '120 horas',
    imagem: '/assets/reactjs.png'
  },
  {
    id: 3,
    situacao: 0,
    nome: 'Java',
    descricao:
      'Vamos começar o desenvolvimento Java para Web através das Servlets, para construir uma boa base e aprender os padrões relacionados a uma aplicação web, como o MVC (Model-View-Controller).',
    duracao: '240 horas',
    imagem: '/assets/java.jpg'
  },
  {
    id: 4,
    situacao: 0,
    nome: 'Kotlin',
    descricao:
      'No curso fazemos um paralelo do Kotlin com o Java, ensinando a sintaxe e também os recursos que vão te ajudar a ser mais produtiva(o) e ter um código mais seguro em relação a erros comuns.',
    duracao: '180 horas',
    imagem: '/assets/kotlin.png'
  },
  {
    id: 5,
    situacao: 0,
    nome: 'Docker',
    descricao:
      'Algo que antes parecia restrito a grandes empresas, como Amazon, Google e Netflix, motivou também organizações tradicionais na busca de como criar um ambiente que permita implantar dezenas ou até mesmo centenas de mudanças todos os dias. Nesse cenário, a maneira de quem trabalha com infraestrutura pode mudar. Vamos abordar nesse curso os fundamentos do Docker, seus princípios, práticas, ferramentas e como isso pode ser um meio para melhorar a integridade e disponibilidade das aplicações. Conheceremos como as equipes que adotam containers podem construir e entregar software de forma ágil. Além de conteúdos alinhados com o mercado de trabalho é apresentado conteúdo da certificação Docker Certified Associate.',
    duracao: '120 horas',
    imagem: '/assets/docker.png'
  },
  {
    id: 6,
    situacao: 0,
    nome: 'Android',
    descricao:
      'O Curso de Desenvolvimento Android com Kotlin é ideal para quem está começando ou já atua com programação e quer aprender a desenvolver aplicações móveis utilizando Kotlin, a linguagem de programação que está se tornando a principal opção para Android.',
    duracao: '120 horas',
    imagem: '/assets/android.jpg'
  },
  {
    id: 7,
    situacao: 0,
    nome: 'IOS',
    descricao:
      'Atualmente o iPhone, o iPad e o iPod touch são os principais dispositivos a serem considerados quando se pretende desenvolver aplicações e jogos para plataformas móveis. Com uma sólida base de usuários, que somam mais de duzentos milhões de dispositivos ao redor do mundo, o desenvolvimento de aplicações para iPhone, iPad e iPod touch é uma das habilidades mais desejadas pelo mercado atual que requer profissionais competentes. Com base neste contexto, este curso de iOS em vídeo aulas abordará',
    duracao: '240 horas',
    imagem: '/assets/ios.png'
  },
]

export const getCursos = () => {
  return cursos;
}
