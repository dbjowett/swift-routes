import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';

@Injectable()
export class DriverService {
  createDriver(data: CreateDriverDto): string {
    console.log('Driver Data:', data);
    return 'Driver created';
  }
}
