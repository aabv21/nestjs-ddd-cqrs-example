import { CreateCamperDto } from './dto/create-camper.dto';
import { UpdateCamperDto } from './dto/update-camper.dto';
export declare class CampersService {
    create(createCamperDto: CreateCamperDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCamperDto: UpdateCamperDto): string;
    remove(id: number): string;
}
