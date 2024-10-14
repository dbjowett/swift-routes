import { Module } from '@nestjs/common';

import { DriverController } from './driver/driver.controller';
import { DriverService } from './driver/driver.service';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { PrismaModule } from './prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [DriverController, PlacesController],
  providers: [DriverService, PrismaModule, PlacesService],
  exports: [],
})
export class AppModule {}
