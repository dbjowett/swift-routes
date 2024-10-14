import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

export interface Place {
  place_id: string;
  name: string;
  formatted_address: string;
}

interface GooglePlace {
  business_status?: string;
  formatted_address?: string;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  place_id: string;
  rating: number;
  reference: string;
  user_ratings_total: number;
}

const formatResponse = (places: GooglePlace[]): Place[] =>
  places.map(({ place_id, name, formatted_address }) => ({
    place_id,
    name,
    formatted_address,
  }));

@Injectable()
export class PlacesService {
  constructor(private httpService: HttpService) {}

  async searchPlace(query: string): Promise<Place[]> {
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
      const { data } = await firstValueFrom(this.httpService.get(url));
      const res = formatResponse(data.results);
      console.log('Going back to FE:', res);
      return res;
    } catch (error) {
      console.error('Error calling Google Places API:', error.message);
      throw error;
    }
  }
}
