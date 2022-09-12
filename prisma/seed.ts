import { Levels, PrismaClient, Main } from "@prisma/client";
const prisma = new PrismaClient();

const users: {
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
    id: "5",
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "6",
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "7",
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "8",
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "9",
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "10",
    name: "Carolina",
    surname: "Valeriano",
    email: "carolina.valeriano@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "11",
    name: "Lucas",
    surname: "Araujo",
    email: "lucas.paula@rethink.dev",
    main: "ENGINEERING",
  },
  {
    id: "12",
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
    main: "ENGINEERING",
  },
];
async function main() {
  const newUserList: string[] = [];
  users.forEach(async ({ email, name, surname, main, role }) => {
    const newUser = await prisma.user.upsert({
      where: {
        email: email,
      },
      update: {
        name: name,
        surname: surname,
        main: main,
        role: role ?? "STUDENT",
      },
      create: {
        name: name,
        surname: surname,
        email: email,
        main: main,
        role: role ?? "STUDENT",
        avatar: `https://ui-avatars.com/api/?name=${name}+${surname}`,
      },
    });
    await prisma.badges.create({
      data: {
        userId: newUser.id,
      },
    });
    await prisma.tasks.create({
      data: {
        name: "daily",
        taskDate: new Date(new Date().setHours(13, 0, 0, 0)).toISOString(),
        startTime: "13:00",
        endTime: "14:00",
        tags: "1:1",
        status: "finished",
        description: "1:1 com o Gabriel",
        userId: newUser.id,
      },
    });
  });
}

  await prisma.$disconnect();
  console.log("Seeders generated");
  console.timeEnd();
}

main();
