export type Attraction = {
    name: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
    description: string;
};

export type CountryData = {
    id: string;
    name: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
    attractions: Attraction[];
};

export const TOP_TOURIST_COUNTRIES: CountryData[] = [
    {
        id: 'FR',
        name: 'France',
        coordinate: {
            latitude: 46.2276,
            longitude: 2.2137,
        },
        attractions: [
            {
                name: 'Eiffel Tower',
                coordinate: {
                    latitude: 48.8584,
                    longitude: 2.2945,
                },
                description: 'Iconic iron lattice tower on the Champ de Mars',
            },
            {
                name: 'Palace of Versailles',
                coordinate: {
                    latitude: 48.8049,
                    longitude: 2.1204,
                },
                description: 'Opulent royal château and gardens',
            }
        ]
    },
    {
        id: 'ES',
        name: 'Spain',
        coordinate: {
            latitude: 40.4637,
            longitude: -3.7492,
        },
        attractions: [
            {
                name: 'Sagrada Familia',
                coordinate: {
                    latitude: 41.4036,
                    longitude: 2.1744,
                },
                description: 'Gaudí\'s unfinished masterpiece basilica',
            },
            {
                name: 'Alhambra',
                coordinate: {
                    latitude: 37.1760,
                    longitude: -3.5894,
                },
                description: 'Stunning palace and fortress complex in Granada',
            }
        ]
    },
    {
        id: 'US',
        name: 'United States',
        coordinate: {
            latitude: 37.0902,
            longitude: -95.7129,
        },
        attractions: [
            {
                name: 'Statue of Liberty',
                coordinate: {
                    latitude: 40.6892,
                    longitude: -74.0445,
                },
                description: 'Iconic symbol of freedom in New York Harbor',
            },
            {
                name: 'Grand Canyon',
                coordinate: {
                    latitude: 36.0544,
                    longitude: -112.1401,
                },
                description: 'Vast natural wonder in Arizona',
            }
        ]
    },
    {
        id: 'IT',
        name: 'Italy',
        coordinate: {
            latitude: 41.8719,
            longitude: 12.5674,
        },
        attractions: [
            {
                name: 'Colosseum',
                coordinate: {
                    latitude: 41.8902,
                    longitude: 12.4922,
                },
                description: 'Ancient Roman amphitheater',
            },
            {
                name: 'Venice Canals',
                coordinate: {
                    latitude: 45.4371,
                    longitude: 12.3326,
                },
                description: 'Historic waterways of Venice',
            }
        ]
    },
    {
        id: 'TR',
        name: 'Turkey',
        coordinate: {
            latitude: 38.9637,
            longitude: 35.2433,
        },
        attractions: [
            {
                name: 'Hagia Sophia',
                coordinate: {
                    latitude: 41.0086,
                    longitude: 28.9802,
                },
                description: 'Ancient Byzantine church turned mosque',
            },
            {
                name: 'Pamukkale',
                coordinate: {
                    latitude: 37.9137,
                    longitude: 29.1187,
                },
                description: 'Natural travertine terraces and thermal pools',
            }
        ]
    }
];

export default TOP_TOURIST_COUNTRIES;