import { PerdiacheiService } from './perdiachei.service';
import { CreatePerdiacheiDto } from './dto/create-perdiachei.dto';
import { UpdatePerdiacheiDto } from './dto/update-perdiachei.dto';
export declare class PerdiacheiController {
    private readonly perdiacheiService;
    constructor(perdiacheiService: PerdiacheiService);
    create(createPerdiacheiDto: CreatePerdiacheiDto): Promise<import("./entities/perdiachei.entity").Perdiachei>;
    findAll(): Promise<import("./entities/perdiachei.entity").Perdiachei[]>;
    findOne(id: string): string;
    update(id: string, updatePerdiacheiDto: UpdatePerdiacheiDto): Promise<import("./entities/perdiachei.entity").Perdiachei>;
    updateWithPut(id: string, updatePerdiacheiDto: UpdatePerdiacheiDto): Promise<import("./entities/perdiachei.entity").Perdiachei>;
    remove(id: string): Promise<import("./entities/perdiachei.entity").Perdiachei>;
}
