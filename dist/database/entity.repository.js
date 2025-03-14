"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRepository = void 0;
const common_1 = require("@nestjs/common");
class EntityRepository {
    constructor(entityModel, entitySchemaFactory) {
        this.entityModel = entityModel;
        this.entitySchemaFactory = entitySchemaFactory;
    }
    async findOne(entityFilterQuery) {
        if (!entityFilterQuery) {
            throw new common_1.NotFoundException('Entity was not found.');
        }
        const entityDocument = (await this.entityModel.findOne(entityFilterQuery, {}, { lean: true }));
        if (!entityDocument) {
            throw new common_1.NotFoundException('Entity was not found.');
        }
        return this.entitySchemaFactory.createFromSchema(entityDocument);
    }
    async find(entityFilterQuery) {
        if (!entityFilterQuery) {
            throw new common_1.NotFoundException('Entities were not found.');
        }
        const documents = (await this.entityModel.find(entityFilterQuery, {}, { lean: true }));
        return documents.map((doc) => this.entitySchemaFactory.createFromSchema(doc));
    }
    async create(entity) {
        await new this.entityModel(this.entitySchemaFactory.create(entity)).save();
    }
    async findOneAndReplace(entityFilterQuery, entity) {
        const updatedEntityDocument = await this.entityModel.findOneAndReplace(entityFilterQuery, this.entitySchemaFactory.create(entity), {
            new: true,
            useFindAndModify: false,
            lean: true,
        });
        if (!updatedEntityDocument) {
            throw new common_1.NotFoundException('Unable to find the entity to replace.');
        }
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entity.repository.js.map