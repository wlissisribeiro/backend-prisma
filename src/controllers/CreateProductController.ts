import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class CreateProductController {
  async create(req: Request, res: Response) {
    const { name, bar_cod, price } = req.body;

    //esse (products) é o model do arquivo (schema.prisma) que foi criado ao executar o comando
    //npx prisma migration dev product init
    //ele fica localizado no /node_modules/.prisma/client/index.js
    const product = await prismaClient.products.create({
      data: {
        name,
        bar_cod,
        price,
      },
    });

    return res.status(201).json(product);
  }
}
