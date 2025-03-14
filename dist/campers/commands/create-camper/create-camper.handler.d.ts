import { ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateCamperCommand } from './create-camper.command';
import { CamperFactory } from '../../camper.factory';
export declare class CreateCamperHandler implements ICommandHandler<CreateCamperCommand> {
    private readonly camperFactory;
    private readonly eventPublisher;
    constructor(camperFactory: CamperFactory, eventPublisher: EventPublisher);
    execute(command: CreateCamperCommand): Promise<void>;
}
