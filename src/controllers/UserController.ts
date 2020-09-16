import { Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepo from '../repositories/UserRepo';

class UserController {
    async create(request: Request, response: Response) {
        const userRepo = getCustomRepository(UserRepo);

        const { name, username, password } = request.body;

        const existUser = await userRepo.findOne({
            username
        });

        if (existUser) {
            return response.status(400).json({
                message: "User already exists!"
            });
        }

        const newUser = userRepo.create({
            name,
            username,
            password
        });

        await userRepo.save(newUser);

        return response.status(201).json(newUser);
    }
}

export default new UserController;