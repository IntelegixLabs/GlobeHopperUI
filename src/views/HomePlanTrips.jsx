import { Fragment, useContext, useEffect, useState } from "react";
import { TripDetailsContext } from "@contexts/TripDetailsContext.js";
import {
  cohereResponseItineraryImages,
  cohereResponseItinerary,
} from "../samples/sampleData.js";
import { Link } from "react-router-dom";

export default function HomePlanTrip() {
  const {
    userSelectedDestinations,
    setUserSelectedDestinations,
  } = useContext(TripDetailsContext);

  const [destinationsImages, setDestinationsImages] = useState([]);
  const [destinationsDetails, setDestinationsDetails] = useState([]);

  useEffect(() => {
    initLoad();
  }, []);

  const initLoad = async () => {
    let payload = {};
    let imagePayload = {};

    setDestinationsDetails([]);

    if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
      for (let i = 0; i < userSelectedDestinations.length; i++) {
        payload = {
          parameters: {
            destination: destinationsDetails[i],
          },
        };

        imagePayload = {
          parameters: {
            location: destinationsDetails[i],
            query_count: "10",
          },
        };
        await Api.post("/travel_planner", payload)
          .then((res) => {
            setDestinationsDetails([...destinationsDetails, res.data]);
          })
          .catch((error) => {
            console.log(error);
          });

        await Api.post("/images", imagePayload)
          .then((res) => {
            setDestinationsImages([...destinationsImages, res.data]);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      return;
    } else {
      setDestinationsDetails(cohereResponseItinerary);
      setDestinationsImages(cohereResponseItineraryImages);

      console.log(destinationsDetails);
    }
  };

  return (
    <Fragment>
      <div className="mt-4 mb-10 2xl:px-20 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-5xl">
            {import.meta.env.VITE_APP_NAME}
          </h1>
          <p className="ml-2 mt-2 font-light text-base">
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

      <div className="my-10 2xl:px-20">
        <h2 className="font-normal text-3xl">
          Here is your itinerary prepared
        </h2>
        <p className="mt-1 font-light text-5xl">
          based on your selected cities
        </p>
      </div>
      <div className="my-10 2xl:px-20 flex gap-x-10">
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
                          className="w-80 h-40 rounded-xl"
                          src={photo.src.medium}
                          alt={photo.alt}
                        />
                      );
                    })}
                    {destinationImages.photos.map((photo, photoIndex) => {
                      return (
                        <img
                          key={photoIndex}
                          className="w-80 h-40 rounded-xl"
                          src={photo.src.medium}
                          alt={photo.alt}
                        />
                      );
                    })}
                    {destinationImages.photos.map((photo, photoIndex) => {
                      return (
                        <img
                          key={photoIndex}
                          className="w-80 h-40 rounded-xl"
                          src={photo.src.medium}
                          alt={photo.alt}
                        />
                      );
                    })}
                    {destinationImages.photos.map((photo, photoIndex) => {
                      return (
                        <img
                          key={photoIndex}
                          className="w-80 h-40 rounded-xl"
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
        <div className="w-1/2">
          {destinationsDetails.length > 0 && (
            <div className="space-y-4">
              {destinationsDetails.map((destinationDetails, index) => {
                return (
                <div key={index} className="p-4 border shadow rounded-lg">
                  <h2 className="font-semibold text-2xl">{destinationDetails.introduction.toLowerCase()}</h2>

                  {destinationDetails.itinerary.map((itinerary, indexItinerary) => {

                    return (
                      <div key={indexItinerary}>
                        <h4>Day {itinerary.Day}</h4>
                      </div>
                    )
                  })}
                </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
