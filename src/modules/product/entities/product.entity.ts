import { Mailler } from "src/modules/mailler/entities/mailler.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    productName: string;

    @Column()
    price: number;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @Column()
    image: string;

    @OneToMany(() => Mailler, (mailler) => mailler.product)
    emails: Mailler[]
}
