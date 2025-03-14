// Dependencies
import { AggregateRoot } from '@nestjs/cqrs';

// Models
import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export interface EntitySchemaFactory<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> {
  create(entity: TEntity): TSchema;
  createFromSchema(entitySchema: TSchema): TEntity;
}
