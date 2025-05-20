"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerdiacheiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PerdiacheiService = class PerdiacheiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToEntity(perdiachei) {
        return {
            id: perdiachei.id,
            detalhes: perdiachei.detalhes,
            localizacao: perdiachei.localizacao,
            data: perdiachei.data,
            status: perdiachei.status,
            tipo: perdiachei.tipo,
        };
    }
    async create(createPerdiacheiDto) {
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
    async update(id, updatePerdiacheiDto) {
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
    async findAll() {
        const perdiachei = await this.prisma.perdiachei.findMany();
        return perdiachei.map((perdiachei) => this.mapToEntity(perdiachei));
    }
    findOne(id) {
        return `This action returns a #${id} perdiachei`;
    }
    async remove(id) {
        const perdiachei = await this.prisma.perdiachei.delete({
            where: { id },
        });
        return this.mapToEntity(perdiachei);
    }
};
exports.PerdiacheiService = PerdiacheiService;
exports.PerdiacheiService = PerdiacheiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PerdiacheiService);
//# sourceMappingURL=perdiachei.service.js.map