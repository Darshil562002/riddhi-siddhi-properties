import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "symphonee",
    name: "Symphonee Greens",
    slug: "symphonee-greens",
    type: "1 RK, 1 BHK Apartments",
    location: "Asangaon (E), Tal. Shahapur, Thane",
    city: "thane",
    description:
      "Pre-launch affordable apartments by Knox Realty. Asangaon Railway Station just 700 m away. Possession Dec 2028.",
    longDescription:
      "Symphonee Greens is a pre-launch residential project by Knox Realty, located in Asangaon (East), Taluka Shahapur, Thane District. Situated just 700 metres from Asangaon Railway Station, this project offers excellent connectivity to Mumbai via the Central Railway line. The project features well-planned 1 RK and 1 BHK apartments with modern amenities including a clubhouse, badminton court, children's play area, and landscaped gardens. With FREE Stamp Duty, FREE Registration, and FREE GST, plus eligibility for PMAY benefits up to ₹1.80 Lakhs, Symphonee Greens is one of the most affordable entry points into property ownership in the Thane region.",
    price: "From ₹13.32 L",
    priceNote: "All inclusive",
    developer: "Knox Realty",
    rera: "Applied",
    status: "upcoming",
    statusLabel: "Pre-Launch",
    propertyType: "affordable",
    budget: "0-30",
    featured: true,
    configurations: [
      { type: "1 RK", area: "~270 sq.ft.", price: "₹13.32 Lacs (All Inclusive)" },
      { type: "1 BHK", area: "~400 sq.ft.", price: "₹19.56 Lacs (All Inclusive)" },
    ],
    amenities: [
      "Clubhouse",
      "Badminton Court",
      "Children's Play Area",
      "Landscaped Gardens",
      "24/7 Security",
      "CCTV Surveillance",
      "Car Parking",
      "Two-Wheeler Parking",
      "Rainwater Harvesting",
      "Compound Wall",
      "Intercom Facility",
      "Gymnasium",
    ],
    specifications: [
      { label: "Developer", value: "Knox Realty" },
      { label: "Location", value: "Asangaon (E), Shahapur, Thane" },
      { label: "Type", value: "Residential Apartments" },
      { label: "Configurations", value: "1 RK, 1 BHK" },
      { label: "RERA Status", value: "Applied" },
      { label: "Possession", value: "December 2028" },
      { label: "Station Distance", value: "700 m from Asangaon Station" },
    ],
    locationAdvantages: [
      "700 m from Asangaon Railway Station",
      "Direct connectivity to Mumbai CST via Central Railway",
      "Close to Shahapur town centre",
      "Upcoming Samruddhi Mahamarg connectivity",
      "Upcoming Mumbai–Nashik local train route",
      "Schools, hospitals, and markets within 2 km",
    ],
    nearbyInfra: [
      "Asangaon Railway Station — 700 m",
      "NH-3 Mumbai–Nashik Highway — 3 km",
      "Shahapur Bus Stand — 5 km",
      "Schools & Colleges — within 2 km",
      "Hospitals — within 3 km",
      "Banks & ATMs — within 1 km",
    ],
    images: [
      { src: "/images/projects/symphonee-greens/hero.jpg", alt: "Symphonee Greens building exterior with clubhouse", category: "exterior" },
      { src: "/images/projects/symphonee-greens/aerial.jpg", alt: "Symphonee Greens aerial view showing buildings and amenities", category: "exterior" },
      { src: "/images/projects/symphonee-greens/gallery-1.jpg", alt: "Symphonee Greens residential complex view", category: "exterior" },
      { src: "/images/projects/symphonee-greens/gallery-2.jpg", alt: "Symphonee Greens amenities and landscape", category: "amenity" },
      { src: "/images/projects/symphonee-greens/gallery-3.jpg", alt: "Symphonee Greens building architecture", category: "exterior" },
      { src: "/images/projects/symphonee-greens/gallery-4.jpg", alt: "Symphonee Greens project overview", category: "exterior" },
    ],
    heroImage: "/images/projects/symphonee-greens/hero.jpg",
    brochureUrl: "/brochures/symphonee-greens.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=GuVoLZOjXnM",
    mapsUrl: "https://maps.app.goo.gl/7cz7wiaSQFaivnPe6",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.7!2d73.31!3d19.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzQ4LjAiTiA3M8KwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    possessionDate: "December 2028",
    constructionStatus: "Pre-Launch — Construction to commence shortly",
  },
  {
    id: "laluxuria",
    name: "La Luxuria",
    slug: "la-luxuria",
    type: "1, 2 & 3 BHK Luxury Apartments",
    location: "Shahapur (Asangaon East), Thane",
    city: "thane",
    description:
      "Completed luxury project by Aurus & JB United. OC received. 1 BHK from 409 sq.ft. Home loans from leading banks.",
    longDescription:
      "La Luxuria is a landmark G+9 storey residential and commercial complex by Aurus & JB United, located in Shahapur, Asangaon (East). Spread across a 7.3-acre land parcel, this is the first G+9 project in the entire Shahapur Taluka, planned under Thane Collector's approval. With over 60% open space, lush greenery, and modern sustainable features including a Sewage Treatment Plant, Water Treatment Plant, and Rainwater Harvesting, La Luxuria sets a new standard for green luxury living in the region. The project offers well-planned 1 BHK, 2 BHK apartments, and unique 1 BHK Jodi Flats that convert to spacious 3 BHK apartments. OC has been received, making it ready for immediate possession with home loans available from leading banks.",
    price: "From ₹29 L",
    developer: "Aurus & JB United",
    rera: "OC Received",
    status: "ready",
    statusLabel: "Ready to Move",
    propertyType: "flat",
    budget: "30-60",
    featured: true,
    configurations: [
      { type: "1 BHK", area: "409 sq.ft.", price: "From ₹29 Lacs" },
      { type: "2 BHK", area: "~600 sq.ft.", price: "On Request" },
      { type: "1 BHK Jodi (3 BHK)", area: "~818 sq.ft.", price: "On Request" },
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Badminton Court",
      "Cricket Practice Net",
      "Tennis Court",
      "Football Ground",
      "Children's Play Area",
      "Indoor Games Room",
      "Table Tennis",
      "Carrom & Chess",
      "Library/Reading Room",
      "Sewage Treatment Plant",
      "Water Treatment Plant",
      "Rainwater Harvesting",
      "CCTV Surveillance",
      "24/7 Security",
      "Landscaped Gardens",
      "Jogging Track",
      "Senior Citizen Area",
    ],
    specifications: [
      { label: "Developer", value: "Aurus & JB United" },
      { label: "Location", value: "Shahapur, Asangaon (E), Thane" },
      { label: "Type", value: "Residential + Commercial Complex" },
      { label: "Land Parcel", value: "7.3 Acres" },
      { label: "Floors", value: "G+9 Storey" },
      { label: "Open Space", value: "60%+" },
      { label: "Status", value: "OC Received — Ready to Move" },
      { label: "Plan Approval", value: "Thane Collector" },
    ],
    locationAdvantages: [
      "Superior Railway and Highway connectivity",
      "Upcoming Samruddhi Mahamarg (Mumbai–Nagpur Expressway)",
      "Upcoming Mumbai–Nashik Local Train",
      "Near Asangaon Railway Station",
      "Close to NH-3 Mumbai–Nashik Highway",
      "Schools and hospitals nearby",
      "Zero pollution zone with lush greenery",
    ],
    nearbyInfra: [
      "Asangaon Railway Station — Nearby",
      "NH-3 Mumbai–Nashik Highway — Accessible",
      "Schools & Colleges — Nearby",
      "Hospitals — Within reach",
      "Markets & Shopping — Available",
    ],
    images: [
      // TODO: Add La Luxuria images when provided by client
      { src: "/images/projects/symphonee-greens/hero.jpg", alt: "La Luxuria project (image pending)", category: "exterior" },
    ],
    heroImage: "/images/projects/symphonee-greens/hero.jpg", // TODO: Replace with La Luxuria hero image
    youtubeUrl: undefined,
    mapsUrl: undefined,
    possessionDate: "Ready to Move — OC Received",
  },
  {
    id: "royalcity",
    name: "Royal City",
    slug: "royal-city",
    type: "1 RK, 1 BHK & 2 BHK Apartments",
    location: "Asangaon–Shahapur, Thane",
    city: "thane",
    description:
      'Completed township by Royale Group. OC received. Zero pollution zone called "Next Thane". 1 RK from 230 sq.ft.',
    longDescription:
      'Royal City is a completed residential township by Royale Group, located in the serene Asangaon–Shahapur corridor of Thane District. Known locally as the "Next Thane", this zero-pollution zone offers an ideal escape from urban congestion while maintaining excellent connectivity via the Central Railway line. With OC received, Royal City offers immediate possession with configurations starting from compact 1 RK units (230 sq.ft.) ideal for first-time buyers and investors. The township features complete infrastructure including water supply, electricity, internal roads, and common amenities.',
    price: "From ₹12 L",
    developer: "Royale Group",
    rera: "OC Received",
    status: "ready",
    statusLabel: "Ready to Move",
    propertyType: "affordable",
    budget: "0-30",
    featured: true,
    configurations: [
      { type: "1 RK", area: "230 sq.ft.", price: "From ₹12 Lacs" },
      { type: "1 BHK", area: "~380 sq.ft.", price: "On Request" },
      { type: "2 BHK", area: "~550 sq.ft.", price: "On Request" },
    ],
    amenities: [
      "Internal Roads",
      "Water Supply",
      "Electricity",
      "Children's Play Area",
      "Garden Area",
      "Security",
      "Compound Wall",
      "Car Parking",
      "Drainage System",
    ],
    specifications: [
      { label: "Developer", value: "Royale Group" },
      { label: "Location", value: "Asangaon–Shahapur, Thane" },
      { label: "Type", value: "Residential Township" },
      { label: "Configurations", value: "1 RK, 1 BHK, 2 BHK" },
      { label: "Status", value: "OC Received — Ready to Move" },
      { label: "Zone", value: "Zero Pollution Zone" },
    ],
    locationAdvantages: [
      "Zero pollution zone — clean air and green surroundings",
      "Excellent railway connectivity",
      "Proximity to Mumbai via Central Railway",
      "Growing infrastructure development",
      "Affordable pricing for first-time buyers",
      "Ideal for investment in emerging market",
    ],
    nearbyInfra: [
      "Asangaon Railway Station — Nearby",
      "NH-3 Highway — Accessible",
      "Schools & Educational Institutions — Nearby",
      "Healthcare Facilities — Available",
      "Local Markets — Within reach",
    ],
    images: [
      // TODO: Add Royal City images when provided by client
      { src: "/images/projects/symphonee-greens/hero.jpg", alt: "Royal City project (image pending)", category: "exterior" },
    ],
    heroImage: "/images/projects/symphonee-greens/hero.jpg", // TODO: Replace with Royal City hero image
  },
  {
    id: "banjara",
    name: "Banjara Hills",
    slug: "banjara-hills",
    type: "NA Open Plots (Freehold)",
    location: "Shahapur, Thane",
    city: "thane",
    description:
      "Largest satellite township in Thane District. ~1,200 freehold NA plots. 300 m above sea level. TP Sanctioned. 75 km from Mumbai.",
    longDescription:
      "Banjara Hills is the largest satellite township development in Thane District, offering approximately 1,200 freehold NA (Non-Agricultural) plots. Situated at an elevation of 300 metres above sea level in Shahapur, this TP-sanctioned township is just 75 km from Mumbai. The freehold nature of the plots means buyers get complete ownership with no recurring charges to a developer. With Town Planning sanctioned layout, all plots come with clear titles, proper road access, and basic infrastructure provisions. Ideal for buyers looking for land investment, weekend homes, or future residential construction in a rapidly developing area.",
    price: "",
    developer: "Knox Realty / JB United",
    rera: "TP Sanctioned",
    status: "ready",
    statusLabel: "Plots Available",
    propertyType: "plot",
    budget: "0-30",
    featured: false,
    configurations: [
      { type: "Standard Plot", area: "Varies", price: "Contact for Price" },
    ],
    amenities: [
      "Internal Roads",
      "Electricity Provision",
      "Water Supply",
      "Drainage",
      "Compound Wall",
      "Security Gate",
      "Garden Area",
      "Community Hall",
    ],
    specifications: [
      { label: "Developer", value: "Knox Realty / JB United" },
      { label: "Location", value: "Shahapur, Thane" },
      { label: "Type", value: "NA Open Plots (Freehold)" },
      { label: "Total Plots", value: "~1,200" },
      { label: "Elevation", value: "300 m above sea level" },
      { label: "Approval", value: "TP Sanctioned" },
      { label: "Distance from Mumbai", value: "75 km" },
    ],
    locationAdvantages: [
      "75 km from Mumbai",
      "300 m above sea level — cooler climate",
      "Freehold plots — complete ownership",
      "TP Sanctioned layout",
      "Growing infrastructure in Shahapur Taluka",
      "Investment potential in emerging corridor",
    ],
    nearbyInfra: [
      "NH-3 Mumbai–Nashik Highway — Accessible",
      "Shahapur Town — Nearby",
      "Asangaon Railway Station — Reachable",
      "Schools & Markets — Available in Shahapur",
    ],
    images: [
      // TODO: Add Banjara Hills images when provided by client
      { src: "/images/projects/symphonee-greens/hero.jpg", alt: "Banjara Hills township (image pending)", category: "exterior" },
    ],
    heroImage: "/images/projects/symphonee-greens/hero.jpg", // TODO: Replace with Banjara Hills hero image
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return [...PROJECTS]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, limit);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
