const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "A peaceful beachfront stay with ocean views and direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu, California",
    country: "United States",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },

  {
    title: "Modern City Loft",
    description: "A stylish loft in the heart of Manhattan, close to major attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City, New York",
    country: "United States",
    category: "city",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },

  {
    title: "Mountain Retreat Cabin",
    description: "A cozy cabin surrounded by mountains and pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen, Colorado",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
  },

  {
    title: "Tuscan Heritage Villa",
    description: "Historic countryside stay surrounded by vineyards in Tuscany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence, Tuscany",
    country: "Italy",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },

  {
    title: "Forest Treehouse Escape",
    description: "A quiet treehouse surrounded by nature and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland, Oregon",
    country: "United States",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },

  {
    title: "Luxury Beach Resort",
    description: "Premium beachfront resort with pools and sea-facing rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "hotels",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },

  {
    title: "Lakeview Mountain Cabin",
    description: "Rustic cabin near Lake Tahoe ideal for outdoor lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 900,
    location: "Lake Tahoe, California",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-120.044, 39.0968],
    },
  },

  {
    title: "Luxury City Penthouse",
    description: "High-rise penthouse with panoramic city skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles, California",
    country: "United States",
    category: "city",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },

  {
    title: "Alpine Ski Chalet",
    description: "Ski-in ski-out chalet located in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.2286, 46.0961],
    },
  },

  {
    title: "Safari Lodge Stay",
    description: "Wildlife safari lodge near Serengeti National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },
  {
    title: "Trending City Apartment",
    description: "A highly rated modern apartment in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 1400,
    location: "San Francisco, California",
    country: "United States",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [-122.4194, 37.7749],
    },
  },

  {
    title: "Cozy Private Room",
    description: "A comfortable private room in a quiet residential neighborhood.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    },
    price: 600,
    location: "Austin, Texas",
    country: "United States",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [-97.7431, 30.2672],
    },
  },

  {
    title: "Mountain View Dome Stay",
    description: "A unique dome stay offering panoramic views of the mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 1300,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "domes",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },

  {
    title: "Historic Castle Retreat",
    description: "Live like royalty in a restored medieval castle with grand interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 4500,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
  },

  {
    title: "Mountain Camping Experience",
    description: "Adventure-filled camping surrounded by snow-capped peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 700,
    location: "Leh, Ladakh",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526],
    },
  },

  {
    title: "Countryside Farm Stay",
    description: "Relax at a peaceful countryside farm with fresh air and organic food.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    },
    price: 900,
    location: "Nashik, Maharashtra",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [73.7898, 19.9975],
    },
  },

  {
    title: "Luxury Cruise Ship Suite",
    description: "An ocean cruise experience with luxury rooms and sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 5000,
    location: "Caribbean Sea",
    country: "International Waters",
    category: "ships",
    geometry: {
      type: "Point",
      coordinates: [-75.0, 20.0],
    },
  },

  {
    title: "Five-Star City Hotel",
    description: "Premium hotel stay with world-class service and amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2800,
    location: "Paris",
    country: "France",
    category: "hotels",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },

  {
    title: "Arctic Ice Lodge",
    description: "A once-in-a-lifetime stay in an ice lodge under the northern lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    price: 6000,
    location: "Lapland",
    country: "Finland",
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [25.7477, 67.9222],
    },
  },

  {
    title: "Secluded Beach Hideaway",
    description: "A quiet beach escape away from crowds with crystal-clear waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 1900,
    location: "Havelock Island",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [92.9876, 11.9836],
    },
  },
];

module.exports = { data: sampleListings };
