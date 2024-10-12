import { Module } from '@nestjs/common';

import { DriverController } from './driver/driver.controller';
import { DriverService } from './driver/driver.service';

@Module({
  imports: [],
  controllers: [DriverController],
  providers: [DriverService],
  exports: [],
})
export class AppModule {}
