// Dependencies
import { Injectable } from '@nestjs/common';

// Factories
import { EntityFactory } from '../database/entity.factory';

// Models
import { Camper } from './Camper';

// Utils
import { ObjectId } from 'mongodb';

// Events
import { CamperCreatedEvent } from 'src/events/camper-created.event';

// Repositories
import { CamperEntityRepository } from './db/camper-entity.repository';

@Injectable()
export class CamperFactory implements EntityFactory<Camper> {
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
  ) {}
  async create(
    name: string,
    age: number,
    allergies: string[],
  ): Promise<Camper> {
    const camper = new Camper(
      new ObjectId().toHexString(),
      name,
      age,
      allergies,
    );
    await this.camperEntityRepository.create(camper);
    camper.apply(new CamperCreatedEvent(camper.getId()));
    return camper;
  }
}
