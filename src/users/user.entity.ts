import { Module } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Module({})
export class UsersModule {
    ADMIN = 'ADMIN';
    TECH = 'TECH';
}
@Entity()
export class User {
@PrimaryGeneratedColumn()
id: number;

  // Email unique
@Column({ unique: true })
email: string;

  // Mot de passe
@Column()
password: string;

  // Nom d'utilisateur
@Column()
username: string;

  
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.TECH,
})
 role: UserRole;
}