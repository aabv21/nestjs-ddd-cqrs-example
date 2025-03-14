import { EntityFactory } from '../database/entity.factory';
import { Camper } from './Camper';
import { CamperEntityRepository } from './db/camper-entity.repository';
export declare class CamperFactory implements EntityFactory<Camper> {
    private readonly camperEntityRepository;
    constructor(camperEntityRepository: CamperEntityRepository);
    create(name: string, age: number, allergies: string[]): Promise<Camper>;
}
