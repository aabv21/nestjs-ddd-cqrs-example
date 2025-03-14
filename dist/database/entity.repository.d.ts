import { AggregateRoot } from '@nestjs/cqrs';
import { FilterQuery, Model } from 'mongoose';
import { EntitySchemaFactory } from './entity-schema.factory';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';
export declare abstract class EntityRepository<TSchema extends IdentifiableEntitySchema, TEntity extends AggregateRoot> {
    protected readonly entityModel: Model<TSchema>;
    protected readonly entitySchemaFactory: EntitySchemaFactory<TSchema, TEntity>;
    constructor(entityModel: Model<TSchema>, entitySchemaFactory: EntitySchemaFactory<TSchema, TEntity>);
    protected findOne(entityFilterQuery?: FilterQuery<TSchema>): Promise<TEntity>;
    protected find(entityFilterQuery?: FilterQuery<TSchema>): Promise<TEntity[]>;
    create(entity: TEntity): Promise<void>;
    protected findOneAndReplace(entityFilterQuery: FilterQuery<TSchema>, entity: TEntity): Promise<void>;
}
