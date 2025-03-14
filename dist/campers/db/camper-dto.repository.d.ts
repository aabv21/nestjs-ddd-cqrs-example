import { Model } from 'mongoose';
import { CamperSchema } from './camper.schema';
import { CamperDto } from '../dto/camper.dto';
export declare class CamperDtoRepository {
    private readonly camperModel;
    constructor(camperModel: Model<CamperSchema>);
    findAll(): Promise<CamperDto[]>;
}
