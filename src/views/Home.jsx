import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TripDetailsContext } from "@contexts/TripDetailsContext.js";

import { cohereResponse, cohereResponseCities } from "../samples/sampleData.js";
import { Api } from "@api/Api.js";
import { ApiTBO } from "@api/ApiTBO.js";
import BACKGROUND_VIDEO from "@assets/video.mp4";

export default function Home() {
  const navigate = useNavigate();

  const {
    userDestinationQuery,
    userSelectedDestinations,
    setUserDestinationQuery,
    setUserSelectedDestinations,
  } = useContext(TripDetailsContext);

  const [famousDestinations, setFamousDestinations] = useState(null);
  const [userQuery, setUserQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [viewStep, setViewStep] = useState(0);

  const searchPlace = async () => {
    if (
      userDestinationQuery === "" ||
      userDestinationQuery === "undefined" ||
      userDestinationQuery === null
    ) {
      return;
    }

    setUserSelectedDestinations([]);
    setIsLoading(true);

    let data = {};

    if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
      const payload = {
        parameters: {
          travel_destination: userDestinationQuery,
        },
      };

      do {
        data = null;
        await Api.post("/list_famous_destinations", payload)
          .then((res) => {
            data = res.data.city;
            setUserQuery(userDestinationQuery);
            setFamousDestinations(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });

        if (typeof data === "object") {
          setViewStep(1);
          setIsLoading(false);
        }
      } while (typeof data === "string");

      return;
    }

    setTimeout(() => {
      setViewStep(1);
      setUserQuery(userDestinationQuery);
      setFamousDestinations(cohereResponseCities);
      setIsLoading(false);
    }, 3000);
  };

  const toggleSelectCity = (event, cityName) => {
    if (userSelectedDestinations) {
      if (userSelectedDestinations.includes(cityName)) {
        setUserSelectedDestinations(
          userSelectedDestinations.filter((c) => c !== cityName)
        );
      } else {
        setUserSelectedDestinations([...userSelectedDestinations, cityName]);
      }
    } else {
      setUserSelectedDestinations([cityName]);
    }
    console.log("User Selected Destination:", userSelectedDestinations);
  };

  const planItinerary = () => {
    navigate("/home-plan-trips");
  };

  return (
    <Fragment>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          autoPlay
          loop
          muted
        >
          <source src={BACKGROUND_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-20 bg-black bg-opacity-50 h-screen min-h-full w-full"></div>

        {viewStep === 0 && (
          <div className="relative w-full max-w-md ml-10 text-2xl text-white bg-opacity-80 rounded-xl z-30">
            <h1 className="font-bold text-5xl text-center">
              {import.meta.env.VITE_APP_NAME}
            </h1>

            <p className="mt-2 font-light text-center text-base">
              Your personal AI globe guide
            </p>

            <div className="mt-8 py-1 px-1.5 bg-white/10 backdrop-blur-md flex border border-white/60 hover:border-white focus-within:border-white rounded-full gap-2 duration-200">
              <input
                type="text"
                className="w-full pl-3 text-yellow-100 text-xl bg-transparent outline-none rounded-full"
                placeholder="Where you want to go?"
                onChange={(event) =>
                  setUserDestinationQuery(event.target.value)
                }
                value={userDestinationQuery}
                onKeyDown={(event) => {
                  if (event.key === "Enter") searchPlace();
                }}
                disabled={isLoading}
              />
              {isLoading ? (
                <div className="p-2 rounded-full">
                  <i className="fa-solid fa-circle-notch fa-spin fa-fw"></i>
                </div>
              ) : (
                <button
                  className="p-2 bg-green-600 hover:bg-green-500 rounded-full duration-200"
                  onClick={searchPlace}
                >
                  <i className="fa-solid fa-paper-plane fa-fw"></i>
                </button>
              )}
            </div>

            <div className="mt-8 flex justify-center gap-x-6">
              <Link
                to="/about"
                className="text-base text-white/80 hover:text-white hover:underline rounded"
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
                className="text-base text-white/80 hover:text-white hover:underline rounded"
              >
                destination search
              </Link>
              <Link
                to="/plan-trip"
                className="text-base text-white/80 hover:text-white hover:underline rounded"
              >
                plan a trip
              </Link>
            </div>
          </div>
        )}

        {viewStep === 1 && (
          <div className="relative w-full max-w-7xl ml-10 text-2xl text-white bg-opacity-80 rounded-xl z-30">
            <h1 className="font-bold text-5xl">
              {import.meta.env.VITE_APP_NAME}
            </h1>
            <p className="mt-2 font-light text-base">
              Your personal AI globe guide
            </p>

            <div className="mt-8 flex gap-8">
              <div className="w-2/6">
                <div className="sticky">
                  <div className="py-1 px-1.5 bg-white/10 backdrop-blur-md flex border border-white/60 hover:border-white focus-within:border-white rounded-full gap-2 duration-200">
                    <input
                      type="text"
                      className="w-full pl-3 text-yellow-100 text-xl bg-transparent outline-none rounded-full"
                      placeholder="Where you want to go?"
                      onChange={(event) =>
                        setUserDestinationQuery(event.target.value)
                      }
                      value={userDestinationQuery}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") searchPlace();
                      }}
                      disabled={isLoading}
                    />
                    {isLoading ? (
                      <div className="p-2 rounded-full">
                        <i className="fa-solid fa-circle-notch fa-spin fa-fw"></i>
                      </div>
                    ) : (
                      <button
                        className="p-2 bg-green-600 hover:bg-green-500 rounded-full duration-200"
                        onClick={searchPlace}
                      >
                        <i className="fa-solid fa-paper-plane fa-fw"></i>
                      </button>
                    )}
                  </div>
                  <div className="mt-4 ml-4 flex justify-between items-center gap-x-4">
                    <p className="font-light text-xl">
                      You searched for <br />{" "}
                      <strong className="font-semibold">"{userQuery}"</strong>
                    </p>
                    <button
                      className="pt-1 pb-0.5 px-2 bg-white/20 hover:bg-white/40 rounded-full"
                      onClick={() => {
                        setUserDestinationQuery('');
                        setViewStep(0);
                      }}
                    >
                      <i className="fa-solid fa-times fa-fw fa-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-4/6">
                <div className="pl-8 border-l border-l-white/20">
                  <h2 className="font-normal text-2xl">Select Cities</h2>
                  <p className="font-light text-4xl">you wanna visit</p>
                  {famousDestinations && (
                    <div className="h-96 mt-6 grid grid-cols-3 gap-4 overflow-y-auto">
                      {famousDestinations.map((famousDestination, index) => {
                        return (
                          <div
                            className="px-4 py-3 backdrop-blur-sm border border-white/40 bg-white/20 hover:bg-white/40 flex items-center justify-between cursor-pointer rounded-md duration-200 gap-x-4"
                            key={index}
                            onClick={(event) =>
                              toggleSelectCity(event, famousDestination)
                            }
                          >
                            <h6 className="text-base">{famousDestination}</h6>
                            <div>
                              {userSelectedDestinations.includes(
                                famousDestination
                              ) ? (
                                <i className="fa-solid fa-check-circle fa-fw"></i>
                              ) : (
                                <i className="fa-solid fa-check-circle fa-fw opacity-20"></i>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <hr className="mt-6 mb-4 border-white/20" />

                  <div className="mb-4 flex justify-between gap-x-6">
                    <p className="w-4/6 text-base">
                      You need to select atleast one city. Those itineraries
                      will be prepared based on the cities that you selected.
                    </p>
                    <button
                      className="w-2/6 px-4 py-3 text-base bg-green-700/70 hover:bg-green-700 disabled:bg-gray-700/70 disabled:cursor-not-allowed rounded duration-200 group"
                      disabled={!userSelectedDestinations.length}
                      onClick={planItinerary}
                    >
                      <span>Prepare my itinerary</span>
                      <i className="fa-solid fa-arrow-right fa-fw ml-2 group-hover:pl-2 duration-200"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-x-6">
              <Link
                to="/about"
                className="text-base text-white/60 hover:text-white hover:underline rounded"
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
                className="text-base text-white/60 hover:text-white hover:underline rounded"
              >
                destination search
              </Link>
              <Link
                to="/plan-trip"
                className="text-base text-white/60 hover:text-white hover:underline rounded"
              >
                plan a trip
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
