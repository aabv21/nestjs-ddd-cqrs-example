// DTOs
import { CreateCamperRequestDto } from '../../dto/request/create-camper-request.dto';

export class CreateCamperCommand {
  constructor(public readonly createCamperRequest: CreateCamperRequestDto) {}
}
