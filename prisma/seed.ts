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

// const students = [
//   {
//     name: "Amanda",
//     surname: "Duarte",
//     email: "amanda.duarte@rethink.dev",
//   },
//   {
//     name: "Gabriel",
//     surname: "Melo",
//     email: "gabriel.melo@rethink.dev",
//   },
//   {
//     name: "Ana",
//     surname: "Ramos",
//     email: "ana.ramos@rethink.dev",
//   },
//   {
//     name: "Felipe",
//     surname: "Reggiane",
//     email: "felipe.reggiane@rethink.dev",
//   },
//   {
//     name: "Fernando",
//     surname: "Henrique",
//     email: "fernando.henrique@rethink.dev",
//   },
//   {
//     name: "Fabiana",
//     surname: "Kamo",
//     email: "fabiana.kamo@rethink.dev",
//   },
//   {
//     name: "Carolina",
//     surname: "Valeriano ",
//     email: "carolina.valeriano@rethink.dev",
//   },
//   { name: "Lucas", surname: "Araujo", email: "lucas.paula@rethink.dev" },
//   {
//     name: "Sthéphany",
//     surname: "Tezza",
//     email: "sthephany.tezza@rethink.dev",
//   },
// ];

const Teachers = [
  {
    name: "Filipe",
    office: "Dev Sênior",
    avatar: "#",
  },
  {
    name: "Gabriel",
    office: "Dev Junior",
    avatar: "#",
  },
  {
    name: "Gabriel",
    office: "Tech Leader",
    avatar: "#",
  },
  {
    name: "Arthur",
    office: "Arquiteto de Software",
    avatar: "#",
  },
]

const trails = [
  {
    name: "Academy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    name: "Produto",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    name: "Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    name: "Engenharia",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
]

const courses = [
  {
    name: "Curso Engenharia",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "5dea051e-454a-4554-ae75-b2eaecb0a20d",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "61488228-7183-46ff-98e0-1c774ac688be",
  },
  {
    name: "Curso Academy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "5dea051e-454a-4554-ae75-b2eaecb0a20d",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "187e4e87-a0b0-428f-9ab2-688c48db9a46",
  },
  {
    name: "Curso Produto",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "5dea051e-454a-4554-ae75-b2eaecb0a20d",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "2b2ccac1-c938-4e64-a65a-3878c13e60e8",
  },
  {
    name: "Curso Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    level: Levels.HIGH,
    workload: 500,
    teacherId: "5dea051e-454a-4554-ae75-b2eaecb0a20d",
    learning: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    skills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    trailId: "e0c4fcdb-8534-4884-bafa-7d4995d8db98",
  },
]

const classes = [
  {
    name: "Introdução 1",
    url: "#",
    courseId: "5300f233-6105-4732-9613-5511932146b1",
    order: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    name: "Introdução 2",
    url: "#",
    courseId: "5300f233-6105-4732-9613-5511932146b1",
    order: 2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    name: "Introdução 3",
    url: "#",
    courseId: "5300f233-6105-4732-9613-5511932146b1",
    order: 3,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    name: "Introdução 4",
    url: "#",
    courseId: "5300f233-6105-4732-9613-5511932146b1",
    order: 4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
  {
    name: "Introdução 5",
    url: "#",
    courseId: "5300f233-6105-4732-9613-5511932146b1",
    order: 5,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    module: 1,
  },
]
async function main() {
  // Teachers.forEach(async (teacher) => {
  //   await prisma.teacher.create({
  //     data: {
  //       name: teacher.name,
  //       office: teacher.office,
  //       avatar: teacher.avatar,
  //     },
  //   });
  // });
  // trails.forEach(async (trail) => {
  //   await prisma.trail.create({
  //     data: {
  //       name: trail.name,
  //       description: trail.description
  //     },
  //   });
  // });
  // courses.forEach(async (course) => {
  //   await prisma.course.create({
  //     data: {
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
  classes.forEach(async (classes) => {
    await prisma.classes.create({
      data: {
        name: classes.name,
        url: classes.description,
        courseId: classes.courseId,
        order: classes.order,
        description: classes.description,
        module: classes.module,
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
