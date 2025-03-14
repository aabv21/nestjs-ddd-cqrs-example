// Dependencies
import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Modules
import { CampersModule } from './campers/campers.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [CampersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
