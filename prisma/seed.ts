import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const embassadors: {
  name: string;
  surname: string;
  email: string;
  title: "ENGINEERING" | "DESIGN" | "PRODUCT";
}[] = [
  {
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    title: "PRODUCT",
  },
];

const students: {
  name: string;
  surname: string;
  email: string;
  title: "ENGINEERING" | "DESIGN" | "PRODUCT";
}[] = [
  {
    name: "Marcela",
    surname: "Monteiro",
    email: "marcela.monteiro@rethink.dev",
    title: "PRODUCT",
  },
  {
    name: "Michelli",
    surname: "Araujo",
    email: "michelli.arujo@rethink.dev",
    title: "PRODUCT",
  },
  {
    name: "hugo",
    surname: "carvalho",
    email: "hugo.carvalho@rethink.dev",
    title: "PRODUCT",
  },
  {
    name: "Bernado",
    surname: "Carvalho",
    email: "bernado.carvalho@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Gustavo ",
    surname: "Fernando",
    email: "gustavo.silva@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Luiza",
    surname: "Queiroz",
    email: "luiza.queiroz@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Pedro",
    surname: "Silva",
    email: "pedro.lucas@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Raiane",
    surname: "Bispo",
    email: "raiane.miguel@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Igor",
    surname: "Ricardo",
    email: "igor.ricardo@rethink.dev",
    title: "DESIGN",
  },
  {
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
    title: "ENGINEERING",
  },
  {
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    title: "ENGINEERING",
  },

  {
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    title: "ENGINEERING",
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
        // title: student.title,
      },
      create: {
        name: student.name,
        surname: student.surname,
        email: student.email,
        // title: student.title,
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
        // title: embassador.title,
        role: "EMBASSADOR",
      },
      create: {
        name: embassador.name,
        surname: embassador.surname,
        email: embassador.email,
        // title: embassador.title,
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
