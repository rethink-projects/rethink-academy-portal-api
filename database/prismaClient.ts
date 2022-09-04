import { PrismaClient, Main } from "@prisma/client";
const prismaInstance = new PrismaClient();

export { prismaInstance, Main };
