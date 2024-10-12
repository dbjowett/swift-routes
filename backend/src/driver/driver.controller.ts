import { Body, Controller, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';

@Controller('/api/driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('/')
  createDriver(@Body() createDriverDto: CreateDriverDto): string {
    return this.driverService.createDriver(createDriverDto);
  }
}
