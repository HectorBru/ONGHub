import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NgoController } from "./ngo.controller";
import { Ngo } from "./ngo.model";
import { NgoService } from "./ngo.service";

@Module({
  imports: [TypeOrmModule.forFeature([Ngo])],
  controllers: [NgoController],
  providers: [NgoService],
})
export class NgoModule {}
