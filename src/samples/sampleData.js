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

export const cohereResponseCities = [
  "London",
  "Paris",
  "Berlin",
  "Rome",
  "Istanbul",
  "Barcelona",
  "Venice",
  "Amsterdam",
  "Athens",
  "Prague",
  "Vienna",
  "Munich",
  "Copenhagen",
  "Madrid",
  "Dublin",
  "Moscow",
  "Stockholm",
];

export const cohereResponseItinerary = [
  {
    introduction:
      "London is the capital and largest city of England. It's a city with centuries of rich history and numerous iconic landmarks, from the breathtaking Houses of Parliament to the historic Tower of London. Indulge in its rich royal history, enjoy shopping at world-class institutions, indulge in diverse food escapes, and get lost in its captivating museums.",
    itinerary: [
      {
        Day: "1",
        afternoon:
          "Have lunch at the iconic Rules restaurant. Visit the British Museum. Use the Tube to get there.",
        evening:
          "Enjoy snacks at Boxpark Shoreditch. Visit the famous Shard Skyscraper towards the evening. Use public bus or Uber for commute.",
        morning:
          "Have breakfast at The Wolseley, then visit Buckingham Palace and enjoy a stroll in St. James's park. Commute using a combination of walking and the Tube.",
        night:
          "Have dinner at the Duck & Waffle, visit a West End theatre show. Recommended to use cabs for convenience.",
      },
      {
        Day: "2",
        afternoon:
          "Lunch at Flat Iron. Visit Covent Garden Market and the London Transport Museum. Use buses or Tube to commute.",
        evening:
          "Snack at Cereal Killer Cafe. Enjoy London Eye and River Thames. Commute using buses or cabs.",
        morning:
          "Breakfast at The Regency Cafe, visit The British Library and King's Cross station. Commute by walking or use the Tube.",
        night:
          "Dinner at Gordon Ramsay's. Experience the nightlife at Soho. Use cab service for comfort.",
      },
      {
        Day: "3",
        afternoon:
          "Lunch at Sky Garden. Visit the famous Shakespeare's Globe. Commute by walking or using the Tube.",
        evening:
          "Have snacks at the Borough Market. Visit Hyde Park in the evening. Use public buses or bike-sharing services.",
        morning:
          "Enjoy breakfast at Monmouth Coffee Company, visit the Tower of London. Use the Tube to commute.",
        night:
          "Dinner at The Harwood Arms. Experience the nightlife at Camden Town. Use the Tube or cab service to commute.",
      },
      {
        Day: "4",
        afternoon:
          "Lunch at The Ivy. Visit Kensington Palace. Use the Tube or walk to reach.",
        evening:
          "Enjoy some tea at The Ritz. Visit the Bond street for shopping. Use the Tube or Uber to commute.",
        morning:
          "Have breakfast at Dishoom, visit the Natural History Museum. Use the Tube to commute.",
        night:
          "Dinner at Sketch. Experience the nightlife at Leicester Square. Use the Tube or cabs to commute.",
      },
    ],
  },
  {
    introduction:
      "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    itinerary: [
      {
        Day: "1",
        afternoon:
          "Have lunch in one of the popular restaurants such as l'Ambroisie, and then visit the Musée d'Orsay, a museum in Paris, located on the left bank of the Seine.",
        evening:
          "Savour the french snacks at famous Creperie Broceliande. Visit Eiffel Tower, and have an breathtaking view of Paris. Enjoy dinner at Le Jules Verne restaurant in the Eiffel tower itself.",
        morning:
          "Start your day with a lovely breakfast at Angelina. Visit the Louvre, the world's largest art museum and a historic monument in Paris.",
        night:
          "Explore some of the famous Parisian cafes and have dinner at Le Bouillon Chartier offering iconic French cuisine.",
      },
      {
        Day: "2",
        afternoon:
          "Have your lunch at Chez Denis and then visit the Centre Pompidou, a complex building in the Beaubourg area of the 4th arrondissement of Paris. Visit Marche des Enfants Rouges to experience the oldest covered market in Paris.",
        evening:
          "Take a boat tour of River Seine. Visit Moulin Rouge for a splendid evening. Finish your day with a exquisite dinner at Les deux Magots.",
        morning:
          "Start your day with a classic french breakfast at Cafe de Flore. Visit Père Lachaise Cemetery, the largest cemetery in Paris.",
        night:
          "Experience the nightlife of Paris in the Latin Quarter, and have a late night meal at Le Petit Pont.",
      },
      {
        Day: "3",
        afternoon:
          "Have lunch at The Hardware Société Paris and then visit the Palace of Versailles, a royal château in Versailles in the Île-de-France region of France.",
        evening:
          "Visit the Champs-Élysées, one of the world's most famous streets, and end your day with dinner at Fouquet's.",
        morning:
          "Have breakfast at Le Consulat. Visit Montmartre, a large hill in Paris's 18th arrondissement. Enjoy a panoramic view of Paris from the Sacré-Cœur Basilica.",
        night:
          "Watch a show in Comédie Française, one of the oldest active theatres in the world. Have dinner at Chartier Montparnasse.",
      },
      {
        Day: "4",
        afternoon:
          "Enjoy authentic French cuisine at Brasserie Lipp and visit the famous Notre-Dame Cathedral.",
        evening:
          "Visit the historic district Le Marais. Experience the charm of vintage shopping at the Le BHV Marais departmental store. Dine at Chez Julien which is a perfect place for lovers of old Paris.",
        morning:
          "Start your day with breakfast at Claus Paris. Visit Sainte-Chapelle, a royal chapel in the Gothic style, within the medieval Palais de la Cité. Take a stroll in the Latin Quarter - Luxembourg park.",
        night:
          "Stroll along the Siene River banks and end your day with a late night dinner at Bistro des Augustins.",
      },
    ],
  },
  {
    introduction:
      "Istanbul is a dazzling city straddling Europe and Asia, with a rich history and beautiful architecture. You'll find a multitude of cultural influences here, from Roman-era monuments to Byzantine churches and Ottoman mosques. Get ready to discover a rich tapestry of sights, sounds, and food!",
    itinerary: [
      {
        Day: "1",
        afternoon:
          "Try some traditional Turkish cuisine for lunch at Balikci Sabahattin. Then, visit the monumental Topkapi Palace and the nearby Istanbul Archaeology Museums.",
        evening:
          "Enjoy a coffee and some Turkish delight at Hafiz Mustafa 1864. Take a stroll along the Bosphorus and discover the charming Ortakoy area.",
        morning:
          "Start your day with breakfast at The House Café, then head to the stunning Hagia Sophia Museum. Take a relaxing walk around Sultanahmet Square.",
        night:
          "Have dinner at Mikla, a rooftop restaurant with stunning views of the city. Retreat for the night at your hotel or explore Istanbul's vibrant nightlife at Nevizade Street.",
      },
      {
        Day: "2",
        afternoon:
          "Enjoy a hearty lunch at Asitane Restaurant, next to the Chora Museum, which you'll visit afterwards for its stunning Byzantine mosaics.",
        evening:
          "Relax with a cup of tea and some sweets at Çengelköy Çınaraltı. Continue your evening at Çengelköy, famous for its waterside mansions.",
        morning:
          "Have breakfast at Van Kahvalti Evi, a local favourite. Visit the awe-inspiring Blue Mosque and the Hippodrome.",
        night:
          "Dine at Sur Balik in the upmarket neighbourhood of Etiler. Enjoy the nightlife around Istiklal Street.",
      },
      {
        Day: "3",
        afternoon:
          "Lunch at Ciya Sofrasi featuring Southeast Anatolian cuisine. After lunch, visit the Kadıköy's Moda district for its sea views and artistic vibe.",
        evening:
          "Grab a quick snack at Mado. Take a ferry back to the European side and visit Galata Tower for a fantastic view of Istanbul at sunset.",
        morning:
          "Breakfast at Delicious Shop in Kadıköy, then explore the colourful market district on the Asian side of Istanbul.",
        night:
          "Have a delightful seafood dinner at Karaköy Lokantasi. Check out Karaköy's trendy bars afterwards.",
      },
      {
        Day: "4",
        afternoon:
          "Enjoy a lunch of Ottoman cuisine at NAR Restaurant. Visit the bustling Spice Bazaar and tour the beautiful Süleymaniye Mosque.",
        evening:
          "Try a cup of traditional Turkish coffee at Mandabatmaz near Taksim. Later, unwind at one of the many jazz bars or clubs in the Taksim area.",
        morning:
          "Begin your day with a breakfast at Forno Balat, then take a walk around the historic Balat neighbourhood.",
        night:
          "Have a late dinner at Nevizade Sokak followed by a fun night at the lively Beyoglu district.",
      },
    ],
  },
];

export const cohereResponseItineraryImages = [
  {
    next_page:
      "https://api.pexels.com/v1/search/?page=2&per_page=10&query=London",
    page: 1,
    per_page: 10,
    photos: [
      {
        alt: "London Cityscape",
        avg_color: "#A7978A",
        height: 1376,
        id: 460672,
        liked: false,
        photographer: "Pixabay",
        photographer_id: 2659,
        photographer_url: "https://www.pexels.com/@pixabay",
        src: {
          landscape:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
          portrait:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/london-cityscape-460672/",
        width: 1999,
      },
      {
        alt: "City View at London",
        avg_color: "#959386",
        height: 1362,
        id: 672532,
        liked: false,
        photographer: "Dominika Gregušová",
        photographer_id: 15941,
        photographer_url: "https://www.pexels.com/@dominikagregus",
        src: {
          landscape:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
          portrait:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/city-view-at-london-672532/",
        width: 2037,
      },
      {
        alt: "Tower Bridge",
        avg_color: "#103B58",
        height: 3564,
        id: 427679,
        liked: false,
        photographer: "Chris Schippers",
        photographer_id: 139261,
        photographer_url: "https://www.pexels.com/@chris-schippers-139261",
        src: {
          landscape:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg",
          portrait:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/tower-bridge-427679/",
        width: 5346,
      },
      {
        alt: "White and Brown Sailing Ship",
        avg_color: "#4B6A7E",
        height: 3325,
        id: 1796715,
        liked: false,
        photographer: "Chait Goli",
        photographer_id: 876963,
        photographer_url: "https://www.pexels.com/@chaitaastic",
        src: {
          landscape:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
          portrait:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/white-and-brown-sailing-ship-1796715/",
        width: 5909,
      },
      {
        alt: "Royal Guard Standing Near Lamp Post",
        avg_color: "#716863",
        height: 3872,
        id: 1427581,
        liked: false,
        photographer: "Samuel Wölfl",
        photographer_id: 628277,
        photographer_url: "https://www.pexels.com/@samuel-wolfl-628277",
        src: {
          landscape:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg",
          portrait:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/royal-guard-standing-near-lamp-post-1427581/",
        width: 2592,
      },
      {
        alt: "Tower Bridge of London",
        avg_color: "#455560",
        height: 4000,
        id: 220887,
        liked: false,
        photographer: "Nicole Rathmayr",
        photographer_id: 61805,
        photographer_url: "https://www.pexels.com/@nicole-rathmayr-61805",
        src: {
          landscape:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg",
          portrait:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/tower-bridge-of-london-220887/",
        width: 6000,
      },
      {
        alt: "Purple Foot Bridge",
        avg_color: "#473472",
        height: 1650,
        id: 220769,
        liked: false,
        photographer: "Pixabay",
        photographer_id: 2659,
        photographer_url: "https://www.pexels.com/@pixabay",
        src: {
          landscape:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg",
          portrait:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/purple-foot-bridge-220769/",
        width: 2200,
      },
      {
        alt: "Big Ben Low-angle Photography",
        avg_color: "#747D86",
        height: 4668,
        id: 77171,
        liked: false,
        photographer: "Amar Saleem",
        photographer_id: 15661,
        photographer_url: "https://www.pexels.com/@amar-saleem-15661",
        src: {
          landscape:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg",
          portrait:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/big-ben-low-angle-photography-77171/",
        width: 3016,
      },
      {
        alt: "Photo of Black Vehicle At The Road ",
        avg_color: "#716E73",
        height: 5798,
        id: 1647120,
        liked: false,
        photographer: "Humphrey Muleba",
        photographer_id: 560785,
        photographer_url: "https://www.pexels.com/@goodcitizen",
        src: {
          landscape:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg",
          portrait:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/photo-of-black-vehicle-at-the-road-1647120/",
        width: 4480,
      },
      {
        alt: "Photo of People Walking in the Street",
        avg_color: "#7F7D82",
        height: 3264,
        id: 813362,
        liked: false,
        photographer: "Peter Spencer",
        photographer_id: 205481,
        photographer_url: "https://www.pexels.com/@f4photography",
        src: {
          landscape:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg",
          portrait:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/photo-of-people-walking-in-the-street-813362/",
        width: 4896,
      },
    ],
    total_results: 4100,
  },
  {
    next_page:
      "https://api.pexels.com/v1/search/?page=2&per_page=10&query=Paris",
    page: 1,
    per_page: 10,
    photos: [
      {
        alt: "Man and Woman Sitting at Table",
        avg_color: "#322316",
        height: 5557,
        id: 5018974,
        liked: false,
        photographer: "cottonbro studio",
        photographer_id: 1437723,
        photographer_url: "https://www.pexels.com/@cottonbro",
        src: {
          landscape:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg",
          portrait:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/man-and-woman-sitting-at-table-5018974/",
        width: 3705,
      },
      {
        alt: "Man in Green Crew Neck T-shirt Sitting Beside Woman in Black Tank Top",
        avg_color: "#3A2819",
        height: 3592,
        id: 5019013,
        liked: false,
        photographer: "cottonbro studio",
        photographer_id: 1437723,
        photographer_url: "https://www.pexels.com/@cottonbro",
        src: {
          landscape:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg",
          portrait:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/5019013/pexels-photo-5019013.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/man-in-green-crew-neck-t-shirt-sitting-beside-woman-in-black-tank-top-5019013/",
        width: 5388,
      },
      {
        alt: "Double exposure of Eiffel Tower recognizable architectural landmark located in Paris and attracting tourist",
        avg_color: "#7F7B73",
        height: 2160,
        id: 4577368,
        liked: false,
        photographer: "Whicdhemein One",
        photographer_id: 3020162,
        photographer_url: "https://www.pexels.com/@whicdhemein-one-3020162",
        src: {
          landscape:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png",
          portrait:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/famous-high-metal-tower-illuminating-at-night-4577368/",
        width: 2160,
      },
      {
        alt: "Low Angle Photo of Eiffel Tower",
        avg_color: "#2F3044",
        height: 4032,
        id: 699466,
        liked: false,
        photographer: "Flo Dahm",
        photographer_id: 154317,
        photographer_url: "https://www.pexels.com/@flodahm",
        src: {
          landscape:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg",
          portrait:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/low-angle-photo-of-eiffel-tower-699466/",
        width: 3024,
      },
      {
        alt: "Clear Glass Museum during Golden Hour",
        avg_color: "#8E5F38",
        height: 1066,
        id: 2363,
        liked: false,
        photographer: "Pixabay",
        photographer_id: 2659,
        photographer_url: "https://www.pexels.com/@pixabay",
        src: {
          landscape:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg",
          portrait:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/clear-glass-museum-during-golden-hour-2363/",
        width: 1600,
      },
      {
        alt: "Aerial View Of Eiffel Tower",
        avg_color: "#736C6C",
        height: 3456,
        id: 1308940,
        liked: false,
        photographer: "Chris Molloy",
        photographer_id: 220084,
        photographer_url: "https://www.pexels.com/@chris-molloy-220084",
        src: {
          landscape:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg",
          portrait:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/aerial-view-of-eiffel-tower-1308940/",
        width: 5184,
      },
      {
        alt: "Eiffel Tower Behind Buildings",
        avg_color: "#757878",
        height: 3840,
        id: 1850619,
        liked: false,
        photographer: "Elina Sazonova",
        photographer_id: 912559,
        photographer_url: "https://www.pexels.com/@elina-sazonova",
        src: {
          landscape:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg",
          portrait:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/eiffel-tower-behind-buildings-1850619/",
        width: 5760,
      },
      {
        alt: "Eiffel Tower, Paris",
        avg_color: "#345D6E",
        height: 5184,
        id: 1125212,
        liked: false,
        photographer: "Marcin Gierbisz",
        photographer_id: 409034,
        photographer_url: "https://www.pexels.com/@gierbisz",
        src: {
          landscape:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg",
          portrait:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/eiffel-tower-paris-1125212/",
        width: 3456,
      },
      {
        alt: "Photo Of Alley During Daytime",
        avg_color: "#938376",
        height: 6000,
        id: 2574631,
        liked: false,
        photographer: "Shvets Anna",
        photographer_id: 1233920,
        photographer_url: "https://www.pexels.com/@shvets",
        src: {
          landscape:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg",
          portrait:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/photo-of-alley-during-daytime-2574631/",
        width: 4000,
      },
      {
        alt: "Low Angle Photo of Eiffel Tower",
        avg_color: "#6D9EA7",
        height: 6240,
        id: 1530259,
        liked: false,
        photographer: "Louis",
        photographer_id: 465924,
        photographer_url: "https://www.pexels.com/@suissounet",
        src: {
          landscape:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg",
          portrait:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/low-angle-photo-of-eiffel-tower-1530259/",
        width: 4160,
      },
    ],
    total_results: 3507,
  },
  {
    next_page:
      "https://api.pexels.com/v1/search/?page=2&per_page=10&query=Istanbul",
    page: 1,
    per_page: 10,
    photos: [
      {
        alt: "Brown Concrete Dome Building at Night",
        avg_color: "#6D6F67",
        height: 2974,
        id: 1549326,
        liked: false,
        photographer: "Burak Karaduman",
        photographer_id: 712806,
        photographer_url: "https://www.pexels.com/@burak-karaduman-712806",
        src: {
          landscape:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg",
          portrait:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/brown-concrete-dome-building-at-night-1549326/",
        width: 4495,
      },
      {
        alt: "Low-angle Photograph of Concrete Tower",
        avg_color: "#6C7F85",
        height: 3456,
        id: 2042109,
        liked: false,
        photographer: "Selim Çetin",
        photographer_id: 1027748,
        photographer_url: "https://www.pexels.com/@selimdersiniz",
        src: {
          landscape:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg",
          portrait:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/low-angle-photograph-of-concrete-tower-2042109/",
        width: 5184,
      },
      {
        alt: "Birds Flying Over Water",
        avg_color: "#C5B2A7",
        height: 3142,
        id: 3999943,
        liked: false,
        photographer: "Caner Cankisi",
        photographer_id: 2338173,
        photographer_url: "https://www.pexels.com/@accankisi",
        src: {
          landscape:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg",
          portrait:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/birds-flying-over-water-3999943/",
        width: 2512,
      },
      {
        alt: "Aerial Photography of Cityscape at Night",
        avg_color: "#1E1F25",
        height: 3648,
        id: 45189,
        liked: false,
        photographer: "Burak The Weekender",
        photographer_id: 7528,
        photographer_url: "https://www.pexels.com/@weekendplayer",
        src: {
          landscape:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg",
          portrait:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/aerial-photography-of-cityscape-at-night-45189/",
        width: 5472,
      },
      {
        alt: "Photography of Brown Concrete Dome Building",
        avg_color: "#BEAFA4",
        height: 3549,
        id: 2159549,
        liked: false,
        photographer: "Konevi",
        photographer_id: 422505,
        photographer_url: "https://www.pexels.com/@konevi",
        src: {
          landscape:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg",
          portrait:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/2159549/pexels-photo-2159549.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/photography-of-brown-concrete-dome-building-2159549/",
        width: 5322,
      },
      {
        alt: "Brown Bigbus Istanbul Traveling on Road Near Brown Dome Building",
        avg_color: "#938C87",
        height: 3270,
        id: 879478,
        liked: false,
        photographer: "Arefin Shamsul",
        photographer_id: 273731,
        photographer_url: "https://www.pexels.com/@arefin",
        src: {
          landscape:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg",
          portrait:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/brown-bigbus-istanbul-traveling-on-road-near-brown-dome-building-879478/",
        width: 4321,
      },
      {
        alt: "Aerial Shot Of City",
        avg_color: "#565451",
        height: 4670,
        id: 1666362,
        liked: false,
        photographer: "Abdullah Ghatasheh",
        photographer_id: 770062,
        photographer_url: "https://www.pexels.com/@abdghat",
        src: {
          landscape:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg",
          portrait:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/1666362/pexels-photo-1666362.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/aerial-shot-of-city-1666362/",
        width: 6997,
      },
      {
        alt: "Brown Concrete Building Under Blue Sky",
        avg_color: "#809CA0",
        height: 3456,
        id: 3684396,
        liked: false,
        photographer: "Selcuk Teke",
        photographer_id: 393955,
        photographer_url: "https://www.pexels.com/@selcuk-teke-393955",
        src: {
          landscape:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg",
          portrait:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/brown-concrete-building-under-blue-sky-3684396/",
        width: 5184,
      },
      {
        alt: "Sunset Image",
        avg_color: "#A56733",
        height: 3456,
        id: 2042108,
        liked: false,
        photographer: "Selim Çetin",
        photographer_id: 1027748,
        photographer_url: "https://www.pexels.com/@selimdersiniz",
        src: {
          landscape:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg",
          portrait:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/sunset-image-2042108/",
        width: 5184,
      },
      {
        alt: "Silhouette of Buildings Near Ocean Water",
        avg_color: "#A5A1A0",
        height: 3080,
        id: 57553,
        liked: false,
        photographer: "Burak The Weekender",
        photographer_id: 7528,
        photographer_url: "https://www.pexels.com/@weekendplayer",
        src: {
          landscape:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          large:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          large2x:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&h=350",
          original:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg",
          portrait:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          small:
            "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&h=130",
          tiny: "https://images.pexels.com/photos/57553/pexels-photo-57553.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        url: "https://www.pexels.com/photo/silhouette-of-buildings-near-ocean-water-57553/",
        width: 5472,
      },
    ],
    total_results: 8000,
  },
];

export const cohereResponseWeather = [
  {
    current_observation: {
      astronomy: {
        sunrise: "8:06 AM",
        sunset: "4:03 PM",
      },
      atmosphere: {
        humidity: 79,
        pressure: 1002,
        visibility: 17.03,
      },
      condition: {
        code: 28,
        temperature: 45,
        text: "Mostly Cloudy",
      },
      pubDate: 1704094740,
      wind: {
        chill: 35,
        direction: "WSW",
        speed: 16,
      },
    },
    forecasts: [
      {
        code: 45,
        date: 1704124800,
        day: "Mon",
        high: 51,
        low: 45,
        text: "Scattered Showers",
      },
      {
        code: 12,
        date: 1704211200,
        day: "Tue",
        high: 56,
        low: 48,
        text: "Rain",
      },
      {
        code: 45,
        date: 1704297600,
        day: "Wed",
        high: 53,
        low: 43,
        text: "Scattered Showers",
      },
      {
        code: 28,
        date: 1704384000,
        day: "Thu",
        high: 49,
        low: 39,
        text: "Mostly Cloudy",
      },
      {
        code: 26,
        date: 1704470400,
        day: "Fri",
        high: 44,
        low: 39,
        text: "Cloudy",
      },
      {
        code: 26,
        date: 1704556800,
        day: "Sat",
        high: 45,
        low: 37,
        text: "Cloudy",
      },
      {
        code: 28,
        date: 1704643200,
        day: "Sun",
        high: 47,
        low: 40,
        text: "Mostly Cloudy",
      },
      {
        code: 30,
        date: 1704729600,
        day: "Mon",
        high: 46,
        low: 38,
        text: "Partly Cloudy",
      },
      {
        code: 28,
        date: 1704816000,
        day: "Tue",
        high: 46,
        low: 36,
        text: "Mostly Cloudy",
      },
      {
        code: 32,
        date: 1704902400,
        day: "Wed",
        high: 42,
        low: 37,
        text: "Sunny",
      },
      {
        code: 28,
        date: 1704988800,
        day: "Thu",
        high: 44,
        low: 39,
        text: "Mostly Cloudy",
      },
    ],
    location: {
      city: "London",
      country: "United Kingdom",
      lat: 51.506401,
      long: -0.12721,
      timezone_id: "Europe/London",
      woeid: 44418,
    },
  },
  {
    current_observation: {
      astronomy: {
        sunrise: "8:44 AM",
        sunset: "5:05 PM",
      },
      atmosphere: {
        humidity: 85,
        pressure: 1009.1,
        visibility: 14.98,
      },
      condition: {
        code: 28,
        temperature: 43,
        text: "Mostly Cloudy",
      },
      pubDate: 1704094770,
      wind: {
        chill: 34,
        direction: "SW",
        speed: 13,
      },
    },
    forecasts: [
      {
        code: 26,
        date: 1704124800,
        day: "Mon",
        high: 51,
        low: 49,
        text: "Cloudy",
      },
      {
        code: 11,
        date: 1704211200,
        day: "Tue",
        high: 55,
        low: 43,
        text: "Showers",
      },
      {
        code: 45,
        date: 1704297600,
        day: "Wed",
        high: 55,
        low: 46,
        text: "Scattered Showers",
      },
      {
        code: 11,
        date: 1704384000,
        day: "Thu",
        high: 52,
        low: 44,
        text: "Showers",
      },
      {
        code: 26,
        date: 1704470400,
        day: "Fri",
        high: 48,
        low: 40,
        text: "Cloudy",
      },
      {
        code: 26,
        date: 1704556800,
        day: "Sat",
        high: 44,
        low: 37,
        text: "Cloudy",
      },
      {
        code: 26,
        date: 1704643200,
        day: "Sun",
        high: 40,
        low: 34,
        text: "Cloudy",
      },
      {
        code: 26,
        date: 1704729600,
        day: "Mon",
        high: 41,
        low: 35,
        text: "Cloudy",
      },
      {
        code: 32,
        date: 1704816000,
        day: "Tue",
        high: 43,
        low: 30,
        text: "Sunny",
      },
      {
        code: 34,
        date: 1704902400,
        day: "Wed",
        high: 40,
        low: 30,
        text: "Mostly Sunny",
      },
      {
        code: 30,
        date: 1704988800,
        day: "Thu",
        high: 42,
        low: 32,
        text: "Partly Cloudy",
      },
    ],
    location: {
      city: "Paris",
      country: "France",
      lat: 48.85693,
      long: 2.3412,
      timezone_id: "Europe/Paris",
      woeid: 615702,
    },
  },
  {
    current_observation: {
      astronomy: {
        sunrise: "8:29 AM",
        sunset: "5:47 PM",
      },
      atmosphere: {
        humidity: 77,
        pressure: 1018.3,
        visibility: 11.99,
      },
      condition: {
        code: 28,
        temperature: 53,
        text: "Mostly Cloudy",
      },
      pubDate: 1704094797,
      wind: {
        chill: 52,
        direction: "SSE",
        speed: 8,
      },
    },
    forecasts: [
      {
        code: 30,
        date: 1704124800,
        day: "Mon",
        high: 61,
        low: 52,
        text: "Partly Cloudy",
      },
      {
        code: 11,
        date: 1704211200,
        day: "Tue",
        high: 61,
        low: 45,
        text: "Showers",
      },
      {
        code: 28,
        date: 1704297600,
        day: "Wed",
        high: 61,
        low: 52,
        text: "Mostly Cloudy",
      },
      {
        code: 21,
        date: 1704384000,
        day: "Thu",
        high: 63,
        low: 50,
        text: "Haze",
      },
      {
        code: 21,
        date: 1704470400,
        day: "Fri",
        high: 63,
        low: 49,
        text: "Haze",
      },
      {
        code: 11,
        date: 1704556800,
        day: "Sat",
        high: 61,
        low: 51,
        text: "Showers",
      },
      {
        code: 28,
        date: 1704643200,
        day: "Sun",
        high: 61,
        low: 49,
        text: "Mostly Cloudy",
      },
      {
        code: 11,
        date: 1704729600,
        day: "Mon",
        high: 57,
        low: 50,
        text: "Showers",
      },
      {
        code: 26,
        date: 1704816000,
        day: "Tue",
        high: 51,
        low: 47,
        text: "Cloudy",
      },
      {
        code: 12,
        date: 1704902400,
        day: "Wed",
        high: 55,
        low: 50,
        text: "Rain",
      },
      {
        code: 26,
        date: 1704988800,
        day: "Thu",
        high: 58,
        low: 51,
        text: "Cloudy",
      },
    ],
    location: {
      city: "Istanbul",
      country: "Turkey",
      lat: 41.040852,
      long: 28.986179,
      timezone_id: "Europe/Istanbul",
      woeid: 2344116,
    },
  },
];
