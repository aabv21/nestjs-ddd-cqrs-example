import { IdentifiableEntitySchema } from '../../database/identifiable-entity.schema';
export declare class CamperSchema extends IdentifiableEntitySchema {
    readonly name: string;
    readonly age: number;
    readonly allergies: string[];
}
