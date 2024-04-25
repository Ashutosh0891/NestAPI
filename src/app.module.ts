import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  imports: [
    UsersModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'Ashu@0891',
        database: 'nestjs',
        entities: [User],
        synchronize: true,
      })

    }),
    AuthModule,
    ProfileModule,
  ],
})

export class AppModule { }