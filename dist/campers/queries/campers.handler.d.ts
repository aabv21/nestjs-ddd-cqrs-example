import { IQueryHandler } from '@nestjs/cqrs';
import { CampersQuery } from './campers.query';
import { CamperDtoRepository } from '../db/camper-dto.repository';
import { CamperDto } from '../dto/camper.dto';
export declare class CampersHandler implements IQueryHandler<CampersQuery> {
    private readonly repository;
    constructor(repository: CamperDtoRepository);
    execute(): Promise<CamperDto[]>;
}
