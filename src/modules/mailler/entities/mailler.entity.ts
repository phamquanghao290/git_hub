import { Product } from './../../product/entities/product.entity';
import { User } from "src/modules/users/entities/user.entity";
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
@Entity()
export class Mailler {
    @PrimaryGeneratedColumn()
    emailId: number;

    @ManyToOne(() => User, (user) => user.emails)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Product, (product) => product.emails)
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
