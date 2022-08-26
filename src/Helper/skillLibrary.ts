export const skillLibrary = {
  engineering: {
    BackEnd: "skill1",
    FrontEnd: "skill2",
    ["HTML e CSS"]: "skill3",
    React: "skill4",
    JavaScript: "skill5",
    TypeScript: "skill6",
  },
  design: {
    Pesquisas: "skill1",
    ["Facilitação de Workshop"]: "skill2",
    ["Wireframe e Fluxo"]: "skill3",
    ["Design system"]: "skill4",
    ["Product Design"]: "skill5",
    ["Padronização e "]: "skill6",
  },
  product: {
    Produto: "skill1",
    Pessoas: "skill2",
    Processos: "skill3",
    Estratégia: "skill4",
    Performance: "skill5",
    Evolução: "skill6",
  },
};

export type skillLibraryType = {
  value: number;
  main: "engineering" | "design" | "product";
  userId: string;
  skill: string;
};
