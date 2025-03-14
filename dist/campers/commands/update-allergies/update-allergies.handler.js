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
exports.UpdateAllergiesHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_allergies_command_1 = require("./update-allergies.command");
const camper_entity_repository_1 = require("../../db/camper-entity.repository");
let UpdateAllergiesHandler = class UpdateAllergiesHandler {
    constructor(camperEntityRepository, eventPublisher) {
        this.camperEntityRepository = camperEntityRepository;
        this.eventPublisher = eventPublisher;
    }
    async execute(command) {
        const { camperId, allergies } = command;
        const camper = this.eventPublisher.mergeObjectContext(await this.camperEntityRepository.findOneById(camperId));
        camper.updateAllergies(allergies);
        await this.camperEntityRepository.findOneAndReplaceById(camperId, camper);
        camper.commit();
    }
};
exports.UpdateAllergiesHandler = UpdateAllergiesHandler;
exports.UpdateAllergiesHandler = UpdateAllergiesHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_allergies_command_1.UpdateAllergiesCommand),
    __metadata("design:paramtypes", [camper_entity_repository_1.CamperEntityRepository,
        cqrs_1.EventPublisher])
], UpdateAllergiesHandler);
//# sourceMappingURL=update-allergies.handler.js.map