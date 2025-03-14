import { CreateCamperRequestDto } from './dto/request/create-camper-request.dto';
import { CommandBus } from '@nestjs/cqrs';
export declare class CampersController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    createCamper(createCamperRequest: CreateCamperRequestDto): Promise<void>;
}
