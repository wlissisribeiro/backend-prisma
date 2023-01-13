import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategoryController } from "./controllers/CreateProductWithExistCategoryController";
import {FindProductController} from './controllers/FindProductController'
const routes = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithExistCategory = new CreateProductWithExistCategoryController()
const findProduct = new FindProductController();
routes.post("/products", createProduct.create);
routes.post("/categories", createCategory.create);
routes.post("/categoryProduct", createProductCategory.create);
routes.post("/productWithCategory", createProductWithExistCategory.create);

routes.get("/product/:id", findProduct.execute)

export { routes };
