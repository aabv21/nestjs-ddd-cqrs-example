// Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Models
import { Camper } from '../Camper';

// Database
import { BaseEntityRepository } from '../../database/base-entity.repository';
import { CamperSchema } from './camper.schema';
import { CamperSchemaFactory } from './camper-schema.factory';

@Injectable()
export class CamperEntityRepository extends BaseEntityRepository<
  CamperSchema,
  Camper
> {
  constructor(
    @InjectModel(CamperSchema.name) camperModel: Model<CamperSchema>,
    camperSchemaFactory: CamperSchemaFactory,
  ) {
    super(camperModel, camperSchemaFactory);
  }
}
