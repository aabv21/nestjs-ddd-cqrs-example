// Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Schemas
import { CamperSchema } from './camper.schema'; // could be in a different file for read operations

// DTOs
import { CamperDto } from '../dto/camper.dto';

@Injectable()
export class CamperDtoRepository {
  constructor(
    @InjectModel(CamperSchema.name)
    private readonly camperModel: Model<CamperSchema>,
  ) {}

  async findAll(): Promise<CamperDto[]> {
    const campers = await this.camperModel.find({}, {}, { lean: true });
    return campers.map((camper) => {
      const allergiesLower = camper.allergies.map((allergy) =>
        allergy.toLowerCase(),
      );
      const isAllergicToPeanuts = allergiesLower.includes('peanuts');

      return { ...camper, isAllergicToPeanuts };
    });
  }
}
