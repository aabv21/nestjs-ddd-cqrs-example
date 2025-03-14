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
exports.CampersHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const campers_query_1 = require("./campers.query");
const camper_dto_repository_1 = require("../db/camper-dto.repository");
let CampersHandler = class CampersHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
};
exports.CampersHandler = CampersHandler;
exports.CampersHandler = CampersHandler = __decorate([
    (0, cqrs_1.QueryHandler)(campers_query_1.CampersQuery),
    __metadata("design:paramtypes", [camper_dto_repository_1.CamperDtoRepository])
], CampersHandler);
//# sourceMappingURL=campers.handler.js.map