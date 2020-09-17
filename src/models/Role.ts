import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn, 
    BaseEntity, 
    ManyToMany,
    JoinTable
} from 'typeorm';

import Permission from './Permission';

@Entity('roles')
class Role extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "permission_roles",
        joinColumns: [{ name:'role_id'}],
        inverseJoinColumns: [{name: 'permission_id'}]
    })
    permission: Permission[];
}

export default Role;