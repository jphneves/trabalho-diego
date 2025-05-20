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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerdiacheiController = void 0;
const common_1 = require("@nestjs/common");
const perdiachei_service_1 = require("./perdiachei.service");
const create_perdiachei_dto_1 = require("./dto/create-perdiachei.dto");
const update_perdiachei_dto_1 = require("./dto/update-perdiachei.dto");
let PerdiacheiController = class PerdiacheiController {
    perdiacheiService;
    constructor(perdiacheiService) {
        this.perdiacheiService = perdiacheiService;
    }
    create(createPerdiacheiDto) {
        return this.perdiacheiService.create(createPerdiacheiDto);
    }
    findAll() {
        return this.perdiacheiService.findAll();
    }
    findOne(id) {
        return this.perdiacheiService.findOne(+id);
    }
    update(id, updatePerdiacheiDto) {
        return this.perdiacheiService.update(+id, updatePerdiacheiDto);
    }
    updateWithPut(id, updatePerdiacheiDto) {
        return this.perdiacheiService.update(+id, updatePerdiacheiDto);
    }
    remove(id) {
        return this.perdiacheiService.remove(+id);
    }
};
exports.PerdiacheiController = PerdiacheiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_perdiachei_dto_1.CreatePerdiacheiDto]),
    __metadata("design:returntype", void 0)
], PerdiacheiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PerdiacheiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerdiacheiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_perdiachei_dto_1.UpdatePerdiacheiDto]),
    __metadata("design:returntype", void 0)
], PerdiacheiController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_perdiachei_dto_1.UpdatePerdiacheiDto]),
    __metadata("design:returntype", void 0)
], PerdiacheiController.prototype, "updateWithPut", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerdiacheiController.prototype, "remove", null);
exports.PerdiacheiController = PerdiacheiController = __decorate([
    (0, common_1.Controller)('perdiachei'),
    __metadata("design:paramtypes", [perdiachei_service_1.PerdiacheiService])
], PerdiacheiController);
//# sourceMappingURL=perdiachei.controller.js.map