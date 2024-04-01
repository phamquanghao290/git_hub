import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    idCategory: number;

    @Column()
    nameCategory: string;
}
