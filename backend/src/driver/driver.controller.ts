import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';

@Controller('/api/driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('/')
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get('/')
  getAllDrivers() {
    return this.driverService.getAllDrivers();
  }
}
