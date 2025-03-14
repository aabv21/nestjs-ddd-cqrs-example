// Dependencies
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

// Queries
import { CampersQuery } from './campers.query';

// Repositories
import { CamperDtoRepository } from '../db/camper-dto.repository';
import { CamperDto } from '../dto/camper.dto';

@QueryHandler(CampersQuery)
export class CampersHandler implements IQueryHandler<CampersQuery> {
  constructor(private readonly repository: CamperDtoRepository) {}

  async execute(): Promise<CamperDto[]> {
    return this.repository.findAll();
  }
}
