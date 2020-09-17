import {Request, Response} from 'express';
import {getCustomRepository} from 'typeorm';
import ProductRepo from '../repositories/ProductRepo';

class ProductController {
    async create(request: Request, response: Response) {
        const productRepo = getCustomRepository(ProductRepo);

        const { name, description } = request.body;

        const existsProduct = await productRepo.findOne({name});

        if (existsProduct) {
            return response.status(400).json({
                error: "Permission already exists!"
            })
        };

        const product = productRepo.create({
            name,
            description
        });

        await productRepo.save(product);

        return response.json(product);
    }

    async index(request: Request, response: Response) {
        const productRepo = getCustomRepository(ProductRepo);

        const products = await productRepo.find();

        return response.json(products);
    }

    async show(request: Request, response: Response) {
        const productRepo = getCustomRepository(ProductRepo);

        const { name } = request.params;

        const product = await productRepo.findOne({
            name
        });

        return response.json(product);
    }
}

export default new ProductController;