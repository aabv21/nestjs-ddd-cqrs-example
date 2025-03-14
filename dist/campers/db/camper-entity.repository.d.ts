import { Model } from 'mongoose';
import { Camper } from '../Camper';
import { BaseEntityRepository } from '../../database/base-entity.repository';
import { CamperSchema } from './camper.schema';
import { CamperSchemaFactory } from './camper-schema.factory';
export declare class CamperEntityRepository extends BaseEntityRepository<CamperSchema, Camper> {
    constructor(camperModel: Model<CamperSchema>, camperSchemaFactory: CamperSchemaFactory);
}
