import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  birthdate: string;

  @Column({ name: 'marital_status', length: 100 })
  maritalStatus: string;

  @OneToMany(() => Address, (adress) => adress.user, { cascade: true })
  addresses: Address[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
