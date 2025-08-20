import { MaterialIcons } from "@expo/vector-icons";

export interface Attraction {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const ATTRACTION_TYPES: Attraction[] = [
    {
        id: 'destinations',
        name: 'Destinations',
        icon: 'place',
    },
    {
        id: 'adventure',
        name: 'Adventure',
        icon: 'terrain',
    },
    {
        id:'events',
        name: 'Events',
        icon: 'event',
    },
    {
        id: 'cuisine',
        name: 'Cuisine',
        icon: 'restaurant',
    },
    {
        id: 'culture',
        name: 'Culture',
        icon: 'theater-comedy',
    },
] as const;

export default ATTRACTION_TYPES;
