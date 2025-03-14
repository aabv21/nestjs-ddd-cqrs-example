import { ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { UpdateAllergiesCommand } from './update-allergies.command';
import { CamperEntityRepository } from 'src/campers/db/camper-entity.repository';
export declare class UpdateAllergiesHandler implements ICommandHandler<UpdateAllergiesCommand> {
    private readonly camperEntityRepository;
    private readonly eventPublisher;
    constructor(camperEntityRepository: CamperEntityRepository, eventPublisher: EventPublisher);
    execute(command: UpdateAllergiesCommand): Promise<void>;
}
