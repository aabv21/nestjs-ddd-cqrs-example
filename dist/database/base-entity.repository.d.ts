import { AggregateRoot } from '@nestjs/cqrs';
import { EntityRepository } from './entity.repository';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';
export declare abstract class BaseEntityRepository<TSchema extends IdentifiableEntitySchema, TEntity extends AggregateRoot> extends EntityRepository<TSchema, TEntity> {
    findOneById(id: string): Promise<TEntity>;
    findOneAndReplaceById(id: string, entity: TEntity): Promise<void>;
    findAll(): Promise<TEntity[]>;
}
