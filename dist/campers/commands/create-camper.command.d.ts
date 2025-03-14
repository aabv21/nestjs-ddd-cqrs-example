import { CreateCamperRequestDto } from '../dto/request/create-camper-request.dto';
export declare class CreateCamperCommand {
    readonly createCamperRequest: CreateCamperRequestDto;
    constructor(createCamperRequest: CreateCamperRequestDto);
}
