import {Request, Response} from 'express';
import {getCustomRepository} from 'typeorm';
import PermissionRepo from '../repositories/PermissionRepo';
import ProductRepo from '../repositories/ProductRepo';

class PermissionController {
    async create(request: Request, response: Response) {
        const permissionRepo = getCustomRepository(PermissionRepo);

        const { name, description } = request.body;

        const existPermission = await permissionRepo.findOne({name});

        if (existPermission) {
            return response.status(400).json({
                error: "Permission already exists!"
            })
        };

        const permission = permissionRepo.create({
            name,
            description
        });

        await permissionRepo.save(permission);

        return response.json(permission);
    }


}

export default new PermissionController;