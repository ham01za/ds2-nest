import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // DS2 : entité User
  ],
  providers: [
    UsersService,
  ],
  controllers: [
    UsersController,
  ],
  exports: [
    UsersService, // 🔴 utilisé par AuthModule
  ],
})
export class UsersModule {}
