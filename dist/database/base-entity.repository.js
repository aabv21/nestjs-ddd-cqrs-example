"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityRepository = void 0;
const mongodb_1 = require("mongodb");
const entity_repository_1 = require("./entity.repository");
class BaseEntityRepository extends entity_repository_1.EntityRepository {
    async findOneById(id) {
        return this.findOne({ _id: new mongodb_1.ObjectId(id) });
    }
    async findOneAndReplaceById(id, entity) {
        await this.findOneAndReplace({ _id: new mongodb_1.ObjectId(id) }, entity);
    }
    async findAll() {
        return this.find({});
    }
}
exports.BaseEntityRepository = BaseEntityRepository;
//# sourceMappingURL=base-entity.repository.js.map