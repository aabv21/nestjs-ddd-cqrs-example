// Dependencies
import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';

// Commands
import { UpdateAllergiesCommand } from './update-allergies.command';

// Factories
import { CamperEntityRepository } from 'src/campers/db/camper-entity.repository';

@CommandHandler(UpdateAllergiesCommand)
export class UpdateAllergiesHandler
  implements ICommandHandler<UpdateAllergiesCommand>
{
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute(command: UpdateAllergiesCommand): Promise<void> {
    const { camperId, allergies } = command;
    const camper = this.eventPublisher.mergeObjectContext(
      await this.camperEntityRepository.findOneById(camperId),
    );
    camper.updateAllergies(allergies);
    await this.camperEntityRepository.findOneAndReplaceById(camperId, camper);
    camper.commit();
  }
}
