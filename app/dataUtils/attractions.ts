export interface Attraction {
    id: string;
    name: string;
}

export const ATTRACTION_TYPES: Attraction[] = [
    {
        id: 'destinations',
        name: 'Destinations',
    },
    {
        id: 'adventure',
        name: 'Adventure',
    },
    {
        id:'events',
        name: 'Events',
    },
    {
        id: 'cuisine',
        name: 'Cuisine',
    }
] as const;

export default ATTRACTION_TYPES;
