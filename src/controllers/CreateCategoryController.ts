import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class CreateCategoryController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    const category = await prismaClient.category.create({
      data: {
        nome: name
      },
    });

    return res.status(201).json(category)
  }
}
