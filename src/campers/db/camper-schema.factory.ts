// Dependencies
import { Injectable } from '@nestjs/common';

// Models
import { Camper } from '../Camper';
import { CamperSchema } from './camper.schema';

// Utils
import { EntitySchemaFactory } from '../../database/entity-schema.factory';
import { Types } from 'mongoose';

@Injectable()
export class CamperSchemaFactory
  implements EntitySchemaFactory<CamperSchema, Camper>
{
  create(camper: Camper): CamperSchema {
    return {
      _id: new Types.ObjectId(camper.getId()),
      name: camper.getName(),
      age: camper.getAge(),
      allergies: camper.getAllergies(),
    };
  }

  createFromSchema(camperSchema: CamperSchema): Camper {
    return new Camper(
      camperSchema._id.toHexString(),
      camperSchema.name,
      camperSchema.age,
      camperSchema.allergies,
    );
  }
}
