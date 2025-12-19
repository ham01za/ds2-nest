import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Role } from './enums/role.enum';
import { Intervention } from '../interventions/intervention.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.TECH,
  })
  role: Role;

  @OneToMany(() => Intervention, intervention => intervention.user)
  interventions: Intervention[];
}
