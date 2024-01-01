import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { TripDetailsContext } from "@contexts/TripDetailsContext.js";
import {
  cohereResponseItineraryImages,
  cohereResponseItinerary,
  cohereResponseWeather,
} from "../samples/sampleData.js";
import { Link } from "react-router-dom";
import { Api } from "@api/Api.js";
import printJS from "print-js";

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

export default function HomePlanTrip() {
  const { userSelectedDestinations, setUserSelectedDestinations } =
    useContext(TripDetailsContext);

  const [destinationsImages, setDestinationsImages] = useState([]);
  const [destinationsDetails, setDestinationsDetails] = useState([]);
  const [destinationWeather, setDestinationWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const htmlBody = useRef(null);

  useEffect(() => {
    initLoad();
  }, []);

  const initLoad = () => {
    setIsLoading(true);

    if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
      for (let i = 0; i < userSelectedDestinations.length; i++) {
        const payload = {
          parameters: {
            destination: userSelectedDestinations[i],
          },
        };

        const imagePayload = {
          parameters: {
            location: userSelectedDestinations[i],
            query_count: "10",
          },
        };

        Api.post("/travel_planner", payload)
          .then((res) => {
            setDestinationsDetails([...destinationsDetails, res.data]);
          })
          .catch((error) => {
            console.log(error);
          });

        Api.post("/images", imagePayload)
          .then((res) => {
            setDestinationsImages([...destinationsImages, res.data]);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      setIsLoading(false);
    } else {
      setDestinationsDetails(cohereResponseItinerary);
      setDestinationsImages(cohereResponseItineraryImages);
      setDestinationWeather(cohereResponseWeather);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const printAsPDF = () => {
    // printJS(htmlBody.current.id, "html");
    printJS({
      printable: htmlBody.current.id,
      type: "html",
      ignoreElements: ["image-carousel"],
    });
  };

  return (
    <Fragment>
      <div className="mt-4 mb-10 2xl:px-20 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-5xl">
            {import.meta.env.VITE_APP_NAME}
          </h1>
          <p className="ml-1 mt-2 font-light text-base">
            Your personal AI globe guide
          </p>
        </div>
        <div>
          <div className="flex gap-x-6">
            <Link
              to="/"
              className="text-base text-gray/60 hover:text-gray hover:underline rounded"
            >
              home
            </Link>
            <Link
              to="/about"
              className="text-base text-gray/60 hover:text-gray hover:underline rounded"
            >
              about us
            </Link>
            <Link
              to="/tbo"
              className="text-base text-white/60 hover:text-white hover:underline rounded"
            >
              TBO
            </Link>
            <Link
              to="/destination-search"
              className="text-base text-gray/60 hover:text-gray hover:underline rounded"
            >
              destination search
            </Link>
            <Link
              to="/plan-trip"
              className="text-base text-gray/60 hover:text-gray hover:underline rounded"
            >
              plan a trip
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10 2xl:px-20 flex items-center justify-between">
        <div>
          <h2 className="font-normal text-3xl">
            Here is your itinerary prepared
          </h2>
          <p className="mt-1 font-light text-5xl">
            based on your selected cities
          </p>
        </div>
        {!isLoading && (
          <button
            className="px-4 py-3 font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-md"
            onClick={printAsPDF}
          >
            <i className="fa-solid fa-file-arrow-down fa-fw"></i> Download /
            Print PDF
          </button>
        )}
      </div>

      {!isLoading && (
        <div className="w-full z-10 sticky top-0 py-6 border-y bg-white/80 shadow backdrop-blur-sm flex justify-center gap-x-4">
          {userSelectedDestinations.map((destination, index) => {
            return (
              <a
                key={index}
                href={`#${destination}`}
                className="hover:underline"
              >
                {destination}
              </a>
            );
          })}
        </div>
      )}
      {isLoading && (
        <div className="my-10 2xl:px-20">
          <h1>Loading Itineraries...</h1>
        </div>
      )}
      {!isLoading && (
        <div
          ref={htmlBody}
          id="displayBody"
          className="my-10 2xl:px-20 space-y-10"
        >
          {destinationsDetails.length > 0 && (
            <Fragment>
              {destinationsDetails.map((destinationDetails, index) => {
                return (
                  <Fragment key={index}>
                    <div id={userSelectedDestinations[index]} className="pt-16">
                      <div className="p-4 flex border rounded gap-4">
                        <div className="w-3/12">
                          <div className="grid grid-cols-1 gap-4">
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[0].src.medium
                              }
                              alt={destinationsImages[index].photos[0].alt}
                            />
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[1].src.medium
                              }
                              alt={destinationsImages[index].photos[1].alt}
                            />
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[2].src.medium
                              }
                              alt={destinationsImages[index].photos[2].alt}
                            />
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[3].src.medium
                              }
                              alt={destinationsImages[index].photos[3].alt}
                            />
                          </div>
                        </div>
                        <div className="w-6/12">
                          <div key={index} className="mx-10">
                            <div className="flex justify-between">
                              <h1 className="text-center font-bold text-4xl">
                                {userSelectedDestinations[index]}
                              </h1>
                              <div className="flex items-start gap-x-3 text-blue-600">
                                <div>
                                  <i className="fa-solid fa-temperature-half fa-3x"></i>
                                </div>
                                <div>
                                  <h6>
                                    {
                                      destinationWeather[index]
                                        .current_observation.condition
                                        .temperature
                                    }
                                    &deg; F |&nbsp;
                                    {parseFloat(
                                      (
                                        ((destinationWeather[index]
                                          .current_observation.condition
                                          .temperature -
                                          32) *
                                          5) /
                                        9
                                      ).toFixed(1)
                                    )}
                                    &deg; C
                                  </h6>
                                  <p>
                                    {
                                      destinationWeather[index]
                                        .current_observation.condition.text
                                    }
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="my-4 px-4 py-2 text-center border rounded">
                              <h2 className="font-semibold text-2xl">
                                Introduction
                              </h2>
                              <p className="my-2 text-gray-500">
                                {destinationDetails.introduction}
                              </p>
                            </div>

                            <div className="logos">
                              <div
                                key={index}
                                id="image-carousel"
                                className="print:hidden image-carousel flex my-4 logos-slide logos-animate-left gap-x-4"
                              >
                                {destinationsImages[index].photos.map(
                                  (photo, photoIndex) => {
                                    return (
                                      <img
                                        key={photoIndex}
                                        className="w-40 h-20 rounded-xl"
                                        src={photo.src.medium}
                                        alt={photo.alt}
                                      />
                                    );
                                  }
                                )}
                                {destinationsImages[index].photos.map(
                                  (photo, photoIndex) => {
                                    return (
                                      <img
                                        key={photoIndex}
                                        className="w-40 h-20 rounded-xl"
                                        src={photo.src.medium}
                                        alt={photo.alt}
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                            {destinationDetails.itinerary.map(
                              (itinerary, indexItinerary) => {
                                return (
                                  <Fragment key={indexItinerary}>
                                    <hr className="mt-8 mb-2" />
                                    <h6 className="text-center font-semibold text-2xl">
                                      Day {itinerary.Day}
                                    </h6>
                                    <hr className="mt-4 mb-2" />
                                    <div className="mt-4 mb-6 flex gap-10">
                                      <div className="w-1/2">
                                        <p className="font-semibold text-lg">
                                          Morning
                                        </p>
                                        <p
                                          contentEditable="true"
                                          suppressContentEditableWarning={true}
                                          className="mt-1 text-sm text-gray-600 hover:p-2 hover:border focus:p-2 focus:border focus:border-gray-400 outline-none rounded"
                                        >
                                          {itinerary.morning}
                                        </p>
                                      </div>
                                      <div className="w-1/2">
                                        <p className="font-semibold text-lg">
                                          Afternoon
                                        </p>
                                        <p
                                          contentEditable="true"
                                          suppressContentEditableWarning={true}
                                          className="mt-1 text-sm text-gray-600 hover:p-2 hover:border focus:p-2 focus:border focus:border-gray-400 outline-none rounded"
                                        >
                                          {itinerary.afternoon}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-4 mb-6 flex gap-10">
                                      <div className="w-1/2">
                                        <p className="font-semibold text-lg">
                                          Evening
                                        </p>
                                        <p
                                          contentEditable="true"
                                          suppressContentEditableWarning={true}
                                          className="mt-1 text-sm text-gray-600 hover:p-2 hover:border focus:p-2 focus:border focus:border-gray-400 outline-none rounded"
                                        >
                                          {itinerary.evening}
                                        </p>
                                      </div>
                                      <div className="w-1/2">
                                        <p className="font-semibold text-lg">
                                          Night
                                        </p>
                                        <p
                                          contentEditable="true"
                                          suppressContentEditableWarning={true}
                                          className="mt-1 text-sm text-gray-600 hover:p-2 hover:border focus:p-2 focus:border focus:border-gray-400 outline-none rounded"
                                        >
                                          {itinerary.night}
                                        </p>
                                      </div>
                                    </div>
                                  </Fragment>
                                );
                              }
                            )}
                          </div>
                          <div className="mx-10">
                            <h6 className="mt-10 mb-6 font-bold text-2xl">
                              Weather
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {destinationWeather[index].forecasts.map(
                                (forecast, index) => {
                                  return (
                                    <div
                                      className="w-full p-4 text-sm border bg-white/80 backdrop-blur-md shadow flex rounded-lg gap-4"
                                      key={index}
                                    >
                                      <div>
                                        {forecast.text === "Sunny" && (
                                          <img
                                            className="w-16"
                                            src={SUNNY}
                                            alt={forecast.text}
                                          />
                                        )}
                                        {forecast.text === "Showers" && (
                                          <img
                                            className="w-16"
                                            src={SHOWERS}
                                            alt={forecast.text}
                                          />
                                        )}
                                        {forecast.text === "Partly Cloudy" && (
                                          <img
                                            className="w-16"
                                            src={PARTLY_CLOUDY}
                                            alt={forecast.text}
                                          />
                                        )}
                                        {forecast.text === "Mostly Cloudy" && (
                                          <img
                                            className="w-16"
                                            src={CLOUDY}
                                            alt={forecast.text}
                                          />
                                        )}
                                        {forecast.text === "Haze" && (
                                          <img
                                            className="w-12"
                                            src={HAZE}
                                            alt={forecast.text}
                                          />
                                        )}
                                        {forecast.text === "Rain" && (
                                          <img
                                            className="w-12"
                                            src={RAIN}
                                            alt={forecast.text}
                                          />
                                        )}
                                        {forecast.text === "Storm" && (
                                          <img
                                            className="w-12"
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
                                              className="w-12"
                                              src={WIND}
                                              alt={forecast.text}
                                            />
                                          )}
                                      </div>
                                      <div>
                                        <h6 className="font-semibold text-gray-400">
                                          {forecast.day}
                                        </h6>
                                        <h6 className="font-semibold">
                                          {forecast.text}
                                        </h6>
                                        <p className="mt-1 text-gray-600 text-sm">
                                          {parseFloat(
                                            (
                                              ((forecast.high - 32) * 5) /
                                              9
                                            ).toFixed(1)
                                          )}
                                          &deg; C &nbsp; | &nbsp;
                                          {parseFloat(
                                            (
                                              ((forecast.low - 32) * 5) /
                                              9
                                            ).toFixed(1)
                                          )}
                                          &deg; C
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="w-3/12">
                          <div className="grid grid-cols-1 gap-4">
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[4].src.medium
                              }
                              alt={destinationsImages[index].photos[4].alt}
                            />
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[5].src.medium
                              }
                              alt={destinationsImages[index].photos[5].alt}
                            />
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[6].src.medium
                              }
                              alt={destinationsImages[index].photos[6].alt}
                            />
                            <img
                              className="rounded"
                              src={
                                destinationsImages[index].photos[7].src.medium
                              }
                              alt={destinationsImages[index].photos[7].alt}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </Fragment>
          )}
        </div>
      )}
      {/* {!isLoading && (
        <div
          ref={htmlBody}
          id="displayBody"
          className="my-10 2xl:px-20 flex gap-x-10"
        >
          <div className="w-1/2 logos">
            {destinationsImages.length > 0 && (
              <Fragment>
                {destinationsImages.map((destinationImages, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex my-4 logos-slide ${
                        index % 2 === 0
                          ? "logos-animate-left"
                          : "logos-animate-right"
                      } gap-x-4`}
                    >
                      {destinationImages.photos.map((photo, photoIndex) => {
                        return (
                          <img
                            key={photoIndex}
                            className="w-96 h-80 rounded-xl"
                            src={photo.src.medium}
                            alt={photo.alt}
                          />
                        );
                      })}
                      {destinationImages.photos.map((photo, photoIndex) => {
                        return (
                          <img
                            key={photoIndex}
                            className="w-96 h-80 rounded-xl"
                            src={photo.src.medium}
                            alt={photo.alt}
                          />
                        );
                      })}
                      {destinationImages.photos.map((photo, photoIndex) => {
                        return (
                          <img
                            key={photoIndex}
                            className="w-96 h-80 rounded-xl"
                            src={photo.src.medium}
                            alt={photo.alt}
                          />
                        );
                      })}
                      {destinationImages.photos.map((photo, photoIndex) => {
                        return (
                          <img
                            key={photoIndex}
                            className="w-96 h-80 rounded-xl"
                            src={photo.src.medium}
                            alt={photo.alt}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </Fragment>
            )}
          </div>
          {destinationsDetails.length > 0 && (
            <div className="mx-auto w-8/12">
              <div className="space-y-4">
                {destinationsDetails.map((destinationDetails, index) => {
                  return (
                    <div key={index} className="p-4 border shadow rounded-lg">
                      <h2 className="font-semibold text-2xl">
                        {destinationDetails.introduction}
                      </h2>

                      {destinationDetails.itinerary.map(
                        (itinerary, indexItinerary) => {
                          return (
                            <div
                              key={indexItinerary}
                              className="my-4 p-4 flex justify-between border gap-x-4 rounded-lg"
                            >
                              <h4 className="w-1/4 text-2xl">
                                Day {itinerary.Day}
                              </h4>
                              <div className="w-3/4">
                                <p className="font-semibold text-lg">Morning</p>
                                <p className="mt-1 text-gray-600">
                                  {itinerary.morning}
                                </p>
                                <hr className="my-6 border-gray-200" />
                                <p className="font-semibold text-lg">
                                  Afternoon
                                </p>
                                <p className="mt-1 text-gray-600">
                                  {itinerary.morning}
                                </p>
                                <hr className="my-6 border-gray-200" />
                                <p className="font-semibold text-lg">Evening</p>
                                <p className="mt-1 text-gray-600">
                                  {itinerary.evening}
                                </p>
                                <hr className="my-6 border-gray-200" />
                                <p className="font-semibold text-lg">Night</p>
                                <p className="mt-1 text-gray-600">
                                  {itinerary.night}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )} */}

      <div className="my-20 max-w-7xl mx-auto">
        <h4 className="font-bold text-3xl">
          Convenience at your fingertips with{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://www.tbo.com/"
          >
            TBO.com
          </a>
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
    </Fragment>
  );
}
