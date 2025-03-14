"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampersService = void 0;
const common_1 = require("@nestjs/common");
let CampersService = class CampersService {
    create(createCamperDto) {
        return 'This action adds a new camper';
    }
    findAll() {
        return `This action returns all campers`;
    }
    findOne(id) {
        return `This action returns a #${id} camper`;
    }
    update(id, updateCamperDto) {
        return `This action updates a #${id} camper`;
    }
    remove(id) {
        return `This action removes a #${id} camper`;
    }
};
exports.CampersService = CampersService;
exports.CampersService = CampersService = __decorate([
    (0, common_1.Injectable)()
], CampersService);
//# sourceMappingURL=campers.service.js.map