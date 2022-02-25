import { Request, Response } from 'express';
import ListProductService from '../service/ListProductService';
import ShowProductService from '../service/ShowProductService';

export default class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = listProducts.execute();

    return res.json(products);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProduct = new ShowProductService();

    const product = showProduct.execute({ id });

    return res.json(product);
  }
}
