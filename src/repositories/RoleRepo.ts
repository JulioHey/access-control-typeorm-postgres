import { EntityRepository, Repository } from "typeorm";
import Role from "../models/Role";

@EntityRepository(Role)
class RoleRepo extends Repository<Role> {}

export default RoleRepo;
