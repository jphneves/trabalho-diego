import { Injectable } from '@nestjs/common';
import { CreatePerdiacheiDto } from './dto/create-perdiachei.dto';
import { UpdatePerdiacheiDto } from './dto/update-perdiachei.dto';
import { Perdiachei } from './entities/perdiachei.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PerdiacheiService {
constructor(private prisma: PrismaService) {}

  private mapToEntity(perdiachei: any): Perdiachei {
    return {
      id: perdiachei.id,
      detalhes: perdiachei.detalhes,
      localizacao: perdiachei.localizacao,
      data: perdiachei.data,
      status: perdiachei.status,
      tipo: perdiachei.tipo,
    }
  }

  async create(createPerdiacheiDto: CreatePerdiacheiDto): Promise<Perdiachei> {

    const perdiachei = await this.prisma.perdiachei.create({
      data: createPerdiacheiDto,
    });
    return this.mapToEntity(perdiachei);
  }

  update(id: number, updatePerdiacheiDto: UpdatePerdiacheiDto) {
    return `This action updates a #${id} perdiachei`;
  }

  async findAll(): Promise<Perdiachei[]> {
    const perdiachei = 
    await this.prisma.perdiachei.findMany();
    return perdiachei.map(
      (perdiachei) => this.mapToEntity(perdiachei)
    )
  }

  findOne(id: number) {
    return `This action returns a #${id} perdiachei`;
  }

  remove(id: number) {
    return `This action removes a #${id} perdiachei`;
  }
}
