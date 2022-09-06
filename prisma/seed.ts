import { Levels, PrismaClient, Main } from "@prisma/client";
const prisma = new PrismaClient();

const embassadors = [
  {
    id: "1",
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    main: Main.ENGINEERING,
    role: "RETHINKER"
  },
  {
    id: "2",
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    main: Main.DESIGN,
    role: "RETHINKER"
  },
  {
    id: "3",
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    main: Main.PRODUCT,
    role: "RETHINKER"
  },
];

const students = [
  {
    id: "4",
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "5",
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "6",
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "7",
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "8",
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "9",
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "10",
    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "11",
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "12",
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    main: Main.ENGINEERING,
    watched: ["1", "2", "3", "4", "5"],
  },
];

const profiles = [
  {
    id: "1",
    bio: "Dev Sênior",
    avatar: "#",
    social: {},
    userId: "10",
  },
  {
    id: "2",
    bio: "Estágiario de Engenharia",
    avatar: "#",
    social: {},
    userId: "5",
  }
]

const trails = [
  {
    id: "idDoAcademy",
    name: "academy",
    description: "Trilha que contém conteúdos gerais",
    weight: 0,
    imageUrl:
      "https://thumbs.dreamstime.com/b/elemento-de-logotipo-acad%C3%AAmico-desenho-decorativo-ilustra%C3%A7%C3%A3o-vetorial-191487693.jpg",
  },
  {
    id: "idDaEngenharia",
    name: "engenharia",
    description: "Trilha que contém conteúdos de engenharia",
    weight: 1,
    imageUrl: "#",
  },
  {
    id: "idDeProduto",
    name: "produto",
    description: "Trilha que contém conteúdos de produto",
    weight: 2,
    imageUrl: "#",
  },
  {
    id: "idDeDesign",
    name: "design",
    description: "Trilha que contém conteúdos de design",
    weight: 3,
    imageUrl: "#",
  },
  {
    id: "4",
    name: "Engenharia",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    weight: 4,
    imageUrl: "#",
  },
]

const courses = [
  {
    id: "asjkdhasjkdh",
    name: "JavaScript",
    description: "Curso completo de JavaScript",
    workload: 100,
    learning: "Um montão de coisas",
    skills: "um montão de de habilidades",
    trailId: "idDoAcademy",
    teacherId: "idDoPrado",
    level: "HIGH",
  },
];

const modules = [
  {
    id: "iudhfiodjasl",
    name: "Primeiro Módulo",
    courseId: "asjkdhasjkdh",
  },
];

const lessons = [
  {
    id: "jasdhgkljsahd",
    name: "Primeira Aula de JavaScript",
    embedURL: "asdas",
    moduleId: "iudhfiodjasl",
    order: 1,
    description: "Aqui está a descrição da primeira aula, que é de JavaScript",
  },
];


async function main() {
  // students.forEach(async (student) => {
  //   await prisma.user.create({
  //     data: {
  //       id: student.id,
  //       name: student.name,
  //       surname: student.surname,
  //       role: "STUDENT",
  //       email: student.email,
  //       main: student.main,
  //       watched: student.watched,
  //     },
  //   });
  // });
  // embassadors.forEach(async (teacher) => {
  //   await prisma.user.create({
  //     data: {
  //       id: teacher.id,
  //       name: teacher.name,
  //       surname: teacher.surname,
  //       role: "RETHINKER",
  //       email: teacher.email,
  //     },
  //   });
  // });
  // profiles.forEach(async (profile) => {
  //   await prisma.profile.create({
  //     data: {
  //       id: profile.id,
  //       bio: profile.bio,
  //       avatar: profile.avatar,
  //       social: profile.social,
  //       userId: profile.userId,
  //     },
  //   });
  // });
  // trails.forEach(async (trail) => {
  //   await prisma.trail.create({
  //     data: {
  //       id: trail.id,
  //       name: trail.name,
  //       description: trail.description,
  //       weight: trail.weight,
  //       imageUrl: trail.imageUrl,
  //     },
  //   });
  // });
  // courses.forEach(async (course) => {
  //   await prisma.course.create({
  //     data: {
  //       id: course.id,
  //       name: course.name,
  //       description: course.description,
  //       level: course.level,
  //       workload: course.workload,
  //       teacherId: course.teacherId,
  //       learning: course.learning,
  //       skills: course.skills,
  //       trailId: course.trailId,
  //     },
  //   });
  // });
  // modules.forEach(async (module) => {
  //   await prisma.module.create({
  //     data: {
  //       id: module.id,
  //       name: module.name,
  //       courseId: module.courseId,
  //     },
  //   });
  // });
  // lessons.forEach(async (lesson) => {
  //   await prisma.lesson.create({
  //     data: {
  //       id: lesson.id,
  //       name: lesson.name,
  //       embedUrl: lesson.description,
  //       order: lesson.order,
  //       description: lesson.description,
  //       moduleId: lesson.moduleId,
  //     },
  //   });
  // });

  const prisma = new PrismaClient();

  // todo not trigger
  try {
    await prisma.$connect();
  } catch (error) {
    throw error;
  }

  await prisma.$disconnect();
  console.log("Seeders generated");
  console.timeEnd();
}

main();
