import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepo extends Repository<User> {}

export default UserRepo;