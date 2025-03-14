"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camper = void 0;
const cqrs_1 = require("@nestjs/cqrs");
class Camper extends cqrs_1.AggregateRoot {
    constructor(id, name, age, allergies) {
        super();
        this.id = id;
        this.name = name;
        this.age = age;
        this.allergies = allergies;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getAllergies() {
        return [...this.allergies];
    }
    updateAllergies(allergies) {
        const allergiesLower = allergies.map((allergy) => allergy.toLowerCase());
        if (allergiesLower.includes('chocolate')) {
            throw new Error('Allergy may not be chocolate');
        }
        this.allergies = [...allergies];
    }
}
exports.Camper = Camper;
//# sourceMappingURL=Camper.js.map