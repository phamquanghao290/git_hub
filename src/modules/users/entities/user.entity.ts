import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
enum Role {
    ADMIN = 'admin',
    USER = 'user'
}
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        type: 'varchar',
        length: 100,
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;

    @Column({
        type: 'boolean',
        default: false
    })
    status: boolean;
}
