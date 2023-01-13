import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class FindProductController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;

    //inclue a categoria do produto na busca
    const product = await prismaClient.products.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true,
      },
    });

    if (!product) {
      return res.status(401).json({ message: "Produto nao existe" });
    }

    return res.status(201).json(product);
  }
}
