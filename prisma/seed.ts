import { PrismaClient, Roles, Levels } from "@prisma/client";

const users = [
  {
    id: "idDaMonteiro",
    name: "Marcela",
    surname: "Monteiro",
    email: "marcela.monteiro@rethink.dev",
    role: "TEACHER",
  },
  {
    id: "idDoPrado",
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    role: "EMBASSADOR",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    role: "EMBASSADOR",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    role: "EMBASSADOR",
  },
  {
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    role: "STUDENT",
  },
  {
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    role: "STUDENT",
  },
];
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
    imageUrl:
      "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/12/engenharia-civil-obras-1024x683.jpg",
  },
  {
    id: "idDeProduto",
    name: "produto",
    description: "Trilha que contém conteúdos de produto",
    weight: 2,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg",
  },
  {
    id: "idDeDesign",
    name: "design",
    description: "Trilha que contém conteúdos de design",
    weight: 3,
    imageUrl:
      "https://img.freepik.com/photos-premium/conception-mot-ecrit-au-dessus-formes-3d-geometriques-colorees_2227-1663.jpg",
  },
];
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

async function userSeeder(prisma: PrismaClient): Promise<void> {
  for (const user of users) {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        role: user.role as Roles,
        surname: user.surname,
        email: user.email,
      },
    });
  }
}
async function trailSeeder(prisma: PrismaClient): Promise<void> {
  for (const trail of trails) {
    await prisma.trail.create({
      data: {
        id: trail.id,
        name: trail.name,
        weight: trail.weight,
        description: trail.description,
        imageUrl: trail.imageUrl,
      },
    });
  }
}
async function moduleSeeder(prisma: PrismaClient): Promise<void> {
  for (const module of modules) {
    await prisma.module.create({
      data: {
        id: module.id,
        name: module.name,
        courseId: module.courseId,
      },
    });
  }
}
async function lessonSeeder(prisma: PrismaClient): Promise<void> {
  for (const lesson of lessons) {
    await prisma.lesson.create({
      data: {
        id: lesson.id,
        name: lesson.name,
        description: lesson.description,
        moduleId: lesson.moduleId,
        embedUrl: lesson.embedURL,
        order: lesson.order,
      },
    });
  }
}
async function courseSeeder(prisma: PrismaClient): Promise<void> {
  for (const course of courses) {
    await prisma.course.create({
      data: {
        id: course.id,
        name: course.name,
        description: course.description,
        workload: course.workload,
        learning: course.learning,
        skills: course.skills,
        level: course.level as Levels,
        trailId: course.trailId,
        teacherId: course.teacherId,
      },
    });
  }
}

async function main() {
  console.time();
  const prisma = new PrismaClient();

  // todo not trigger
  try {
    await prisma.$connect();
  } catch (error) {
    throw error;
  }

  // static data
  await Promise.all([
    userSeeder(prisma),
    trailSeeder(prisma),
    // courseSeeder(prisma),
    // moduleSeeder(prisma),
    // lessonSeeder(prisma),
  ]).catch(console.error);

  await prisma.$disconnect();
  console.log("Seeders generated");
  console.timeEnd();
}

main();
