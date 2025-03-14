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
exports.CampersController = void 0;
const common_1 = require("@nestjs/common");
const create_camper_request_dto_1 = require("./dto/request/create-camper-request.dto");
const update_camper_allergies_request_dto_1 = require("./dto/request/update-camper-allergies-request.dto");
const cqrs_1 = require("@nestjs/cqrs");
const create_camper_command_1 = require("./commands/create-camper/create-camper.command");
const update_allergies_command_1 = require("./commands/update-allergies/update-allergies.command");
const campers_query_1 = require("./queries/campers.query");
let CampersController = class CampersController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    getCampers() {
        return this.queryBus.execute(new campers_query_1.CampersQuery());
    }
    async createCamper(createCamperRequest) {
        await this.commandBus.execute(new create_camper_command_1.CreateCamperCommand(createCamperRequest));
    }
    async updateCamperAllergies(camperId, updateCamperAllergiesRequest) {
        const { allergies } = updateCamperAllergiesRequest;
        if (!allergies) {
            throw new common_1.BadRequestException('Allergies are required');
        }
        await this.commandBus.execute(new update_allergies_command_1.UpdateAllergiesCommand(camperId, allergies));
    }
};
exports.CampersController = CampersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampersController.prototype, "getCampers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_camper_request_dto_1.CreateCamperRequestDto]),
    __metadata("design:returntype", Promise)
], CampersController.prototype, "createCamper", null);
__decorate([
    (0, common_1.Patch)(':id/allergies'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_camper_allergies_request_dto_1.UpdateCamperAllergiesRequestDto]),
    __metadata("design:returntype", Promise)
], CampersController.prototype, "updateCamperAllergies", null);
exports.CampersController = CampersController = __decorate([
    (0, common_1.Controller)('campers'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], CampersController);
//# sourceMappingURL=campers.controller.js.map