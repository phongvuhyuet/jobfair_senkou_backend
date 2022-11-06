import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicsModule } from './modules/topics/topics.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    TopicsModule,
    UsersModule,
  ],
})
export class AppModule {}
