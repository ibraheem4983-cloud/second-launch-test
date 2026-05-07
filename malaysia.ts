export interface Destination {
  id: string;
  name: string;
  region: "Peninsular" | "Borneo" | "Islands";
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestMonths: number[];
  budgetPerDay: { budget: number; midrange: number; luxury: number };
  activities: string[];
  tags: string[];
  rating: number;
  duration: string;
}

export const destinations: Destination[] = [
  {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    region: "Peninsular",
    tagline: "The City of Contrasts",
    description:
      "Malaysia's vibrant capital blends futuristic skyscrapers with colonial heritage, bustling night markets, and world-class cuisine. The iconic Petronas Twin Towers dominate the skyline while hidden temples and street art tell the city's layered story.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/kl-towers_fb1bc7d3.jpg",
    highlights: ["Petronas Twin Towers", "Batu Caves", "Bukit Bintang", "Chinatown (Petaling Street)", "KL Tower"],
    bestMonths: [1, 2, 3, 6, 7, 8],
    budgetPerDay: { budget: 35, midrange: 80, luxury: 200 },
    activities: ["City tours", "Night markets", "Food trails", "Shopping", "Cultural visits"],
    tags: ["City", "Culture", "Food", "Shopping"],
    rating: 4.7,
    duration: "3-5 days",
  },
  {
    id: "langkawi",
    name: "Langkawi",
    region: "Islands",
    tagline: "Jewel of Kedah",
    description:
      "An archipelago of 99 islands draped in ancient rainforest and fringed by pristine beaches. Langkawi is a duty-free paradise offering everything from mangrove kayaking to luxury beach resorts and spectacular cable car rides above the jungle canopy.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/langkawi-beach_5d07ae11.jpg",
    highlights: ["Pantai Cenang", "Sky Bridge", "Mangrove Tour", "Duty-Free Shopping", "Kilim Geoforest Park"],
    bestMonths: [11, 12, 1, 2, 3, 4],
    budgetPerDay: { budget: 40, midrange: 100, luxury: 300 },
    activities: ["Beach relaxation", "Island hopping", "Snorkeling", "Kayaking", "Cable car"],
    tags: ["Beach", "Nature", "Island", "Luxury"],
    rating: 4.8,
    duration: "4-7 days",
  },
  {
    id: "penang",
    name: "Penang",
    region: "Peninsular",
    tagline: "Pearl of the Orient",
    description:
      "A UNESCO World Heritage city where Malay, Chinese, Indian, and colonial British cultures have fused into something uniquely Penang. George Town's streets are an open-air museum of street art, clan jetties, and some of Southeast Asia's finest street food.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/penang-arches_e78907eb.jpg",
    highlights: ["George Town Heritage", "Penang Hill", "Street Art", "Clan Jetties", "Kek Lok Si Temple"],
    bestMonths: [1, 2, 3, 6, 7, 8, 12],
    budgetPerDay: { budget: 30, midrange: 70, luxury: 180 },
    activities: ["Heritage walks", "Street food tours", "Temple visits", "Art galleries", "Cycling"],
    tags: ["Culture", "Food", "Heritage", "Art"],
    rating: 4.9,
    duration: "3-5 days",
  },
  {
    id: "batu-caves",
    name: "Batu Caves",
    region: "Peninsular",
    tagline: "Sacred Limestone Cathedral",
    description:
      "A series of limestone caves and cave temples just north of Kuala Lumpur, Batu Caves is one of the most popular Hindu shrines outside India. The iconic 272 rainbow-colored steps lead to a cathedral cave housing ancient temples, with a towering golden Lord Murugan statue at the entrance.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/batu-caves_064fb6ef.webp",
    highlights: ["Rainbow Steps", "Lord Murugan Statue", "Cathedral Cave", "Dark Cave", "Thaipusam Festival"],
    bestMonths: [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    budgetPerDay: { budget: 20, midrange: 50, luxury: 120 },
    activities: ["Temple visit", "Cave exploration", "Photography", "Cultural experience"],
    tags: ["Culture", "Religion", "Nature", "Photography"],
    rating: 4.6,
    duration: "Half day",
  },
  {
    id: "mount-kinabalu",
    name: "Mount Kinabalu",
    region: "Borneo",
    tagline: "Roof of Southeast Asia",
    description:
      "Standing at 4,095 meters, Mount Kinabalu is the highest peak in Southeast Asia and a UNESCO World Heritage Site. The surrounding Kinabalu Park is one of the world's most important biological sites, home to over 5,000 plant species including the world's largest flower.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/mount-kinabalu_51d31968.jpg",
    highlights: ["Summit Trek", "Kinabalu Park", "Poring Hot Springs", "Canopy Walkway", "Via Ferrata"],
    bestMonths: [3, 4, 5, 6, 7, 8, 9],
    budgetPerDay: { budget: 60, midrange: 150, luxury: 350 },
    activities: ["Mountain climbing", "Hiking", "Wildlife spotting", "Hot springs", "Botanical gardens"],
    tags: ["Adventure", "Nature", "Trekking", "Wildlife"],
    rating: 4.8,
    duration: "2-3 days",
  },
  {
    id: "perhentian-islands",
    name: "Perhentian Islands",
    region: "Islands",
    tagline: "Underwater Paradise",
    description:
      "Two pristine islands off the northeast coast of Peninsular Malaysia, the Perhentians offer some of the best snorkeling and diving in Southeast Asia. Crystal-clear turquoise waters teem with sea turtles, reef sharks, and vibrant coral gardens.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/perhentian_a9df2a03.jpg",
    highlights: ["Coral Bay", "Long Beach", "Sea Turtle Spotting", "Snorkeling", "Scuba Diving"],
    bestMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    budgetPerDay: { budget: 45, midrange: 90, luxury: 220 },
    activities: ["Snorkeling", "Scuba diving", "Beach relaxation", "Island hopping", "Kayaking"],
    tags: ["Beach", "Diving", "Island", "Nature"],
    rating: 4.7,
    duration: "4-7 days",
  },
  {
    id: "cameron-highlands",
    name: "Cameron Highlands",
    region: "Peninsular",
    tagline: "Malaysia's Cool Escape",
    description:
      "A cool highland retreat at 1,500 meters above sea level, Cameron Highlands is famous for its rolling tea plantations, strawberry farms, and misty jungle trails. The colonial-era hill station offers a refreshing escape from Malaysia's tropical heat.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/cameron-highlands_dac2a51a.jpg",
    highlights: ["BOH Tea Plantation", "Mossy Forest", "Strawberry Farms", "Butterfly Garden", "Night Market"],
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    budgetPerDay: { budget: 35, midrange: 75, luxury: 180 },
    activities: ["Tea plantation tours", "Jungle trekking", "Strawberry picking", "Flower farms", "Hiking"],
    tags: ["Nature", "Highlands", "Tea", "Relaxation"],
    rating: 4.5,
    duration: "2-3 days",
  },
  {
    id: "malacca",
    name: "Malacca",
    region: "Peninsular",
    tagline: "Where History Lives",
    description:
      "A UNESCO World Heritage city with 600 years of history, Malacca was once the most important trading port in Southeast Asia. Portuguese, Dutch, and British colonial architecture lines the riverbanks alongside Chinese temples and Baba-Nyonya heritage houses.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/malacca_9e74f4eb.jpg",
    highlights: ["Jonker Street", "A Famosa Fort", "Stadthuys", "River Cruise", "Baba-Nyonya Heritage Museum"],
    bestMonths: [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    budgetPerDay: { budget: 30, midrange: 65, luxury: 160 },
    activities: ["Heritage walks", "River cruises", "Food tours", "Museum visits", "Trishaw rides"],
    tags: ["History", "Culture", "Heritage", "Food"],
    rating: 4.6,
    duration: "2-3 days",
  },
  {
    id: "tioman-island",
    name: "Tioman Island",
    region: "Islands",
    tagline: "Untouched Island Gem",
    description:
      "Listed among the world's most beautiful islands, Tioman is a volcanic island covered in dense jungle with pristine beaches and exceptional marine biodiversity. Its relative remoteness has kept it unspoiled, making it a haven for divers and nature lovers.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/tioman_8c8b5aea.jpg",
    highlights: ["Juara Beach", "Coral Reefs", "Jungle Trekking", "Waterfall Hike", "Bioluminescent Plankton"],
    bestMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    budgetPerDay: { budget: 50, midrange: 110, luxury: 260 },
    activities: ["Scuba diving", "Snorkeling", "Jungle trekking", "Beach relaxation", "Fishing"],
    tags: ["Beach", "Diving", "Island", "Adventure"],
    rating: 4.7,
    duration: "4-7 days",
  },
];

export const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const monthFullNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export interface WeatherMonth {
  month: number;
  temp: { min: number; max: number };
  rainfall: number;
  humidity: number;
  description: string;
  icon: string;
}

export const klWeather: WeatherMonth[] = [
  { month: 1, temp: { min: 23, max: 32 }, rainfall: 170, humidity: 82, description: "Warm & occasional showers", icon: "⛅" },
  { month: 2, temp: { min: 23, max: 33 }, rainfall: 130, humidity: 79, description: "Drier & sunny", icon: "☀️" },
  { month: 3, temp: { min: 24, max: 33 }, rainfall: 200, humidity: 81, description: "Warm with afternoon showers", icon: "🌤️" },
  { month: 4, temp: { min: 24, max: 33 }, rainfall: 270, humidity: 83, description: "Wetter, lush greenery", icon: "🌧️" },
  { month: 5, temp: { min: 24, max: 33 }, rainfall: 200, humidity: 83, description: "Warm & humid", icon: "⛅" },
  { month: 6, temp: { min: 23, max: 33 }, rainfall: 120, humidity: 80, description: "Drier season begins", icon: "☀️" },
  { month: 7, temp: { min: 23, max: 33 }, rainfall: 110, humidity: 79, description: "Best weather of the year", icon: "☀️" },
  { month: 8, temp: { min: 23, max: 33 }, rainfall: 140, humidity: 80, description: "Sunny & pleasant", icon: "🌤️" },
  { month: 9, temp: { min: 23, max: 33 }, rainfall: 200, humidity: 82, description: "Transitional showers", icon: "⛅" },
  { month: 10, temp: { min: 23, max: 32 }, rainfall: 280, humidity: 84, description: "Wetter month", icon: "🌧️" },
  { month: 11, temp: { min: 23, max: 32 }, rainfall: 270, humidity: 84, description: "Rainy season", icon: "🌧️" },
  { month: 12, temp: { min: 23, max: 32 }, rainfall: 230, humidity: 83, description: "Festive & rainy", icon: "⛅" },
];

export const budgetCategories = {
  accommodation: {
    budget: { label: "Hostel / Guesthouse", priceRange: "RM 30–80/night" },
    midrange: { label: "3-Star Hotel", priceRange: "RM 150–350/night" },
    luxury: { label: "5-Star Resort", priceRange: "RM 500–2000/night" },
  },
  food: {
    budget: { label: "Hawker Stalls & Kopitiams", priceRange: "RM 5–15/meal" },
    midrange: { label: "Casual Restaurants", priceRange: "RM 20–50/meal" },
    luxury: { label: "Fine Dining", priceRange: "RM 100–300/meal" },
  },
  transport: {
    budget: { label: "Public Bus & LRT", priceRange: "RM 2–10/trip" },
    midrange: { label: "Grab / Taxi", priceRange: "RM 15–40/trip" },
    luxury: { label: "Private Car / Limo", priceRange: "RM 80–200/trip" },
  },
  activities: {
    budget: { label: "Free Attractions & Markets", priceRange: "RM 0–30/day" },
    midrange: { label: "Tours & Experiences", priceRange: "RM 50–150/day" },
    luxury: { label: "Private Tours & Exclusive", priceRange: "RM 200–600/day" },
  },
};
