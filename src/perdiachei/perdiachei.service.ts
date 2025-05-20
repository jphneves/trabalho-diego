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
      data: {
        ...(createPerdiacheiDto.id && { id: createPerdiacheiDto.id }),
        detalhes: createPerdiacheiDto.detalhes,
        localizacao: createPerdiacheiDto.localizacao,
        data: createPerdiacheiDto.data,
        status: createPerdiacheiDto.status,
        tipo: createPerdiacheiDto.tipo,
      },
    });
    return this.mapToEntity(perdiachei);
  }

  async update(id: number, updatePerdiacheiDto: UpdatePerdiacheiDto): Promise<Perdiachei> {
    const perdiachei = await this.prisma.perdiachei.update({
      where: { id },
      data: {
        detalhes: updatePerdiacheiDto.detalhes,
        localizacao: updatePerdiacheiDto.localizacao,
        data: updatePerdiacheiDto.data,
        status: updatePerdiacheiDto.status,
        tipo: updatePerdiacheiDto.tipo,
      },
    });
    return this.mapToEntity(perdiachei);
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

  async remove(id: number): Promise<Perdiachei> {
    const perdiachei = await this.prisma.perdiachei.delete({
      where: { id },
    });
    return this.mapToEntity(perdiachei);
  }
}
