import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { Role } from './enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createTech(data: Partial<User>) {
    const user = this.userRepository.create({
      ...data,
      password: await bcrypt.hash(data.password, 10),
      role: Role.TECH, //
    });
    return this.userRepository.save(user);
  }

  async createAdmin(data: Partial<User>) {
    const user = this.userRepository.create({
      ...data,
      password: await bcrypt.hash(data.password, 10),
      role: Role.ADMIN,
    });
    return this.userRepository.save(user);
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  findById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
