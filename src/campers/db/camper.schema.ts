// Dependencies
import { Prop, Schema } from '@nestjs/mongoose';

// Utils
import { IdentifiableEntitySchema } from '../../database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'campers' })
export class CamperSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name!: string;

  @Prop()
  readonly age!: number;

  @Prop()
  readonly allergies!: string[];
}
