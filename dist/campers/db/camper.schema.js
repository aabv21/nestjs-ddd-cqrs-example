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
exports.CamperSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const identifiable_entity_schema_1 = require("../../database/identifiable-entity.schema");
let CamperSchema = class CamperSchema extends identifiable_entity_schema_1.IdentifiableEntitySchema {
};
exports.CamperSchema = CamperSchema;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CamperSchema.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], CamperSchema.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], CamperSchema.prototype, "allergies", void 0);
exports.CamperSchema = CamperSchema = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, collection: 'campers' })
], CamperSchema);
//# sourceMappingURL=camper.schema.js.map