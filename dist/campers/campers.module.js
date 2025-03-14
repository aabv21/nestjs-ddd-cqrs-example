"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampersModule = void 0;
const common_1 = require("@nestjs/common");
const campers_controller_1 = require("./campers.controller");
const cqrs_1 = require("@nestjs/cqrs");
const camper_factory_1 = require("./camper.factory");
const camper_schema_factory_1 = require("./db/camper-schema.factory");
const camper_entity_repository_1 = require("./db/camper-entity.repository");
const commands_1 = require("./commands");
const events_1 = require("../events");
const mongoose_1 = require("@nestjs/mongoose");
const camper_schema_1 = require("./db/camper.schema");
let CampersModule = class CampersModule {
};
exports.CampersModule = CampersModule;
exports.CampersModule = CampersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: camper_schema_1.CamperSchema.name,
                    schema: mongoose_1.SchemaFactory.createForClass(camper_schema_1.CamperSchema),
                },
            ]),
        ],
        controllers: [campers_controller_1.CampersController],
        providers: [
            camper_entity_repository_1.CamperEntityRepository,
            camper_schema_factory_1.CamperSchemaFactory,
            camper_factory_1.CamperFactory,
            ...commands_1.CommandHandlers,
            ...events_1.EventHandlers,
        ],
    })
], CampersModule);
//# sourceMappingURL=campers.module.js.map