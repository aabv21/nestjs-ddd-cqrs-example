import { Module } from '@nestjs/common';

// Controllers
import { CampersController } from './campers.controller';

// Cqrs
import { CqrsModule } from '@nestjs/cqrs';

// Factories
import { CamperFactory } from './camper.factory';
import { CamperSchemaFactory } from './db/camper-schema.factory';
import { CamperEntityRepository } from './db/camper-entity.repository';

// Command handlers
import { CommandHandlers } from './commands';

// Event handlers
import { EventHandlers } from '../events';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { CamperSchema } from './db/camper.schema';

// Queries
import { CampersQueriesHandlers } from './queries';

// Dto
import { CamperDtoRepository } from './db/camper-dto.repository';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: CamperSchema.name,
        schema: SchemaFactory.createForClass(CamperSchema),
      },
    ]),
  ],
  controllers: [CampersController],
  providers: [
    CamperEntityRepository,
    CamperSchemaFactory,
    CamperFactory,
    CamperDtoRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...CampersQueriesHandlers,
  ],
})
export class CampersModule {}
