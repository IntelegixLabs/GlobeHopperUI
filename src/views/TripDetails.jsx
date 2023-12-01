import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TripDetailsContext } from "@contexts/TripDetailsContext.js";
import { Api } from "@api/Api.js";

import { sampleWeatherData } from "../samples/sampleData.js";
import { samplePhotosData } from "../samples/sampleData.js";

export default function PlanTripDetails() {
  const { tripDetails, destination } = useContext(TripDetailsContext);

  const [Photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    /*
    | - Use it for live in
    | - Note: API limits will exhaust
    | =====================================
    */
    // const payload = {
    //   parameters: {
    //     location: destination,
    //     query_count: 6,
    //   },
    // };

    // await Api.post('/images', payload).then(res => {
    //   setPhotos(res.data);
    // });

    // =======================================

    /* Use it for testing with sample
    | static in order to avoid
    | getting API limits exhausted
    | =========================================
    */
    await setPhotos(samplePhotosData.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, [Photos]);

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

      <div className="mt-10 mb-10 max-w-7xl mx-auto">
        <div className="w-full flex items-start justify-between gap-4">
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

        <div className="mt-10 flex gap-10">
          <div className="w-1/2">
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
            <div className="mt-10 grid grid-cols-2 gap-6">
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
          <div className="w-1/2">
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
