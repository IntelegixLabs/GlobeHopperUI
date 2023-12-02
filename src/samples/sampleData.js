export const cohereResponse = {
  introduction:
    "Goa, a tropical paradise on India's western coast, is renowned for its stunning beaches, vibrant culture, and historical significance. From exploring centuries-old churches to enjoying vibrant parties and relishing delicious seafood, Goa promises an unforgettable experience.",
  itinerary: [
    {
      Day: "1",
      afternoon:
        "Head to the historic Panjim City and visit the iconic Our Lady of the Immaculate Conception Church, which dates back to the 17th century. Explore the old town, grab a flavorful lunch at a local restaurant serving Goan specialties like Xacuti or Vindaloo. ",
      evening:
        "In the evening, opt for a boat ride along the Mondovi River, enjoy the beautiful coastline, and witness vibrant beach shacks and sparkling sand. You can also visit the lively Calangute or Baga beaches for water sports and snorkeling. Return to the hotel for a quick rest before dinner.",
      morning:
        "Start your day at one of the many charming cafes offering breakfast options like eggs, toast, and fresh juice. Get ready for a action-packed day ahead! ",
      night:
        "As the sun sets, indulge in a seafood extravaganza at one of the many beach-side restaurants. Try the local special Goan Fish Curry and end your day on a delicious note.",
    },
    {
      Day: "2",
      afternoon:
        "Have lunch at one of the beach shacks serving a variety of cuisines ranging from Indian to Continental. After refueling, visit the nearby Cola Beach, which is relatively less crowded and known for its serene beauty.",
      evening:
        "In the evening, visit the Friday Market in Mapusa, where you can find everything from fresh produce to local handicrafts and souvenirs. Enjoy the vibrant atmosphere and interact with friendly locals.",
      morning:
        "After a tasty breakfast, head to the eastern part of Goa and visit the beautiful Palolem Beach, which is an idyllic spot for relaxing and soaking up the sun. Enjoy a leisurely swim or take a stroll along the crescent-shaped coastline.",
      night:
        "For dinner, head to one of the high-end restaurants in North Goa's nightlife hub of Candolim or Calangute. Choose from a variety of international dishes and end your day with a lively atmosphere.",
    },
    {
      Day: "3",
      afternoon:
        "Head to a serene spot for a relaxed lunch at one of the local eateries in Old Goa. Enjoy authentic Goan specialties before you proceed to your next destination.",
      evening:
        "In the evening, visit the Se Cathedral, which is dedicated to Saint Catherine of Alexandria. Marvel at the architecture and enjoy the peaceful atmosphere before heading back to your hotel.",
      morning:
        "After breakfast, take a trip to the UNESCO World Heritage site of Old Goa, which showcases the historical influence of the Portuguese. Visit the Basilica of Bom Jesus, which houses the relics of St. Francis Xavier.",
      night:
        "For dinner, check out one of the outstanding seafood restaurants at Fort Aguada, offering beautiful views of the Arabian Sea and a selection of the finest seafood dishes.",
    },
    {
      Day: "4",
      afternoon:
        "After exploring the wildlife, head to a nearby restaurant inside the sanctuary for a lunch surrounded by nature's beauty.",
      evening:
        "In the evening, visit the Ancestral Goa Museum in Loutolim, which showcases the traditional art and culture of the region. Get a glimpse of Portuguese-influenced architecture and rustic charm.",
      morning:
        "This morning, explore the magical world of the Bondosa Wildlife Sanctuary, which is home to a variety of exotic wildlife species and lush greenery. Enjoy a nature walk or a jeep safari.",
      night:
        "For dinner, visit one of the family-run restaurants in the area serving authentic Goan specialties.",
    },
    {
      Day: "5",
      afternoon:
        "Enjoy a leisurely lunch at one of the beach shacks offering fresh seafood and refreshing drinks.",
      evening:
        "In the evening, visit the Sunset Bar at the Leela Hotel for a decadent cocktail as you watch the sunset over the glimmering waters of the Arabian Sea.",
      morning:
        "After a relaxing breakfast, take a walk along the beaches of South Goa, which are relatively less crowded and offer serene landscapes.",
      night:
        "For dinner, head to the vibrant lanes of Goa's capital, Panjim, and explore the restaurant and bar scene in the area.",
    },
  ],
};

export const sampleWeatherData = {
  current_observation: {
    astronomy: {
      sunrise: "6:00 AM",
      sunset: "4:51 PM",
    },
    atmosphere: {
      humidity: 86,
      pressure: 1014.2,
      visibility: 7.02,
    },
    condition: {
      code: 21,
      temperature: 69,
      text: "Haze",
    },
    pubDate: 1701390331,
    wind: {
      chill: 70,
      direction: "NNE",
      speed: 2,
    },
  },
  forecasts: [
    {
      code: 30,
      date: 1701446400,
      day: "Fri",
      high: 87,
      low: 69,
      text: "Partly Cloudy",
    },
    {
      code: 28,
      date: 1701532800,
      day: "Sat",
      high: 88,
      low: 69,
      text: "Mostly Cloudy",
    },
    {
      code: 21,
      date: 1701619200,
      day: "Sun",
      high: 87,
      low: 68,
      text: "Haze",
    },
    {
      code: 21,
      date: 1701705600,
      day: "Mon",
      high: 85,
      low: 70,
      text: "Haze",
    },
    {
      code: 21,
      date: 1701792000,
      day: "Tue",
      high: 82,
      low: 67,
      text: "Haze",
    },
    {
      code: 11,
      date: 1701878400,
      day: "Wed",
      high: 80,
      low: 69,
      text: "Showers",
    },
    {
      code: 12,
      date: 1701964800,
      day: "Thu",
      high: 76,
      low: 66,
      text: "Rain",
    },
    {
      code: 30,
      date: 1702051200,
      day: "Fri",
      high: 82,
      low: 68,
      text: "Partly Cloudy",
    },
    {
      code: 32,
      date: 1702137600,
      day: "Sat",
      high: 86,
      low: 71,
      text: "Sunny",
    },
    {
      code: 32,
      date: 1702224000,
      day: "Sun",
      high: 84,
      low: 62,
      text: "Sunny",
    },
    {
      code: 32,
      date: 1702310400,
      day: "Mon",
      high: 84,
      low: 64,
      text: "Sunny",
    },
  ],
  location: {
    city: "Kolkata",
    country: "India",
    lat: 22.54994,
    long: 88.371582,
    timezone_id: "Asia/Kolkata",
    woeid: 2295386,
  },
};

export const samplePhotosData = {
  next_page:
    "https://api.pexels.com/v1/search/?page=2&per_page=11&query=Kolkata",
  page: 1,
  per_page: 11,
  photos: [
    {
      alt: "White Building",
      avg_color: "#8EA097",
      height: 4000,
      id: 2846217,
      liked: false,
      photographer: "Rahul Pandit",
      photographer_id: 340699,
      photographer_url: "https://www.pexels.com/@rahulp9800",
      src: {
        landscape:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg",
        portrait:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/white-building-2846217/",
      width: 6000,
    },
    {
      alt: "White and Brown Dome Building",
      avg_color: "#A3CBCE",
      height: 1688,
      id: 3520942,
      liked: false,
      photographer: "FUTURE KIIID",
      photographer_id: 466989,
      photographer_url: "https://www.pexels.com/@futurekiiid",
      src: {
        landscape:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg",
        portrait:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/white-and-brown-dome-building-3520942/",
      width: 2697,
    },
    {
      alt: "White Building",
      avg_color: "#888F86",
      height: 4000,
      id: 2846216,
      liked: false,
      photographer: "Rahul Pandit",
      photographer_id: 340699,
      photographer_url: "https://www.pexels.com/@rahulp9800",
      src: {
        landscape:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg",
        portrait:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/2846216/pexels-photo-2846216.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/white-building-2846216/",
      width: 6000,
    },
    {
      alt: "Brown Concrete Temple during Daytime",
      avg_color: "#AAA38E",
      height: 4000,
      id: 774570,
      liked: false,
      photographer: "Anirban Ghosh",
      photographer_id: 81466,
      photographer_url: "https://www.pexels.com/@anirban-ghosh-81466",
      src: {
        landscape:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg",
        portrait:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/brown-concrete-temple-during-daytime-774570/",
      width: 6000,
    },
    {
      alt: "Bridge Over River At Sunset",
      avg_color: "#2F546F",
      height: 6000,
      id: 14449828,
      liked: false,
      photographer: "Samir Ali",
      photographer_id: 3916317,
      photographer_url: "https://www.pexels.com/@samir-ali-3916317",
      src: {
        landscape:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg",
        portrait:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/bridge-over-river-at-sunset-14449828/",
      width: 4000,
    },
    {
      alt: "Sunset Sky over Victoria Memorial in Kolkata",
      avg_color: "#A47146",
      height: 2850,
      id: 17875111,
      liked: false,
      photographer: "Sayani Ghosh",
      photographer_id: 620759981,
      photographer_url: "https://www.pexels.com/@sayani-ghosh-620759981",
      src: {
        landscape:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg",
        portrait:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/17875111/pexels-photo-17875111.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/sunset-sky-over-victoria-memorial-in-kolkata-17875111/",
      width: 4096,
    },
    {
      alt: "Roof of Victoria Memorial in Kolkata",
      avg_color: "#B6BFBC",
      height: 6720,
      id: 17577062,
      liked: false,
      photographer: "Alina  Rossoshanska",
      photographer_id: 338724645,
      photographer_url: "https://www.pexels.com/@alina-rossoshanska-338724645",
      src: {
        landscape:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg",
        portrait:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/17577062/pexels-photo-17577062.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/roof-of-victoria-memorial-in-kolkata-17577062/",
      width: 4480,
    },
    {
      alt: "Moving Vehicles on a Steel Bridge",
      avg_color: "#5A5C5B",
      height: 3456,
      id: 4334157,
      liked: false,
      photographer: "SUBRATA DEB",
      photographer_id: 1282362,
      photographer_url: "https://www.pexels.com/@subrata-deb-1282362",
      src: {
        landscape:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg",
        portrait:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/moving-vehicles-on-a-steel-bridge-4334157/",
      width: 4608,
    },
    {
      alt: "Victoria Memorial in Kolkata, India",
      avg_color: "#A7A59A",
      height: 2204,
      id: 4273765,
      liked: false,
      photographer: "Saurav Sinha",
      photographer_id: 2729607,
      photographer_url: "https://www.pexels.com/@saurav-sinha-2729607",
      src: {
        landscape:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg",
        portrait:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/victoria-memorial-in-kolkata-india-4273765/",
      width: 3581,
    },
    {
      alt: "Victoria Memorial Museum in Kolkata, India",
      avg_color: "#A2A19B",
      height: 4000,
      id: 5186627,
      liked: false,
      photographer: "Amitav Hira",
      photographer_id: 3470260,
      photographer_url: "https://www.pexels.com/@amitav-hira-3470260",
      src: {
        landscape:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg",
        portrait:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/5186627/pexels-photo-5186627.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/victoria-memorial-museum-in-kolkata-india-5186627/",
      width: 6000,
    },
    {
      alt: "Sunset at the Victoria Memorial in Kolkata, India",
      avg_color: "#85633D",
      height: 2894,
      id: 9610478,
      liked: false,
      photographer: "Kolkatar  Chobiwala",
      photographer_id: 109766904,
      photographer_url: "https://www.pexels.com/@kolkatarchobiwala",
      src: {
        landscape:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        large:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        large2x:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg",
        portrait:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        small:
          "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&h=130",
        tiny: "https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      url: "https://www.pexels.com/photo/sunset-at-the-victoria-memorial-in-kolkata-india-9610478/",
      width: 3859,
    },
  ],
  total_results: 390,
};
