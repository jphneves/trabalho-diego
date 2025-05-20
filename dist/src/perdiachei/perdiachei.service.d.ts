import { CreatePerdiacheiDto } from './dto/create-perdiachei.dto';
import { UpdatePerdiacheiDto } from './dto/update-perdiachei.dto';
import { Perdiachei } from './entities/perdiachei.entity';
import { PrismaService } from 'prisma/prisma.service';
export declare class PerdiacheiService {
    private prisma;
    constructor(prisma: PrismaService);
    private mapToEntity;
    create(createPerdiacheiDto: CreatePerdiacheiDto): Promise<Perdiachei>;
    update(id: number, updatePerdiacheiDto: UpdatePerdiacheiDto): Promise<Perdiachei>;
    findAll(): Promise<Perdiachei[]>;
    findOne(id: number): string;
    remove(id: number): Promise<Perdiachei>;
}
