import { Module } from '@nestjs/common';
import { PerdiacheiService } from './perdiachei.service';
import { PerdiacheiController } from './perdiachei.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [PerdiacheiController],
  providers: [PerdiacheiService, PrismaService],
})
export class PerdiacheiModule {}
