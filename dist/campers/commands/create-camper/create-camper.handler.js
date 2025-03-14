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
exports.CreateCamperHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_camper_command_1 = require("./create-camper.command");
const camper_factory_1 = require("../../camper.factory");
let CreateCamperHandler = class CreateCamperHandler {
    constructor(camperFactory, eventPublisher) {
        this.camperFactory = camperFactory;
        this.eventPublisher = eventPublisher;
    }
    async execute(command) {
        const { name, age, allergies } = command.createCamperRequest;
        const camper = this.eventPublisher.mergeObjectContext(await this.camperFactory.create(name, age, allergies));
        camper.commit();
    }
};
exports.CreateCamperHandler = CreateCamperHandler;
exports.CreateCamperHandler = CreateCamperHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_camper_command_1.CreateCamperCommand),
    __metadata("design:paramtypes", [camper_factory_1.CamperFactory,
        cqrs_1.EventPublisher])
], CreateCamperHandler);
//# sourceMappingURL=create-camper.handler.js.map