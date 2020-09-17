import { Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import {hash} from 'bcryptjs';

import UserRepo from '../repositories/UserRepo';
import RoleRepo from '../repositories/RoleRepo';

class UserController {
    async create(request: Request, response: Response) {
        const userRepo = getCustomRepository(UserRepo);
        const roleRepo = getCustomRepository(RoleRepo);

        const { name, username, password, roles } = request.body;

        const existUser = await userRepo.findOne({
            username
        });

        if (existUser) {
            return response.status(400).json({
                message: "User already exists!"
            });
        }

        const passwordHash = await hash(password, 8);

        const exitsRoles = await roleRepo.findByIds(roles);

        const newUser = userRepo.create({
            name,
            username,
            password: passwordHash,
            roles: exitsRoles
        });

        await userRepo.save(newUser);

        newUser.password = "";

        return response.status(201).json(newUser);
    }
}

export default new UserController;