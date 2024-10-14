import { Controller, Get, Query } from '@nestjs/common';
import { Place, PlacesService } from './places.service';

@Controller('/api/places/')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get('/')
  searchPlace(@Query('query') query: string): Promise<Place[]> {
    return this.placesService.searchPlace(query);
  }
}
