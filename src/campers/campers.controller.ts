// Dependencies
import { Controller, Post, Body } from '@nestjs/common';

// Dto
import { CreateCamperRequestDto } from './dto/request/create-camper-request.dto';

// Cqrs
import { CommandBus } from '@nestjs/cqrs';

// Commands
import { CreateCamperCommand } from './commands/create-camper.command';

@Controller('campers')
export class CampersController {
  constructor(private readonly commandBus: CommandBus) {}

  // @Get(':id')
  // async getCamper(@Param('id') camperId: string): Promise<void> {
  //   return this.campersService.findOne(+camperId);
  // }

  // @Get()
  // getCampers(): Promise<void> {
  //   return this.campersService.findAll();
  // }

  @Post()
  async createCamper(
    @Body() createCamperRequest: CreateCamperRequestDto,
  ): Promise<void> {
    await this.commandBus.execute<CreateCamperCommand, void>(
      new CreateCamperCommand(createCamperRequest),
    );
  }

  // @Patch(':id')
  // updateCamperAllergies(
  //   @Param('id') camperId: string,
  //   @Body() updateCamperAllergiesRequest: UpdateCamperAllergiesRequestDto,
  // ): Promise<void> {
  //   return this.campersService.update(+camperId, updateCamperAllergiesRequest);
  // }
}
