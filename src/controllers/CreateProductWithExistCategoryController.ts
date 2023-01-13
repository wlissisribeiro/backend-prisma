import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class CreateProductWithExistCategoryController {
  async create(req: Request, res: Response) {
    const { name, bar_cod, price, id_category } = req.body;

    //esse (products) é o model do arquivo (schema.prisma) que foi criado ao executar o comando
    //npx prisma migration dev product init
    //ele fica localizado no /node_modules/.prisma/client/index.js
    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            bar_cod,
            name,
            price,
          },
        },
        category: {
          connect: {
            id: id_category,
          },
        },
      },
    });

    return res.status(201).json(product);
  }
}
