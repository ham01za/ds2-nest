import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Device } from './devices/devices.entity';
import { UsersModele } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'TON_MOT_DE_PASSE',
  database: 'ds2_nest',
  synchronize: true,
})

    UsersModule,
    DevicesModule,
    AuthModule,
  ],
})
export class AppModule {}
