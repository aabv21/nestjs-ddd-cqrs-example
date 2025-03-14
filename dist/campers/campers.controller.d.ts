import { CreateCamperRequestDto } from './dto/request/create-camper-request.dto';
import { UpdateCamperAllergiesRequestDto } from './dto/request/update-camper-allergies-request.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CamperDto } from './dto/camper.dto';
export declare class CampersController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getCampers(): Promise<CamperDto[]>;
    createCamper(createCamperRequest: CreateCamperRequestDto): Promise<void>;
    updateCamperAllergies(camperId: string, updateCamperAllergiesRequest: UpdateCamperAllergiesRequestDto): Promise<void>;
}
