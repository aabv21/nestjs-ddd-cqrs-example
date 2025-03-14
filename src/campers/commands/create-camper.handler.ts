// Dependencies
import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';

// Commands
import { CreateCamperCommand } from './create-camper.command';

// Factories
import { CamperFactory } from '../camper.factory';

@CommandHandler(CreateCamperCommand)
export class CreateCamperHandler
  implements ICommandHandler<CreateCamperCommand>
{
  constructor(
    private readonly camperFactory: CamperFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute(command: CreateCamperCommand): Promise<void> {
    const { name, age, allergies } = command.createCamperRequest;
    const camper = this.eventPublisher.mergeObjectContext(
      await this.camperFactory.create(name, age, allergies),
    );
    camper.commit();
  }
}
