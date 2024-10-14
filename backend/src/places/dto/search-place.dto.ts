import { IsString, MinLength } from 'class-validator';

export class SearchPlaceDto {
  @IsString()
  @MinLength(2, { message: 'Search query must be 2 characters long' })
  query: string;
}
