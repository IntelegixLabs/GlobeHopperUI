import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TripDetailsContext } from "@contexts/TripDetailsContext.js";

export default function PlanTripDetails() {
  const { tripDetails, destination } = useContext(TripDetailsContext);

  const [showResult, setShowResult] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const sampleWeatherData = {
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

  const sampleImageData = [
    {
      alt: "White Building",
      avg_color: "#8EA097",
      height: "4000",
      id: 2846217,
      liked: false,
      photographer: "Rahul Pandit",
      photographer_id: 340699,
      photographer_url: "https://www.pexels.com/@rahulp9800",
      src: {
        landscape:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg",
        medium:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&h=350",
        original:
          "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg",
      },
      url: "https://www.pexels.com/photo/white-building-2846217/",
      width: 6000,
    },
  ];

  useEffect(() => {
    if (!destination) {
      setShowResult(false);
    }

    setImageSrc(sampleImageData[0].src.original);
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[800px]">
        <img
          className="absolute object-cover w-full h-[800px]"
          src={imageSrc}
          alt="cover-image"
        />
        <div className="absolute py-10 px-12 right-0 w-1/2 bg-white/70 backdrop-blur-sm shadow-lg h-full">
          <h2 className="mt-20 font-bold text-5xl text-gray-800">
            {destination}
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            {tripDetails.introduction}
          </p>
          <div className="absolute bottom-20 text-gray-600">
            <p>
              Scroll down <br /> to see more <br />{" "}
            </p>
            <i className="mt-6 fa-solid fa-arrow-down-long fa-fw fa-lg"></i>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 max-w-2xl mx-auto">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-bold text-5xl">Trip Plan</h2>
          <a
            href="#destination-map"
            className="py-2 px-4 text-blue-500 hover:text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 shadow-sm hover:shadow rounded-md duration-300"
          >
            <i className="fa-solid fa-location-dot fa-fw"></i> Check location on
            map
          </a>
        </div>
        <p className="mt-4 text-lg text-gray-600">
          Here is your trip planned as day wise. This will help you to map your
          journey.
        </p>
        <p className="mt-1 text-lg text-gray-600">
          Your journey consists of total{" "}
          <span className="text-blue-700">{tripDetails.itinerary.length}</span>{" "}
          days.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10">
          {tripDetails.itinerary.map((itinerary, index) => {
            return (
              <div
                className="pt-6 pb-10 px-10 border bg-white shadow-lg rounded-lg"
                key={index}
              >
                <h4 className="font-bold text-3xl">Day {itinerary.Day}</h4>

                <h6 className="mt-8 text-xl">Morning</h6>
                <p className="mt-2 text-gray-600">{itinerary.morning}</p>
                <h6 className="mt-6 text-xl">Afternoon</h6>
                <p className="mt-2 text-gray-600">{itinerary.afternoon}</p>
                <h6 className="mt-6 text-xl">Evening</h6>
                <p className="mt-2 text-gray-600">{itinerary.evening}</p>
                <h6 className="mt-6 text-xl">Night</h6>
                <p className="mt-2 text-gray-600">{itinerary.night}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div id="destination-map" className="py-10">
        <iframe
          width="100%"
          height="512"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA6DpkaU7wgt0BOgkE6IkjhZUOTNET__Ls
    &q=${destination}`}
        ></iframe>
      </div>
      <div className="py-10 text-gray-700">
        <p className="text-center">{import.meta.env.VITE_APP_NAME}</p>
        <p className="text-center">
          Created by team <strong>base234</strong>
        </p>
      </div>
    </div>
  );
}
