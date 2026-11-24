// FYN — Find Your North
// Master Travel Data for 8 Destinations & Popular Combos

const FYN_DATA = {
  destinations: [
    {
      id: "vietnam",
      name: "Vietnam",
      tagline: "Emerald Bays, Ancient Lanterns & Street Food Aromas",
      route: "Hanoi • Halong Bay • Hoi An • Da Nang",
      heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      flag: "🇻🇳",
      idealNights: 7,
      basePriceInr: 68500,
      visaInfo: "E-Visa (3 working days, ₹2,100)",
      flightDuration: "4h 30m direct from DEL/BOM",
      bestSeason: "Oct – Apr",
      vibe: ["Couples", "Culture Lovers", "Foodies"],
      description: "From overnight luxury cruises in Halong Bay's limestone karsts to romantic lantern-lit alleys in Hoi An, experience Vietnam with your private chauffeur and expert English-speaking guide.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Hanoi & Old Quarter Evening Walk",
          location: "Hanoi",
          summary: "Chauffeured pickup from Noi Bai Airport to your heritage hotel. Evening cyclo ride through 36 guild streets.",
          activities: [
            {
              id: "vn-1-morn",
              time: "Morning",
              title: "VIP Airport Chauffeur & Check-in",
              description: "Private air-conditioned transfer directly to your hotel with chilled local lemongrass tea.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "vn-1-aft",
              time: "Afternoon",
              title: "Hoan Kiem Lake & French Quarter Stroll",
              description: "Leisurely guided walk crossing the red The Huc bridge and admiring French colonial architecture.",
              tag: "Guided Heritage",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "vn-1-eve",
              time: "Evening",
              title: "Old Quarter Cyclo Ride & Egg Coffee Tasting",
              description: "Tranquil pedal-rickshaw through bustling night markets, finishing with Hanoi's famous warm egg coffee.",
              tag: "Must Experience",
              costDelta: 1500,
              icon: "coffee"
            }
          ]
        },
        {
          day: 2,
          title: "Overnight Luxury Cruise in Halong Bay",
          location: "Halong Bay",
          summary: "Board a 5-star boutique wooden junk. Kayak into emerald lagoons, explore Sung Sot cave, and sunset deck dining.",
          activities: [
            {
              id: "vn-2-morn",
              time: "Morning",
              title: "Limousine Drive to Tuan Chau Marina",
              description: "Scenic 2.5-hour highway drive through the Red River Delta in a luxury reclining leather seat van.",
              tag: "Scenic Drive",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "vn-2-aft",
              time: "Afternoon",
              title: "Kayaking in Luon Cave & Pearl Farm",
              description: "Paddle through sea arches surrounded by towering karst pillars and curious golden-headed langurs.",
              tag: "Adventure",
              costDelta: 0,
              icon: "navigation"
            },
            {
              id: "vn-2-eve",
              time: "Evening",
              title: "Sunset Deck Cocktails & Squid Fishing",
              description: "Watch the sun sink behind misty limestone islets, followed by a 6-course Vietnamese fusion dinner.",
              tag: "Signature Luxury",
              costDelta: 2000,
              icon: "sunset"
            }
          ]
        },
        {
          day: 3,
          title: "Sunrise Tai Chi & Flight to Danang / Hoi An",
          location: "Hoi An",
          summary: "Morning Tai Chi on the sun deck, visit Titov Island viewpoint, then private transfer for a quick flight to Danang.",
          activities: [
            {
              id: "vn-3-morn",
              time: "Morning",
              title: "Sunrise Deck Tai Chi & Titov Island Hike",
              description: "Gentle morning stretches followed by a 400-step panoramic climb for the iconic 360° view of Halong Bay.",
              tag: "Wellness",
              costDelta: 0,
              icon: "sun"
            },
            {
              id: "vn-3-aft",
              time: "Afternoon",
              title: "Private Flight Connection to Danang",
              description: "Chauffeur transfer to Hanoi airport for a seamless 1h 15m flight to Danang and onward drive to Hoi An.",
              tag: "Domestic Flight",
              costDelta: 0,
              icon: "plane"
            },
            {
              id: "vn-3-eve",
              time: "Evening",
              title: "Hoi An Riverside Lantern Boat Ride",
              description: "Float down the Thu Bon river at twilight releasing floating paper lotus candles for good fortune.",
              tag: "Romantic",
              costDelta: 1200,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 4,
          title: "Bana Hills Golden Bridge & Coconut Village",
          location: "Danang / Hoi An",
          summary: "Cable car up to the world-famous Giant Hands Golden Bridge, followed by basket boat spinning in Cam Thanh.",
          activities: [
            {
              id: "vn-4-morn",
              time: "Morning",
              title: "Early Access to Golden Bridge (Ba Na Hills)",
              description: "Beat the morning crowds on the world's longest cable car to touch the colossal stone hands in the clouds.",
              tag: "Iconic Landmark",
              costDelta: 2500,
              icon: "camera"
            },
            {
              id: "vn-4-aft",
              time: "Afternoon",
              title: "Cam Thanh Coconut Forest Basket Boat",
              description: "Glide through nipa palm canals with local fishermen spinning bamboo coracle boats.",
              tag: "Cultural Fun",
              costDelta: 0,
              icon: "waves"
            },
            {
              id: "vn-4-eve",
              time: "Evening",
              title: "Custom Tailoring & Chef's Street Food Tasting",
              description: "Get bespoke linen suits or dresses hand-stitched in 24 hours, followed by vegetarian-friendly street bites.",
              tag: "Bespoke",
              costDelta: 0,
              icon: "shopping-bag"
            }
          ]
        },
        {
          day: 5,
          title: "My Son Sanctuary & Hoi An Beach Club",
          location: "Hoi An",
          summary: "Discover 4th-century Hindu Champa temples hidden in lush valleys, followed by a chilled afternoon at An Bang beach.",
          activities: [
            {
              id: "vn-5-morn",
              time: "Morning",
              title: "My Son Champa Hindu Temples Tour",
              description: "Private guided exploration of sacred red-brick Shiva sanctuaries echoing India's ancient ties with Vietnam.",
              tag: "History & Heritage",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "vn-5-aft",
              time: "Afternoon",
              title: "An Bang Beach Lounging & Coconut Water",
              description: "Reserved daybed at The Deckhouse beach club with ocean breezes and fresh coconut water.",
              tag: "Relaxation",
              costDelta: 800,
              icon: "umbrella"
            },
            {
              id: "vn-5-eve",
              time: "Evening",
              title: "Hoi An Memories Cultural Extravaganza",
              description: "Spectacular outdoor stage production with 500 performers tracing 400 years of Hoi An heritage.",
              tag: "Evening Show",
              costDelta: 3000,
              icon: "star"
            }
          ]
        },
        {
          day: 6,
          title: "Marble Mountains & Danang Dragon Bridge",
          location: "Danang",
          summary: "Explore sacred limestone caves and pagodas at Marble Mountains, then sunset stroll along My Khe beach.",
          activities: [
            {
              id: "vn-6-morn",
              time: "Morning",
              title: "Marble Mountain Caves & Hidden Shrines",
              description: "Climb through Huyen Khong cave where shafts of sunlight illuminate underground Buddhist altars.",
              tag: "Exploration",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "vn-6-aft",
              time: "Afternoon",
              title: "Spa Treatment & Souvenir Shopping at Han Market",
              description: "60-minute hot stone herbal body massage followed by artisan coffee and silk shopping.",
              tag: "Pampering",
              costDelta: 2200,
              icon: "heart"
            },
            {
              id: "vn-6-eve",
              time: "Evening",
              title: "Dragon Bridge Fire & Water Breathing Show",
              description: "Watch Danang's iconic steel dragon breathe real fire and water over the Han River (weekend special).",
              tag: "Visual Wonder",
              costDelta: 0,
              icon: "flame"
            }
          ]
        },
        {
          day: 7,
          title: "Farewell Vietnam & Chauffeur Transfer Home",
          location: "Danang / Hanoi",
          summary: "Gourmet buffet breakfast, last-minute souvenir hunting, and seamless airport drop for your flight back to India.",
          activities: [
            {
              id: "vn-7-morn",
              time: "Morning",
              title: "Leisurely Resort Breakfast & Infinity Pool",
              description: "Relax at your resort with sweeping views of the East Sea and tropical tropical gardens.",
              tag: "Leisure",
              costDelta: 0,
              icon: "coffee"
            },
            {
              id: "vn-7-aft",
              time: "Afternoon",
              title: "Private Airport Transfer & Tax-Free Departure",
              description: "Assisted drop-off at Danang International Airport for your connection back to Delhi/Mumbai/Bengaluru.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "vn-h-1",
          name: "Anantara Hoi An Resort",
          tier: "Luxury Heritage",
          location: "Thu Bon Riverfront, Hoi An",
          rating: 4.9,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 16500,
          highlight: "Colonial riverfront suites with private boat jetty and lush courtyards",
          amenities: ["Dedicated Veg Menu", "Daily Yoga", "Riverfront Spa", "Free Bikes"],
          faq: [
            {
              q: "Does this hotel cater well to Indian vegetarian and Jain dietary preferences?",
              a: "Yes! Anantara has an executive chef trained in Indian specialties. Warm vegetarian choices, lentils, and custom Jain breakfast options are prepared fresh every morning upon request."
            },
            {
              q: "Is it walking distance to Hoi An Ancient Town?",
              a: "It's just a 7-minute scenic stroll along the pedestrian river promenade right into the heart of the lantern-lit Old Quarter."
            },
            {
              q: "Can we request interconnected rooms for our family?",
              a: "Yes, Deluxe River View interconnected suites can be guaranteed at the time of booking with FYN."
            }
          ]
        },
        {
          id: "vn-h-2",
          name: "Pullman Danang Beach Resort",
          tier: "5-Star Beachfront",
          location: "My Khe Beach, Danang",
          rating: 4.8,
          stars: 5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 13200,
          highlight: "Direct beach access with infinity pool facing the turquoise East Sea",
          amenities: ["Private Beach", "Indian Food Corner", "Kids Club", "Water Sports"],
          faq: [
            {
              q: "Are the beaches safe for swimming for kids and families?",
              a: "My Khe Beach in front of Pullman has gentle slopes, soft white sand, and certified lifeguards stationed throughout the day."
            },
            {
              q: "How far is the resort from Danang International Airport?",
              a: "Only 15 minutes by private chauffeur, making arrivals and departures completely stress-free."
            }
          ]
        },
        {
          id: "vn-h-3",
          name: "La Siesta Classic Ma May",
          tier: "Boutique Charm",
          location: "Old Quarter, Hanoi",
          rating: 4.9,
          stars: 4.5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 8900,
          highlight: "Top-rated boutique sanctuary in the middle of Hanoi's vibrant historic alleys",
          amenities: ["Rooftop Sky Bar", "Award-winning Spa", "Herbal Baths", "Central Walkability"],
          faq: [
            {
              q: "Is it quiet at night despite being in the Old Quarter?",
              a: "All rooms feature double-glazed acoustic soundproofing, creating a tranquil oasis away from street sounds."
            },
            {
              q: "Does the hotel arrange authentic vegetarian egg coffee?",
              a: "Yes, the hotel's cafe prepares the famous egg coffee as well as plant-based coconut froth alternatives."
            }
          ]
        }
      ]
    },
    {
      id: "bali",
      name: "Bali (Indonesia)",
      tagline: "Tropical Clifftops, Jungle Villas & Sunset Beach Clubs",
      route: "Ubud • Seminyak • Nusa Penida • Uluwatu",
      heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      flag: "🇮🇩",
      idealNights: 6,
      basePriceInr: 62500,
      visaInfo: "Visa on Arrival (Instant at DPS, ₹2,700)",
      flightDuration: "6h direct from DEL/BOM",
      bestSeason: "Apr – Oct",
      vibe: ["Honeymooners", "Relaxation", "Photography"],
      description: "Wake up to mist rising over Ubud's emerald jungle, swim with giant manta rays in Nusa Penida, and sip handcrafted mocktails at cliffside sunset lounges in Uluwatu.",
      itinerary: [
        {
          day: 1,
          title: "Warm Balinese Welcome & Ubud Jungle Check-in",
          location: "Ubud",
          summary: "Traditional frangipani garland greeting at Denpasar Airport, then private chauffeur transfer through artsy villages to your valley pool villa.",
          activities: [
            {
              id: "bali-1-morn",
              time: "Morning",
              title: "VIP Chauffeur & Tropical Welcome Drink",
              description: "Private Toyota Innova Crysta or Alphard transfer with complimentary Wi-Fi and chilled bottled water.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "bali-1-aft",
              time: "Afternoon",
              title: "Sacred Monkey Forest Sanctuary Walk",
              description: "Stroll beneath ancient banyan trees among 1,000+ playful long-tailed macaques and moss-covered guardian shrines.",
              tag: "Nature & Wildlife",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "bali-1-eve",
              time: "Evening",
              title: "Candlelit 4-Course Dinner overlooking Ayung River",
              description: "Private bamboo pavilion dining with traditional gamelan music and curated vegetarian/seafood options.",
              tag: "Romantic",
              costDelta: 2500,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 2,
          title: "Tegalalang Rice Terraces & Iconic Jungle Swing",
          location: "Ubud",
          summary: "Soar over palm tree canopies on the famous jungle swing, explore cascading rice paddies, and sample Luwak coffee.",
          activities: [
            {
              id: "bali-2-morn",
              time: "Morning",
              title: "Sunrise at Tegalalang Rice Terraces & Giant Swing",
              description: "Capture dreamlike photos wearing flowing dresses on the high tandem swing with panoramic valley backdrops.",
              tag: "Top Instagram Spot",
              costDelta: 1800,
              icon: "camera"
            },
            {
              id: "bali-2-aft",
              time: "Afternoon",
              title: "Tirta Empul Holy Water Temple Purification",
              description: "Participate in or witness the traditional Melukat spiritual cleansing ritual beneath 12 stone water spouts.",
              tag: "Spiritual Culture",
              costDelta: 0,
              icon: "droplet"
            },
            {
              id: "bali-2-eve",
              time: "Evening",
              title: "Ubud Art Market & Organic Cafe Crawl",
              description: "Browse handmade rattan bags, silk sarongs, and wooden carvings before dessert at a plant-based cafe.",
              tag: "Shopping & Leisure",
              costDelta: 0,
              icon: "shopping-bag"
            }
          ]
        },
        {
          day: 3,
          title: "Speedboat to Nusa Penida & Kelingking T-Rex Cliff",
          location: "Nusa Penida",
          summary: "Day excursion to the wild island of Nusa Penida: marvel at the dinosaur-shaped cliff, Broken Beach, and Angel's Billabong.",
          activities: [
            {
              id: "bali-3-morn",
              time: "Morning",
              title: "Private Speedboat to Nusa Penida Island",
              description: "Reserved seating across the Badung Strait with private island driver waiting at the harbor.",
              tag: "Island Adventure",
              costDelta: 0,
              icon: "ship"
            },
            {
              id: "bali-3-aft",
              time: "Afternoon",
              title: "Kelingking T-Rex Cliff & Angel's Billabong",
              description: "Stand atop the sheer 200m limestone cliff looking down at the electric turquoise waters and white sands.",
              tag: "Wonder of Bali",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "bali-3-eve",
              time: "Evening",
              title: "Crystal Bay Sunset & Return to Seminyak",
              description: "Relax on palm-lined shores sipping fresh coconut before the evening cruise back to your beach resort.",
              tag: "Sunset",
              costDelta: 1000,
              icon: "sunset"
            }
          ]
        },
        {
          day: 4,
          title: "Seminyak Beach Day & Clifftop Uluwatu Temple",
          location: "Seminyak / Uluwatu",
          summary: "Morning retail therapy in chic boutiques, followed by breathtaking ocean vistas and sunset Kecak fire dance on Uluwatu cliffs.",
          activities: [
            {
              id: "bali-4-morn",
              time: "Morning",
              title: "Floating Breakfast in Your Private Pool Villa",
              description: "Gourmet tropical fruit platter, fresh warm waffles or savoury Indian poha delivered on a floating tray.",
              tag: "Villa Indulgence",
              costDelta: 1200,
              icon: "coffee"
            },
            {
              id: "bali-4-aft",
              time: "Afternoon",
              title: "Uluwatu Clifftop Temple & Sea Views",
              description: "Walk along the 70m limestone clifftop path watching giant Indian Ocean swells roll against the cliff base.",
              tag: "Historic Sanctuary",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "bali-4-eve",
              time: "Evening",
              title: "Uluwatu Sunset Kecak Fire Dance",
              description: "Mesmerizing 50-man polyrhythmic chant performance dramatizing the Ramayana epic as the sun melts into the sea.",
              tag: "Unforgettable Show",
              costDelta: 1500,
              icon: "flame"
            }
          ]
        },
        {
          day: 5,
          title: "Jimbaran Bay Candlelight Dinner & Beach Club Day",
          location: "Canggu / Jimbaran",
          summary: "Daybed lounging at Atlas Beach Fest or Finns Beach Club, followed by table-on-sand dining in Jimbaran Bay.",
          activities: [
            {
              id: "bali-5-morn",
              time: "Morning",
              title: "Couples Balinese Herbal Boreh Spa",
              description: "2-hour pampering ritual featuring warm clove-ginger scrub, flower bath, and deep tissue acupressure massage.",
              tag: "Spa & Wellness",
              costDelta: 2800,
              icon: "heart"
            },
            {
              id: "bali-5-aft",
              time: "Afternoon",
              title: "Finns Beach Club VIP Daybed Experience",
              description: "Front-row oceanview daybed with DJ tunes, infinity pool swim-up bar, and complimentary credit.",
              tag: "Beach Club",
              costDelta: 2000,
              icon: "umbrella"
            },
            {
              id: "bali-5-eve",
              time: "Evening",
              title: "Jimbaran Bay Candlelit Seafood / Veg Grill",
              description: "Toes in the sand, lantern-lit dining table watching the gentle waves with fresh grilled delicacies.",
              tag: "Beachfront Dining",
              costDelta: 1800,
              icon: "sunset"
            }
          ]
        },
        {
          day: 6,
          title: "Tanah Lot Temple & Airport Transfer Home",
          location: "Tanah Lot / DPS Airport",
          summary: "Witness the offshore sea temple of Tanah Lot during low tide, last souvenir pickups, and private transfer to airport.",
          activities: [
            {
              id: "bali-6-morn",
              time: "Morning",
              title: "Tanah Lot Offshore Rock Temple",
              description: "Centuries-old sea temple perched on an offshore rock formation carved by ocean tides.",
              tag: "Historic Landmark",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "bali-6-aft",
              time: "Afternoon",
              title: "VIP Lounge Access & Departure Drop",
              description: "Chauffeur transfer to Ngurah Rai International Airport for your smooth journey back home to India.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "bali-h-1",
          name: "Kayon Jungle Resort by Pramana",
          tier: "Luxury Jungle Sanctuary",
          location: "Payangan, Ubud",
          rating: 4.95,
          stars: 5,
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 21500,
          highlight: "Three-tiered infinity pool mimicking rice terraces deep in Ubud valley",
          amenities: ["Private Pool Villas", "Pure Veg & Jain Options", "Yoga Pavilion", "Adults Only Peace"],
          faq: [
            {
              q: "Can they serve Jain or pure vegetarian food without onion/garlic?",
              a: "Absolutely. The restaurant has dedicated utensils and an acclaimed plant-based menu with custom Jain dishes crafted daily."
            },
            {
              q: "Is transportation provided to central Ubud?",
              a: "Yes, free hourly luxury shuttle service operates directly between the resort and Ubud town center."
            }
          ]
        },
        {
          id: "bali-h-2",
          name: "W Bali - Seminyak",
          tier: "5-Star Beachfront Luxury",
          location: "Petitenget Beach, Seminyak",
          rating: 4.88,
          stars: 5,
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 24000,
          highlight: "Vibrant clifftop beachfront living with sunset WOOBAR and multi-tier pools",
          amenities: ["Beachfront", "24/7 Butler Service", "Indian Breakfast Buffet", "Sunset DJ Sessions"],
          faq: [
            {
              q: "Is breakfast included and does it have Indian food?",
              a: "Yes, Fire Restaurant features an extensive Indian live breakfast counter with freshly made dosas, sambar, and parathas."
            }
          ]
        },
        {
          id: "bali-h-3",
          name: "The Leaf Jimbaran Luxury Villas",
          tier: "Boutique Private Villa",
          location: "Jimbaran Hills",
          rating: 4.8,
          stars: 4.5,
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 11500,
          highlight: "Secluded private pool villas surrounded by fragrant herbal gardens",
          amenities: ["Private Plunge Pool", "In-villa Floating Breakfast", "Kitchenette", "Free Beach Shuttle"],
          faq: [
            {
              q: "Are the private pools completely enclosed and private?",
              a: "Yes, each villa has high limestone boundary walls ensuring 100% privacy for couples and families."
            }
          ]
        }
      ]
    },
    {
      id: "thailand",
      name: "Thailand",
      tagline: "Limestone Lagoons, Golden Chedis & Rooftop Glamour",
      route: "Bangkok • Phuket • Phi Phi Islands • Krabi",
      heroImage: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
      flag: "🇹🇭",
      idealNights: 6,
      basePriceInr: 54999,
      visaInfo: "Visa-Free for Indian Citizens (Instant entry)",
      flightDuration: "3h 45m direct from DEL/BOM/CCU",
      bestSeason: "Nov – Apr",
      vibe: ["Friends & Groups", "Island Hopping", "Luxury Nightlife"],
      description: "Fast speedboat adventures to Maya Bay, emerald sea-kayaking in Phang Nga Bay, and sky-high cocktails on Bangkok's 61st floor rooftops.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Phuket & Sunset Clifftop Check-in",
          location: "Phuket",
          summary: "Private greeting at Phuket International Airport, chauffeured transfer to your oceanview resort in Kamala/Karon.",
          activities: [
            {
              id: "th-1-morn",
              time: "Morning",
              title: "VIP Airport Meet & Chauffeur Transfer",
              description: "Comfortable private van with refreshing cold towels and direct hotel check-in.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "th-1-aft",
              time: "Afternoon",
              title: "Big Buddha Hilltop Panoramic Viewpoint",
              description: "Marvel at the 45-meter white Burmese marble statue overlooking Chalong Bay and Kata Beach.",
              tag: "Iconic Sight",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "th-1-eve",
              time: "Evening",
              title: "Sunset Cocktails at Cafe del Mar Beach Club",
              description: "Mediterranean vibes, beachfront cabanas, and fire dancers under the stars.",
              tag: "Lifestyle & Music",
              costDelta: 1500,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 2,
          title: "Private Speedboat to Phi Phi & Maya Bay",
          location: "Phi Phi Islands",
          summary: "Speedboat across crystal waters to Maya Bay ('The Beach'), snorkel with reef sharks, and explore Pileh Lagoon.",
          activities: [
            {
              id: "th-2-morn",
              time: "Morning",
              title: "Early Access Maya Bay & Pileh Lagoon Dip",
              description: "Jump into the emerald waters of enclosed Pileh Lagoon before the large tourist ferries arrive.",
              tag: "World Wonder",
              costDelta: 2200,
              icon: "waves"
            },
            {
              id: "th-2-aft",
              time: "Afternoon",
              title: "Snorkeling at Bamboo Island & Monkey Beach",
              description: "Pristine white sandbars, colorful coral reefs, and wild monkeys foraging on jungle cliffs.",
              tag: "Marine Life",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "th-2-eve",
              time: "Evening",
              title: "Phuket Old Town Walking & Sino-Portuguese Cafes",
              description: "Wander pastel colonial shophouses, street art murals, and artisan ice cream parlors.",
              tag: "Heritage",
              costDelta: 0,
              icon: "coffee"
            }
          ]
        },
        {
          day: 3,
          title: "James Bond Island & Phang Nga Sea Kayaking",
          location: "Phang Nga Bay",
          summary: "Cruise into the dramatic limestone bay made famous in 007, paddling sea canoes through hidden sea caves.",
          activities: [
            {
              id: "th-3-morn",
              time: "Morning",
              title: "Phang Nga Bay Cruise & James Bond Island",
              description: "View the needle-shaped limestone rock Ko Ta Pu and explore the sea-cave chambers of Koh Panak.",
              tag: "007 Experience",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "th-3-aft",
              time: "Afternoon",
              title: "Stilt Village Lunch at Koh Panyee",
              description: "Visit the extraordinary Muslim floating village built on stilts over water with a floating football pitch.",
              tag: "Cultural Insight",
              costDelta: 0,
              icon: "navigation"
            },
            {
              id: "th-3-eve",
              time: "Evening",
              title: "Authentic Thai Herbal Compress Massage",
              description: "90 minutes of restorative traditional stretching and warm lemongrass herbal poultice massage.",
              tag: "Wellness",
              costDelta: 1800,
              icon: "heart"
            }
          ]
        },
        {
          day: 4,
          title: "Fly to Bangkok & Chao Phraya River Cruise",
          location: "Bangkok",
          summary: "1-hour flight to vibrant Bangkok. Check into your riverside hotel and enjoy an illuminated dinner cruise.",
          activities: [
            {
              id: "th-4-morn",
              time: "Morning",
              title: "Private Flight Connection to Bangkok",
              description: "Chauffeur transfer from Phuket to Bangkok with instant check-in at your riverfront high-rise.",
              tag: "Flight & Transfer",
              costDelta: 0,
              icon: "plane"
            },
            {
              id: "th-4-aft",
              time: "Afternoon",
              title: "ICONSIAM Luxury Mall & SookSiam Floating Market",
              description: "Explore the air-conditioned indoor replica of Thai floating markets with artisanal crafts from 77 provinces.",
              tag: "Shopping & Dining",
              costDelta: 0,
              icon: "shopping-bag"
            },
            {
              id: "th-4-eve",
              time: "Evening",
              title: "Chao Phraya Princess Luxury Dinner Cruise",
              description: "Dine on Thai and Indian cuisine as illuminated Wat Arun and Grand Palace drift past the open deck.",
              tag: "Dinner Cruise",
              costDelta: 2400,
              icon: "ship"
            }
          ]
        },
        {
          day: 5,
          title: "Grand Palace, Wat Pho & Sky Bar 61st Floor",
          location: "Bangkok",
          summary: "Explore the shimmering Golden Chedi, the 46m Reclining Buddha, and toast the skyline from the world's highest rooftop bars.",
          activities: [
            {
              id: "th-5-morn",
              time: "Morning",
              title: "Grand Palace & Emerald Buddha Temple",
              description: "Royal grandeur with dazzling gold mosaic spires and sacred jade Buddha statues.",
              tag: "Royal Heritage",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "th-5-aft",
              time: "Afternoon",
              title: "Wat Pho Giant Reclining Buddha & Thai Spa",
              description: "Marvel at the mother-of-pearl soles of the colossal Buddha and visit the birthplace of Thai massage.",
              tag: "Must Visit",
              costDelta: 0,
              icon: "sparkles"
            },
            {
              id: "th-5-eve",
              time: "Evening",
              title: "Vertigo & Moon Bar Rooftop (Banyan Tree 61F)",
              description: "Sip cocktails suspended over the glowing Bangkok metropolis with unmatched 360° horizon views.",
              tag: "Signature Night",
              costDelta: 2000,
              icon: "sunset"
            }
          ]
        },
        {
          day: 6,
          title: "Bangkok Souvenirs & Chauffeur to Suvarnabhumi Airport",
          location: "Bangkok / Suvarnabhumi",
          summary: "Last-minute duty-free shopping, luxury luggage concierge, and private ride to BKK airport.",
          activities: [
            {
              id: "th-6-morn",
              time: "Morning",
              title: "CentralWorld & Platinum Fashion Mall Shopping",
              description: "Fill suitcases with high-end designer labels, Thai silk scarves, and exotic teas.",
              tag: "Shopping spree",
              costDelta: 0,
              icon: "shopping-bag"
            },
            {
              id: "th-6-aft",
              time: "Afternoon",
              title: "Chauffeured Airport Drop for Return Flight",
              description: "Direct highway transfer to Suvarnabhumi Airport with fast-track immigration assistance.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "th-h-1",
          name: "The Nai Harn Phuket",
          tier: "Luxury Cliffside Sanctuary",
          location: "Nai Harn Beach, Phuket",
          rating: 4.9,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 17500,
          highlight: "Iconic oceanfront cliff suites overlooking Phuket's most pristine cove",
          amenities: ["Private Balcony Daybeds", "Extensive Indian Buffet", "Beach Butler", "Infinity Pool"],
          faq: [
            {
              q: "How accessible is Nai Harn Beach from the resort?",
              a: "The resort has direct private steps down to the secluded white sand beach in under 2 minutes."
            }
          ]
        },
        {
          id: "th-h-2",
          name: "Banyan Tree Bangkok",
          tier: "5-Star Skyline Icon",
          location: "Sathorn, Bangkok",
          rating: 4.85,
          stars: 5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 14800,
          highlight: "Home to the world-renowned Moon Bar with all-suite luxury rooms",
          amenities: ["Rooftop Vertigo Bar", "Award-winning Spa", "Indian Vegetarian Chefs", "Club Lounge"],
          faq: [
            {
              q: "Does Banyan Tree offer Indian breakfast dishes?",
              a: "Yes, Romsai restaurant features dedicated Indian counters serving freshly prepared idlis, dosas, parathas, and masala chai."
            }
          ]
        },
        {
          id: "th-h-3",
          name: "Avani+ Riverside Bangkok Hotel",
          tier: "Modern Riverfront Luxury",
          location: "Chao Phraya River, Bangkok",
          rating: 4.8,
          stars: 4.5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 9800,
          highlight: "26th-floor rooftop infinity pool with sweeping panoramic views of the river",
          amenities: ["Infinity Pool", "Free River Shuttle Boat", "Direct Mall Access", "Skyline Bar"],
          faq: [
            {
              q: "How easy is it to reach the SkyTrain (BTS) from Avani+?",
              a: "The hotel operates a complimentary private luxury shuttle boat every 20 minutes to the Saphan Taksin BTS station."
            }
          ]
        }
      ]
    },
    {
      id: "cambodia",
      name: "Cambodia",
      tagline: "Lost Empires of Angkor Wat & Gentle Khmer Smiles",
      route: "Siem Reap • Angkor Thom • Ta Prohm • Tonle Sap",
      heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      flag: "🇰🇭",
      idealNights: 5,
      basePriceInr: 58900,
      visaInfo: "E-Visa / Visa on Arrival (Instant, ₹2,900)",
      flightDuration: "5h 15m via BKK/HAN",
      bestSeason: "Nov – Mar",
      vibe: ["History Enthusiasts", "Architecture", "Spiritual"],
      description: "Witness the sun rise behind the five lotus spires of Angkor Wat, walk through giant strangler fig roots at Tomb Raider temple, and glide past Tonle Sap floating villages.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Siem Reap & Royal Gardens Welcome",
          location: "Siem Reap",
          summary: "Private airport reception and check-in to your French-Khmer boutique retreat with private tropical pool.",
          activities: [
            {
              id: "cam-1-morn",
              time: "Morning",
              title: "VIP Airport Chauffeur & Jasmine Welcome",
              description: "Cold jasmine-scented towels, chilled coconut water, and seamless transfer to your luxury resort.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "cam-1-aft",
              time: "Afternoon",
              title: "Angkor National Museum Deep-Dive",
              description: "Walk through the Gallery of 1,000 Buddhas to understand the deep Hindu roots connecting Cambodia and India.",
              tag: "Cultural Context",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "cam-1-eve",
              time: "Evening",
              title: "Apsara Classical Dance & Royal Khmer Banquet",
              description: "Enchanting silk-clad dancers portraying scenes from the Ramayana (Reamker) with live traditional orchestra.",
              tag: "Traditional Show",
              costDelta: 1800,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 2,
          title: "Sunrise at Angkor Wat & Ta Prohm (Tomb Raider)",
          location: "Angkor Archaeological Park",
          summary: "Bucket-list sunrise reflection over the sacred lotus ponds, followed by the enigmatic Bayon stone smiles.",
          activities: [
            {
              id: "cam-2-morn",
              time: "Morning",
              title: "Angkor Wat Sunrise Reflection Walk",
              description: "Private early access to capture the unforgettable purple and amber dawn silhouette behind the world's largest religious monument.",
              tag: "Wonder of the World",
              costDelta: 0,
              icon: "sun"
            },
            {
              id: "cam-2-aft",
              time: "Afternoon",
              title: "Bayon Temple & 216 Smiling Stone Faces",
              description: "Explore the center of Angkor Thom surrounded by colossal serene carved bodhisattva faces gazing in all directions.",
              tag: "Architectural Wonder",
              costDelta: 0,
              icon: "camera"
            },
            {
              id: "cam-2-eve",
              time: "Evening",
              title: "Ta Prohm Temple Under Golden Hour Light",
              description: "Wander the overgrown sanctuary where massive banyan roots intertwine with ancient stone corridors.",
              tag: "Tomb Raider Iconic",
              costDelta: 1200,
              icon: "sunset"
            }
          ]
        },
        {
          day: 3,
          title: "Banteay Srei (Pink Citadel) & Tonle Sap Lake",
          location: "Siem Reap Countryside",
          summary: "Exquisite 10th-century pink sandstone carvings dedicated to Shiva, followed by private wooden boat on Southeast Asia's largest lake.",
          activities: [
            {
              id: "cam-3-morn",
              time: "Morning",
              title: "Banteay Srei Pink Sandstone Carvings",
              description: "Known as the 'Jewel of Khmer Art', admire intricate bas-reliefs of Mahabharata legends carved with miniature precision.",
              tag: "Fine Art Wonder",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "cam-3-aft",
              time: "Afternoon",
              title: "Tonle Sap Floating Village Private Boat Cruise",
              description: "Sail past floating schools, markets, and pagodas to witness daily life suspended over tranquil waters.",
              tag: "Rural Discovery",
              costDelta: 1500,
              icon: "ship"
            },
            {
              id: "cam-3-eve",
              time: "Evening",
              title: "Phare: The Cambodian Circus & Acrobatics",
              description: "World-class theatrical performance combining high-flying acrobatics, folk humor, and moving history.",
              tag: "Cultural Thrill",
              costDelta: 2000,
              icon: "star"
            }
          ]
        },
        {
          day: 4,
          title: "Phnom Kulen Holy Mountain & 1,000 Lingas",
          location: "Phnom Kulen",
          summary: "Sacred mountain plateau with riverbed Hindu lingam carvings and cascading forest waterfalls for a cool swim.",
          activities: [
            {
              id: "cam-4-morn",
              time: "Morning",
              title: "Kbal Spean River of a Thousand Lingas",
              description: "Walk along the forest riverbed where thousands of sacred Shiva lingams were carved into the river stone 1,000 years ago.",
              tag: "Sacred Pilgrimage",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "cam-4-aft",
              time: "Afternoon",
              title: "Kulen Waterfall Swim & Jungle Picnic",
              description: "Refresh yourself under the double-tiered cascade surrounded by lush tropical ferns and wild orchids.",
              tag: "Nature & Leisure",
              costDelta: 1000,
              icon: "waves"
            },
            {
              id: "cam-4-eve",
              time: "Evening",
              title: "Old Market Pub Street & Night Bazaar Shopping",
              description: "Hunt for Kampot black pepper, wild raw honey, and hand-woven silks followed by dinner at a colonial restaurant.",
              tag: "Nightlife & Crafts",
              costDelta: 0,
              icon: "shopping-bag"
            }
          ]
        },
        {
          day: 5,
          title: "Artisans Angkor Workshop & Airport Transfer",
          location: "Siem Reap",
          summary: "Observe master stone carvers and silk weavers reviving classical Khmer craft before your chauffeured airport drop.",
          activities: [
            {
              id: "cam-5-morn",
              time: "Morning",
              title: "Artisans Angkor Silk & Lacquerware Atelier",
              description: "Guided private walk through fair-trade artisan ateliers producing world-renowned silks and bronze art.",
              tag: "Artisanal Craft",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "cam-5-aft",
              time: "Afternoon",
              title: "Chauffeured Airport Drop for Return Flight",
              description: "Smooth ride to the new Siem Reap Angkor International Airport (SAI) for your homeward journey.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "cam-h-1",
          name: "Raffles Grand Hotel d'Angkor",
          tier: "Legendary Heritage Luxury",
          location: "Old French Quarter, Siem Reap",
          rating: 4.95,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 26000,
          highlight: "Historic 1932 landmark hosting royals and film legends with Cambodia's largest heritage pool",
          amenities: ["Historic French Lift", "Butler Service", "Dedicated Indian Chef", "Lush Royal Gardens"],
          faq: [
            {
              q: "Can the hotel prepare Indian vegetarian meals?",
              a: "Yes, Raffles maintains a dedicated Indian kitchen menu with authentic dal, paneer, and tandoori breads."
            }
          ]
        },
        {
          id: "cam-h-2",
          name: "Shinta Mani Angkor - Bensley Collection",
          tier: "Designer Luxury Villas",
          location: "Siem Reap Riverside",
          rating: 4.9,
          stars: 5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 21000,
          highlight: "Bill Bensley designed private pool villas with personal Bensley Butlers",
          amenities: ["Private Lap Pool", "Rooftop Stargazing Bed", "Spa Treatments Included", "Concierge"],
          faq: [
            {
              q: "Are temple passes included in the stay?",
              a: "FYN includes full multi-day Angkor passes and your private English-speaking licensed guide in your package."
            }
          ]
        },
        {
          id: "cam-h-3",
          name: "Heritage Suites Hotel",
          tier: "Boutique Colonial Oasis",
          location: "Wat Polanka, Siem Reap",
          rating: 4.8,
          stars: 4.5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 10500,
          highlight: "Intimate colonial bungalow suites with outdoor open-air garden bathtubs",
          amenities: ["Saltwater Pool", "Live Jazz Evenings", "Eco-friendly", "Custom Vegetarian Menus"],
          faq: [
            {
              q: "Is it peaceful and away from tourist crowds?",
              a: "Yes, nestled in a quiet residential leafy area while still just 5 minutes by private tuk-tuk to the city center."
            }
          ]
        }
      ]
    },
    {
      id: "philippines",
      name: "Philippines",
      tagline: "7,000 Islands, Hidden Lagoons & Sugar White Sands",
      route: "Manila • El Nido • Coron • Boracay",
      heroImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
      flag: "🇵🇭",
      idealNights: 7,
      basePriceInr: 79500,
      visaInfo: "E-Visa / Simplified Tourist Visa (₹3,200)",
      flightDuration: "6h 30m via BKK/SIN",
      bestSeason: "Nov – May",
      vibe: ["Beach Lovers", "Snorkeling & Diving", "Adventure"],
      description: "Cruise secret limestone lagoons in El Nido, swim in crystal-clear Kayangan Lake in Coron, and stroll the powder-soft White Beach of Boracay.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Manila & Intramuros Walled City",
          location: "Manila",
          summary: "Private greeting at NAIA Airport and historic tour of Spanish colonial Fort Santiago before your onward island hop.",
          activities: [
            {
              id: "ph-1-morn",
              time: "Morning",
              title: "VIP Airport Meet & Heritage Transfer",
              description: "Chauffeured pickup and transfer to your Manila Bay five-star property.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "ph-1-aft",
              time: "Afternoon",
              title: "Intramuros Bamboo Bike Guided Tour",
              description: "Ride handcrafted eco-bamboo bikes along 400-year-old stone walls, San Agustin Church, and cobblestone plazas.",
              tag: "Historic Walk",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "ph-1-eve",
              time: "Evening",
              title: "Sunset Over Manila Bay & Rooftop Dinner",
              description: "Witness the legendary golden Manila Bay sunset followed by fusion dining.",
              tag: "Sunset View",
              costDelta: 1500,
              icon: "sunset"
            }
          ]
        },
        {
          day: 2,
          title: "Fly to El Nido, Palawan & Clifftop Villa Check-in",
          location: "El Nido, Palawan",
          summary: "Direct charter flight landing on El Nido's scenic jungle airstrip, speedboat to your overwater or cliffside eco-resort.",
          activities: [
            {
              id: "ph-2-morn",
              time: "Morning",
              title: "Scenic Island Aviation Flight to Lio Airport",
              description: "Skip the bumpy 6-hour vans: fly directly into El Nido with jaw-dropping views of Bacuit Archipelago.",
              tag: "Direct Flight",
              costDelta: 0,
              icon: "plane"
            },
            {
              id: "ph-2-aft",
              time: "Afternoon",
              title: "Nacpan Beach Twin Beach Stroll",
              description: "4-kilometer stretch of golden sand lined with coconut palms, perfect for barefoot walks.",
              tag: "Pristine Coast",
              costDelta: 0,
              icon: "umbrella"
            },
            {
              id: "ph-2-eve",
              time: "Evening",
              title: "Private Beach BBQ & Fire Dancers",
              description: "Tropical skewers, fresh grilled seafood or paneer/veggie platters under tiki torches.",
              tag: "Beach Night",
              costDelta: 2200,
              icon: "flame"
            }
          ]
        },
        {
          day: 3,
          title: "Big Lagoon, Secret Lagoon & Shimizu Island",
          location: "Bacuit Bay, El Nido",
          summary: "Private motorized catamaran cruising through the world's most dramatic karst archipelago.",
          activities: [
            {
              id: "ph-3-morn",
              time: "Morning",
              title: "Kayak Through El Nido Big Lagoon",
              description: "Paddle your clear kayak through towering limestone cathedral walls into tranquil glass-like emerald water.",
              tag: "Bucket List",
              costDelta: 1500,
              icon: "waves"
            },
            {
              id: "ph-3-aft",
              time: "Afternoon",
              title: "Secret Beach Crawl-Through & Snorkeling",
              description: "Swim through a narrow hole in a sheer cliff wall to discover a hidden tropical beach lagoon inside.",
              tag: "Hidden Gem",
              costDelta: 0,
              icon: "camera"
            },
            {
              id: "ph-3-eve",
              time: "Evening",
              title: "Seven Commandos Beach Sunset Cocktails",
              description: "Sip fresh mango daiquiris or fruit smoothies under palm trees as the sun dips into the South China Sea.",
              tag: "Sunset Lounge",
              costDelta: 1000,
              icon: "sunset"
            }
          ]
        },
        {
          day: 4,
          title: "Speedboat to Coron & Twin Lagoons Kayaking",
          location: "Coron Island",
          summary: "Arrive in Coron: swim through submerged rock tunnels into the two different temperature bodies of water at Twin Lagoon.",
          activities: [
            {
              id: "ph-4-morn",
              time: "Morning",
              title: "Twin Lagoon Thermal Waters Swim",
              description: "Experience the unique thermocline phenomenon where cool freshwater meets warm salt sea water.",
              tag: "Natural Wonder",
              costDelta: 0,
              icon: "droplet"
            },
            {
              id: "ph-4-aft",
              time: "Afternoon",
              title: "Kayangan Lake (Cleanest Lake in Asia)",
              description: "Climb the scenic viewpoint overlooking Coron Bay, then swim in the mirror-smooth, crystal-clear mountain lake.",
              tag: "Iconic Postcard",
              costDelta: 1200,
              icon: "mountain"
            },
            {
              id: "ph-4-eve",
              time: "Evening",
              title: "Maquinit Natural Saltwater Hot Springs",
              description: "Soak in therapeutic 40°C mineral hot springs surrounded by mangrove trees under the starlit sky.",
              tag: "Hot Springs",
              costDelta: 0,
              icon: "heart"
            }
          ]
        },
        {
          day: 5,
          title: "Coron Coral Gardens & WWII Shipwreck Dive/Snorkel",
          location: "Coron Bay",
          summary: "Snorkel over sunken 1944 Japanese naval supply vessels encrusted with brilliant coral gardens and sea turtles.",
          activities: [
            {
              id: "ph-5-morn",
              time: "Morning",
              title: "Skeleton Wreck Snorkel & Turtle Spotting",
              description: "Float effortlessly over a 25m sunken ship resting just 5 meters below surface with colorful marine life.",
              tag: "Historic Reef",
              costDelta: 1800,
              icon: "compass"
            },
            {
              id: "ph-5-aft",
              time: "Afternoon",
              title: "Lusong Gunboat Coral Garden Drift",
              description: "Vibrant table corals, neon anemonefish, and giant clams in crystal clear waters.",
              tag: "Snorkeling Paradise",
              costDelta: 0,
              icon: "waves"
            },
            {
              id: "ph-5-eve",
              time: "Evening",
              title: "Mount Tapyas 724-Step Sunset Hike",
              description: "Climb to the giant illuminated cross on Mt Tapyas for a glorious 360-degree sunset over Coron town and islands.",
              tag: "Panoramic Sunset",
              costDelta: 0,
              icon: "sunset"
            }
          ]
        },
        {
          day: 6,
          title: "Fly to Boracay & Sunset Paraw Sailing",
          location: "Boracay Island",
          summary: "Hop over to world-famous Boracay: sink your toes into flour-soft sand and sail on a traditional trimaran sailboat.",
          activities: [
            {
              id: "ph-6-morn",
              time: "Morning",
              title: "Private Flight Connection to Caticlan / Boracay",
              description: "VIP speed boat transfer directly to Boracay Station 1 beachfront.",
              tag: "VIP Transfer",
              costDelta: 0,
              icon: "ship"
            },
            {
              id: "ph-6-aft",
              time: "Afternoon",
              title: "White Beach Powder Sand Stroll & Paddleboarding",
              description: "The softest cool white sand that never gets hot under the sun, ideal for families and sun seekers.",
              tag: "Top Beach",
              costDelta: 0,
              icon: "umbrella"
            },
            {
              id: "ph-6-eve",
              time: "Evening",
              title: "Private Paraw Sunset Sailboat Cruise",
              description: "Glide silently across turquoise waters on a traditional double-outrigger sailboat as the sky turns fiery crimson.",
              tag: "Boracay Classic",
              costDelta: 2500,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 7,
          title: "Boracay Chill & Chauffeur Transfer Home",
          location: "Boracay / Manila",
          summary: "Buffet breakfast by the sea, shell souvenir shopping, and VIP transfer to Caticlan airport for homeward flights.",
          activities: [
            {
              id: "ph-7-morn",
              time: "Morning",
              title: "Oceanfront Breakfast & Last Swim",
              description: "Freshly squeezed calamansi juice, mangoes, and warm breakfast by the turquoise shores.",
              tag: "Relaxation",
              costDelta: 0,
              icon: "coffee"
            },
            {
              id: "ph-7-aft",
              time: "Afternoon",
              title: "Chauffeured Airport Transfer for Return Journey",
              description: "Private speedboat and van transfer to Caticlan/Manila for your flight back to India.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "ph-h-1",
          name: "El Nido Resorts Pangulasian Island",
          tier: "Ultra Luxury Eco-Island",
          location: "Bacuit Bay, El Nido",
          rating: 4.96,
          stars: 5,
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 32000,
          highlight: "Known as the 'Island of the Sun' with front-row sunset views and private marine sanctuary",
          amenities: ["Private Beachfront Villas", "Personal Guide & Boat", "Gourmet Dining", "Spa Sanctuary"],
          faq: [
            {
              q: "Is it an all-inclusive island experience?",
              a: "Package includes private transfers, custom guided boat excursions to all El Nido lagoons, and snorkel gear."
            }
          ]
        },
        {
          id: "ph-h-2",
          name: "Shangri-La Boracay Resort & Spa",
          tier: "5-Star Secluded Clifftop",
          location: "Yapak, Boracay",
          rating: 4.9,
          stars: 5,
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 27500,
          highlight: "Nestled in a private cove with two private secluded beaches and cliffside dining pavilions",
          amenities: ["Private Beaches", "Sirena Clifftop Bar", "Indian Delicacies on Request", "CHI Spa"],
          faq: [
            {
              q: "Can we get Indian vegetarian food here?",
              a: "Yes, Shangri-La has Indian-trained chefs who prepare exquisite paneer dishes, dal makhani, and warm naans."
            }
          ]
        },
        {
          id: "ph-h-3",
          name: "Two Seasons Coron Island Resort",
          tier: "Luxury Island Bungalows",
          location: "Malaroyroy Island, Coron",
          rating: 4.85,
          stars: 5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 19500,
          highlight: "100% eco-friendly 5-star haven with turtle sanctuary and sandbar beach",
          amenities: ["HydroBOB Underwater Scooters", "Infinity Pool", "House Reef", "Private Catamaran"],
          faq: [
            {
              q: "Is the house reef good for snorkeling right off the beach?",
              a: "Yes, you can spot giant clams, stingrays, and vibrant schools of fish right off the private pier."
            }
          ]
        }
      ]
    },
    {
      id: "azerbaijan",
      name: "Azerbaijan",
      tagline: "Flame Towers, Caspian Breezes & Ancient Fire Temples",
      route: "Baku • Gobustan • Gabala • Shahdag",
      heroImage: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1200&q=80",
      flag: "🇦🇿",
      idealNights: 5,
      basePriceInr: 52000,
      visaInfo: "ASAN E-Visa (Approved in 3 hours, ₹2,200)",
      flightDuration: "4h direct from DEL/BOM (IndiGo / AZAL)",
      bestSeason: "Year-Round (Snow in Dec-Mar)",
      vibe: ["Couples", "Modern City & Snow", "Bollywood Loved"],
      description: "Stand before the futuristic Flame Towers, marvel at the ancient Ateshgah Fire Temple revered by Indian traders centuries ago, and ascend snow-capped peaks in Shahdag.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Baku & Boulevard Evening Stroll",
          location: "Baku",
          summary: "Direct flight arrival in Baku, chauffeured transfer to your 5-star Caspian seafront hotel, and evening stroll along Baku Boulevard.",
          activities: [
            {
              id: "az-1-morn",
              time: "Morning",
              title: "VIP Mercedes V-Class Chauffeur Meet & Greet",
              description: "Welcome at Heydar Aliyev International Airport with SIM card assistance and luxury transfer.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "az-1-aft",
              time: "Afternoon",
              title: "Baku Boulevard & Little Venice Gondola Ride",
              description: "Glide through the manicured waterways of Little Venice along the Caspian seaside promenade.",
              tag: "City Charm",
              costDelta: 0,
              icon: "ship"
            },
            {
              id: "az-1-eve",
              time: "Evening",
              title: "Highland Park & Flame Towers LED Light Show",
              description: "Ride the funicular up to Highland Park for panoramic night views as the Flame Towers erupt into giant digital fire and flags.",
              tag: "Iconic Night",
              costDelta: 1000,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 2,
          title: "Old City (Icherisheher) & Heydar Aliyev Center",
          location: "Baku",
          summary: "UNESCO Maiden Tower and Shirvanshahs Palace, followed by Zaha Hadid's breathtaking architectural masterpiece.",
          activities: [
            {
              id: "az-2-morn",
              time: "Morning",
              title: "Old City Walking Tour & Maiden Tower",
              description: "Cobblestone alleys, ancient caravanserais where silk road traders slept, and the 12th-century Maiden Tower.",
              tag: "UNESCO Heritage",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "az-2-aft",
              time: "Afternoon",
              title: "Heydar Aliyev Center (Zaha Hadid Architecture)",
              description: "Tour the fluid, curvilinear white architectural marvel that won the London Design of the Year.",
              tag: "Modern Wonder",
              costDelta: 1200,
              icon: "camera"
            },
            {
              id: "az-2-eve",
              time: "Evening",
              title: "Nizami Street Shopping & Traditional Tea Ceremony",
              description: "Bustling European-style pedestrian boulevard lined with grand mansions, boutique shopping, and aromatic samovar tea with baklava.",
              tag: "Leisure & Dining",
              costDelta: 0,
              icon: "coffee"
            }
          ]
        },
        {
          day: 3,
          title: "Ateshgah Fire Temple, Yanar Dag & Gobustan Mud Volcanoes",
          location: "Absheron Peninsula & Gobustan",
          summary: "Discover the sacred Indian fire temple inscribed with Sanskrit prayers, eternal burning hillside, and bubbliest mud volcanoes on earth.",
          activities: [
            {
              id: "az-3-morn",
              time: "Morning",
              title: "Ateshgah Indian Fire Temple & Yanar Dag Burning Hill",
              description: "Visit the 17th-century Hindu-Zoroastrian temple with stone inscriptions honoring Lord Shiva and Ganesh, followed by natural gas fire burning non-stop since antiquity.",
              tag: "Sacred Ties to India",
              costDelta: 0,
              icon: "flame"
            },
            {
              id: "az-3-aft",
              time: "Afternoon",
              title: "Gobustan Prehistoric Petroglyphs & Mud Volcanoes",
              description: "40,000-year-old rock engravings and an off-road Soviet Lada ride to bubbling grey mud craters.",
              tag: "Ancient Geology",
              costDelta: 1500,
              icon: "mountain"
            },
            {
              id: "az-3-eve",
              time: "Evening",
              title: "Shirvanshah Traditional Restaurant & Folk Music",
              description: "Dine inside an authentic restored bathhouse-turned-museum with live Tar and Mugham musical performances.",
              tag: "Grand Banquet",
              costDelta: 2000,
              icon: "star"
            }
          ]
        },
        {
          day: 4,
          title: "Alpine Adventure to Shahdag / Gabala Mountain Resort",
          location: "Shahdag / Gabala",
          summary: "Scenic highway drive into the Greater Caucasus mountains. Ride alpine coasters, cable cars, and ski slopes.",
          activities: [
            {
              id: "az-4-morn",
              time: "Morning",
              title: "Chauffeured Drive into Greater Caucasus Range",
              description: "Pass through Red Village (Qirmizi Qasaba) and dramatic canyons to Azerbaijan's premier mountain resort.",
              tag: "Alpine Roadtrip",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "az-4-aft",
              time: "Afternoon",
              title: "Shahdag Alpine Coaster & Mountain Cable Car",
              description: "Feel the rush on the thrilling mountain roller-coaster banking down mountain slopes and take the cable car to 2,350m.",
              tag: "Mountain Thrill",
              costDelta: 2200,
              icon: "mountain"
            },
            {
              id: "az-4-eve",
              time: "Evening",
              title: "Chalet Fireplace Dinner & Hot Mulled Drinks",
              description: "Cozy mountain lodge atmosphere overlooking snowy peaks or lush summer alpine meadows.",
              tag: "Alpine Luxury",
              costDelta: 1200,
              icon: "sunset"
            }
          ]
        },
        {
          day: 5,
          title: "Taza Bazaar Spice Shopping & Farewell Baku",
          location: "Baku",
          summary: "Pick up world-famous Azerbaijan saffron, Caspian caviar, dried fruits, and private transfer to Baku airport.",
          activities: [
            {
              id: "az-5-morn",
              time: "Morning",
              title: "Taza Bazaar Saffron & Caviar Tasting",
              description: "Taste pure mountain honey, mountain herbs, and premium Grade-A saffron threads at local vendor rates.",
              tag: "Local Flavors",
              costDelta: 0,
              icon: "shopping-bag"
            },
            {
              id: "az-5-aft",
              time: "Afternoon",
              title: "Chauffeured Airport Transfer for Direct Flight to India",
              description: "Short 25-minute highway transfer to GYD airport for your fast 4-hour flight home.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "az-h-1",
          name: "Four Seasons Hotel Baku",
          tier: "Luxury Beaux-Arts Palace",
          location: "Caspian Seafront / Old City, Baku",
          rating: 4.96,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 22500,
          highlight: "Grand classical European palace overlooking the Caspian Promenade and Maiden Tower",
          amenities: ["Roman Indoor Pool", "Caspian Sea Views", "Dedicated Indian Menus", "Luxury Spa"],
          faq: [
            {
              q: "Is Indian food available nearby or at the hotel?",
              a: "Four Seasons is 3 minutes away from top-rated Indian fine-dining restaurants (Maharaja, Benares) and serves freshly prepared Indian breakfast."
            }
          ]
        },
        {
          id: "az-h-2",
          name: "Pik Palace, Autograph Collection Shahdag",
          tier: "Alpine Ski Resort & Spa",
          location: "Shahdag Mountain Resort",
          rating: 4.88,
          stars: 5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 15500,
          highlight: "Heated outdoor mountain infinity pool surrounded by snow-covered peaks",
          amenities: ["Heated Mountain Pool", "Ski-in / Ski-out", "Kids Play Lounge", "Alpine Spa"],
          faq: [
            {
              q: "Is Shahdag good for non-skiers?",
              a: "Yes! There are snowshoeing trails, snowmobile safaris, alpine coasters, and cable cars with panoramic views."
            }
          ]
        },
        {
          id: "az-h-3",
          name: "InterContinental Baku",
          tier: "5-Star Downtown Luxury",
          location: "Nizami Street / Fountain Square",
          rating: 4.85,
          stars: 5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 12800,
          highlight: "Steps away from high-end boutiques on Nizami Street and Old City gates",
          amenities: ["Hydrotherapy Pool", "Walk to Nizami St", "Modern Suites", "Executive Lounge"],
          faq: [
            {
              q: "Can we walk to major sightseeing spots from here?",
              a: "Yes, Fountain Square, Boulevard, and Old City are all within an easy 5-10 minute walk."
            }
          ]
        }
      ]
    },
    {
      id: "georgia",
      name: "Georgia",
      tagline: "High Caucasus Glaciers, Old Tbilisi & Ancient Wine Valleys",
      route: "Tbilisi • Kazbegi • Kakheti Wine Region • Mtskheta",
      heroImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
      flag: "🇬🇪",
      idealNights: 6,
      basePriceInr: 61500,
      visaInfo: "E-Visa / Free with valid US/UK/Schengen/UAE Visa",
      flightDuration: "5h 30m via Sharjah/Doha/Tashkent",
      bestSeason: "May – Oct (Ski in Jan-Mar)",
      vibe: ["Nature & Mountains", "Romantic", "Wine & Cheese"],
      description: "Soak in historic sulfur baths beneath the Narikala Fortress, drive the dramatic Georgian Military Highway to Kazbegi's Gergeti Trinity Church, and savor fresh Khachapuri.",
      itinerary: [
        {
          day: 1,
          title: "Old Tbilisi Wooden Balconies & Sulfur Bathhouse",
          location: "Tbilisi",
          summary: "Arrive in Georgia's poetic capital. Walk the cobblestone lanes of Old Tbilisi and unwind in a private royal sulfur thermal bath.",
          activities: [
            {
              id: "ge-1-morn",
              time: "Morning",
              title: "VIP Mercedes Airport Chauffeur Welcome",
              description: "Warm Georgian greeting with chilled Borjomi mineral water and hotel transfer.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "ge-1-aft",
              time: "Afternoon",
              title: "Old Tbilisi Balconies, Bridge of Peace & Clock Tower",
              description: "Cross the glass Bridge of Peace, admire Rezo Gabriadze's crooked puppet clock tower, and colorful carved wooden balconies.",
              tag: "Old Town Walk",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "ge-1-eve",
              time: "Evening",
              title: "Private Chreli Abano Royal Sulfur Bath Suite",
              description: "Historic domed brick bathhouse where Pushkin and Dumas bathed; private hot mineral pool and scrub.",
              tag: "Historic Pampering",
              costDelta: 1800,
              icon: "heart"
            }
          ]
        },
        {
          day: 2,
          title: "Georgian Military Highway & Kazbegi Mountain Majesty",
          location: "Stepantsminda / Kazbegi",
          summary: "Drive one of the world's most scenic alpine roads: Ananuri Fortress, Zhinvali emerald reservoir, and Russia-Georgia friendship monument.",
          activities: [
            {
              id: "ge-2-morn",
              time: "Morning",
              title: "Ananuri Fortress & Zhinvali Reservoir",
              description: "17th-century medieval stone castle overlooking the turquoise mountain lake surrounded by pine forests.",
              tag: "Medieval Castle",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "ge-2-aft",
              time: "Afternoon",
              title: "Gudauri Panorama & Caucasus Cross Pass",
              description: "Ascend past ski resorts to the colorful mosaic viewpoint at 2,379 meters with paragliders floating in deep canyons.",
              tag: "High Mountain Pass",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "ge-2-eve",
              time: "Evening",
              title: "Rooms Hotel Kazbegi Forest Terrace Dining",
              description: "World-renowned alpine retreat; sip hot mountain herbal tea wrapped in woolen blankets watching Mount Kazbek's glacier.",
              tag: "Signature Alpine",
              costDelta: 1600,
              icon: "sunset"
            }
          ]
        },
        {
          day: 3,
          title: "4x4 Jeep to Gergeti Trinity Church (2,170m)",
          location: "Kazbegi",
          summary: "Off-road mountain drive to the 14th-century church standing isolated against the towering 5,047m Kazbek volcano.",
          activities: [
            {
              id: "ge-3-morn",
              time: "Morning",
              title: "Off-Road 4WD to Gergeti Trinity Church",
              description: "Breathtaking mountain ascent to the symbol of Georgia perched dramatically on a high ridge above the clouds.",
              tag: "National Icon",
              costDelta: 1200,
              icon: "mountain"
            },
            {
              id: "ge-3-aft",
              time: "Afternoon",
              title: "Dariali Gorge & Russian Border Canyon",
              description: "Drive through the narrow granite gorge carved by the violent Terek River to the modern stone monastery.",
              tag: "Dramatic Canyon",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "ge-3-eve",
              time: "Evening",
              title: "Traditional Khinkali & Khachapuri Masterclass",
              description: "Learn the art of folding traditional twisted dumplings and baking melted Sulguni cheese bread with a local family.",
              tag: "Culinary Fun",
              costDelta: 1500,
              icon: "coffee"
            }
          ]
        },
        {
          day: 4,
          title: "Kakheti Cradle of Wine & Sighnaghi City of Love",
          location: "Kakheti Region",
          summary: "Visit the 8,000-year-old birthplace of wine in Kakheti, walking the 18th-century defensive city walls of hilltop Sighnaghi.",
          activities: [
            {
              id: "ge-4-morn",
              time: "Morning",
              title: "Bodbe Monastery & Saint Nino's Spring",
              description: "Tranquil cypress-studded convent where Georgia's patron saint is buried, with panoramic views of the Alazani Valley.",
              tag: "Sacred Sanctuary",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "ge-4-aft",
              time: "Afternoon",
              title: "Sighnaghi Italianate Ramparts & Clay Qvevri Tasting",
              description: "Walk the watchtowers overlooking the snowy Caucasus range, and taste artisanal amber wines fermented in underground clay jars.",
              tag: "UNESCO Wine Heritage",
              costDelta: 1800,
              icon: "sparkles"
            },
            {
              id: "ge-4-eve",
              time: "Evening",
              title: "Estate Dinner at Chateau Schuchmann",
              description: "Vineyard setting with Georgian polyphonic singing and gourmet vegetarian/lamb feasts.",
              tag: "Vineyard Feast",
              costDelta: 2000,
              icon: "sunset"
            }
          ]
        },
        {
          day: 5,
          title: "Mtskheta Ancient Capital & Jvari Monastery",
          location: "Mtskheta / Tbilisi",
          summary: "UNESCO World Heritage sites where Christianity was declared in Georgia in 337 AD at the confluence of two mountain rivers.",
          activities: [
            {
              id: "ge-5-morn",
              time: "Morning",
              title: "Jvari Clifftop Monastery (6th Century)",
              description: "Stand where Saint Nino erected the first wooden cross, overlooking the dramatic merger of Aragvi and Mtkvari rivers.",
              tag: "UNESCO Masterpiece",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "ge-5-aft",
              time: "Afternoon",
              title: "Svetitskhoveli Cathedral & Churchkhela Making",
              description: "Admire the burial site of Christ's mantle and string walnut candles dipped in grape molasses.",
              tag: "Living Heritage",
              costDelta: 0,
              icon: "shopping-bag"
            },
            {
              id: "ge-5-eve",
              time: "Evening",
              title: "Mtatsminda Funicular Sunset & Royal Dinner",
              description: "Ascend 727 meters above Tbilisi for a farewell feast overlooking the illuminated city lights.",
              tag: "Panoramic Night",
              costDelta: 1500,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 6,
          title: "Dry Bridge Flea Market & Chauffeur to TBS Airport",
          location: "Tbilisi",
          summary: "Browse antique Soviet cameras, amber jewelry, handmade carpets, and seamless private transfer to airport.",
          activities: [
            {
              id: "ge-6-morn",
              time: "Morning",
              title: "Dry Bridge Antique & Artisan Open-Air Market",
              description: "Eclectic treasures, Soviet memorabilia, Caucasus daggers, and hand-painted enamel jewelry.",
              tag: "Curio Shopping",
              costDelta: 0,
              icon: "shopping-bag"
            },
            {
              id: "ge-6-aft",
              time: "Afternoon",
              title: "Chauffeured Airport Transfer for Flight Home",
              description: "Comfortable private drop-off at Shota Rustaveli Tbilisi International Airport.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "ge-h-1",
          name: "Rooms Hotel Kazbegi",
          tier: "Iconic Design Mountain Lodge",
          location: "Stepantsminda, Kazbegi",
          rating: 4.95,
          stars: 5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 18500,
          highlight: "World-famous timber mountain lodge facing the jagged peak of Mount Kazbek",
          amenities: ["Indoor Mountain Pool", "Panoramic Terrace", "Fireplace Lounge", "Artisanal Bakery"],
          faq: [
            {
              q: "Can we see Mount Kazbek directly from our bedroom?",
              a: "Yes, when booking 'Front Mountain View' with FYN, your private balcony looks directly onto the snow-capped peak."
            }
          ]
        },
        {
          id: "ge-h-2",
          name: "Stamba Hotel Tbilisi",
          tier: "Luxury Bohemian Industrial",
          location: "Vera / Rustaveli, Tbilisi",
          rating: 4.92,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 19800,
          highlight: "Converted 1930s Soviet publishing house with 5-story jungle atrium and glass-bottom rooftop pool",
          amenities: ["Glass Rooftop Pool", "In-house Chocolaterie", "Private Courtyard", "Vibrant Arts District"],
          faq: [
            {
              q: "Is vegetarian dining available in Tbilisi?",
              a: "Georgian cuisine is famous for vegetarian dishes like Lobio (bean pot in clay), Pkhali (spinach/beet walnut pâté), and warm Khachapuri cheese breads."
            }
          ]
        },
        {
          id: "ge-h-3",
          name: "Tiflis Palace Hotel",
          tier: "Heritage Boutique Old Town",
          location: "Sulfur Bath District, Old Tbilisi",
          rating: 4.82,
          stars: 4.5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 11200,
          highlight: "Right in front of the historic domed sulfur baths and Narikala cliff fortress",
          amenities: ["Rooftop Restaurant", "Direct Bathhouse Access", "Old Town Walkability", "Boutique Comfort"],
          faq: [
            {
              q: "Can the hotel book private sulfur bath slots for us?",
              a: "FYN coordinates your private VIP sulfur room directly next door to the hotel with zero waiting."
            }
          ]
        }
      ]
    },
    {
      id: "kazakhstan",
      name: "Kazakhstan",
      tagline: "Turquoise Alpine Lakes, Grand Canyons & Eurasian Modernity",
      route: "Almaty • Big Almaty Lake • Charyn Canyon • Kolsai & Kaindy",
      heroImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      flag: "🇰🇿",
      idealNights: 6,
      basePriceInr: 59000,
      visaInfo: "14-Day Visa Free for Indian Passport Holders",
      flightDuration: "3h 30m direct from DEL (IndiGo / Air Astana)",
      bestSeason: "May – Oct (Ski in Dec-Mar)",
      vibe: ["Adventure & Canyons", "Alpine Lakes", "Untouched Nature"],
      description: "Travel just 3.5 hours from Delhi into the Tian Shan mountains. Marvel at sunken spruce forests in turquoise Kaindy Lake, hike red sandstone towers in Charyn Canyon, and take the Medeu cable car.",
      itinerary: [
        {
          day: 1,
          title: "Direct Arrival in Almaty & Kok Tobe Cable Car",
          location: "Almaty",
          summary: "Quick 3.5h direct flight from Delhi, luxury SUV transfer to your hotel, and sunset cable car up to Kok Tobe hill.",
          activities: [
            {
              id: "kz-1-morn",
              time: "Morning",
              title: "VIP 4WD Chauffeur Meet at ALA Airport",
              description: "Welcome at Almaty International Airport with high-clearance SUV for both city and mountain passes.",
              tag: "Private Transfer",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "kz-1-aft",
              time: "Afternoon",
              title: "Panfilov Park & Zenkov Wooden Cathedral",
              description: "Visit the extraordinary 56-meter wooden cathedral built entirely without a single metal nail that survived massive earthquakes.",
              tag: "Architectural Miracle",
              costDelta: 0,
              icon: "landmark"
            },
            {
              id: "kz-1-eve",
              time: "Evening",
              title: "Kok Tobe Mountain Funicular & Panoramic Sunset",
              description: "Ride the cable car over the city to Kok Tobe (1,100m) for panoramic views of snow-capped Zailiyskiy Alatau peaks.",
              tag: "City Skyline",
              costDelta: 1200,
              icon: "sunset"
            }
          ]
        },
        {
          day: 2,
          title: "Medeu High-Altitude Rink & Shymbulak Ski Resort (3,200m)",
          location: "Shymbulak Mountain Resort",
          summary: "Ascend past the world's highest Olympic ice skating rink on a three-stage gondola all the way to Talgar Pass (3,200m).",
          activities: [
            {
              id: "kz-2-morn",
              time: "Morning",
              title: "Medeu Ice Stadium & Dam Panorama",
              description: "Historic high-altitude speed skating rink surrounded by sheer granite peaks and pine-covered mountain flanks.",
              tag: "Historic Sport Site",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "kz-2-aft",
              time: "Afternoon",
              title: "Shymbulak 3-Tier Gondola to Talgar Pass",
              description: "Gondola ride up to 3,200 meters. Walk on the glacier pass with views of eternal snow peaks and glaciers.",
              tag: "3,200m Alpine",
              costDelta: 1800,
              icon: "compass"
            },
            {
              id: "kz-2-eve",
              time: "Evening",
              title: "Chalet Dining with Kazakh Samsa & Hot Baursak",
              description: "Warm fried golden bread, savory pastries, fresh salads, and herbal tea overlooking the valley.",
              tag: "Mountain Comfort",
              costDelta: 1200,
              icon: "coffee"
            }
          ]
        },
        {
          day: 3,
          title: "Charyn Canyon ('Valley of Castles') Expedition",
          location: "Charyn National Park",
          summary: "Marvel at the Central Asian twin of the Grand Canyon: 2-million-year-old red sandstone castle formations carved by Charyn River.",
          activities: [
            {
              id: "kz-3-morn",
              time: "Morning",
              title: "Scenic Steppe Drive to Charyn Canyon",
              description: "Comfortable private SUV journey through expansive Kazakh steppes with herds of horses grazing beneath distant glaciers.",
              tag: "Steppe Journey",
              costDelta: 0,
              icon: "car"
            },
            {
              id: "kz-3-aft",
              time: "Afternoon",
              title: "Valley of Castles 3km Canyon Floor Hike",
              description: "Hike between 200m towering red rock pillars sculpted into fairy-tale fortresses, ending at the rushing turquoise river.",
              tag: "Geological Wonder",
              costDelta: 1500,
              icon: "mountain"
            },
            {
              id: "kz-3-eve",
              time: "Evening",
              title: "Black Canyon Overlook & Sunset Steppe Panorama",
              description: "Peer into the deep basalt canyon abyss as the sunset bathes the Tian Shan peaks in rose gold light.",
              tag: "Epic Sunset",
              costDelta: 0,
              icon: "sunset"
            }
          ]
        },
        {
          day: 4,
          title: "Kolsai Alpine Lake & Sunken Forest of Kaindy Lake",
          location: "Kolsai Lakes National Park",
          summary: "Emerald mountain lakes reflecting Tien Shan spruce trees, and the surreal mystery of Kaindy Lake where birch trees rise out of water.",
          activities: [
            {
              id: "kz-4-morn",
              time: "Morning",
              title: "Sunken Birch Forest of Lake Kaindy",
              description: "Take a rugged mountain UAZ vehicle to the high mountain lake formed by an earthquake, where ghost spruce trees stand preserved in icy water.",
              tag: "World Wonder",
              costDelta: 2000,
              icon: "camera"
            },
            {
              id: "kz-4-aft",
              time: "Afternoon",
              title: "Kolsai Lake Wooden Boat Rowing",
              description: "Row a classic wooden boat across the glassy, mirror-smooth turquoise lake surrounded by fir forests.",
              tag: "Serene Lake",
              costDelta: 1000,
              icon: "ship"
            },
            {
              id: "kz-4-eve",
              time: "Evening",
              title: "Yurt Camp Experience & Campfire Stargazing",
              description: "Sip tea in an authentic felt nomadic yurt and gaze at the Milky Way with zero light pollution.",
              tag: "Nomadic Heritage",
              costDelta: 1500,
              icon: "sparkles"
            }
          ]
        },
        {
          day: 5,
          title: "Return to Almaty & Green Bazaar Gourmet Shopping",
          location: "Almaty",
          summary: "Return to Almaty in luxury. Taste famous Almaty mountain apples, dried apricots, smoked cheese kurut, and wild mountain honey.",
          activities: [
            {
              id: "kz-5-morn",
              time: "Morning",
              title: "Green Bazaar (Zelyony Bazar) Food Tasting",
              description: "Vibrant indoor market: sample walnut preserves, dried melons, horse-milk delicacies, and aromatic mountain spices.",
              tag: "Gourmet Tasting",
              costDelta: 0,
              icon: "shopping-bag"
            },
            {
              id: "kz-5-aft",
              time: "Afternoon",
              title: "Arbat Pedestrian Street & Artist Alley",
              description: "Stroll Almaty's favorite pedestrian avenue listening to live acoustic music, street painters, and chic cafes.",
              tag: "City Vibes",
              costDelta: 0,
              icon: "compass"
            },
            {
              id: "kz-5-eve",
              time: "Evening",
              title: "Arasan Luxury Baths & Thermal Steam",
              description: "Relax in one of Central Asia's most opulent bath complexes with Russian, Finnish, and oriental marble hammams.",
              tag: "Thermal Wellness",
              costDelta: 1800,
              icon: "heart"
            }
          ]
        },
        {
          day: 6,
          title: "Big Almaty Lake Overlook & Flight Home to India",
          location: "Almaty / ALA Airport",
          summary: "Drive up to the glacial lake tucked into high gorge (2,511m), and short transfer to ALA for your fast 3.5-hour direct flight to Delhi.",
          activities: [
            {
              id: "kz-6-morn",
              time: "Morning",
              title: "Big Almaty Lake High-Altitude Viewpoint",
              description: "Glacial reservoir shining like a giant turquoise jewel bordered by three majestic peaks.",
              tag: "Glacial Gem",
              costDelta: 0,
              icon: "mountain"
            },
            {
              id: "kz-6-aft",
              time: "Afternoon",
              title: "Chauffeured Airport Transfer for Direct Flight Home",
              description: "Direct highway transfer to ALA airport. Land back in Delhi in under 4 hours with no jet lag.",
              tag: "VIP Departure",
              costDelta: 0,
              icon: "plane"
            }
          ]
        }
      ],
      hotels: [
        {
          id: "kz-h-1",
          name: "The Ritz-Carlton, Almaty",
          tier: "Ultra Luxury Skyline Icon",
          location: "Esentai Tower, Almaty",
          rating: 4.96,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 24500,
          highlight: "Occupies the highest floors of Esentai Tower with unmatched views of the Tien Shan glaciers",
          amenities: ["Glacier View Rooms", "Six Senses Spa", "Esentai Mall Access", "Fine Dining Lounge"],
          faq: [
            {
              q: "Does the hotel cater to Indian travelers and vegetarian food?",
              a: "Yes, The Ritz-Carlton Almaty regularly hosts Indian weddings and executive guests, with dedicated vegetarian and Indian breakfast curries prepared fresh."
            }
          ]
        },
        {
          id: "kz-h-2",
          name: "Rixos Almaty",
          tier: "5-Star Classic Grandeur",
          location: "City Center, Almaty",
          rating: 4.9,
          stars: 5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 17800,
          highlight: "Grand Ottoman-inspired luxury palace with one of the city's largest heated indoor spa pools",
          amenities: ["Indoor Heated Pool", "Turkish Hammam", "Central Location", "Concierge Chauffeur"],
          faq: [
            {
              q: "How far is Rixos from the cable cars and Panfilov Park?",
              a: "Centrally located on Seifullin Avenue, within a 7-minute drive to Panfilov Park and 20 minutes to Medeu."
            }
          ]
        },
        {
          id: "kz-h-3",
          name: "Swissôtel Wellness Resort Alatau Almaty",
          tier: "Luxury Mountain Wellness Retreat",
          location: "Alatau Foothills",
          rating: 4.88,
          stars: 5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 14200,
          highlight: "Thermal mineral waters, pine forest walking trails, and European spa programs",
          amenities: ["Thermal Mineral Pools", "Forest Grounds", "Alpine Views", "Holistic Wellness"],
          faq: [
            {
              q: "Is Kazakhstan visa-free for Indian passport holders?",
              a: "Yes! Indian passport holders enjoy 14 days visa-free entry into Kazakhstan for tourism with simple immigration stamping on arrival."
            }
          ]
        }
      ]
    },
    // Combos
    {
      id: "vietnam-cambodia",
      name: "Vietnam + Cambodia Grand Indochina",
      tagline: "Halong Bay Karsts to Angkor Wat Sunrises",
      route: "Hanoi • Halong Bay • Hoi An • Siem Reap Angkor",
      heroImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      flag: "🇻🇳 🇰🇭",
      idealNights: 10,
      basePriceInr: 114500,
      visaInfo: "Dual E-Visa arranged seamlessly by FYN",
      flightDuration: "DEL/BOM direct to HAN, return from SAI",
      bestSeason: "Oct – Apr",
      vibe: ["Couples & Families", "Comprehensive Indochina", "UNESCO Icons"],
      description: "The ultimate 10-night journey through Southeast Asia: overnight luxury cruise in Halong Bay, lantern-lit romantic alleys of Hoi An, and private sunrise at the celestial temples of Angkor Wat.",
      itinerary: [
        {
          day: 1,
          title: "Hanoi Arrival & Old Quarter Heritage",
          location: "Hanoi",
          summary: "Airport chauffeur pickup, 5-star check-in, and evening cyclo tour with Vietnamese coffee tasting.",
          activities: [
            { id: "vc-1-1", time: "Morning", title: "VIP Airport Meet & Transfer", description: "Private luxury van transfer from Noi Bai Airport.", tag: "Private Transfer", costDelta: 0, icon: "car" },
            { id: "vc-1-2", time: "Afternoon", title: "French Quarter & Hoan Kiem Stroll", description: "Tranquil walking tour around the sword lake.", tag: "Heritage", costDelta: 0, icon: "compass" },
            { id: "vc-1-3", time: "Evening", title: "Old Quarter Cyclo & Street Tasting", description: "Traditional rickshaw ride and egg coffee.", tag: "Signature", costDelta: 1200, icon: "coffee" }
          ]
        },
        {
          day: 2,
          title: "Halong Bay Overnight Luxury Cruise",
          location: "Halong Bay",
          summary: "Board a 5-star wooden junk cruiser. Kayak through sea arches and dine under the stars.",
          activities: [
            { id: "vc-2-1", time: "Morning", title: "Limousine Van to Halong Marina", description: "Scenic highway drive through the Red River Delta.", tag: "Scenic Drive", costDelta: 0, icon: "car" },
            { id: "vc-2-2", time: "Afternoon", title: "Kayaking in Luon Cave Lagoon", description: "Paddle inside enclosed karst grottoes.", tag: "Adventure", costDelta: 0, icon: "waves" },
            { id: "vc-2-3", time: "Evening", title: "Sunset Cocktails & 6-Course Dinner", description: "Watch twilight over the limestone pillars.", tag: "Luxury Dining", costDelta: 2000, icon: "sunset" }
          ]
        },
        {
          day: 3,
          title: "Sunrise Tai Chi & Flight to Danang / Hoi An",
          location: "Hoi An",
          summary: "Titov Island hike, return cruise to port, and domestic flight to the charming town of Hoi An.",
          activities: [
            { id: "vc-3-1", time: "Morning", title: "Sunrise Tai Chi & Titov Viewpoint", description: "Panoramic morning summit views over the bay.", tag: "Wellness", costDelta: 0, icon: "sun" },
            { id: "vc-3-2", time: "Afternoon", title: "Domestic Flight to Danang", description: "Fast 1h 15m flight and chauffeured drive to Hoi An.", tag: "Flight", costDelta: 0, icon: "plane" },
            { id: "vc-3-3", time: "Evening", title: "Hoi An Lantern River Boat", description: "Release glowing flower lanterns onto Thu Bon river.", tag: "Romantic", costDelta: 1200, icon: "sparkles" }
          ]
        },
        {
          day: 4,
          title: "Bana Hills Golden Bridge & Coconut Boats",
          location: "Danang / Hoi An",
          summary: "Ride the cable car to touch the colossal stone hands in the sky, then spin in bamboo coracle boats.",
          activities: [
            { id: "vc-4-1", time: "Morning", title: "Golden Hands Bridge Cable Car", description: "World-famous bridge held by giant stone hands.", tag: "Iconic Landmark", costDelta: 2500, icon: "camera" },
            { id: "vc-4-2", time: "Afternoon", title: "Cam Thanh Basket Boat Spin", description: "Fun spinning boat tour through palm canals.", tag: "Fun Culture", costDelta: 0, icon: "waves" },
            { id: "vc-4-3", time: "Evening", title: "Custom Tailoring & Chef's Tasting", description: "Order custom bespoke suits/dresses hand-made in 24 hours.", tag: "Bespoke", costDelta: 0, icon: "shopping-bag" }
          ]
        },
        {
          day: 5,
          title: "Fly to Siem Reap, Cambodia & Royal Welcome",
          location: "Siem Reap",
          summary: "Short international hop to Cambodia. Jasmine garland greeting and check-in to your colonial resort.",
          activities: [
            { id: "vc-5-1", time: "Morning", title: "Private Airport Chauffeur to Danang", description: "Executive airport transfer for flight to Cambodia.", tag: "Transfer", costDelta: 0, icon: "plane" },
            { id: "vc-5-2", time: "Afternoon", title: "Angkor National Museum Deep-Dive", description: "Uncover the Indian Hindu origins of Khmer civilization.", tag: "Culture", costDelta: 0, icon: "landmark" },
            { id: "vc-5-3", time: "Evening", title: "Royal Khmer Banquet & Apsara Dance", description: "Classical Ramayana ballet performance with fine dining.", tag: "Banquet Show", costDelta: 1800, icon: "star" }
          ]
        },
        {
          day: 6,
          title: "Angkor Wat Sunrise & Ta Prohm (Tomb Raider)",
          location: "Angkor Archaeological Park",
          summary: "Witness the golden dawn over Angkor's lotus ponds, followed by the jungle-strangled stone roots of Ta Prohm.",
          activities: [
            { id: "vc-6-1", time: "Morning", title: "Angkor Wat Dawn Silhouette Walk", description: "Early access for the iconic reflection photography.", tag: "World Wonder", costDelta: 0, icon: "sun" },
            { id: "vc-6-2", time: "Afternoon", title: "Bayon 216 Serene Smiling Faces", description: "Ancient stone towers carved with enigmatic faces.", tag: "Masterpiece", costDelta: 0, icon: "camera" },
            { id: "vc-6-3", time: "Evening", title: "Ta Prohm Giant Tree Roots Tour", description: "Atmospheric evening walk where nature reclaims ancient stone.", tag: "Tomb Raider", costDelta: 1200, icon: "sunset" }
          ]
        },
        {
          day: 7,
          title: "Pink Sandstone Banteay Srei & Floating Village",
          location: "Siem Reap / Tonle Sap",
          summary: "10th-century pink sandstone temple dedicated to Lord Shiva, followed by private boat on Tonle Sap lake.",
          activities: [
            { id: "vc-7-1", time: "Morning", title: "Banteay Srei Shiva Sanctuary", description: "Exquisite miniature sandstone carvings from the 10th century.", tag: "Heritage Art", costDelta: 0, icon: "landmark" },
            { id: "vc-7-2", time: "Afternoon", title: "Tonle Sap Private Wooden Boat", description: "Cruise past floating schools and stilt homes.", tag: "Lake Cruise", costDelta: 1500, icon: "ship" },
            { id: "vc-7-3", time: "Evening", title: "Phare Circus Acrobatic Show", description: "High-energy Cambodian cirque performance.", tag: "Show", costDelta: 2000, icon: "sparkles" }
          ]
        },
        {
          day: 8,
          title: "Farewell Indochina & Airport Departure",
          location: "Siem Reap",
          summary: "Gourmet poolside breakfast, silk souvenir shopping at Artisans Angkor, and airport transfer.",
          activities: [
            { id: "vc-8-1", time: "Morning", title: "Artisans Angkor Silk & Craft Atelier", description: "Watch master weavers and stone sculptors at work.", tag: "Shopping", costDelta: 0, icon: "shopping-bag" },
            { id: "vc-8-2", time: "Afternoon", title: "VIP Chauffeur Drop to Siem Reap Airport", description: "Assisted drop-off for flight back to India.", tag: "VIP Departure", costDelta: 0, icon: "plane" }
          ]
        }
      ],
      hotels: [
        {
          id: "vc-h-1",
          name: "Anantara Hoi An + Raffles Grand Hotel d'Angkor Combo",
          tier: "Dual 5-Star Heritage Luxury",
          location: "Hoi An & Siem Reap",
          rating: 4.96,
          stars: 5,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 21500,
          highlight: "Stay in the two most prestigious heritage landmarks of Vietnam and Cambodia",
          amenities: ["Private Boat Transfers", "Dedicated Indian Chefs", "Butler Service", "VIP Spa"],
          faq: [
            {
              q: "Are domestic and regional flights included in this combo?",
              a: "Yes! FYN includes all cross-border flights, internal domestic flights, and private airport chauffeurs."
            }
          ]
        },
        {
          id: "vc-h-2",
          name: "Pullman Danang + Heritage Suites Siem Reap",
          tier: "Beachfront & Colonial Boutique",
          location: "Danang Beach & Siem Reap",
          rating: 4.88,
          stars: 5,
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 14500,
          highlight: "The ideal balance of Danang's white sand beaches and tranquil jungle retreats in Angkor",
          amenities: ["Private Beach Access", "Saltwater Pools", "Free Airport Shuttle", "Veg Menus"],
          faq: [
            {
              q: "Can this combo itinerary be customized to add more beach days in Vietnam?",
              a: "Yes, you can easily add or swap days using the FYN planner or ask our AI assistant right on this page."
            }
          ]
        }
      ]
    },
    {
      id: "azerbaijan-georgia",
      name: "Azerbaijan + Georgia Caucasus Highlights",
      tagline: "Caspian Seafront to High Caucasus Glaciers",
      route: "Baku • Gobustan • Tbilisi • Kazbegi • Kakheti",
      heroImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
      flag: "🇦🇿 🇬🇪",
      idealNights: 9,
      basePriceInr: 108000,
      visaInfo: "Fast E-Visa for both countries (FYN guided)",
      flightDuration: "DEL/BOM direct to BAK, return from TBS",
      bestSeason: "May – Oct",
      vibe: ["Couples", "Mountain Lovers", "Culture & History"],
      description: "From the blazing Flame Towers and Sanskrit-inscribed Ateshgah temple of Baku, take a short flight into the fairy-tale wooden balconies of Tbilisi and snowy Kazbegi mountain peaks.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Baku & Boulevard Walk",
          location: "Baku",
          summary: "Direct flight to Baku, luxury seaside hotel check-in, and Little Venice gondola ride.",
          activities: [
            { id: "ag-1-1", time: "Morning", title: "VIP Mercedes Chauffeur Meet", description: "Private airport pickup and SIM assistance.", tag: "Private Transfer", costDelta: 0, icon: "car" },
            { id: "ag-1-2", time: "Afternoon", title: "Baku Boulevard & Little Venice", description: "Waterfront stroll along the Caspian Sea.", tag: "City Stroll", costDelta: 0, icon: "ship" },
            { id: "ag-1-3", time: "Evening", title: "Highland Park & Flame Towers LED Show", description: "Funicular ride for the glittering skyline views.", tag: "Night Light", costDelta: 1000, icon: "sparkles" }
          ]
        },
        {
          day: 2,
          title: "Ateshgah Fire Temple & Heydar Aliyev Center",
          location: "Baku & Absheron",
          summary: "Ancient Indian fire temple honoring Shiva and Ganesh, followed by Zaha Hadid's futuristic masterpiece.",
          activities: [
            { id: "ag-2-1", time: "Morning", title: "Ateshgah Indian Fire Temple & Yanar Dag", description: "Sacred fire temple with Sanskrit inscriptions.", tag: "Indian History", costDelta: 0, icon: "flame" },
            { id: "ag-2-2", time: "Afternoon", title: "Heydar Aliyev Architectural Center", description: "Fluid white modern architecture landmark.", tag: "Modern Wonder", costDelta: 1200, icon: "camera" },
            { id: "ag-2-3", time: "Evening", title: "Nizami Street Dining & Samovar Tea", description: "Cobblestone European boulevard with live music.", tag: "Dining", costDelta: 0, icon: "coffee" }
          ]
        },
        {
          day: 3,
          title: "Short Flight to Tbilisi & Royal Sulfur Bath",
          location: "Tbilisi",
          summary: "1-hour flight across the Caucasus to Georgia's capital. Check into Old Tbilisi and soak in private sulfur baths.",
          activities: [
            { id: "ag-3-1", time: "Morning", title: "Chauffeured Airport Connection to TBS", description: "Short flight to Tbilisi with private Mercedes transfer.", tag: "Flight & Transfer", costDelta: 0, icon: "plane" },
            { id: "ag-3-2", time: "Afternoon", title: "Old Tbilisi Wooden Balconies & Peace Bridge", description: "Cross the glass bridge and explore carved wooden verandas.", tag: "Heritage Walk", costDelta: 0, icon: "compass" },
            { id: "ag-3-3", time: "Evening", title: "Private Chreli Abano Royal Sulfur Bath", description: "Domed brick bathhouse private suite with hot mineral soak.", tag: "Thermal Spa", costDelta: 1800, icon: "heart" }
          ]
        },
        {
          day: 4,
          title: "Scenic Military Highway to Kazbegi & Gergeti Church",
          location: "Kazbegi",
          summary: "Drive through emerald mountain passes to Stepantsminda and take a 4x4 up to Gergeti Trinity Church.",
          activities: [
            { id: "ag-4-1", time: "Morning", title: "Ananuri Fortress & Zhinvali Lake Drive", description: "Postcard 17th-century medieval castle over the water.", tag: "Scenic Drive", costDelta: 0, icon: "landmark" },
            { id: "ag-4-2", time: "Afternoon", title: "4x4 Jeep to Gergeti Trinity Church (2,170m)", description: "Isolated mountaintop church against Mount Kazbek glacier.", tag: "National Icon", costDelta: 1500, icon: "mountain" },
            { id: "ag-4-3", time: "Evening", title: "Rooms Hotel Kazbegi Alpine Fireplace Dinner", description: "Hot herbal tea and Khachapuri on the panoramic timber deck.", tag: "Alpine Dining", costDelta: 1600, icon: "sunset" }
          ]
        },
        {
          day: 5,
          title: "Kakheti Wine Valleys & Sighnaghi City of Love",
          location: "Kakheti / Sighnaghi",
          summary: "Explore the 8,000-year-old birthplace of wine and the Italianate hilltown of Sighnaghi.",
          activities: [
            { id: "ag-5-1", time: "Morning", title: "Bodbe Monastery Gardens", description: "Quiet cypress-covered sanctuary overlooking the valley.", tag: "Sacred Site", costDelta: 0, icon: "landmark" },
            { id: "ag-5-2", time: "Afternoon", title: "Sighnaghi City Walls & Clay Qvevri Tasting", description: "Walk the medieval defensive walls and taste artisanal wine.", tag: "UNESCO Wine", costDelta: 1800, icon: "sparkles" },
            { id: "ag-5-3", time: "Evening", title: "Farewell Georgian Polyphonic Feast", description: "Traditional polyphonic singing and banquet feast.", tag: "Grand Feast", costDelta: 2000, icon: "star" }
          ]
        },
        {
          day: 6,
          title: "Dry Bridge Souvenirs & Chauffeur Departure Home",
          location: "Tbilisi",
          summary: "Browse eclectic Soviet antiques and Georgian crafts, followed by private airport drop.",
          activities: [
            { id: "ag-6-1", time: "Morning", title: "Dry Bridge Flea Market Art & Crafts", description: "Unique Caucasian carpets, antiques, and amber jewelry.", tag: "Shopping", costDelta: 0, icon: "shopping-bag" },
            { id: "ag-6-2", time: "Afternoon", title: "Chauffeured Airport Drop for Flight Home", description: "Smooth transfer to Tbilisi International Airport.", tag: "VIP Departure", costDelta: 0, icon: "plane" }
          ]
        }
      ],
      hotels: [
        {
          id: "ag-h-1",
          name: "Four Seasons Baku + Rooms Hotel Kazbegi",
          tier: "Palace Seafront & Iconic Alpine",
          location: "Baku & Kazbegi",
          rating: 4.97,
          stars: 5,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          pricePerNightInr: 21000,
          highlight: "The crowning luxury pairing in the Caucasus: European palace elegance in Baku, world-famous alpine timber in Kazbegi",
          amenities: ["Dedicated Chauffeurs", "Indian Food Specialists", "Glacier Balconies", "Roman Spa"],
          faq: [
            {
              q: "How do we travel between Baku and Tbilisi?",
              a: "FYN books a 1-hour direct international flight between Baku (GYD) and Tbilisi (TBS), complete with private airport pickups on both ends."
            }
          ]
        }
      ]
    }
  ],

  // Common swap activity bank for dynamic itinerary customization
  swapLibrary: {
    relax: [
      {
        title: "Couples Luxury Spa & Thermal Herbal Bath (2 Hours)",
        description: "Deep tissue aromatherapy massage, mineral body scrub, and private herbal floral bath with refreshing organic tea.",
        tag: "Relaxing Spa",
        costDelta: 1500,
        icon: "heart"
      },
      {
        title: "Lazy Café Crawl & Riverside Artisan High Tea",
        description: "Slow morning hopping between scenic garden cafes, sampling specialty coffees and warm tropical pastries.",
        tag: "Relaxed Pace",
        costDelta: -800,
        icon: "coffee"
      },
      {
        title: "Private Sunset Beachfront Daybed & Chilled Mocktails",
        description: "Reserved luxury oceanfront daybed with dedicated butler, fruit skewers, and ambient lounge music.",
        tag: "Beach Relaxation",
        costDelta: 1200,
        icon: "umbrella"
      }
    ],
    adventure: [
      {
        title: "Tandem Paragliding Over Mountain Valleys / Coast",
        description: "Soar with a certified pilot for 20 minutes capturing 4K GoPro video over panoramic landscapes.",
        tag: "Thrilling Adventure",
        costDelta: 3500,
        icon: "wind"
      },
      {
        title: "Off-Road 4x4 Quad Bike (ATV) Jungle & Dune Safari",
        description: "Ride powerful ATVs through bamboo forests, muddy streams, and rugged mountain dirt tracks.",
        tag: "ATV Adventure",
        costDelta: 2800,
        icon: "navigation"
      },
      {
        title: "Private Speedboat Cave Exploration & Cliff Snorkeling",
        description: "Chartered twin-engine boat visiting secret sea grottos with personal snorkeling guide.",
        tag: "Island Cruise",
        costDelta: 4000,
        icon: "ship"
      }
    ],
    culture: [
      {
        title: "Private Cooking Masterclass with Market Chef",
        description: "Visit vibrant local spice markets with an English-speaking chef, handpicking fresh ingredients to cook a 3-course feast.",
        tag: "Culinary Class",
        costDelta: 1800,
        icon: "star"
      },
      {
        title: "Artisan Ceramic Pottery & Silk Weaving Workshop",
        description: "Hand-throw clay on traditional potter's wheels and create your own ceramic souvenir to take home.",
        tag: "Hands-on Art",
        costDelta: 1200,
        icon: "sparkles"
      },
      {
        title: "Guided Heritage Palace & Sacred Temple Walk",
        description: "Private licensed historian guide unlocking hidden courtyard frescoes and ancient kingdom tales.",
        tag: "Heritage Deep-Dive",
        costDelta: 1500,
        icon: "landmark"
      }
    ],
    food: [
      {
        title: "Curated Indian Vegetarian & Jain Gourmet Food Trail",
        description: "Handpicked trail of top-rated authentic vegetarian kitchens, freshly made warm rotis, and local plant-based favorites.",
        tag: "100% Veg / Jain",
        costDelta: 1200,
        icon: "coffee"
      },
      {
        title: "Private Candlelit 5-Course Dinner Under The Stars",
        description: "Private decorated gazebo with fairy lights, personalized menu cards, and bespoke wine/mocktail pairings.",
        tag: "Romantic Dinner",
        costDelta: 3800,
        icon: "sparkles"
      }
    ]
  },

  // Why FYN key value propositions
  whyFYN: [
    {
      icon: "handshake",
      title: "Direct Local Vendors Only",
      subtitle: "Zero Middlemen Markups",
      description: "We contract directly with trusted boutique hoteliers, licensed private chauffeurs, and local boat captains. No 3-tier agency markups, giving you 20-30% better value."
    },
    {
      icon: "shield-check",
      title: "100% Private Transfers",
      subtitle: "Never Crammed in Big Tour Buses",
      description: "Every airport transfer, city tour, and mountain excursion is in your own dedicated AC vehicle (Innova Crysta, Mercedes V-Class, or executive SUV) with a polite chauffeur."
    },
    {
      icon: "message-circle",
      title: "Dedicated WhatsApp Trip Expert",
      subtitle: "From India to Return Home",
      description: "One single trip designer plans your journey and stays on your dedicated WhatsApp group 24/7. Live translations, restaurant table bookings, and instant help whenever needed."
    },
    {
      icon: "utensils",
      title: "Indian Traveler Friendly",
      subtitle: "Jain, Pure-Veg & GST/TCS Clear",
      description: "We understand Indian dietary needs. We arrange Jain/pure-veg meals, provide transparent INR quotes with GST/TCS compliance, and guide you through fast e-visas."
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "Our 7-day Vietnam trip was flawless! The Halong Bay cruise recommendation was top tier and having a private driver waiting everywhere made traveling with my elderly parents so peaceful.",
      author: "Aditi & Rohan Sharma",
      city: "Mumbai",
      destination: "Vietnam Discovery",
      rating: 5
    },
    {
      quote: "We compared with 3 other agencies. FYN's transparent pricing, direct WhatsApp chat with their expert, and the private 4x4 in Georgia made our honeymoon unforgettable.",
      author: "Kavya & Siddharth Mehta",
      city: "Bengaluru",
      destination: "Georgia & Caucasus",
      rating: 5
    },
    {
      quote: "Being strictly vegetarian, traveling internationally usually gives us anxiety. FYN arranged pure veg breakfasts at every single hotel in Bali and Kazakhstan. Will always book with FYN!",
      author: "Dr. Rajesh & Sunita Patel",
      city: "Ahmedabad",
      destination: "Kazakhstan Lakes",
      rating: 5
    }
  ]
};

// Export to window
window.FYN_DATA = FYN_DATA;
