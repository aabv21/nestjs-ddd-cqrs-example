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
exports.CamperFactory = void 0;
const common_1 = require("@nestjs/common");
const Camper_1 = require("./Camper");
const mongodb_1 = require("mongodb");
const camper_created_event_1 = require("../events/camper-created.event");
const camper_entity_repository_1 = require("./db/camper-entity.repository");
let CamperFactory = class CamperFactory {
    constructor(camperEntityRepository) {
        this.camperEntityRepository = camperEntityRepository;
    }
    async create(name, age, allergies) {
        const camper = new Camper_1.Camper(new mongodb_1.ObjectId().toHexString(), name, age, allergies);
        await this.camperEntityRepository.create(camper);
        camper.apply(new camper_created_event_1.CamperCreatedEvent(camper.getId()));
        return camper;
    }
};
exports.CamperFactory = CamperFactory;
exports.CamperFactory = CamperFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [camper_entity_repository_1.CamperEntityRepository])
], CamperFactory);
//# sourceMappingURL=camper.factory.js.map