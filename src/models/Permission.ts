import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn, 
    BaseEntity
} from 'typeorm';

@Entity('permissions')
class Permission extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
}

export default Permission;