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
  },
  {
    id: "2",
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
  },
  {
    id: "3",

    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
  },
  {
    id: "4",

    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
  },
  {
    id: "5",

    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
  },
  {
    id: "6",

    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
  },
  {
    id: "7",

    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
  },
  {
    id: "8",
    name: "Lucas", surname: "Araujo", email: "lucas.paula@rethink.dev"
  },
  {
    id: "9",

    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
  },
];

// const Teachers = [
//   {
//     id: "1",
//     name: "Filipe",
//     office: "Dev Sênior",
//     avatar: "#",
//   },
//   {
//     id: "2",
//     name: "Gabriel",
//     office: "Dev Junior",
//     avatar: "#",
//   },
//   {
//     id: "3",
//     name: "Gabriel",
//     office: "Tech Leader",
//     avatar: "#",
//   },
//   {
//     id: "4",
//     name: "Arthur",
//     office: "Arquiteto de Software",
//     avatar: "#",
//   },
// ]

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
    teacherId: "1",
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
    teacherId: "1",
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
    teacherId: "1",
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
    teacherId: "1",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "3",
  },
]

const lessons = [
  {
    id: "1",
    name: "Introdução 1",
    url: "#",
    courseId: "1",
    order: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    id: "2",
    name: "Introdução 2",
    url: "#",
    courseId: "1",
    order: 2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    id: "3",
    name: "Introdução 3",
    url: "#",
    courseId: "1",
    order: 3,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    id: "4",
    name: "Introdução 4",
    url: "#",
    courseId: "1",
    order: 4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    id: "5",
    name: "Introdução 5",
    url: "#",
    courseId: "1",
    order: 5,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
]

const whatcheds = [
  {
    id: "1",
    userId: "5",
    whatched: ["1", "2", "3", "4", "5"],
  }
]


async function main() {
  // students.forEach(async (student) => {
  //   await prisma.user.create({
  //     data: {
  //       name: student.name,
  //       surname: student.surname,
  //       email: student.email,
  //     },
  //   });
  // });
  // whatcheds.forEach(async (whatched) => {
  //   await prisma.whatched.create({
  //     data: {
  //       id: whatched.id,
  //       userId: whatched.userId,
  //       whatched: whatched.whatched,
  //     },
  //   });
  // });
  // Teachers.forEach(async (teacher) => {
  //   await prisma.teacher.create({
  //     data: {
  //       id: teacher.id,
  //       name: teacher.name,
  //       office: teacher.office,
  //       avatar: teacher.avatar,
  //     },
  //   });
  // });
  // trails.forEach(async (trail) => {
  //   await prisma.trail.create({
  //     data: {
  //       id: trail.id,
  //       name: trail.name,
  //       description: trail.description
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
  // lessons.forEach(async (lesson) => {
  //   await prisma.lesson.create({
  //     data: {
  //       id: lesson.id,
  //       name: lesson.name,
  //       url: lesson.description,
  //       courseId: lesson.courseId,
  //       order: lesson.order,
  //       description: lesson.description,
  //       module: lesson.module,
  //     },
  //   });
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
