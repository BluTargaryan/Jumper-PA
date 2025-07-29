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
    },
    {
        id: 'JP',
        name: 'Japan',
        coordinate: {
            latitude: 36.2048,
            longitude: 138.2529,
        },
        attractions: [
            {
                name: 'Mount Fuji',
                coordinate: {
                    latitude: 35.3606,
                    longitude: 138.7274,
                },
                description: 'Iconic snow-capped volcanic peak',
            },
            {
                name: 'Senso-ji Temple',
                coordinate: {
                    latitude: 35.7147,
                    longitude: 139.7967,
                },
                description: 'Ancient Buddhist temple in Asakusa, Tokyo',
            }
        ]
    },
    {
        id: 'GB',
        name: 'United Kingdom',
        coordinate: {
            latitude: 55.3781,
            longitude: -3.4360,
        },
        attractions: [
            {
                name: 'Big Ben',
                coordinate: {
                    latitude: 51.5007,
                    longitude: -0.1246,
                },
                description: 'Iconic clock tower at the Houses of Parliament',
            },
            {
                name: 'Stonehenge',
                coordinate: {
                    latitude: 51.1789,
                    longitude: -1.8262,
                },
                description: 'Prehistoric monument in Wiltshire',
            }
        ]
    },
    {
        id: 'AU',
        name: 'Australia',
        coordinate: {
            latitude: -25.2744,
            longitude: 133.7751,
        },
        attractions: [
            {
                name: 'Sydney Opera House',
                coordinate: {
                    latitude: -33.8568,
                    longitude: 151.2153,
                },
                description: 'Iconic performing arts venue and architectural masterpiece',
            },
            {
                name: 'Great Barrier Reef',
                coordinate: {
                    latitude: -18.2871,
                    longitude: 147.6992,
                },
                description: 'World\'s largest coral reef system',
            }
        ]
    },
    {
        id: 'GR',
        name: 'Greece',
        coordinate: {
            latitude: 39.0742,
            longitude: 21.8243,
        },
        attractions: [
            {
                name: 'Acropolis',
                coordinate: {
                    latitude: 37.9715,
                    longitude: 23.7267,
                },
                description: 'Ancient citadel with Parthenon temple',
            },
            {
                name: 'Santorini',
                coordinate: {
                    latitude: 36.3932,
                    longitude: 25.4615,
                },
                description: 'Stunning volcanic island with white-washed buildings',
            }
        ]
    },
    {
        id: 'EG',
        name: 'Egypt',
        coordinate: {
            latitude: 26.8206,
            longitude: 30.8025,
        },
        attractions: [
            {
                name: 'Great Pyramids',
                coordinate: {
                    latitude: 29.9792,
                    longitude: 31.1342,
                },
                description: 'Ancient pyramids and Sphinx at Giza',
            },
            {
                name: 'Luxor Temple',
                coordinate: {
                    latitude: 25.6997,
                    longitude: 32.6368,
                },
                description: 'Ancient Egyptian temple complex',
            }
        ]
    },
    {
        id: 'TH',
        name: 'Thailand',
        coordinate: {
            latitude: 15.8700,
            longitude: 100.9925,
        },
        attractions: [
            {
                name: 'Grand Palace',
                coordinate: {
                    latitude: 13.7500,
                    longitude: 100.4918,
                },
                description: 'Former royal residence in Bangkok',
            },
            {
                name: 'Phi Phi Islands',
                coordinate: {
                    latitude: 7.7407,
                    longitude: 98.7784,
                },
                description: 'Stunning tropical islands in the Andaman Sea',
            }
        ]
    },
    {
        id: 'BR',
        name: 'Brazil',
        coordinate: {
            latitude: -14.2350,
            longitude: -51.9253,
        },
        attractions: [
            {
                name: 'Christ the Redeemer',
                coordinate: {
                    latitude: -22.9519,
                    longitude: -43.2105,
                },
                description: 'Iconic statue overlooking Rio de Janeiro',
            },
            {
                name: 'Iguazu Falls',
                coordinate: {
                    latitude: -25.6953,
                    longitude: -54.4367,
                },
                description: 'Massive waterfall system on Brazil-Argentina border',
            }
        ]
    },
    {
        id: 'IN',
        name: 'India',
        coordinate: {
            latitude: 20.5937,
            longitude: 78.9629,
        },
        attractions: [
            {
                name: 'Taj Mahal',
                coordinate: {
                    latitude: 27.1751,
                    longitude: 78.0421,
                },
                description: 'Iconic marble mausoleum in Agra',
            },
            {
                name: 'Jaipur City Palace',
                coordinate: {
                    latitude: 26.9255,
                    longitude: 75.8236,
                },
                description: 'Historic royal palace complex in the Pink City',
            }
        ]
    },
    {
        id: 'MA',
        name: 'Morocco',
        coordinate: {
            latitude: 31.7917,
            longitude: -7.0926,
        },
        attractions: [
            {
                name: 'Medina of Fez',
                coordinate: {
                    latitude: 34.0333,
                    longitude: -5.0000,
                },
                description: 'Historic walled city and cultural heart',
            },
            {
                name: 'Jardin Majorelle',
                coordinate: {
                    latitude: 31.6417,
                    longitude: -8.0000,
                },
                description: 'Stunning garden and artist retreat in Marrakech',
            }
        ]
    },
    {
        id: 'PT',
        name: 'Portugal',
        coordinate: {
            latitude: 39.3999,
            longitude: -8.2245,
        },
        attractions: [
            {
                name: 'Belém Tower',
                coordinate: {
                    latitude: 38.6916,
                    longitude: -9.2157,
                },
                description: 'Historic fortified tower in Lisbon',
            },
            {
                name: 'Porto Historic Center',
                coordinate: {
                    latitude: 41.1579,
                    longitude: -8.6291,
                },
                description: 'UNESCO World Heritage site with stunning architecture',
            }
        ]
    }
];

export default TOP_TOURIST_COUNTRIES;