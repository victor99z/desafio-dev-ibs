import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Exclude } from 'class-transformer';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @Column({ name: 'more_details' })
  moreDetails: string;

  @Exclude()
  @Column({ name: 'user_id' })
  userId: number;

  @Exclude()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  constructor(partial: Partial<Address>) {
    Object.assign(this, partial);
  }
}
