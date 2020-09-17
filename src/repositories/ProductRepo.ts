import { EntityRepository, Repository } from "typeorm";
import Product from "../models/Product";

@EntityRepository(Product)
class ProductRepo extends Repository<Product> {}

export default ProductRepo;
