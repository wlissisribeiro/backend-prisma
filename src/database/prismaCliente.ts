import {PrismaClient} from '@prisma/client';


//classe de conexao com banco de dados
const prismaClient = new PrismaClient();

export {prismaClient};