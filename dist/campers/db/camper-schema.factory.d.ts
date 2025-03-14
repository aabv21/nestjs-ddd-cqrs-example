import { Camper } from '../Camper';
import { CamperSchema } from './camper.schema';
import { EntitySchemaFactory } from '../../database/entity-schema.factory';
export declare class CamperSchemaFactory implements EntitySchemaFactory<CamperSchema, Camper> {
    create(camper: Camper): CamperSchema;
    createFromSchema(camperSchema: CamperSchema): Camper;
}
