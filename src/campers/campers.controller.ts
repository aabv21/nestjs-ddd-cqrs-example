// Dependencies
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  BadRequestException,
  Get,
} from '@nestjs/common';

// Dto
import { CreateCamperRequestDto } from './dto/request/create-camper-request.dto';
import { UpdateCamperAllergiesRequestDto } from './dto/request/update-camper-allergies-request.dto';

// Cqrs
import { CommandBus, QueryBus } from '@nestjs/cqrs';

// Commands
import { CreateCamperCommand } from './commands/create-camper/create-camper.command';
import { UpdateAllergiesCommand } from './commands/update-allergies/update-allergies.command';

// Queries
import { CampersQuery } from './queries/campers.query';

// Dto
import { CamperDto } from './dto/camper.dto';

@Controller('campers')
export class CampersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  getCampers(): Promise<CamperDto[]> {
    return this.queryBus.execute<CampersQuery, CamperDto[]>(new CampersQuery());
  }

  @Post()
  async createCamper(
    @Body() createCamperRequest: CreateCamperRequestDto,
  ): Promise<void> {
    await this.commandBus.execute<CreateCamperCommand, void>(
      new CreateCamperCommand(createCamperRequest),
    );
  }

  @Patch(':id/allergies')
  async updateCamperAllergies(
    @Param('id') camperId: string,
    @Body() updateCamperAllergiesRequest: UpdateCamperAllergiesRequestDto,
  ): Promise<void> {
    const { allergies } = updateCamperAllergiesRequest;

    if (!allergies) {
      throw new BadRequestException('Allergies are required');
    }

    await this.commandBus.execute<UpdateAllergiesCommand, void>(
      new UpdateAllergiesCommand(camperId, allergies),
    );
  }
}
