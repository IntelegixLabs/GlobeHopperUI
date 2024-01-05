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

export const cohereResponseItineraryDetails = {
  data: [
    {
      images: {
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
        total_results: 4131,
      },
      name: "London",
      travel_details: {
        introduction:
          "London is a dynamic city known for its rich history, stunning architecture, and world-renowned landmarks. With places like Buckingham Palace, the British Museum, Tower Bridge, and the magnificent Sky Garden, London promises a truly rewarding experience. Don't forget to experience the city's food culture that boasts an array of cuisines from English breakfast to delectable fish and chips.",
        itinerary: [
          {
            Day: "1",
            afternoon:
              "Have a delightful lunch at Le Gavroche. Post lunch, visit the famous British Museum - take the tube from Bond Street Underground station. Spend the afternoon exploring its vast collections.",
            evening:
              "Head to Duck & Waffle for evening snacks overlooking the city skyline. Later, visit Leicester Square and Covent Garden for a taste of London's nightlife, both places are within walking distance.",
            morning:
              "Start your day with a hearty English breakfast at Regency Cafe. Then head to the iconic Buckingham Palace, taking the tube from Pimlico Underground Station.",
            night:
              "Enjoy dinner at the stylish Clos Maggiore restaurant. Later, you can choose to watch a play at the West End or return to your accommodation.",
          },
          {
            Day: "2",
            afternoon:
              "Enjoy a delightful lunch at Lyle's. Afterwards, visit St. Paul's Cathedral, reachable from Liverpool Street Underground station.",
            evening:
              "Evening snacks can be enjoyed at Barrafina, after which you can explore the vivacious Soho district, just a short walk away.",
            morning:
              "Grab breakfast at E Pellicci. Later, head to the Tower of London, it's a short walk from Aldgate East Underground station.",
            night:
              "Dinner at Bob Bob Ricard would be a perfect end to your day. You can cherish a peaceful London night or choose to experience the city’s nightlife at one of the exciting pubs in Soho.",
          },
          {
            Day: "3",
            afternoon:
              "Have lunch at Rules, London's oldest restaurant. Then, visit the picturesque Hyde Park, a short tube journey from Covent Garden Underground station.",
            evening:
              "Munch on delicious snacks at The Barbary. Later, visit Oxford Street for a shopping extravaganza. It's a short walk away.",
            morning:
              "Start your day with breakfast at The Wolseley. Later, proceed to the Natural History Museum, reachable from Green Park Underground station.",
            night:
              "End the day with a fine dining experience at The Ledbury. Head back to your accommodation to rest.",
          },
          {
            Day: "4",
            afternoon:
              "Savor your lunch at The Harwood Arms, later visit the Tate Modern, you can reach there by tube from Fulham Broadway Underground Station.",
            evening:
              "Enjoy evening snacks at Primrose Bakery. You can spend the evening exploring the vibrant Camden Market, which is just a short bus ride away.",
            morning:
              "Have your breakfast at Monmouth Coffee Company. Then explore the Sky Garden, a short walk from Tower Hill Underground station.",
            night:
              "For dinner, head to Dishoom. After dinner, take a night walk along River Thames for a stunning view of London's skyline, then head back to your accommodation.",
          },
        ],
      },
      weather: {
        current_observation: {
          astronomy: {
            sunrise: "8:06 AM",
            sunset: "4:07 PM",
          },
          atmosphere: {
            humidity: 88,
            pressure: 1008.1,
            visibility: 19.01,
          },
          condition: {
            code: 28,
            temperature: 43,
            text: "Mostly Cloudy",
          },
          pubDate: 1704488409,
          wind: {
            chill: 37,
            direction: "NW",
            speed: 7,
          },
        },
        forecasts: [
          {
            code: 30,
            date: 1704470400,
            day: "Fri",
            high: 45,
            low: 39,
            text: "Partly Cloudy",
          },
          {
            code: 45,
            date: 1704556800,
            day: "Sat",
            high: 44,
            low: 35,
            text: "Scattered Showers",
          },
          {
            code: 28,
            date: 1704643200,
            day: "Sun",
            high: 41,
            low: 35,
            text: "Mostly Cloudy",
          },
          {
            code: 26,
            date: 1704729600,
            day: "Mon",
            high: 38,
            low: 32,
            text: "Cloudy",
          },
          {
            code: 32,
            date: 1704816000,
            day: "Tue",
            high: 40,
            low: 34,
            text: "Sunny",
          },
          {
            code: 30,
            date: 1704902400,
            day: "Wed",
            high: 44,
            low: 38,
            text: "Partly Cloudy",
          },
          {
            code: 26,
            date: 1704988800,
            day: "Thu",
            high: 46,
            low: 42,
            text: "Cloudy",
          },
          {
            code: 26,
            date: 1705075200,
            day: "Fri",
            high: 49,
            low: 42,
            text: "Cloudy",
          },
          {
            code: 11,
            date: 1705161600,
            day: "Sat",
            high: 47,
            low: 35,
            text: "Showers",
          },
          {
            code: 28,
            date: 1705248000,
            day: "Sun",
            high: 44,
            low: 34,
            text: "Mostly Cloudy",
          },
          {
            code: 16,
            date: 1705334400,
            day: "Mon",
            high: 40,
            low: 32,
            text: "Snow",
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
    },
    {
      images: {
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
        total_results: 3513,
      },
      name: "Paris",
      travel_details: {
        introduction:
          "Paris, often referred to as the 'City of Light' is one of the most sought-after places to visit in the world. Known for its historical monuments, romantic ambiance, fashion houses, and world-class museums, Paris offers a rich cultural experience along with gastronomic excellence. Let's explore the beautiful city of Paris in this 4-day itinerary.",
        itinerary: [
          {
            Day: "Day 1",
            afternoon:
              "For lunch, try L'Ambroisie in Le Marais. Post lunch, visit the Notre-Dame Cathedral. You can again use the Paris Metro for the commute.",
            evening:
              "Have evening snacks at L’Eclair de Génie, explore the Montmartre district and enjoy the party scene at Moulin Rouge. Public buses and cabs are the best way to navigate. ",
            morning:
              "Begin your day with breakfast at Café de Flore. Later, visit the iconic Eiffel Tower. You can use the Paris Metro to reach there.",
            night:
              "Dine at 58 Tour Eiffel and enjoy the stunning view of Paris at night.",
          },
          {
            Day: "Day 2",
            afternoon:
              "Grab lunch at Le Jules Verne. Visit the Louvre Museum in the afternoon.",
            evening:
              "Enjoy your evening at Le Comptoir du Relais and visit the Champs-Élysées Christmas Market.",
            morning:
              "Start your day with breakfast at Angelina tearoom. Go for a cruise on the Seine River.",
            night: "Dinner at Le Cinq and take a night stroll around the city.",
          },
          {
            Day: "Day 3",
            afternoon:
              "Enjoy lunch at Gordon Ramsay au Trianon. Spend your afternoon exploring the palace gardens.",
            evening:
              "Have evening snacks at Ladurée Royale and experience the vibrant nightlife in the Latin Quarter.",
            morning:
              "Have breakfast at Claus la Table du Petit Déjeuner. Visit the Palace of Versailles in the morning.",
            night:
              "Dine at Le Procope, the oldest restaurant in Paris, and enjoy the bustling night ambiance of the city.",
          },
          {
            Day: "Day 4",
            afternoon:
              "Lunch at Le Comptoir du Relais. Visit the Musée d'Orsay in the afternoon.",
            evening:
              "Savour your evening snacks at Rue Montorgueil market street. Experience Paris’s cabaret history at The Lido.",
            morning:
              "Start your day with breakfast at Le Peloton Café. Head to The Centre Pompidou in the morning.",
            night:
              "Have dinner at Pierre Gagnaire and take a final night stroll around the beautiful city.",
          },
        ],
      },
      weather: {
        current_observation: {
          astronomy: {
            sunrise: "8:44 AM",
            sunset: "5:09 PM",
          },
          atmosphere: {
            humidity: 88,
            pressure: 1007.1,
            visibility: 14.98,
          },
          condition: {
            code: 30,
            temperature: 44,
            text: "Partly Cloudy",
          },
          pubDate: 1704488442,
          wind: {
            chill: 42,
            direction: "WNW",
            speed: 5,
          },
        },
        forecasts: [
          {
            code: 30,
            date: 1704470400,
            day: "Fri",
            high: 49,
            low: 39,
            text: "Partly Cloudy",
          },
          {
            code: 11,
            date: 1704556800,
            day: "Sat",
            high: 45,
            low: 36,
            text: "Showers",
          },
          {
            code: 26,
            date: 1704643200,
            day: "Sun",
            high: 45,
            low: 27,
            text: "Cloudy",
          },
          {
            code: 28,
            date: 1704729600,
            day: "Mon",
            high: 32,
            low: 26,
            text: "Mostly Cloudy",
          },
          {
            code: 30,
            date: 1704816000,
            day: "Tue",
            high: 33,
            low: 26,
            text: "Partly Cloudy",
          },
          {
            code: 32,
            date: 1704902400,
            day: "Wed",
            high: 34,
            low: 28,
            text: "Sunny",
          },
          {
            code: 32,
            date: 1704988800,
            day: "Thu",
            high: 39,
            low: 31,
            text: "Sunny",
          },
          {
            code: 28,
            date: 1705075200,
            day: "Fri",
            high: 41,
            low: 33,
            text: "Mostly Cloudy",
          },
          {
            code: 26,
            date: 1705161600,
            day: "Sat",
            high: 42,
            low: 30,
            text: "Cloudy",
          },
          {
            code: 11,
            date: 1705248000,
            day: "Sun",
            high: 39,
            low: 31,
            text: "Showers",
          },
          {
            code: 18,
            date: 1705334400,
            day: "Mon",
            high: 43,
            low: 32,
            text: "Sleet",
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
    },
    {
      images: {
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
      name: "Istanbul",
      travel_details: {
        introduction:
          "Istanbul, Turkey, is a bustling city known for its rich history and stunning architecture. With numerous attractions such as the Hagia Sophia, Topkapi Palace, and the Bosphorus, Istanbul offers an array of exciting experiences for tourists. Indulge in the vibrant local food scenes, and explore the energetic nightlife, making your trip truly memorable.",
        itinerary: [
          {
            Day: "1",
            afternoon:
              "Lunch at the Sultanahmet Fish House. Visit the majestic Hagia Sophia and the stunning Blue Mosque post-lunch. Tram is the best way to travel to these places from the restaurant.",
            evening:
              "Snacks at the Ortaköy Café, known for its view of the Bosphorus and Ortaköy Mosque. Enjoy a Bosphorus sunset cruise. The café is within walking distance to the cruise departure point.",
            morning:
              "Breakfast at Van Kahvalti Evi, famous for its traditional Turkish breakfast. Then visit the Grand Bazaar, one of the oldest covered markets in the world. Use public transport or taxi to commute.",
            night:
              "Dinner at Mikla Restaurant, renowned for its contemporary Turkish cuisine. Enjoy an evening stroll at Istiklal Street. The metro is the most convenient way to reach the location.",
          },
          {
            Day: "2",
            afternoon:
              "Lunch at Buhara 93 Restaurant. Visit the Basilica Cistern and Galata Tower. Both can be reached using the metro or taxi.",
            evening:
              "Have snacks at the Pandeli Restaurant and enjoy its historic charm. Go for a Turkish Music Concert at Hodjapasha. The concert hall is a 10-minute walk from the restaurant.",
            morning:
              "Breakfast at Sirkeci Konak Restaurant. Visit Topkapi Palace and Istanbul Archaeology Museums. Use the tram to commute.",
            night:
              "Dinner at Karakoy Lokantasi and explore the beautiful Galata Bridge at night. Both are at walking distance from each other.",
          },
          {
            Day: "3",
            afternoon:
              "Have lunch at the Asitane Restaurant which offers classic Ottoman cuisine. Visit Suleymaniye Mosque and Rustem Pasha Mosque. Commute by Tram.",
            evening:
              "Enjoy the Istanbul Street Food Tour. End your day visiting some classical Turkish Music places around Istiklal Street. They’re best reached by Metro.",
            morning:
              "Start your day with breakfast at Gram. Visit the Chora Museum and The Golden Horn. These places can be reached by bus or taxi.",
            night:
              "Dinner at Cumhuriyet Balık Evi. Enjoy the night view of the city from Sapphire Observation Deck. A 15 minute taxi ride will get you there.",
          },
          {
            Day: "4",
            afternoon:
              "Have lunch at Nusr-Et Steakhouse to try amazing Turkish steaks. Visit Miniaturk and Rahmi M. Koc Museum. You can reach these places by taxi.",
            evening:
              "Savor authentic Turkish Pide at Hocapasa Pidecisi and take a walking tour of Istanbul Old Town, easily reachable on foot.",
            morning:
              "Start your last day with breakfast at Cafe Privato. Visit the Istanbul Modern and Dolmabahce Palace. Use the Metro or Taxi for commuting.",
            night:
              "Dinner at Faros Restaurant Old City and wrap up the visit by exploring the vibrant nightlife of Istanbul. They can be reached by tram.",
          },
        ],
      },
      weather: {
        current_observation: {
          astronomy: {
            sunrise: "8:29 AM",
            sunset: "5:51 PM",
          },
          atmosphere: {
            humidity: 79,
            pressure: 1019.3,
            visibility: 14.98,
          },
          condition: {
            temperature: 50,
            text: "Fair",
          },
          pubDate: 1704488476,
          wind: {
            chill: 47,
            direction: "SE",
            speed: 6,
          },
        },
        forecasts: [
          {
            code: 30,
            date: 1704470400,
            day: "Sat",
            high: 62,
            low: 49,
            text: "Partly Cloudy",
          },
          {
            code: 28,
            date: 1704556800,
            day: "Sun",
            high: 62,
            low: 47,
            text: "Mostly Cloudy",
          },
          {
            code: 11,
            date: 1704643200,
            day: "Mon",
            high: 59,
            low: 38,
            text: "Showers",
          },
          {
            code: 11,
            date: 1704729600,
            day: "Tue",
            high: 43,
            low: 36,
            text: "Showers",
          },
          {
            code: 16,
            date: 1704816000,
            day: "Wed",
            high: 43,
            low: 36,
            text: "Snow",
          },
          {
            code: 30,
            date: 1704902400,
            day: "Thu",
            high: 46,
            low: 37,
            text: "Partly Cloudy",
          },
          {
            code: 11,
            date: 1704988800,
            day: "Fri",
            high: 43,
            low: 39,
            text: "Showers",
          },
          {
            code: 30,
            date: 1705075200,
            day: "Sat",
            high: 40,
            low: 29,
            text: "Partly Cloudy",
          },
          {
            code: 34,
            date: 1705161600,
            day: "Sun",
            high: 37,
            low: 30,
            text: "Mostly Sunny",
          },
          {
            code: 11,
            date: 1705248000,
            day: "Mon",
            high: 54,
            low: 49,
            text: "Showers",
          },
          {
            code: 26,
            date: 1705334400,
            day: "Tue",
            high: 57,
            low: 48,
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
    },
  ],
};
