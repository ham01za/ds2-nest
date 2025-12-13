import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Device } from './devices/devices.entity';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',        // utilisateur MySQL
      password: '',            // mdp^MySQL
      database: 'ds2_nest',     // bd
      entities: [User, Device],
      synchronize: true,       // cree les table auto
    }),
    UsersModule,
    DevicesModule,
  ],
})
export class AppModule {}
