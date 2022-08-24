import { Levels, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const embassadors = [
//   {
//     name: "Filipe",
//     surname: "Prado",
//     email: "filipe.prado@rethink.dev",
//   },
//   {
//     name: "Leticia",
//     surname: "Lange",
//     email: "leticia.lange@rethink.dev",
//   },
//   {
//     name: "Priscila",
//     surname: "Ritschel",
//     email: "priscila.ritschel@rethink.dev",
//   },
// ];

const students = [
  {
    id: "1",
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "2",
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "3",
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "4",
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],

  },
  {
    id: "5",
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "6",
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],
  },
  {
    id: "7",
    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],

  },
  {
    id: "8",
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],

  },
  {
    id: "9",
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    main: "Engenharia",
    watched: ["1", "2", "3", "4", "5"],
  },
];

const Teachers = [
  {
    id: "10",
    name: "Filipe",
    surname: "Prado",
    email: "filipe@mail.com"
  },
  {
    id: "11",
    name: "Gabriel",
    surname: "Gomes",
    email: "gabriel@mail.com"
  },
  {
    id: "12",
    name: "Arthur",
    surname: "Vargas",
    email: "arthur@mail.com"
  },
]

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
    id: "1",
    name: "Academy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: "2",
    name: "Produto",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: "3",
    name: "Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: "4",
    name: "Engenharia",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
]

const courses = [
  {
    id: "1",
    name: "Curso Engenharia",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "10",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "4",
  },
  {
    id: "2",
    name: "Curso Academy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "10",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "1",
  },
  {
    id: "3",
    name: "Curso Produto",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "10",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "2",
  },
  {
    id: "4",
    name: "Curso Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "10",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "3",
  },
]

const modules = [
  {
    id: "1",
    name: "Intodução",
    courseId: "1",
  }
]

const lessons = [
  {
    id: "1",
    name: "Introdução 1",
    url: "#",
    order: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    moduleId: "1",
  },
  {
    id: "2",
    name: "Introdução 2",
    url: "#",
    order: 2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    moduleId: "1",
  },
  {
    id: "3",
    name: "Introdução 3",
    url: "#",
    order: 3,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    moduleId: "1",
  },
  {
    id: "4",
    name: "Introdução 4",
    url: "#",
    order: 4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    moduleId: "1",
  },
  {
    id: "5",
    name: "Introdução 5",
    url: "#",
    order: 5,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    moduleId: "1",
  },
]


async function main() {
  students.forEach(async (student) => {
    await prisma.user.create({
      data: {
        id: student.id,
        name: student.name,
        surname: student.surname,
        role: "STUDENT",
        email: student.email,
        main: student.main,
        watched: student.watched,
      },
    });
  });
  Teachers.forEach(async (teacher) => {
    await prisma.user.create({
      data: {
        id: teacher.id,
        name: teacher.name,
        surname: teacher.surname,
        role: "RETHINKER",
        email: teacher.email,
      },
    });
  });
  profiles.forEach(async (profile) => {
    await prisma.profile.create({
      data: {
        id: profile.id,
        bio: profile.bio,
        avatar: profile.avatar,
        social: profile.social,
        userId: profile.userId,
      },
    });
  });
  trails.forEach(async (trail) => {
    await prisma.trail.create({
      data: {
        id: trail.id,
        name: trail.name,
        description: trail.description
      },
    });
  });
  courses.forEach(async (course) => {
    await prisma.course.create({
      data: {
        id: course.id,
        name: course.name,
        description: course.description,
        level: course.level,
        workload: course.workload,
        teacherId: course.teacherId,
        learning: course.learning,
        skills: course.skills,
        trailId: course.trailId,
      },
    });
  });
  modules.forEach(async (module) => {
    await prisma.module.create({
      data: {
        id: module.id,
        name: module.name,
        courseId: module.courseId,
      },
    });
  });
  lessons.forEach(async (lesson) => {
    await prisma.lesson.create({
      data: {
        id: lesson.id,
        name: lesson.name,
        embedUrl: lesson.description,
        order: lesson.order,
        description: lesson.description,
        moduleId: lesson.moduleId,
      },
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
