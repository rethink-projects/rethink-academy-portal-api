import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const embassadors = [
  {
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    title: "engineering",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    title: "design",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    title: "product",
  },
];

const students = [
  {
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
    title: "engineering",
  },
  {
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    title: "engineering",
  },
  {
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    title: "engineering",
  },
  {
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    title: "engineering",
  },
  {
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    title: "engineering",
  },
  {
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    title: "engineering",
  },
  {
    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
    title: "engineering",
  },
  {
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    title: "engineering",
  },

  {
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    title: "engineering",
  },
];
async function main() {
  students.forEach(async (student) => {
    await prisma.user.upsert({
      where: {
        email: student.email,
      },
      update: {
        name: student.name,
        surname: student.surname,
        title: student.title,
      },
      create: {
        name: student.name,
        surname: student.surname,
        email: student.email,
        title: student.title,
      },
    });
  });
  embassadors.forEach(async (embassador) => {
    await prisma.user.upsert({
      where: {
        email: embassador.email,
      },
      update: {
        name: embassador.name,
        surname: embassador.surname,
        title: embassador.title,
        role: "EMBASSADOR",
      },
      create: {
        name: embassador.name,
        surname: embassador.surname,
        email: embassador.email,
        title: embassador.title,
        role: "EMBASSADOR",
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
