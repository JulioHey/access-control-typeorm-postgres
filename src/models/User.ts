import { 
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column, 
    CreateDateColumn, ManyToMany, JoinTable
} from 'typeorm';
import Role from './Role';

@Entity({name: "users"})
class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Role)
    @JoinTable({
        name: "users_roles",
        inverseJoinColumns: [{name: 'role_id'}],
        joinColumns: [{ name:'user_id'}],
    })
    roles: Role[];
}

export default User;