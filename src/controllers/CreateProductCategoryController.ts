import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class CreateProductCategoryController {
  async create(req: Request, res: Response) {
    const { id_product, id_category } = req.body;

    const produtcCategory = await prismaClient.productCategory.create({
      data: {
        id_category,
        id_product
      },
    });

    return res.status(201).json(produtcCategory);
  }
}
