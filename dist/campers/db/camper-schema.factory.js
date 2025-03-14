"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamperSchemaFactory = void 0;
const common_1 = require("@nestjs/common");
const Camper_1 = require("../Camper");
const mongoose_1 = require("mongoose");
let CamperSchemaFactory = class CamperSchemaFactory {
    create(camper) {
        return {
            _id: new mongoose_1.Types.ObjectId(camper.getId()),
            name: camper.getName(),
            age: camper.getAge(),
            allergies: camper.getAllergies(),
        };
    }
    createFromSchema(camperSchema) {
        return new Camper_1.Camper(camperSchema._id.toHexString(), camperSchema.name, camperSchema.age, camperSchema.allergies);
    }
};
exports.CamperSchemaFactory = CamperSchemaFactory;
exports.CamperSchemaFactory = CamperSchemaFactory = __decorate([
    (0, common_1.Injectable)()
], CamperSchemaFactory);
//# sourceMappingURL=camper-schema.factory.js.map