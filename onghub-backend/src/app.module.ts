import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NgoModule } from "./ngo/ngo.module";
import { AdminModule } from "./admin/admin.module";
import { RegisteredUserModule } from "./registered-user/registered-user.module";
import { PostModule } from "./post/post.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Admin } from "./admin/admin.model";
import { RegisteredUser } from "./registered-user/registered.user.model";
import { Post } from "./post/post.model";
import { Ngo } from "./ngo/ngo.model";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 49153,
      username: "postgres",
      password: "postgrespw",
      synchronize: true,
      logging: true,
      entities: [Admin, RegisteredUser, Post, Ngo],
      subscribers: [],
      migrations: [],
    }),
    NgoModule,
    AdminModule,
    PostModule,
    RegisteredUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
