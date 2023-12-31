import { Fragment, useContext, useEffect, useState } from "react";
import { TripDetailsContext } from "@contexts/TripDetailsContext.js";
import {
  cohereResponseItineraryImages,
  cohereResponseItinerary,
} from "../samples/sampleData.js";
import { Link } from "react-router-dom";
import { Api } from "@api/Api.js";

export default function HomePlanTrip() {
  const { userSelectedDestinations, setUserSelectedDestinations } =
    useContext(TripDetailsContext);

  const [destinationsImages, setDestinationsImages] = useState([]);
  const [destinationsDetails, setDestinationsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initLoad();
    console.log("Home trip user selected destinations:", userSelectedDestinations);
  }, []);

  const initLoad = async () => {
    setIsLoading(true);

    console.log(
      "Before setting states:",
      cohereResponseItinerary,
      cohereResponseItineraryImages
    );

    setDestinationsDetails([]);
    setDestinationsImages([]);

    let thisDestinationsDetails = [];
    let thisDestinationsDetailsImages = [];

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

      setIsLoading(false);
    } else {
      for (let i = 0; i < cohereResponseItinerary.length; i++) {
        thisDestinationsDetails.push(cohereResponseItinerary[i]);
        thisDestinationsDetailsImages.push(cohereResponseItineraryImages[i]);

        // console.log("Length in i:", i);
        // console.log("Destinations Details:", cohereResponseItinerary[i]);
        // console.log("Destinations Images:", cohereResponseItineraryImages[i]);
      }

      setDestinationsDetails(thisDestinationsDetails);
      setDestinationsImages(thisDestinationsDetailsImages);

      console.log("Destinations Details:", destinationsDetails);
      console.log("Destinations Images:", destinationsImages);

      console.log(
        "After setting states:",
        destinationsDetails,
        destinationsImages
      );

      setIsLoading(false);
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

      {!isLoading && (
        <div className="my-10 2xl:px-20">
          <h1>Loading Itineraries...</h1>
        </div>
      )}
      {isLoading && (
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
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
