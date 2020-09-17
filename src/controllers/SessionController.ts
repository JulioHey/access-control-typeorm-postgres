import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import UserRepo from '../repositories/UserRepo';

class SessionController {
    async create(request: Request, response: Response) {
        const { username, password } = request.body;

        const userRepo = getCustomRepository(UserRepo);

        const user = await userRepo.findOne({username});

        if (!user) {
            return response.status(400).json({
                error: "User not found"
            });
        }

        const matchPassword = await compare(password, user.password);

        if (!matchPassword) {
            return response.status(400).json({
                error: "User or password incorret"
            });    
        }

        const token = sign({}, "07e61acbf651a52f6e9e21e81f7bed82", {
            subject: user.id,
            expiresIn: '1d'
        });

        return response.json({
            token,
            user
        })
    }
}

export default new SessionController;