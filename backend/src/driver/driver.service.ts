import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriverDto } from './dto/create-driver.dto';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  createDriver(data: CreateDriverDto) {
    return this.prisma.driver.create({ data });
  }

  getAllDrivers() {
    return this.prisma.driver.findMany();
  }
}
