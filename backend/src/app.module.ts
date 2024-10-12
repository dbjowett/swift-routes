import { Module } from '@nestjs/common';

import { DriverController } from './driver/driver.controller';
import { DriverService } from './driver/driver.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DriverController],
  providers: [DriverService, PrismaModule],
  exports: [],
})
export class AppModule {}
