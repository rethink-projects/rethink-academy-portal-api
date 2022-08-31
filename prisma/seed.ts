import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const embassadors: {
  name: string;
  surname: string;
  email: string;
  main: "ENGINEERING" | "DESIGN" | "PRODUCT";
}[] = [
  {
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    main: "ENGINEERING",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    main: "DESIGN",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    main: "PRODUCT",
  },
];

const students: {
  name: string;
  surname: string;
  email: string;
  role?: string;
  main: "ENGINEERING" | "DESIGN" | "PRODUCT";
}[] = [
  {
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
    main: "ENGINEERING",
    role: "EMBASSADOR",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
    main: "DESIGN",
    role: "EMBASSADOR",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
    main: "PRODUCT",
    role: "EMBASSADOR",
  },
  {
    name: "Marcela",
    surname: "Monteiro",
    email: "marcela.monteiro@rethink.dev",
    main: "PRODUCT",
    role: "EMBASSADOR",
  },
  {
    name: "Michelli",
    surname: "Araujo",
    email: "michelli.arujo@rethink.dev",
    main: "PRODUCT",
  },
  {
    name: "hugo",
    surname: "carvalho",
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
    name: "Gustavo ",
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
    surname: "Gomes",
    email: "gabriel.Gomes@rethink.dev",
    main: "ENGINEERING",
    role: "EMBASSADOR",
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
    surname: "Valeriano ",
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
async function main() {
  try {
    students.forEach(async (student) => {
      await prisma.user.create({
        // where: {
        //   email: student.email,
        // },
        // update: {
        //   name: student.name,
        //   surname: student.surname,
        //   main: student.main,
        // },
        data: {
          name: student.name,
          surname: student.surname,
          email: student.email,
          main: student.main,
          role: student.role ? student.role : "STUDENT",
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
  // embassadors.forEach(async (embassador) => {
  //   await prisma.user.upsert({
  //     where: {
  //       email: embassador.email,
  //     },
  //     update: {
  //       name: embassador.name,
  //       surname: embassador.surname,
  //       main: embassador.main,
  //       role: "EMBASSADOR",
  //     },
  //     create: {
  //       name: embassador.name,
  //       surname: embassador.surname,
  //       email: embassador.email,
  //       main: embassador.main,
  //       role: "EMBASSADOR",
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
