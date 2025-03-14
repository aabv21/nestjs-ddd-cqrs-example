import { IEventHandler } from '@nestjs/cqrs';
import { CamperCreatedEvent } from './camper-created.event';
export declare class CamperCreatedHandler implements IEventHandler<CamperCreatedEvent> {
    handle({ camperId }: CamperCreatedEvent): Promise<void>;
}
