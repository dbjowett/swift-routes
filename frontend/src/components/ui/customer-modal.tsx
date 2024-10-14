import { useQuery } from '@tanstack/react-query';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
export interface Place {
  place_id: string;
  name: string;
  formatted_address: string;
}
const searchPlaces = async (query: string): Promise<Place[]> => {
  const response = await fetch(`/api/places?query=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Failed to fetch places');
  return response.json();
};

export const CustomerModal = ({ closeModal }: { closeModal: () => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const {
    data: places,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['places'],
    queryFn: () => searchPlaces(searchQuery),
    enabled: searchQuery.length > 2,
  });

  console.log(places);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button role="combobox" aria-expanded={open} className=" w-full ">
            <Plus className="mr-2 h-4 w-4" />
            Click to search
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0">
          <Command>
            <CommandInput placeholder="Search for a place..." value={searchQuery} onValueChange={setSearchQuery} />
            <CommandList>
              <CommandEmpty>No places found.</CommandEmpty>
              <CommandGroup>
                {isLoading && <CommandItem>Loading...</CommandItem>}
                {error && <CommandItem>Error: {(error as Error).message}</CommandItem>}
                {places?.map((place) => (
                  <CommandItem key={place.place_id} onSelect={() => setSelectedPlace(place)}>
                    <Check className={`mr-2 h-4 w-4 ${selectedPlace?.place_id === place.place_id ? 'opacity-100' : 'opacity-0'}`} />
                    {place.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* FORM start*/}
    </div>
  );
};
