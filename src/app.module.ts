import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerdiacheiModule } from './perdiachei/perdiachei.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [PerdiacheiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
