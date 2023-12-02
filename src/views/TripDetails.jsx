import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TripDetailsContext } from "@contexts/TripDetailsContext.js";
import { Api } from "@api/Api.js";

import { sampleWeatherData } from "../samples/sampleData.js";
import { samplePhotosData } from "../samples/sampleData.js";

import SUNNY from "@assets/weather-icons/sunny.png";
import SHOWERS from "@assets/weather-icons/showers.png";
import PARTLY_CLOUDY from "@assets/weather-icons/partly-cloudy.png";
import CLOUDY from "@assets/weather-icons/cloudy.png";
import STORM from "@assets/weather-icons/storm.png";
import RAIN from "@assets/weather-icons/rain.png";
import HAZE from "@assets/weather-icons/haze.png";
import WIND from "@assets/weather-icons/wind.png";

import HOTEL from "@assets/convenience/hotel-room-1.jpg";
import FLIGHT from "@assets/convenience/flight-1.jpg";

export default function PlanTripDetails() {
  const { tripDetails, destination } = useContext(TripDetailsContext);

  const [Photos, setPhotos] = useState([]);
  const [Weather, setWeather] = useState({});

  useEffect(() => {
    fetchWeather();
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
      /*
      | - Use it for live in
      | - Note: API limits will exhaust
      | =====================================
      */
      const payload = {
        parameters: {
          location: destination,
          query_count: 15,
        },
      };
      await Api.post("/images", payload).then((res) => {
        setPhotos(res.data.photos);
      }).catch(error => {
        console.log(error);
      });

      return;
    }

    /* Use it for testing with sample
    | static in order to avoid
    | getting API limits exhausted
    | =========================================
    */
    await setPhotos(samplePhotosData.photos);
  };

  const fetchWeather = async () => {
    if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
      /*
      | - Use it for live in
      | - Note: API limits will exhaust
      | =====================================
      */
      const payload = {
        parameters: {
          location: destination,
        },
      };

      await Api.post("/weather", payload).then((res) => {
        setWeather({
          current: res.data.current_observation,
          forecasts: res.data.forecasts,
        });
      });

      return;
    }

    /* Use it for testing with sample
    | static in order to avoid
    | getting API limits exhausted
    | =========================================
    */
    await setWeather({
      current: sampleWeatherData.current_observation,
      forecasts: sampleWeatherData.forecasts,
    });
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[800px]">
        {Photos.length && (
          <img
            className="absolute object-cover w-full h-[800px]"
            src={Photos[0].src.original}
            alt="cover-image"
          />
        )}
        <div className="absolute py-10 px-6 lg:px-12 right-0 w-full lg:w-1/2 bg-white/70 backdrop-blur-sm shadow-lg h-full">
          {Weather && Weather.current && (
            <a
              href="#weather-forecast"
              title="Check weather forecast"
              className="p-2 inline-flex items-start gap-x-3 text-blue-600 border border-blue-100 hover:bg-blue-100 rounded-lg cursor-pointer"
            >
              <div>
                <i className="fa-solid fa-temperature-half fa-3x"></i>
              </div>
              <div>
                <h6>
                  {Weather.current.condition.temperature}&deg; F |&nbsp;
                  {parseFloat(
                    (
                      ((Weather.current.condition.temperature - 32) * 5) /
                      9
                    ).toFixed(1)
                  )}
                  &deg; C
                </h6>
                <p>{Weather.current.condition.text}</p>
              </div>
            </a>
          )}
          <h2 className="mt-16 lg:mt-20 font-bold text-4xl lg:text-5xl text-gray-800">
            {destination}
          </h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700">
            {tripDetails.introduction}
          </p>

          {Weather && Weather.forecasts && Weather.forecasts.length && (
            <div className="max-w-7xl mx-auto">
              <h6 className="mt-10 font-bold text-lg text-gray-800">
                Next 5 days forecast
              </h6>
              <div className="mt-4 grid grid-cols-5 gap-4">
                {Weather.forecasts.map((forecast, index) => {
                  if (index > 4) {
                    return;
                  }

                  return (
                    <div
                      className="w-full p-4 border bg-white/60 rounded-lg"
                      key={index}
                    >
                      {forecast.text === "Sunny" && (
                        <img
                          className="w-12 mx-auto"
                          src={SUNNY}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text === "Showers" && (
                        <img
                          className="w-12 mx-auto"
                          src={SHOWERS}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text === "Partly Cloudy" && (
                        <img
                          className="w-12 mx-auto"
                          src={PARTLY_CLOUDY}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text === "Mostly Cloudy" && (
                        <img
                          className="w-12 mx-auto"
                          src={CLOUDY}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text === "Haze" && (
                        <img
                          className="w-12 mb-2 mx-auto"
                          src={HAZE}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text === "Rain" && (
                        <img
                          className="w-12 mx-auto"
                          src={RAIN}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text === "Storm" && (
                        <img
                          className="w-12 mx-auto"
                          src={STORM}
                          alt={forecast.text}
                        />
                      )}
                      {forecast.text !== "Sunny" &&
                        forecast.text !== "Showers" &&
                        forecast.text !== "Partly Cloudy" &&
                        forecast.text !== "Mostly Cloudy" &&
                        forecast.text !== "Haze" &&
                        forecast.text !== "Rain" &&
                        forecast.text !== "Storm" && (
                          <img
                            className="w-12 mx-auto"
                            src={WIND}
                            alt={forecast.text}
                          />
                        )}
                      <div className="mt-2 text-center">
                        <h6 className="font-semibold text-gray-400">
                          {forecast.day}
                        </h6>
                        <h6 className="font-semibold">{forecast.text}</h6>
                        <p className="mt-1 text-gray-600 text-sm">
                          {parseFloat(
                            (((forecast.high - 32) * 5) / 9).toFixed(1)
                          )}
                          &deg; C &nbsp; | &nbsp;
                          {parseFloat(
                            (((forecast.low - 32) * 5) / 9).toFixed(1)
                          )}
                          &deg; C
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="absolute bottom-10 text-gray-600">
            <p>
              Scroll down <br /> to see more <br />{" "}
            </p>
            <i className="mt-6 fa-solid fa-arrow-down-long fa-fw fa-lg"></i>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 max-w-7xl mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4">
          <div>
            <h2 className="font-bold text-4xl lg:text-5xl">Trip Plan</h2>
            <p className="mt-4 text-base lg:text-lg text-gray-600">
              Here is your trip planned as day wise. This will help you to map
              your journey.
            </p>
            <p className="mt-1 text-base lg:text-lg text-gray-600">
              Your journey consists of total{" "}
              <span className="text-blue-700">
                {tripDetails.itinerary.length}
              </span>{" "}
              days.
            </p>
          </div>
          <a
            href="#destination-map"
            className="py-2 pl-3 pr-4 text-blue-500 hover:text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 shadow-sm hover:shadow rounded-md duration-300"
          >
            <i className="fa-solid fa-location-dot fa-fw"></i> Show Map
          </a>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <h4 className="mb-5 font-bold text-2xl md:text-4xl block lg:hidden">
              Some of the clicks around{" "}
              <span className="text-blue-600">{destination}</span>... 📸
            </h4>
            {Photos.length && (
              <div className="relative group">
                <div className="absolute z-20 bg-gradient-to-t from-black/80 min-h-full w-full rounded-lg hidden group-hover:block">
                  <div className="absolute bottom-0 p-4">
                    <a
                      href={Photos[0].photographer_url}
                      target="_blank"
                      className="font-medium text-gray-200 hover:text-white hover:underline"
                    >
                      {Photos[0].photographer}
                      <i className="fa-solid fa-camera fa-fw fa-md text-white ml-2"></i>
                    </a>

                    <p className="mt-1 text-gray-300">{Photos[0].alt}</p>
                  </div>
                </div>
                <img
                  className="w-full object-cover h-[280px] rounded-lg"
                  src={Photos[0].src.original}
                  alt="cover-image"
                />
              </div>
            )}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {Photos.length && (
                <Fragment>
                  {Photos.map((photo, index) => {
                    if (index === 0) {
                      return;
                    }

                    return (
                      <div
                        className="relative shadow-md rounded-lg group"
                        key={index}
                      >
                        <div className="absolute z-20 bg-gradient-to-t from-black/80 min-h-full w-full rounded-lg hidden group-hover:block">
                          <div className="absolute bottom-0 p-4">
                            <a
                              href={photo.photographer_url}
                              target="_blank"
                              className="font-medium text-gray-200 hover:text-white hover:underline"
                            >
                              {photo.photographer}
                              <i className="fa-solid fa-camera fa-fw fa-md text-white ml-2"></i>
                            </a>

                            <p className="mt-1 text-gray-300">{photo.alt}</p>
                          </div>
                        </div>
                        <img
                          className="w-full object-cover h-[256px] rounded-lg"
                          src={photo.src.original}
                          alt={photo.alt}
                        />
                      </div>
                    );
                  })}
                </Fragment>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-10">
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
        </div>
      </div>

      <div className="my-20 max-w-7xl mx-auto">
        <h4 className="font-bold text-3xl">
          Convenience at your fingertips with{" "}
          <a className="text-blue-600 hover:underline" href="https://www.tbo.com/">TBO.com</a>
        </h4>
        <div className="mt-4 flex gap-4">
          <div className="w-1/2 p-2 border bg-white shadow-lg rounded-lg">
            <img
              className="w-full object-cover h-[260px]"
              src={HOTEL}
              alt="hotels"
            />
            <p className="mt-4 text-lg">
              Seamless hotel bookings made easy. Your comfort, your choice.
            </p>
            <p className="text-lg">
              With{" "}
              <a
                className="text-blue-700"
                href="https://tbo.com"
                target="_blank"
              >
                TBO.com
              </a>
              , your hotel bookings are taken care of.
            </p>
            <p className="mt-4 text-blue-500">#BookWithEase, #BookWithTBO</p>
          </div>
          <div className="w-1/2 p-2 border bg-white shadow-lg rounded-lg">
            <img
              className="w-full object-cover h-[260px]"
              src={FLIGHT}
              alt="flights"
            />
            <p className="mt-4 text-lg">
              Fly hassle-free with our easy booking platform. Your journey, your
              way..
            </p>
            <p className="text-lg">
              With{" "}
              <a
                className="text-blue-700"
                href="https://tbo.com"
                target="_blank"
              >
                TBO.com
              </a>
              , everything just happens without you have to worry about it.
            </p>
            <p className="mt-4 text-blue-500">#FlyWithEase, #BookWithTBO</p>
          </div>
        </div>
      </div>

      {Weather && Weather.forecasts && Weather.forecasts.length && (
        <div id="weather-forecast" className="pt-10 my-20 max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl lg:text-5xl">Weather</h2>
          <div className="mt-6 grid grid-cols-4 gap-4">
            {Weather.forecasts.map((forecast, index) => {
              return (
                <div
                  className="w-full p-4 border bg-white shadow flex rounded-lg gap-4"
                  key={index}
                >
                  <div>
                    {forecast.text === "Sunny" && (
                      <img className="w-16" src={SUNNY} alt={forecast.text} />
                    )}
                    {forecast.text === "Showers" && (
                      <img className="w-16" src={SHOWERS} alt={forecast.text} />
                    )}
                    {forecast.text === "Partly Cloudy" && (
                      <img
                        className="w-16"
                        src={PARTLY_CLOUDY}
                        alt={forecast.text}
                      />
                    )}
                    {forecast.text === "Mostly Cloudy" && (
                      <img className="w-16" src={CLOUDY} alt={forecast.text} />
                    )}
                    {forecast.text === "Haze" && (
                      <img className="w-12" src={HAZE} alt={forecast.text} />
                    )}
                    {forecast.text === "Rain" && (
                      <img className="w-12" src={RAIN} alt={forecast.text} />
                    )}
                    {forecast.text === "Storm" && (
                      <img className="w-12" src={STORM} alt={forecast.text} />
                    )}
                    {forecast.text !== "Sunny" &&
                      forecast.text !== "Showers" &&
                      forecast.text !== "Partly Cloudy" &&
                      forecast.text !== "Mostly Cloudy" &&
                      forecast.text !== "Haze" &&
                      forecast.text !== "Rain" &&
                      forecast.text !== "Storm" && (
                        <img className="w-12" src={WIND} alt={forecast.text} />
                      )}
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-400">
                      {forecast.day}
                    </h6>
                    <h6 className="font-semibold">{forecast.text}</h6>
                    <p className="mt-1 text-gray-600 text-sm">
                      {parseFloat((((forecast.high - 32) * 5) / 9).toFixed(1))}
                      &deg; C &nbsp; | &nbsp;
                      {parseFloat((((forecast.low - 32) * 5) / 9).toFixed(1))}
                      &deg; C
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
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
