import { Injectable } from '@nestjs/common';

import { CreateDriverDto } from './dto/create-driver.dto';

@Injectable()
export class DriverService {
  // constructor(private prisma: PrismaService) {}

  createDriver(data: CreateDriverDto) {
    console.log('Data', data);
    return 'hello';
    // return this.prisma.driver.create({ data });
  }
}
