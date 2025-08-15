export type Attraction = {
    name: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
};

export type CountryData = {
    id: string;
    name: string;
    description: string;
    image: string;
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
        description: "France enchants visitors with its timeless charm, from the romantic streets of Paris to the sun-drenched lavender fields of Provence. Experience world-class cuisine, iconic art museums, historic châteaux, and the sophisticated French way of life.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
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
                longDescription: "The Eiffel Tower, a global symbol of Paris and French culture, stands majestically at 324 meters tall. Built in 1889, this architectural marvel offers breathtaking views of the City of Light from its three observation levels. By day, admire its intricate ironwork; by night, witness its spectacular hourly light show that illuminates the Parisian skyline.",
                image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/10/30/20/08/eiffel-tower-1784212_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/14/17/57/paris-988112_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/06/18/25/eiffel-tower-974997_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/09/29/22/53/tower-964640_1280.jpg",
                ]
            },
            {
                name: 'Palace of Versailles',
                coordinate: {
                    latitude: 48.8049,
                    longitude: 2.1204,
                },
                description: 'Opulent royal château and gardens',
                longDescription: "The Palace of Versailles epitomizes royal grandeur at its finest. This UNESCO World Heritage site was the seat of power during the French monarchy, featuring the spectacular Hall of Mirrors, lavishly decorated State Apartments, and meticulously manicured gardens spanning 800 hectares. The palace showcases French Baroque architecture at its peak and houses priceless artworks and historical artifacts.",
                image: "https://images.unsplash.com/photo-1591828353335-197466da2a4e?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/08/11/19/58/versailles-4399814_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/30/13/42/venice-3118803_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/07/31/19/30/architecture-2560281_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/04/22/17/28/paris-106502_1280.jpg",
                ]
            },
            {
                name: 'Mont Saint-Michel',
                coordinate: {
                    latitude: 48.6361,
                    longitude: -1.5115,
                },
                description: 'Medieval abbey on a tidal island',
                longDescription: "Mont Saint-Michel is a magical island topped by a gravity-defying medieval monastery. This UNESCO site rises dramatically from the bay where Normandy and Brittany meet. The abbey's spectacular architecture, combined with the extraordinary tides that cut it off from the mainland, make it one of France's most captivating sights.",
                image: "https://images.unsplash.com/photo-1671010496251-22eab06e3292?q=80&w=1171&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/01/10/19/21/mont-saint-michel-4756046_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/08/21/09/14/island-4420629_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/03/22/12/37/mont-saint-michel-4957008_1280.jpg",
                ]
            },
            {
                name: 'Louvre Museum',
                coordinate: {
                    latitude: 48.8606,
                    longitude: 2.3376,
                },
                description: 'World\'s largest art museum and historic monument',
                longDescription: "The Louvre, housed in a historic palace, is the world's most visited museum. Home to thousands of works of art including the Mona Lisa and Venus de Milo, its collection spans human civilization and culture. The modern glass pyramid entrance contrasts beautifully with the classical architecture, symbolizing Paris's blend of history and innovation.",
                image: "https://images.unsplash.com/photo-1587422023429-24edff4116a5?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/07/23/15/33/museum-5431661_1280.jpg",
                    "https://cdn.pixabay.com/photo/2012/11/20/06/11/nike-66681_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/06/14/17/42/louvre-museum-2402806_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/09/22/12/39/louvre-2775430_1280.jpg",
                ]
            },
            {
                name: 'French Riviera',
                coordinate: {
                    latitude: 43.7102,
                    longitude: 7.2620,
                },
                description: 'Glamorous Mediterranean coastline',
                longDescription: "The French Riviera (Côte d'Azur) embodies Mediterranean luxury and charm. From Nice's Promenade des Anglais to Monaco's Monte Carlo Casino, this stretch of coastline offers pristine beaches, yacht-filled harbors, and charming coastal towns. Its perfect climate and stunning scenery have long attracted artists, celebrities, and travelers seeking the ultimate in coastal elegance.",
                image: "https://images.unsplash.com/photo-1673209439549-c7ea3ff7c507?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/04/07/01/04/monaco-2209822_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/05/11/17/08/boat-5159224_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/03/27/22/06/monaco-3267590_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/03/26/18/14/menton-7093371_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'ES',
        name: 'Spain',
        description: "Spain captivates with its passionate culture, from flamenco rhythms to late-night tapas bars. Discover architectural marvels like Gaudí's works, historic medieval towns, sun-soaked beaches, and the vibrant spirit of its people.",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "The Sagrada Familia is Antoni Gaudí's most ambitious project and Barcelona's most iconic landmark. This extraordinary basilica combines Gothic and Art Nouveau forms in a unique, organic style. Still under construction after more than 140 years, its intricate facades tell biblical stories through sculpture, while its interior features tree-like columns and spectacular stained glass that bathes the space in colorful light.",
                image: "https://images.unsplash.com/photo-1650964827770-421afa7960ac?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/08/31/07/29/la-sagrada-familia-915071_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/08/07/10/22/buildings-2602324_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/09/18/16/51/spain-183498_1280.jpg",
                ]
            },
            {
                name: 'Alhambra',
                coordinate: {
                    latitude: 37.1760,
                    longitude: -3.5894,
                },
                description: 'Stunning palace and fortress complex in Granada',
                longDescription: "The Alhambra is a breathtaking palace-city that showcases the splendor of medieval Islamic architecture. This UNESCO World Heritage site features exquisite arabesque designs, peaceful courtyards with reflecting pools, and the stunning Generalife gardens. Its intricate tilework, carved stucco, and serene water features create an atmosphere of paradise on earth, while offering panoramic views of Granada below.",
                image: "https://images.unsplash.com/photo-1620677368158-32b1293fac36?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/10/03/09/38/spain-4522800_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/11/04/20/49/alhambra-517149_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/26/07/32/granada-3107982_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/01/17/19/31/alhambra-4773861_1280.jpg",
                ]
            },
            {
                name: 'Plaza de España',
                coordinate: {
                    latitude: 37.3774,
                    longitude: -5.9867,
                },
                description: 'Grand plaza in Seville with stunning architecture',
                longDescription: "The Plaza de España in Seville is a stunning example of Spanish Renaissance Revival architecture. Built for the 1929 Ibero-American Exposition, this semi-circular plaza features beautiful tile work representing Spain's provinces, elegant bridges, and a central fountain. The combination of traditional and Art Deco elements creates a uniquely Spanish architectural masterpiece.",
                image: "https://images.unsplash.com/photo-1636060823063-fe90cc147c06?q=80&w=1176&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/08/29/20/46/barcelona-913487_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/09/16/15/58/sevilla-182831_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/06/07/19/33/plaza-de-espana-3460788_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/10/20/17/21/seville-1756100_1280.jpg",
                ]
            },
            {
                name: 'Park Güell',
                coordinate: {
                    latitude: 41.4145,
                    longitude: 2.1527,
                },
                description: 'Whimsical park featuring Gaudí\'s artistic works',
                longDescription: "Park Güell is a fantastical public park designed by Antoni Gaudí, featuring his signature architectural style. The park's iconic lizard fountain, serpentine bench, and gingerbread-like houses seem to come from a fairy tale. Its hilltop location offers panoramic views of Barcelona while showcasing Gaudí's unique blend of natural and architectural elements.",
                image: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?q=80&w=1052&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/07/13/17/43/barcelona-392668_1280.jpg",
                    "https://cdn.pixabay.com/photo/2011/03/16/14/38/park-guell-5239_1280.jpg",
                    "https://cdn.pixabay.com/photo/2011/03/16/14/37/park-guell-5236_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/03/12/21/34/fun-4926289_1280.jpg",
                ]
            },
            {
                name: 'Royal Palace of Madrid',
                coordinate: {
                    latitude: 40.4180,
                    longitude: -3.7144,
                },
                description: 'Official residence of the Spanish Royal Family',
                longDescription: "The Royal Palace of Madrid is Europe's largest functioning royal palace. Though no longer the king's residence, this magnificent building showcases Spanish royal history through its grand state rooms, armory, and royal pharmacy. The palace's Baroque architecture, frescoed ceilings, and priceless artworks reflect Spain's imperial past.",
                image: "https://images.unsplash.com/photo-1634061799853-fea17398fe24?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/12/02/00/13/royal-palace-1876479_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/06/08/12/58/royal-3462249_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/07/14/20/53/madrid-162717_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/07/16/20/26/palace-394952_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'US',
        name: 'United States',
        description: "The United States offers an incredibly diverse travel experience, from bustling cities like New York to the natural wonders of the Grand Canyon. Explore national parks, iconic landmarks, diverse cultures, and endless entertainment options.",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2069&auto=format&fit=crop",
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
                longDescription: "The Statue of Liberty, a gift from France to America, has welcomed countless visitors to New York since 1886. Standing 305 feet tall, this iconic copper statue represents freedom and democracy worldwide. Visitors can explore the museum, climb to the crown for spectacular harbor views, and learn about the millions of immigrants who passed under her gaze seeking a new life in America.",
                image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1199&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/09/21/21/23/statue-of-liberty-6644930_1280.jpg",
                    "https://cdn.pixabay.com/photo/2024/09/13/16/44/statue-of-liberty-9045407_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/10/20/14/03/usa-4563741_1280.jpg",
                ]
            },
            {
                name: 'Grand Canyon',
                coordinate: {
                    latitude: 36.0544,
                    longitude: -112.1401,
                },
                description: 'Vast natural wonder in Arizona',
                longDescription: "The Grand Canyon is nature's masterpiece, carved by the Colorado River over millions of years. This vast chasm stretches 277 miles long, up to 18 miles wide, and a mile deep, showcasing billions of years of geological history in its colorful rock layers. Visitors can hike rim trails, take helicopter tours, raft the river, or simply marvel at the spectacular sunrise and sunset views.",
                image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/11/18/19/00/canyon-1836412_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/03/23/13/grand-canyon-1235221_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/03/27/15/08/backpacker-2179282_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/12/15/07/54/horseshoe-bend-1908283_1280.jpg",
                ]
            },
            {
                name: 'Yellowstone National Park',
                coordinate: {
                    latitude: 44.4280,
                    longitude: -110.5885,
                },
                description: 'First national park with unique geothermal features',
                longDescription: "Yellowstone, America's first national park, is a wonderland of geothermal features including the Old Faithful geyser. The park showcases dramatic canyons, alpine rivers, lush forests, hot springs, and gushing geysers. Home to hundreds of animal species, it's one of the country's most unique and diverse ecosystems.",
                image: "https://images.unsplash.com/photo-1570470276043-874a41ad9b40?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/10/07/13/08/sunlight-1721525_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/10/22/12/07/yellowstone-national-park-1760572_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/03/31/01/13/herd-7102011_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/10/21/14/20/yellowstone-national-park-6729237_1280.jpg",
                ]
            },
            {
                name: 'Times Square',
                coordinate: {
                    latitude: 40.7580,
                    longitude: -73.9855,
                },
                description: 'Iconic intersection known as The Crossroads of the World',
                longDescription: "Times Square, the heart of New York City, dazzles with its massive digital billboards, Broadway theaters, and endless energy. This famous intersection sees over 350,000 pedestrians daily, making it one of the world's busiest pedestrian areas. Its bright lights and vibrant atmosphere have made it a global symbol of entertainment and urban culture.",
                image: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1176&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/08/12/04/01/new-york-1587558_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/06/08/20/58/nyc-5276112_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/06/08/21/01/usa-123392_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/06/08/20/02/usa-123349_1280.jpg",
                ]
            },
            {
                name: 'Golden Gate Bridge',
                coordinate: {
                    latitude: 37.8199,
                    longitude: -122.4783,
                },
                description: 'Iconic suspension bridge in San Francisco',
                longDescription: "The Golden Gate Bridge, with its distinctive orange color and Art Deco design, is San Francisco's most famous landmark. This engineering marvel spans 1.7 miles across the Golden Gate strait, connecting San Francisco to Marin County. Its towering main spans and graceful cables create one of the world's most photographed bridges, especially when shrouded in fog.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/03/18/14/56/panorama-2154194_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/06/13/11/22/golden-gate-bridge-4271364_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/04/22/11/26/golden-gate-2251108_1280.jpg",
                    "https://cdn.pixabay.com/photo/2011/02/15/11/45/golden-gate-bridge-4904_1280.jpg",
                ]
                }
        ]
    },
    {
        id: 'IT',
        name: 'Italy',
        description: "Italy, a treasure trove of art, history, and culinary delights, captivates visitors with its stunning landscapes from the snow-capped Alps to the sun-kissed Mediterranean coastline. Experience ancient wonders, Renaissance masterpieces, world-class cuisine, and the passionate Italian way of life.",
        image: "https://images.unsplash.com/photo-1516108317508-6788f6a160e4?q=80&w=2069&auto=format&fit=crop",
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
                longDescription: "The Colosseum stands as the most iconic symbol of Imperial Rome and the largest amphitheater ever built. This architectural marvel could hold up to 50,000 spectators for gladiatorial contests and public spectacles. Today, visitors can explore its three levels, underground chambers, and learn about ancient Roman engineering and entertainment, while imagining the roar of crowds that once filled this magnificent structure.",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2013/08/17/18/35/rome-173469_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/30/15/49/italy-1014310_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/03/28/14/46/the-colosseum-2182371_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/04/17/28/rome-971425_1280.jpg",
                ]
            },
            {
                name: 'Venice Canals',
                coordinate: {
                    latitude: 45.4371,
                    longitude: 12.3326,
                },
                description: 'Historic waterways of Venice',
                longDescription: "Venice's legendary canals form an intricate network of waterways that have served as the city's streets for over a millennium. The Grand Canal, lined with stunning Gothic palaces and churches, is the main thoroughfare of this unique city. Take a gondola ride under the famous Rialto Bridge, explore narrow side canals, and experience the romantic atmosphere of this floating city, especially magical during sunset or carnival season.",
                image: "https://images.unsplash.com/photo-1663348441696-14bd8a81039f?q=80&w=1171&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/11/09/18/52/gondola-1035684_1280.jpg",
                    "https://cdn.pixabay.com/photo/2024/11/08/05/48/canal-9182536_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/07/10/14/46/canal-839282_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/12/27/09/24/grand-canal-1933559_1280.jpg"
                ]
            },
            {
                name: 'Vatican Museums and Sistine Chapel',
                coordinate: {
                    latitude: 41.9029,
                    longitude: 12.4534,
                },
                description: 'World-renowned museums with masterpiece collections',
                longDescription: "The Vatican Museums house one of the world's most extensive art collections, culminating in the Sistine Chapel with Michelangelo's legendary frescoes. Visitors journey through centuries of art, from ancient Roman sculptures to Renaissance masterpieces. The Sistine Chapel's ceiling, featuring the famous Creation of Adam, represents the pinnacle of Renaissance art and human creativity.",
                image: "https://images.unsplash.com/photo-1672950972884-7cf700885593?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/09/19/23/04/vatican-947818_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/09/04/23/28/the-creation-of-adam-436007_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/12/12/08/21/vatican-3014119_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/05/20/06/47/rome-5195046_1280.jpg"
                ]
            },
            {
                name: 'Amalfi Coast',
                coordinate: {
                    latitude: 40.6333,
                    longitude: 14.6029,
                },
                description: 'Dramatic Mediterranean coastline with picturesque towns',
                longDescription: "The Amalfi Coast is a stunning 50-kilometer stretch of coastline known for its dramatic cliffs, colorful fishing villages, and luxurious resorts. From the pastel-colored houses of Positano to the historic maritime republic of Amalfi, each town offers its own charm. The coastal road winds past lemon groves, hidden beaches, and offers breathtaking views of the Mediterranean Sea.",
                image: "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/11/07/13/30/amalfi-1031875_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/01/14/11/48/town-6937079_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/08/23/20/52/amalfi-1615509_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/09/17/15/44/amalfi-2758794_1280.jpg"
                ]
            },
            {
                name: 'Florence Duomo',
                coordinate: {
                    latitude: 43.7731,
                    longitude: 11.2566,
                },
                description: 'Iconic cathedral with Renaissance dome',
                longDescription: "Florence's Duomo, officially the Cathedral of Santa Maria del Fiore, is a masterpiece of Italian Gothic architecture crowned by Brunelleschi's revolutionary dome. The cathedral complex includes the Baptistery with its famous bronze doors and Giotto's Bell Tower. Climbing to the dome's top offers panoramic views of Florence and a close-up look at Giorgio Vasari's magnificent Last Judgment fresco.",
                image: "https://images.unsplash.com/photo-1687817997684-c9335cce7c5c?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/10/16/23/47/florence-2859138_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/04/16/22/24/duomo-di-milano-5052524_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/03/25/16/09/florence-296903_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/03/20/23/03/florence-cathedral-4069756_1280.jpg",
                ]
                }
        ]
    },
    {
        id: 'TR',
        name: 'Turkey',
        description: "Turkey bridges East and West with its rich cultural heritage. From Istanbul's magnificent mosques to Cappadocia's otherworldly landscapes, experience ancient history, vibrant bazaars, Turkish hammams, and legendary hospitality.",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1171&auto=format&fit=crop",
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
                longDescription: "The Hagia Sophia is a masterpiece of Byzantine architecture that has stood for nearly 1500 years. Originally built as a Greek Orthodox cathedral, later an Ottoman mosque, and now a mosque again, its massive dome and stunning gold mosaics represent the height of Byzantine artistry. The building's unique blend of Christian and Islamic elements tells the story of Istanbul's rich cultural heritage.",
                image: "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?q=80&w=1171&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/08/26/13/36/hagia-sophia-908504_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/08/27/10/44/hagia-sophia-and-snow-910081_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/09/28/11/23/hagia-sophia-6664155_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/12/26/18/48/hagia-sophia-1932558_1280.jpg",
                ]
            },
            {
                name: 'Pamukkale',
                coordinate: {
                    latitude: 37.9137,
                    longitude: 29.1187,
                },
                description: 'Natural travertine terraces and thermal pools',
                longDescription: "Pamukkale, meaning 'Cotton Castle' in Turkish, is a natural wonder of white travertine terraces cascading down the hillside. These mineral-rich thermal waters form stunning terraced pools that have drawn visitors since Roman times. Combined with the ancient ruins of Hierapolis above, visitors can bathe in the thermal pools among Roman columns while enjoying panoramic views of the surrounding landscape.",
                image: "https://images.unsplash.com/photo-1720974613069-690834d3d08d?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/04/09/16/41/turkey-714750_1280.jpg",
                    "https://cdn.pixabay.com/photo/2012/02/19/16/10/calcium-pools-14979_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/05/23/19/19/hierapolis-3424856_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/09/16/49/pamukkale-714761_1280.jpg",
                ]
            },
            {
                name: 'Cappadocia',
                coordinate: {
                    latitude: 38.6431,
                    longitude: 34.8266,
                },
                description: 'Unique landscape with ancient cave dwellings',
                longDescription: "Cappadocia's otherworldly landscape of 'fairy chimneys' and cave churches was carved by volcanic activity and human ingenuity. Famous for its hot air balloon rides at sunrise, underground cities, and cave hotels, this region offers a unique glimpse into ancient civilizations. The rock-hewn churches of Göreme showcase early Christian art, while traditional cave homes demonstrate the area's living history.",
                image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/02/28/17/37/uchisar-277031_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/05/23/20/33/hot-air-balloon-7217175_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/08/05/09/12/cappadocia-2582539_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/10/05/19/00/hot-air-balloons-5630493_1280.jpg",
                ]
            },
            {
                name: 'Blue Mosque',
                coordinate: {
                    latitude: 41.0054,
                    longitude: 28.9768,
                },
                description: 'Iconic Ottoman mosque with six minarets',
                longDescription: "The Sultan Ahmed Mosque, commonly known as the Blue Mosque, is an architectural masterpiece of Ottoman design. Its interior features over 20,000 handmade blue Iznik tiles, 200 stained glass windows, and intricate calligraphy. The mosque's six minarets and cascading domes create an unforgettable silhouette in Istanbul's skyline, particularly stunning when illuminated at night.",
                image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/11/22/22/50/blue-mosque-1851032_1280.jpg",
                    "https://cdn.pixabay.com/photo/2024/02/02/11/22/mosque-8547944_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/16/10/27/seagull-990930_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/05/21/00/10/istanbul-776372_1280.jpg",
                ]
            },
            {
                name: 'Ephesus',
                coordinate: {
                    latitude: 37.9398,
                    longitude: 27.3416,
                },
                description: 'Ancient Greek-Roman city with remarkable ruins',
                longDescription: "Ephesus represents one of the most complete classical metropolitan areas ever excavated. This ancient city features the impressive Library of Celsus, a 25,000-seat theater, the Temple of Hadrian, and remarkably preserved Roman residential houses. Walking through its marble-paved streets offers an extraordinary glimpse into life in one of the Roman Empire's most important cities.",
                image: "https://images.unsplash.com/photo-1682868776143-1f8ad7c0172a?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/09/05/16/07/ephesos-436437_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/06/13/04/47/cat-4270706_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/08/22/13/53/the-title-of-the-column-in-ephesus-2669038_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/02/04/07/21/ephesus-1178715_1280.jpg",
                ]
                }
        ]
    },
    {
        id: 'JP',
        name: 'Japan',
        description: "Japan seamlessly blends ancient traditions with cutting-edge modernity. Discover serene temples, exquisite gardens, futuristic cities, world-renowned cuisine, and the unique cultural experiences from tea ceremonies to cherry blossom festivals.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "Mount Fuji, Japan's highest mountain at 3,776 meters, is a sacred symbol of the nation and a UNESCO World Heritage site. This perfectly symmetrical volcanic cone, snow-capped for much of the year, has inspired artists and poets for centuries. Visitors can climb to the summit in summer, photograph its beauty from the surrounding Five Lakes region, or enjoy its majestic presence from hot spring resorts in the area.",
                image: "https://images.unsplash.com/photo-1705481109538-fb7edf4a5758?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/04/15/11/51/mt-fuji-2232246_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/07/01/17/33/mount-fuji-827744_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/05/11/23/21/mount-fuji-2305606_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/04/10/09/36/mountain-view-5024904_1280.jpg",
                ]
            },
            {
                name: 'Fushimi Inari Shrine',
                coordinate: {
                    latitude: 34.9671,
                    longitude: 135.7727,
                },
                description: 'Famous shrine with thousands of torii gates',
                longDescription: "Fushimi Inari Shrine in Kyoto is famous for its thousands of vermillion torii gates winding up Mount Inari. These gates, each donated by a business or individual, form tunnels along a 4km mountain trail. Dedicated to Inari, the Shinto god of rice and sake, the shrine complex features numerous smaller shrines, fox statues (Inari's messengers), and offers stunning views of Kyoto from its higher points.",
                image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/09/02/23/56/fushimi-inari-shrine-2708942_1280.jpg",
                    "https://cdn.pixabay.com/photo/2024/11/14/15/03/couples-9197180_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/11/19/16/10/japan-4637817_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/06/20/16/13/japanese-3486820_1280.jpg",
                ]
            },
            {
                name: 'Senso-ji Temple',
                coordinate: {
                    latitude: 35.7147,
                    longitude: 139.7967,
                },
                description: 'Ancient Buddhist temple in Asakusa, Tokyo',
                longDescription: "Senso-ji, Tokyo's oldest Buddhist temple, has been a center of worship for over 1,300 years. Enter through the massive Thunder Gate with its iconic red lantern, walk along the bustling Nakamise shopping street, and experience the spiritual heart of old Tokyo. The temple's five-story pagoda and main hall, regularly wreathed in incense smoke, offer visitors a glimpse into traditional Japanese religious life amid the modern metropolis.",
                image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/12/03/05/57/sensoji-4669289_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/07/27/23/23/girls-5443632_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/12/03/05/57/sensoji-4669290_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/06/06/05/12/sensoji-temple-6314306_1280.jpg",
                ]
            },
            {
                name: 'Arashiyama Bamboo Grove',
                coordinate: {
                    latitude: 35.0094,
                    longitude: 135.6717,
                },
                description: 'Enchanting bamboo forest in Kyoto',
                longDescription: "The Arashiyama Bamboo Grove is one of Kyoto's most photographed sites, where towering green bamboo stalks create an otherworldly forest path. The play of light through the bamboo canopy and the sound of stalks swaying in the wind create a magical atmosphere. Located near the historic Tenryu-ji Temple, the area also features traditional gardens, temples, and the scenic Katsura River.",
                image: "https://images.unsplash.com/photo-1702384225869-1efa3239b608?q=80&w=1149&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/12/19/21/08/bamboo-3028709_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/09/08/19/54/panda-4461766_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/11/12/05/27/bamboo-4620086_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/10/02/02/33/japan-3717769_1280.jpg",
                ]
            },
            {
                name: 'Shibuya Crossing',
                coordinate: {
                    latitude: 35.6595,
                    longitude: 139.7004,
                },
                description: 'World\'s busiest pedestrian crossing',
                longDescription: "Shibuya Crossing, often called 'The Scramble', is the world's busiest pedestrian crossing, where up to 3,000 people cross at once. Surrounded by giant video screens and neon signs, it's a symbol of modern Tokyo's energy and organization. The crossing has become an icon of Japanese urban life, especially stunning at night when the surrounding buildings light up the intersection.",
                image: "https://images.unsplash.com/photo-1704026438409-b563e1abab55?q=80&w=1142&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/06/08/11/30/people-4259948_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/01/31/07/23/shibuya-4807293_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/05/20/02/04/shibuya-2328029_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/04/12/03/16/shibuya-2223492_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'GB',
        name: 'United Kingdom',
        description: "The United Kingdom charms visitors with its rich history, from royal palaces to rolling countryside. Experience iconic London landmarks, historic castles, picturesque villages, world-class museums, and the warm atmosphere of traditional British pubs.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "Big Ben, the nickname for the Great Bell of the clock at the north end of the Houses of Parliament, is one of London's most recognizable landmarks. The 316-foot-tall tower, officially named the Elizabeth Tower, showcases stunning Victorian Gothic architecture. Its famous chimes have marked the hour for Londoners since 1859, and the tower's four clock faces, each 23 feet in diameter, are illuminated at night creating a golden glow over Westminster.",
                image: "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/02/02/19/39/big-ben-2033630_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/08/25/10/10/buildings-5516281_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/08/25/10/10/buildings-5516281_1280.jpg",
                ]
            },
            {
                name: 'Stonehenge',
                coordinate: {
                    latitude: 51.1789,
                    longitude: -1.8262,
                },
                description: 'Prehistoric monument in Wiltshire',
                longDescription: "Stonehenge, built between 3000-2000 BC, remains one of the world's most enigmatic ancient monuments. This ring of massive standing stones, some weighing up to 25 tons, represents an incredible feat of prehistoric engineering and architectural skill. Visit at sunrise or sunset to experience the mysterious atmosphere of this UNESCO World Heritage site, and explore the visitor center to learn theories about its construction and purpose.",
                image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801_1280.jpg",
                    "https://cdn.pixabay.com/photo/2023/03/10/19/13/stonehenge-7842987_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/06/10/21/22/stonehenge-2390793_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/07/22/12/41/stonehenge-5428903_1280.jpg",
                ]
            },
            {
                name: 'Tower of London',
                coordinate: {
                    latitude: 51.5081,
                    longitude: -0.0759,
                },
                description: 'Historic castle and fortress on the Thames',
                longDescription: "The Tower of London, a UNESCO World Heritage site, has served as a royal palace, prison, fortress, and treasury. Home to the Crown Jewels, including the famous Koh-i-Noor diamond, the Tower has witnessed nearly a millennium of British history. Visitors can explore the White Tower, walk the medieval walls, learn about the legendary ravens, and hear tales of intrigue and execution from the Yeoman Warders.",
                image: "https://images.unsplash.com/photo-1578666062144-080ac96e3e24?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/08/09/21/52/london-4395918_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/05/25/18/40/tower-of-london-353868_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/11/06/13/41/london-206472_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/02/26/07/59/architecture-3182457_1280.jpg",
                ]
            },
            {
                name: 'Edinburgh Castle',
                coordinate: {
                    latitude: 55.9486,
                    longitude: -3.1999,
                },
                description: 'Historic fortress dominating Scotland\'s capital',
                longDescription: "Edinburgh Castle, perched atop an extinct volcano, dominates Scotland's capital city skyline. This historic fortress houses the Scottish Crown Jewels, the Stone of Destiny, and the National War Museum. The One O'Clock Gun, fired daily except Sundays, continues a tradition dating back to 1861. The castle's Great Hall, Royal Palace, and St. Margaret's Chapel showcase Scotland's rich royal heritage.",
                image: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/01/10/09/55/edinburgh-1131635_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/06/19/14/37/castle-814993_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/02/15/17/06/edinburgh-3155781_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/08/20/02/12/edinburgh-castle-7398037_1280.jpg",
                ]
            },
            {
                name: 'Roman Baths',
                coordinate: {
                    latitude: 51.3811,
                    longitude: -2.3590,
                },
                description: 'Ancient Roman spa and temple complex',
                longDescription: "The Roman Baths in Bath represent one of the best-preserved ancient Roman sites in Northern Europe. Built around Britain's only hot spring, these baths were a center for public bathing and socializing in Roman Britain. Visitors can explore the Great Bath, temple ruins, and museum displaying Roman artifacts. The site offers fascinating insights into Roman engineering and daily life, while the Georgian Pump Room above continues the spa town tradition.",
                image: "https://images.unsplash.com/photo-1623438672645-f8bafb8cc2ba?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2013/03/02/01/48/bath-89119_1280.jpg",
                    "https://images.unsplash.com/photo-1559642284-4cc44e0abe3c?q=80&w=1332&auto=format&fit=crop",
                    "https://cdn.pixabay.com/photo/2020/07/02/14/30/roman-baths-5363177_1280.jpg",
                    "https://images.unsplash.com/photo-1623438672645-f8bafb8cc2ba?q=80&w=1170&auto=format&fit=crop",
                ]
            }
        ]
    },
    {
        id: 'AU',
        name: 'Australia',
        description: "Australia amazes with its natural wonders and vibrant cities. Explore the Great Barrier Reef, vast Outback landscapes, pristine beaches, unique wildlife, world-class wine regions, and the laid-back Aussie lifestyle in cosmopolitan cities.",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop",
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
                longDescription: "The Sydney Opera House is one of the world's most distinctive architectural masterpieces. Its series of gleaming white shell-shaped roofs set against Sydney Harbour create an unforgettable silhouette. This UNESCO World Heritage site hosts over 1,500 performances annually in its multiple venues. Take a guided tour to discover its fascinating history, enjoy world-class performances, or dine at its waterfront restaurants with spectacular harbour views.",
                image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=1132&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/11/02/10/31/sydney-2910646_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/03/19/13/46/sydney-680908_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/04/17/04/01/opera-house-sydney-5053151_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
                ]
            },
            {
                name: 'Great Barrier Reef',
                coordinate: {
                    latitude: -18.2871,
                    longitude: 147.6992,
                },
                description: 'World\'s largest coral reef system',
                longDescription: "The Great Barrier Reef is the world's largest living structure, visible even from space. This incredible ecosystem stretches over 2,300 kilometers and hosts an extraordinary diversity of marine life, including 1,500 species of tropical fish, 400 types of hard coral, and numerous endangered species. Visitors can snorkel, dive, take glass-bottom boat tours, or scenic flights to experience the reef's stunning beauty and vibrant underwater world.",
                image: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2012/02/28/15/40/great-18379_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/02/08/12/19/great-barrier-reef-261713_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/09/06/14/19/heart-reef-1649218_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/02/08/12/35/great-barrier-reef-261726_1280.jpg",
                ]
            },
            {
                name: 'Uluru',
                coordinate: {
                    latitude: -25.3444,
                    longitude: 131.0369,
                },
                description: 'Sacred monolithic sandstone rock formation',
                longDescription: "Uluru, also known as Ayers Rock, is a massive sandstone monolith in the heart of the Northern Territory's Red Centre. This sacred site holds deep spiritual significance for the local Anangu people. Rising 348 meters above the surrounding desert plains, its red-ochre color shifts dramatically with changing light throughout the day. Visitors can walk around its base to see ancient rock art, learn about Aboriginal Dreamtime stories, and witness spectacular sunrises and sunsets.",
                image: "https://images.unsplash.com/photo-1557214997-7eae7e0e7aaa?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/02/11/18/54/uluru-2058380_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/07/13/04/23/uluru-3534911_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/09/21/17/59/australia-950371_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/03/29/13/41/australia-2185249_1280.jpg",
                ]
            },
            {
                name: 'Bondi Beach',
                coordinate: {
                    latitude: -33.8915,
                    longitude: 151.2767,
                },
                description: 'Famous Sydney beach and coastal culture',
                longDescription: "Bondi Beach is Australia's most famous beach, embodying the country's coastal lifestyle and surf culture. This one-kilometer stretch of golden sand attracts visitors year-round with its clear waters, consistent waves, and vibrant atmosphere. The beach is perfect for swimming, surfing, or simply soaking up the sun. The surrounding area offers trendy cafes, restaurants, and the scenic Bondi to Bronte coastal walk, showcasing stunning ocean views and occasional whale sightings.",
                image: "https://images.unsplash.com/photo-1649560982447-bac0cc7e6782?q=80&w=1171&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/01/03/20/54/bondi-beach-587813_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/01/11/07/56/sydney-3926638_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/05/22/03/40/beach-778246_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/09/29/22/53/tower-964640_1280.jpg",
                ]
            },
            {
                name: 'Great Ocean Road',
                coordinate: {
                    latitude: -38.6671,
                    longitude: 143.1051,
                },
                description: 'Scenic coastal drive with dramatic landscapes',
                longDescription: "The Great Ocean Road is one of the world's most scenic coastal drives, stretching 243 kilometers along Victoria's dramatic southern coast. The journey features the iconic Twelve Apostles limestone stacks, pristine beaches, rainforests, and charming coastal towns. Highlights include watching surfers at Bells Beach, spotting koalas at Kennett River, exploring the Great Otway National Park's waterfalls, and witnessing the limestone cliffs and rock formations that have been shaped by the Southern Ocean.",
                image: "https://images.unsplash.com/photo-1511233389693-4a066f739752?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/01/03/21/02/twelve-apostles-587818_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/06/23/01/24/ocean-140633_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/01/04/07/48/australia-3912587_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/01/10/12/00/road-5904909_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'GR',
        name: 'Greece',
        description: "Greece enchants with its ancient ruins and idyllic islands. Discover the birthplace of democracy, marvel at ancient temples, relax on stunning Mediterranean beaches, savor traditional Greek cuisine, and experience the warmth of Greek hospitality.",
        image: "https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "The Acropolis of Athens stands as the supreme symbol of ancient Greek civilization. Perched on a limestone hill, this architectural marvel is crowned by the Parthenon, a temple dedicated to Athena. Built in the 5th century BC, its perfect proportions and intricate sculptures represent the pinnacle of Classical Greek architecture. Visit at sunset to see the marble columns bathed in golden light, or join a guided tour to uncover the rich history of democracy's birthplace.",
                image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/09/29/17/21/greece-4513857_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/09/13/42/temple-714497_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/09/17/09/38/atenas-1675817_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/24/11/58/athens-1004327_1280.jpg",
                ]
                },
            {
                name: 'Santorini',
                coordinate: {
                    latitude: 36.3932,
                    longitude: 25.4615,
                },
                description: 'Stunning volcanic island with white-washed buildings',
                longDescription: "Santorini is a postcard-perfect Greek island formed by one of history's largest volcanic eruptions. Its iconic white-washed buildings cascade down dramatic cliffs, overlooking the deep blue Aegean Sea and caldera. Famous for its stunning sunsets viewed from the village of Oia, the island offers unique black sand beaches, ancient ruins, boutique hotels, world-class wineries, and romantic dining experiences with panoramic views.",
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1138&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/03/09/20/52/santorini-4044972_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/07/28/02/02/santorini-1546901_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/07/30/06/05/oia-4372057_1280.jpg",
                ]
            },
            {
                name: 'Meteora',
                coordinate: {
                    latitude: 39.7217,
                    longitude: 21.6307,
                },
                description: 'Monasteries perched on natural rock pillars',
                longDescription: "Meteora is a breathtaking complex of Eastern Orthodox monasteries built atop towering natural sandstone pillars. These 14th-century monasteries seem to defy gravity, perched hundreds of meters above the ground. Originally accessed only by removable ladders and windlasses, today visitors can climb stone steps to explore six active monasteries, marvel at Byzantine art, and enjoy panoramic views of the Thessalian plain below.",
                image: "https://images.unsplash.com/photo-1636552085706-b9b7454d87ca?q=80&w=1096&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/08/19/19/20/greece-2659597_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/10/06/20/36/meteora-476784_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/10/05/04/19/meteora-2818331_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/20/19/13/monastery-732040_1280.jpg",
                ]
            },
            {
                name: 'Delphi',
                coordinate: {
                    latitude: 38.4824,
                    longitude: 22.5010,
                },
                description: 'Ancient sanctuary and oracle site',
                longDescription: "Delphi, considered the 'navel of the world' by ancient Greeks, was the most important religious sanctuary in ancient Greece. Home to the famous Oracle of Delphi, this UNESCO World Heritage site includes the Temple of Apollo, the ancient theater, the stadium, and the Delphi Archaeological Museum. Set against the backdrop of Mount Parnassus, the site offers not only remarkable ruins but also stunning mountain views and a palpable sense of ancient mysticism.",
                image: "https://images.unsplash.com/photo-1648874356135-abaa7feee51f?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2013/02/19/19/47/delphi-83472_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/01/20/12/41/antiquity-605408_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/07/23/15/24/temple-7340123_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/06/13/11/35/ruins-807950_1280.jpg",
                ]
            },
            {
                name: 'Mykonos',
                coordinate: {
                    latitude: 37.4415,
                    longitude: 25.3667,
                },
                description: 'Cosmopolitan island with iconic windmills',
                longDescription: "Mykonos combines traditional Cycladic charm with sophisticated modern lifestyle. Famous for its iconic 16th-century windmills, pristine beaches, and vibrant nightlife, the island attracts visitors from around the world. The picturesque neighborhood of Little Venice features colorful houses built right on the water's edge, while the narrow marble streets of Mykonos Town are lined with boutiques, galleries, and traditional tavernas serving fresh seafood and local specialties.",
                image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/10/13/20/18/boats-487264_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/05/17/12/56/mykonos-5181484_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/06/24/13/44/mykonos-376364_1280.jpg",
                    "https://cdn.pixabay.com/photo/2012/02/26/11/06/mykonos-17156_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'EG',
        name: 'Egypt',
        description: "Egypt mesmerizes with its ancient wonders and timeless Nile River. Explore magnificent pyramids, grand temples, bustling bazaars, and cruise along the legendary Nile. Experience one of the world's oldest civilizations and its modern cultural renaissance.",
        image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "The Pyramids of Giza are the last surviving wonder of the ancient world. Built over 4,500 years ago as tombs for powerful pharaohs, these massive structures continue to awe visitors with their perfect geometry and mysterious construction methods. The Great Pyramid of Khufu, the largest, was the tallest man-made structure for over 3,800 years. Together with the enigmatic Great Sphinx, they create an unforgettable scene of ancient Egyptian power and engineering brilliance.",
                image: "https://images.unsplash.com/photo-1663085295900-782a65e0ccdb?q=80&w=1332&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2022/04/01/19/28/sphinx-7105523_1280.jpg",
                    "https://cdn.pixabay.com/photo/2023/04/03/22/07/camel-7897974_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/11/09/11/45/pyramid-3804374_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/02/21/19/02/egypt-84492_1280.jpg",
                ]
            },
            {
                name: 'Luxor Temple',
                coordinate: {
                    latitude: 25.6997,
                    longitude: 32.6368,
                },
                description: 'Ancient Egyptian temple complex',
                longDescription: "Luxor Temple, built around 1400 BCE, is a stunning example of ancient Egyptian temple architecture. Unlike other temples, it was dedicated to the rejuvenation of kingship rather than a specific deity. The temple is particularly magical at sunset when its massive columns and statues are illuminated, creating dramatic shadows. Walk through the Avenue of Sphinxes, marvel at the colossal statues of Ramesses II, and discover walls covered in intricate hieroglyphic inscriptions.",
                image: "https://images.unsplash.com/photo-1648139210431-f5a62bc3f126?q=80&w=1065&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/02/01/09/03/egypt-4809844_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/06/12/22/22/temple-2397018_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/09/01/10/12/abu-simbel-temple-2703666_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/23/11/15/egypt-1002818_1280.jpg",
                ]
            },
            {
                name: 'Valley of the Kings',
                coordinate: {
                    latitude: 25.7402,
                    longitude: 32.6014,
                },
                description: 'Ancient royal burial ground',
                longDescription: "The Valley of the Kings, a UNESCO World Heritage site, served as the final resting place for pharaohs of Egypt's New Kingdom. This necropolis contains over 60 magnificent tombs, including the famous tomb of Tutankhamun with its legendary treasures. The elaborately decorated burial chambers feature vivid wall paintings and hieroglyphics depicting ancient Egyptian mythology and the pharaohs' journey to the afterlife. Each tomb tells a unique story of Egypt's golden age.",
                image: "https://images.unsplash.com/photo-1695178234643-9656316a0e66?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2010/11/30/egypt-492_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/01/30/07/48/hatshepsut-4804575_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/10/11/09/42/the-valley-of-the-kings-982018_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/04/05/14/03/valley-of-the-kings-5006271_1280.jpg",
                ]
            },
            {
                name: 'Abu Simbel',
                coordinate: {
                    latitude: 22.3372,
                    longitude: 31.6258,
                },
                description: 'Massive rock temples of Ramesses II',
                longDescription: "Abu Simbel consists of two massive rock temples built by Pharaoh Ramesses II. The temples were carved out of the mountainside in the 13th century BCE as a monument to himself and his queen Nefertari. The entire complex was relocated in the 1960s to avoid being submerged during the creation of Lake Nasser. The main temple is adorned with four colossal statues of Ramesses II and is perfectly aligned so that twice a year, the sun illuminates the inner sanctuary.",
                image: "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2015/01/15/18/35/abu-simbel-600667_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/02/19/17/16/abu-simbel-4862713_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/04/21/19/10/egypt-1344318_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/02/27/00/13/ramses-2-1224938_1280.jpg",
                ]
            },
            {
                name: 'Egyptian Museum',
                coordinate: {
                    latitude: 30.0478,
                    longitude: 31.2336,
                },
                description: 'World\'s largest collection of ancient Egyptian antiquities',
                longDescription: "The Egyptian Museum in Cairo houses the world's most extensive collection of ancient Egyptian antiquities. Its most famous exhibits include the golden mask of Tutankhamun and the Royal Mummy Room. The museum displays over 120,000 artifacts, from tiny jewelry pieces to colossal statues, spanning thousands of years of Egyptian history. Highlights include the treasures of Tutankhamun's tomb, ancient papyri, sarcophagi, and a stunning collection of royal mummies.",
                image: "https://images.unsplash.com/photo-1641388020166-3a68d31fa6e4?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/01/27/19/40/pharaonic-1165188_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/07/31/12/37/egypt-7355762_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/02/24/17/49/torino-1220403_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/03/07/12/50/egypt-4040121_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'TH',
        name: 'Thailand',
        description: "Thailand delights with its tropical beaches, ornate temples, and vibrant culture. Experience bustling Bangkok, serene Buddhist temples, exotic street food, luxury resorts, traditional markets, and the famous Thai smile in the Land of Smiles.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "Bangkok's Grand Palace has been the official residence of Thai kings since 1782. This spectacular complex showcases Thai architecture at its most magnificent, featuring golden spires, colorful ceramic decorations, and the famous Temple of the Emerald Buddha (Wat Phra Kaew). The intricate details, from mirror-studded walls to guardian statues, demonstrate the height of Thai craftsmanship and spiritual devotion.",
                image: "https://images.unsplash.com/photo-1728017237938-8829b36c1850?q=80&w=1331&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/02/20/10/41/royal-4008917_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/09/27/15/30/thailand-2792412_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/16/17/50/golden-3325356_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/04/20/11/07/great-palace-1340953_1280.jpg",
                ]
            },
            {
                name: 'Phi Phi Islands',
                coordinate: {
                    latitude: 7.7407,
                    longitude: 98.7784,
                },
                description: 'Stunning tropical islands in the Andaman Sea',
                longDescription: "The Phi Phi Islands are a tropical paradise of crystal-clear waters, limestone cliffs, and white sand beaches. Made famous by the film 'The Beach', Maya Bay on Phi Phi Leh offers spectacular snorkeling and diving opportunities. The larger Phi Phi Don combines natural beauty with vibrant beach life, offering everything from peaceful coves to sunset viewpoints and beachfront dining.",
                image: "https://images.unsplash.com/photo-1728017237938-8829b36c1850?q=80&w=1331&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/07/25/14/43/phi-phi-islands-2538394_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/07/25/14/48/phi-phi-islands-2538412_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/02/08/16/37/boats-628741_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/01/29/18/54/ship-1168487_1280.jpg",
                ]
            },
            {
                name: 'Wat Arun',
                coordinate: {
                    latitude: 13.7437,
                    longitude: 100.4888,
                },
                description: 'Temple of Dawn on Chao Phraya River',
                longDescription: "Wat Arun, the Temple of Dawn, is one of Bangkok's most iconic landmarks. This stunning Buddhist temple stands majestically on the west bank of the Chao Phraya River. Its central prang (spire) rises 70 meters high and is beautifully decorated with colorful porcelain and ceramic tiles. The temple is particularly spectacular at sunset when the setting sun creates a magical glow on its surface, or at night when it's illuminated against the dark sky.",
                image: "https://images.unsplash.com/photo-1694824995159-2093477bc337?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/08/10/10/09/bangkok-5477405_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/02/09/11/44/buddhist-3984946_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/08/04/15/05/wat-arun-5463086_1280.jpg",
                    "https://cdn.pixabay.com/photo/2023/05/16/10/03/bangkok-7997157_1280.jpg",
                ]
            },
            {
                name: 'Ayutthaya Historical Park',
                coordinate: {
                    latitude: 14.3560,
                    longitude: 100.5683,
                },
                description: 'Ancient capital with temple ruins',
                longDescription: "Ayutthaya Historical Park encompasses the ruins of the ancient city of Ayutthaya, Thailand's capital for 417 years. This UNESCO World Heritage site contains numerous temples, monasteries, and statues, showcasing the grandeur of one of Asia's most prosperous cities of the 14th-18th centuries. Notable sites include the iconic Buddha head entwined in tree roots at Wat Mahathat, the massive reclining Buddha at Wat Lokayasutharam, and the restored chedis of Wat Phra Si Sanphet.",
                image: "https://images.unsplash.com/photo-1595612178004-2313f9f2a188?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2016/12/22/05/43/ayutthaya-historical-park-1924562_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/02/02/19/14/ayutthaya-2033589_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/08/19/22/36/ayutthaya-1606467_1280.jpg",
                    "https://cdn.pixabay.com/photo/2012/10/25/23/08/wat-chai-watthanaram-62828_1280.jpg",
                ]
            },
            {
                name: 'Chiang Mai Night Bazaar',
                coordinate: {
                    latitude: 18.7870,
                    longitude: 98.9900,
                },
                description: 'Vibrant night market and cultural center',
                longDescription: "The Chiang Mai Night Bazaar is one of Thailand's largest and most famous markets, stretching along several blocks in the heart of the city. This bustling marketplace comes alive after sunset with hundreds of stalls selling traditional handicrafts, textiles, street food, and modern goods. Visitors can experience authentic Thai culture through traditional performances, sample local delicacies, watch artisans at work, and practice their bargaining skills in this atmospheric setting.",
                image: "https://images.unsplash.com/photo-1551717309-88444dbe54f5?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/04/07/11/36/chiang-mai-2210767_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/07/01/11/44/chaingmai-4309820_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/06/12/03/51/night-view-5288937_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/06/12/06/50/measure-806522_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'BR',
        name: 'Brazil',
        description: "Brazil pulses with energy, from the Amazon rainforest to vibrant coastal cities. Experience the rhythm of samba, spectacular Carnival celebrations, pristine beaches, diverse ecosystems, and the warmth of Brazilian culture in South America's largest country.",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
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
                longDescription: "Christ the Redeemer, or Cristo Redentor, is Brazil's most iconic symbol, standing 98 feet tall atop Corcovado Mountain. This Art Deco masterpiece, completed in 1931, offers breathtaking 360-degree views of Rio de Janeiro, from its famous beaches to its lush mountains. The statue's outstretched arms span 92 feet, symbolically embracing the city below, while the viewing platform provides spectacular photo opportunities of both the statue and Rio's stunning landscape.",
                image: "https://images.unsplash.com/photo-1700677866571-43199bcbc593?q=80&w=1330&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/08/21/02/13/christ-the-redeemer-2663841_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/01/31/21/26/brazil-4809014_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/03/15/21/01/christ-the-redeemer-2147474_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/01/31/21/26/brazil-4809015_1280.jpg",
                ]
            },
            {
                name: 'Iguazu Falls',
                coordinate: {
                    latitude: -25.6953,
                    longitude: -54.4367,
                },
                description: 'Massive waterfall system on Brazil-Argentina border',
                longDescription: "Iguazu Falls is one of nature's most spectacular sights, comprising 275 individual waterfalls stretching for nearly two miles. The Devil's Throat, the highest and most impressive fall, drops 269 feet into a clouded abyss. Walkways allow visitors to get remarkably close to the thundering waters, while helicopter tours offer breathtaking aerial views. The surrounding rainforest hosts diverse wildlife, including toucans, monkeys, and butterflies.",
                image: "https://images.unsplash.com/photo-1587845858725-81d43f65121b?q=80&w=1169&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2018/05/21/05/31/iguazu-3417458_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/10/29/17/56/waterfall-4587690_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/08/07/12/36/hidreletrolitica-4390764_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/04/13/22/23/waterfall-5040217_1280.jpg",
                ]
            },
            {
                name: 'Copacabana Beach',
                coordinate: {
                    latitude: -22.9698,
                    longitude: -43.1834,
                },
                description: 'Famous beach in Rio de Janeiro',
                longDescription: "Copacabana Beach is Rio's most famous beach, stretching for 4 kilometers along the city's Atlantic shore. This iconic crescent of golden sand is lined with hotels, restaurants, and bars, and the distinctive black and white wave pattern of its promenade is recognized worldwide. The beach buzzes with activity from dawn to dusk, with locals playing volleyball and football, sunbathers relaxing under colorful umbrellas, and vendors selling everything from coconuts to caipirinhas.",
                image: "https://images.unsplash.com/photo-1637876308735-74230b34461a?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/05/31/10/19/people-2359870_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/09/16/02/44/dawn-942078_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/09/26/12/32/copacabana-186637_1280.jpg",
                    "https://cdn.pixabay.com/photo/2012/11/10/14/12/copacabana-beach-65598_1280.jpg",
                ]
            },
            {
                name: 'Amazon Rainforest',
                coordinate: {
                    latitude: -3.4653,
                    longitude: -62.2159,
                },
                description: 'World\'s largest tropical rainforest',
                longDescription: "The Amazon Rainforest is the world's most biodiverse region, covering over 5.5 million square kilometers of Brazil. This 'lungs of the Earth' houses countless species of flora and fauna, many still undiscovered. Visitors can explore by boat along the Amazon River, stay in eco-lodges, spot exotic wildlife like pink dolphins and macaws, visit indigenous communities, and experience the unparalleled wonder of this vital ecosystem.",
                image: "https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?q=80&w=1171&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/02/28/20/24/baby-monkey-4888534_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/09/26/21/33/suspension-bridge-959853_1280.jpg",
                    "https://cdn.pixabay.com/photo/2012/12/12/14/15/brazil-69588_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/07/20/14/29/rainforest-4350845_1280.jpg",
                ]
            },
            {
                name: 'Salvador Historic Center',
                coordinate: {
                    latitude: -12.9718,
                    longitude: -38.5011,
                },
                description: 'Colonial old town with vibrant culture',
                longDescription: "The Pelourinho, Salvador's historic center, is a UNESCO World Heritage site showcasing Brazil's best-preserved colonial architecture. Its cobblestone streets are lined with pastel-colored buildings, baroque churches, and lively squares. This cultural heart of Bahia state pulsates with Afro-Brazilian music and dance, especially during its famous Carnival. Visitors can explore museums, watch capoeira performances, and experience the unique blend of European, African, and indigenous influences that shape Brazilian culture.",
                image: "https://live.staticflickr.com/4041/4449727633_ccb76e9a95_b.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/12/08/15/26/pelourinho-4681372_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/12/13/16/44/brazil-1091371_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/12/08/15/33/pelourinho-4681410_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/05/24/10/00/brazilwood-781577_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'IN',
        name: 'India',
        description: "India captivates with its kaleidoscope of cultures and landscapes. From the majestic Taj Mahal to the colorful festivals, ancient temples, diverse cuisine, bustling markets, and spiritual experiences, discover a land of incredible contrasts and rich traditions.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
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
                longDescription: "The Taj Mahal, a testament to eternal love, is arguably the world's most beautiful building. Built by Emperor Shah Jahan in memory of his beloved wife, this pristine white marble masterpiece took 22 years and 20,000 artisans to complete. Its perfect symmetry, intricate inlay work, and the way it changes color throughout the day - from pink at sunrise to pearly white in the afternoon to golden in moonlight - make it a wonder to behold.",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2187&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/09/04/16/48/taj-mahal-3654227_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/05/13/16/17/taj-mahal-2309921_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/07/03/18/10/taj-mahal-mosque-383137_1280.jpg",
                ]
            },
            {
                name: 'Jaipur City Palace',
                coordinate: {
                    latitude: 26.9255,
                    longitude: 75.8236,
                },
                description: 'Historic royal palace complex in the Pink City',
                longDescription: "The City Palace of Jaipur represents the heart of Rajasthan's 'Pink City'. This vast complex combines Rajasthani and Mughal architecture, featuring elaborate courtyards, gardens, and buildings. Still home to Jaipur's royal family, it houses museums displaying royal artifacts, textiles, and weapons. The stunning Peacock Gate, adorned with intricate patterns, and the seven-story Chandra Mahal showcase the pinnacle of Indian architectural craftsmanship.",
                image: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/10/28/10/44/palace-of-winds-201752_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/01/28/08/13/hawa-mahal-6973938_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/12/10/19/53/india-1086909_1280.jpg",
                ]
            },
            {
                name: 'Varanasi Ghats',
                coordinate: {
                    latitude: 25.3176,
                    longitude: 83.0064,
                },
                description: 'Sacred riverside steps along the Ganges',
                longDescription: "The Ghats of Varanasi, stretching along the sacred Ganges River, are the spiritual heart of India. These series of 88 steps leading to the water serve as sites for religious ceremonies, yoga, meditation, and daily rituals. The most spectacular time to visit is during the evening Ganga Aarti ceremony at Dashashwamedh Ghat, when priests perform elaborate rituals with fire and incense. The ghats offer a profound glimpse into India's ancient spiritual traditions.",
                image: "https://images.unsplash.com/photo-1639729098994-60116f7a7c51?q=80&w=1331&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2018/05/01/14/34/india-3365741_1280.jpg",
                    "https://cdn.pixabay.com/photo/2024/04/27/13/31/varanasi-8723732_1280.jpg",
                    "https://cdn.pixabay.com/photo/2022/07/13/15/25/ganges-7319480_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/06/04/18/00/varanasi-2371751_1280.jpg",
                ]
            },
            {
                name: 'Amber Fort',
                coordinate: {
                    latitude: 26.9855,
                    longitude: 75.8513,
                },
                description: 'Majestic hilltop fort-palace near Jaipur',
                longDescription: "Amber Fort, a UNESCO World Heritage site, is a magnificent fortress-palace complex built from red sandstone and marble. Perched on a hill overlooking Maota Lake, this 16th-century marvel combines Rajput and Mughal architectural styles. The fort's highlights include the stunning Sheesh Mahal (Mirror Palace), where thousands of mirrors create a dazzling effect, the intricate mosaics of the Ganesh Pol, and the beautifully landscaped Char Bagh gardens.",
                image: "https://cdn.pixabay.com/photo/2020/05/27/12/35/amber-fort-5227035_1280.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2018/05/03/09/53/india-3370925_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/11/06/08/50/fort-6772812_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/10/07/10/43/jaigarh-fort-6688172_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/02/28/05/57/amber-653180_1280.jpg",
                ]
            },
            {
                name: 'Golden Temple',
                coordinate: {
                    latitude: 31.6200,
                    longitude: 74.8765,
                },
                description: 'Sacred Sikh shrine in Amritsar',
                longDescription: "The Golden Temple, or Harmandir Sahib, is the holiest shrine of Sikhism and a symbol of brotherhood and equality. The temple's upper floors are covered in gold leaf, which reflects beautifully in the surrounding sacred pool. Open to visitors of all faiths, it serves free meals to over 100,000 people daily in its community kitchen. The complex is particularly magical at night when it's illuminated and its golden reflection shimmers in the water.",
                image: "https://cdn.pixabay.com/photo/2014/07/20/16/08/golden-temple-397886_1280.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2018/01/15/10/41/amritsar-3083693_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/09/18/21/india-1247052_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/07/25/14/42/golden-temple-5436969_1280.jpg",
                    "https://cdn.pixabay.com/photo/2021/01/06/16/58/harmandir-sahib-5895031_1280.jpg",
                ]
                }
        ]
    },
    {
        id: 'MA',
        name: 'Morocco',
        description: "Morocco enchants with its blend of African and Arab cultures. Lose yourself in ancient medinas, shop colorful souks, trek the Sahara Desert, explore historic kasbahs, and experience traditional Moroccan hospitality in stunning riads.",
        image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=1170&auto=format&fit=crop",
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
                longDescription: "The Medina of Fez, the world's largest car-free urban area, is a UNESCO World Heritage site that seems frozen in medieval times. Its 9,000 narrow alleys house bustling souks, ancient madrasas, and the world's oldest university. The famous leather tanneries offer a glimpse into traditional craftsmanship, while the calls to prayer echoing from the Al-Quaraouiyine Mosque create an atmospheric journey through Morocco's spiritual and cultural heritage.",
                image: "https://cdn.pixabay.com/photo/2018/04/24/17/57/masjid-nabawi-3347602_1280.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/09/24/09/58/marrakech-4500910_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/08/24/15/28/morocco-3628146_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/08/24/15/28/morocco-3628147_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/11/04/16/05/morocco-3794306_1280.jpg",
                ]
            },
            {
                name: 'Jardin Majorelle',
                coordinate: {
                    latitude: 31.6417,
                    longitude: -8.0000,
                },
                description: 'Stunning garden and artist retreat in Marrakech',
                longDescription: "Jardin Majorelle is a botanical masterpiece in Marrakech, created by French painter Jacques Majorelle and later owned by Yves Saint Laurent. The garden's striking cobalt blue buildings contrast beautifully with exotic plants, including cacti, palms, and bamboo. Water features, winding paths, and the Berber Museum create a peaceful oasis in the bustling city. The garden's unique color palette and architectural details make it one of Morocco's most photographed sites.",
                image: "https://images.unsplash.com/photo-1739686176648-2b53d1bbe87f?q=80&w=1074&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/06/30/11/18/morocco-2458048_1280.jpg",
                    "https://images.unsplash.com/photo-1739686176648-2b53d1bbe87f?w=600&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1729456229097-e60798212180?q=80&w=1074&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1693279565944-d501f3743e15?w=600&auto=format&fit=crop",
                ]
            },
            {
                name: 'Sahara Desert',
                coordinate: {
                    latitude: 31.7917,
                    longitude: -3.9994,
                },
                description: 'Majestic desert landscape with golden dunes',
                longDescription: "The Sahara Desert offers an unforgettable Moroccan adventure. Merzouga's towering Erg Chebbi dunes create a mesmerizing landscape that changes colors with the sun. Visitors can experience traditional Berber culture, camp under star-filled skies in luxury desert camps, ride camels across the dunes at sunset, and wake to spectacular desert sunrises. The absolute silence and endless horizons of the Sahara provide a profound sense of peace and connection with nature.",
                image: "https://images.unsplash.com/photo-1489573280374-2e193c63726c?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2023/12/04/19/45/camel-8430227_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/02/08/15/22/namibia-2049203_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/02/08/15/22/namibia-2049206_1280.jpg",
                    "https://cdn.pixabay.com/photo/2014/11/17/17/25/donkey-534906_1280.jpg",
                ]
            },
            {
                name: 'Djemaa el-Fna',
                coordinate: {
                    latitude: 31.6258,
                    longitude: -7.9891,
                },
                description: 'Vibrant main square in Marrakech',
                longDescription: "Djemaa el-Fna is the beating heart of Marrakech, a UNESCO-recognized cultural space that transforms from a bustling marketplace by day to a carnival-like atmosphere at night. Snake charmers, storytellers, musicians, and food vendors create an intoxicating sensory experience. As darkness falls, the square fills with aromatic smoke from food stalls, the sound of drums, and the glow of lanterns, offering visitors an authentic taste of Moroccan culture and traditions.",
                image: "https://images.unsplash.com/photo-1583856073081-d75a4b9ce95b?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2017/03/29/14/40/marrakech-2185362_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/10/02/19/50/morocco-2809969_1280.jpg",
                    "https://images.unsplash.com/photo-1583856073081-d75a4b9ce95b?q=80&w=1170&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1725303259124-9b3b899af81c?w=600&auto=format&fit=crop",
                ]
            },
            {
                name: 'Chefchaouen',
                coordinate: {
                    latitude: 35.1714,
                    longitude: -5.2697,
                },
                description: 'Blue-painted mountain town',
                longDescription: "Chefchaouen, known as the 'Blue Pearl of Morocco', is famous for its striking blue-washed buildings nestled in the Rif Mountains. This enchanting town's Moroccan and Andalusian influences create a unique atmosphere with its winding medina streets, red-tiled roofs, and colorful markets. The blue walls, originally painted by Jewish refugees in the 1930s, create a dreamlike setting that attracts photographers and artists. The surrounding mountains offer excellent hiking opportunities and spectacular views.",
                image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/08/12/19/12/chefchaouen-4401953_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/10/09/18/07/blue-3735573_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/08/24/15/23/morocco-3628126_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/06/21/15/17/donkey-2427532_1280.jpg",
                ]
            }
        ]
    },
    {
        id: 'PT',
        name: 'Portugal',
        description: "Portugal charms with its medieval towns and sunny coastal beauty. Explore historic Porto's wine cellars, Lisbon's cobblestone streets, stunning Atlantic beaches, charming fishing villages, and savor the melancholic sounds of Fado music.",
        image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?q=80&w=1164&auto=format&fit=crop",
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
                longDescription: "The Belém Tower, built in the 16th century, stands as a symbol of Portugal's Age of Discovery. This UNESCO World Heritage site combines Gothic and Manueline architectural styles, featuring intricate maritime motifs and historic armaments. Originally a fortress guarding Lisbon's harbor, it now offers visitors panoramic views of the Tagus River and serves as a reminder of Portugal's maritime glory days.",
                image: "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2014/05/20/23/44/belem-tower-349141_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/06/21/13/29/lisbon-816585_1280.jpg",
                    "https://images.unsplash.com/photo-1567340299478-49fef208fdfd?q=80&w=1169&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1718633934468-ea38f19744e8?q=80&w=1170&auto=format&fit=crop",
                ]
                },
            {
                name: 'Ribeira',
                coordinate: {
                    latitude: 41.1579,
                    longitude: -8.6291,
                },
                description: 'UNESCO World Heritage site with stunning architecture',
                longDescription: "Porto's historic Ribeira district is a maze of medieval streets and colorful houses cascading down to the Douro River. This UNESCO site features the iconic Dom Luís I Bridge, stunning azulejo-tiled churches, and the ornate São Bento Railway Station. Famous for its port wine cellars, visitors can tour historic lodges, sample fine ports, and enjoy spectacular river views from the Serra do Pilar Monastery.",
                image: "https://cdn.pixabay.com/photo/2020/04/01/12/18/porto-4990983_1280.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2019/09/19/07/41/portugal-4488495_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/02/08/12/45/porto-2048724_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/02/08/12/45/porto-2048723_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/07/11/10/22/porto-2493046_1280.jpg",
                ]
            },
            {
                name: 'Sintra',
                coordinate: {
                    latitude: 38.7980,
                    longitude: -9.3877,
                },
                description: 'Romantic town with fairytale palaces',
                longDescription: "Sintra, a UNESCO World Heritage site, is a magical town known for its romantic 19th-century architecture and lush gardens. The colorful Pena Palace, perched atop a hill, is a stunning example of Romantic architecture, while the mysterious Quinta da Regaleira features elaborate Gothic towers and underground tunnels. The historic town center, with its narrow streets and traditional Portuguese houses, offers charming cafes and shops selling local crafts.",
                image: "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?q=80&w=1170&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2018/12/26/05/12/portugal-3895332_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/07/21/12/08/portugal-4352614_1280.jpg",
                    "https://cdn.pixabay.com/photo/2013/03/28/11/27/palace-97327_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/12/27/18/00/castle-4723006_1280.jpg",
                ]
            },
            {
                name: 'Douro Valley',
                coordinate: {
                    latitude: 41.1167,
                    longitude: -7.5333,
                },
                description: 'World\'s oldest wine region',
                longDescription: "The Douro Valley, birthplace of Port wine, is the world's oldest demarcated wine region and a UNESCO World Heritage site. Its dramatic landscape of terraced vineyards carved into steep hillsides along the Douro River is a testament to centuries of winemaking tradition. Visitors can tour historic quintas (wine estates), enjoy wine tastings, take scenic river cruises, and experience the autumn grape harvest in this stunning region.",
                image: "https://images.unsplash.com/photo-1630509802685-d073f8f4e006?q=80&w=1231&auto=format&fit=crop",
                gallery: [
                    "https://cdn.pixabay.com/photo/2020/10/12/15/34/vineyard-5649128_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/01/16/13/41/portugal-601456_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/01/16/13/47/portugal-601463_1280.jpg",
                    "https://cdn.pixabay.com/photo/2020/01/15/18/42/douro-4768654_1280.jpg",
                ]
            },
            {
                name: 'Algarve Coast',
                coordinate: {
                    latitude: 37.0179,
                    longitude: -7.9307,
                },
                description: 'Stunning beaches and dramatic cliffs',
                longDescription: "The Algarve coastline is renowned for its golden beaches, dramatic limestone cliffs, and crystal-clear waters. The region's most iconic spots include the Benagil Cave, a natural cathedral-like grotto accessible by boat, and Praia da Marinha, with its distinctive rock formations. Historic towns like Lagos and Tavira offer charming old quarters, while the coast provides excellent opportunities for water sports, boat tours, and watching spectacular sunsets.",
                image: "https://cdn.pixabay.com/photo/2018/03/28/18/13/portugal-3270064_1280.jpg",
                gallery: [
                    "https://cdn.pixabay.com/photo/2021/01/29/09/33/beach-5960371_1280.jpg",
                    "https://cdn.pixabay.com/photo/2018/03/28/18/13/portugal-3270064_1280.jpg",
                    "https://cdn.pixabay.com/photo/2019/07/01/01/12/coast-4309016_1280.jpg",
                    "https://cdn.pixabay.com/photo/2017/03/11/09/03/portugal-2134708_1280.jpg",
                ]
            }
        ]
    }
];

export default TOP_TOURIST_COUNTRIES;