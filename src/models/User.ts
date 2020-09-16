import { 
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column, 
    CreateDateColumn
} from 'typeorm';

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
}

export default User;