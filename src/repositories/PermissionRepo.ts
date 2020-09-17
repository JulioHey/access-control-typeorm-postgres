import { EntityRepository, Repository } from "typeorm";
import Permission from "../models/Permission";

@EntityRepository(Permission)
class PermissionRepo extends Repository<Permission> {}

export default PermissionRepo;
