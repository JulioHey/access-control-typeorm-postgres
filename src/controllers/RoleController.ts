import {Request, Response} from 'express';
import {getCustomRepository} from 'typeorm';
import RoleRepo from '../repositories/RoleRepo';
import PermissionRepo from '../repositories/PermissionRepo';

class RoleController {
    async create(request: Request, response: Response) {
        const roleRepo = getCustomRepository(RoleRepo);
        const permissionRepo = getCustomRepository(PermissionRepo);

        const { name, description, permissions } = request.body;

        const existRole = await roleRepo.findOne({name});

        if (existRole) {
            return response.status(400).json({
                error: "Role already exists!"
            })
        };

        const existPermissions = await permissionRepo.findByIds(permissions);

        const role = roleRepo.create({
            name,
            description,
            permission: existPermissions,
        });

        await roleRepo.save(role);

        return response.json(role);
    }
}

export default new RoleController;