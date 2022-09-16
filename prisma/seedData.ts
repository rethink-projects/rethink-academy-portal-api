export const modules: { name: string; courseId: string } = {
  name: "UX Design",
  courseId: "--------Id do Curso UX Design--------",
};

export const courses: {
  name: string;
  description: string;
  level: "LOW" | "MEDIUM" | "HIGH";
  workload: number;
  skills: string;
  learning: string;
  courseStyle: "COURSE" | "WORKSHOP" | "TRAINING" | "LECTURE";
  imageTeacher: string;
  teacherDescription: string;
  teacherName: string;
} = {
  name: "UX Design",
  description:
    "Aprenda a executar pesquisas de UX Design, fazer testes de usabilidade e elaborar análises, além de utilizar frameworks e métodos para a criação de designs de qualidade e que ofereçam uma boa experiência ao usuário. Ao concluir as aulas, você estará pronto para definir processos e construir frameworks baseados em estudos sobre as necessidades dos usuários, seus objetivos, habilidades e limitações, para alcançar os objetivos de negócios.",
  level: "LOW",
  workload: 120,
  skills:
    "Produzir e aplicar um Teste de Usabilidade; Desenvolver protótipos de baixa fidelidade; Produzir workshops utilizando ferramentas de co-criação e preparar um Hand-off.",
  learning:
    "Metodologia Double Diamond; O papel dos Testes de Usabilidade; Ferramentas de prototipação e Documentação de processos.",
  courseStyle: "COURSE",
  imageTeacher: "--------Url imagem na nuvem--------",
  teacherDescription: "Desenvolvedor Sênior",
  teacherName: "Filipe Prado",
};
export const trails: {
  name: string;
  description: string;
  weight: number;
  imageUrl: string;
  main: "ENGINEERING" | "DESIGN" | "PRODUCT" | "ALL";
}[] = [
  {
    name: "Engenharia",
    description:
      "Focando nas principais tecnologias utilizadas no mercado de produtos digitais atualmente, ensinamos sobre Javascript, Node Js e React JS, que também são as principais linguagens e bibliotecas que usamos dentro da Rethink.",
    weight: 4,
    imageUrl: "",
    main: "ENGINEERING",
  },
  {
    name: "Design",
    description:
      "Você vai aprender desde os princípios mais básicos até especificidades mais avançadas da profissão. Assim, ensinamos sobre os Fundamentos de UX, UI, além de conteúdos mais particulares.",
    weight: 3,
    imageUrl: "",
    main: "DESIGN",
  },
  {
    name: "Produto",
    description:
      "Unindo teoria e prática, ensinamos sobre como trabalhar para garantir o sucesso de um produto digital, tendo em vista a relação entre design, desenvolvimento e estratégias de negócio.",
    weight: 2,
    imageUrl: "",
    main: "PRODUCT",
  },
  {
    name: "Academy",
    description:
      "A trilha base liberada inicialmente, com conteúdos gerais do dia-a-dia, para preparar o básico antes de se especializar nos estudos da sua área! ",
    weight: 1,
    imageUrl: "",
    main: "ALL",
  },
];

export const users: {
  name: string;
  surname: string;
  email: string;
  main: "ENGINEERING" | "DESIGN" | "PRODUCT";
  role?: "AMBASSADOR";
}[] = [
  {
    name: "Gabriel",
    surname: "Gomes",
    email: "gabriel.gomes@rethink.dev",
    main: "ENGINEERING",
    role: "AMBASSADOR",
  },
  {
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    main: "ENGINEERING",
    role: "AMBASSADOR",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    main: "DESIGN",
    role: "AMBASSADOR",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    main: "PRODUCT",
    role: "AMBASSADOR",
  },
  {
    name: "Marcela",
    surname: "Monteiro",
    email: "marcela.monteiro@rethink.dev",
    main: "PRODUCT",
    role: "AMBASSADOR",
  },
  {
    name: "Michelli",
    surname: "Araujo",
    email: "michelli.arujo@rethink.dev",
    main: "PRODUCT",
  },
  {
    name: "Hugo",
    surname: "Carvalho",
    email: "hugo.carvalho@rethink.dev",
    main: "PRODUCT",
  },
  {
    name: "Bernado",
    surname: "Carvalho",
    email: "bernado.carvalho@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Gustavo",
    surname: "Fernando",
    email: "gustavo.silva@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Luiza",
    surname: "Queiroz",
    email: "luiza.queiroz@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Pedro",
    surname: "Silva",
    email: "pedro.lucas@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Raiane",
    surname: "Bispo",
    email: "raiane.miguel@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Igor",
    surname: "Ricardo",
    email: "igor.ricardo@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Carolina",
    surname: "Valeriano",
    email: "carolina.valeriano@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    main: "ENGINEERING",
  },
];

export const timeLine: {
  stage: string;
  start: string;
  finish: string;
  content: string;
}[] = [
  {
    stage: "Etapa 1",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Curso Introdução ao Design de Experiência",
  },
  {
    stage: "Etapa 2",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Curso de Product Discovery",
  },
  {
    stage: "Etapa 3",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Curso de UX Design",
  },
  {
    stage: "Etapa 4",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Aulas 1-10 do curso de UI Design",
  },
  {
    stage: "Etapa 5",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Aulas 1-5 do curso de UX Writing",
  },
  {
    stage: "Etapa 6",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Curso de UX Strategy",
  },
  {
    stage: "Etapa 7",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Aulas 11-20 do curso de UI Design",
  },
  {
    stage: "Etapa 8",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Aulas 6-10 do curso de UX Writing",
  },
  {
    stage: "Etapa 9",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Curso de Posicionamento de Carreira",
  },
  {
    stage: "Etapa 10",
    start: new Date(new Date(2022, 3, 23).setHours(0, 0, 0)).toISOString(),
    finish: new Date(new Date(2022, 3, 23).setHours(23, 59, 59)).toISOString(),
    content: "Curso de Design System",
  },
];
