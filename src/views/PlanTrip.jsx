import { Link, useNavigate } from "react-router-dom";
import { Fragment, useContext, useState } from "react";

import { TripDetailsContext } from "@contexts/TripDetailsContext.js";

import { Api } from "@api/Api.js";
import RandomTextLoading from "./RandomTextLoading";

export default function PlanTrip() {
  const navigate = useNavigate();

  const { destination, setDestination, setTripDetails } =
    useContext(TripDetailsContext);

  const [source, setSource] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Rearranges the date from YYYY-MM-DD to DD-MM-YYYY in string format only
  const rearrangeDate = (dateString) => {
    let date = dateString.split("-");
    return date[2] + "-" + date[1] + "-" + date[0];
  };

  const generateTripPlan = async () => {
    setIsLoading(true);

    let startingDate = rearrangeDate(startDate);
    let endingDate = rearrangeDate(endDate);

    const payload = {
      parameters: {
        source: source,
        destination: destination,
        start_date: startingDate,
        end_date: endingDate,
      },
    };

    let data = {};

    console.log("Type of Data:", typeof data);

    do {
      data = {};
      await Api.post("/travel_planner", payload)
        .then((res) => {
          data = res.data;
          setTripDetails(data);
        })
        .catch((error) => {
          console.log(error);
        });

      if (typeof data === "object") {
        setIsLoading(false);
        navigate("/trip-details");
      }
    } while (typeof data === "string");
  };

  return (
    <Fragment>
      <p className="mt-4 font-light text-center text-base">
        Plan your trip with AI assisted guide to give you an unforgettable
        experience with your friends and family
      </p>
      <div className="mt-8 flex flex-col">
        <div className="flex gap-4">
          <input
            type="text"
            id="source"
            className="w-1/2 py-2 px-4 text-yellow-100 text-xl bg-white/10 border border-white/60 hover:border-white focus-within:border-white backdrop-blur-md outline-none rounded-full duration-200"
            placeholder="From where?"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            disabled={isLoading}
          />
          <input
            type="text"
            id="destination"
            className="w-1/2 py-2 px-4 text-yellow-100 text-xl bg-white/10 border border-white/60 hover:border-white focus-within:border-white backdrop-blur-md outline-none rounded-full duration-200"
            placeholder="To where?"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* <div className="mt-4 flex gap-4">
          <input
            type="number"
            id="headcount"
            className="w-1/2 py-1.5 px-4 text-yellow-100 text-lg bg-white/10 border border-white/60 hover:border-white focus-within:border-white backdrop-blur-md outline-none rounded-full duration-200"
            placeholder="Headcount"
          />
          <input
            type="number"
            id="budget"
            className="w-1/2 py-1.5 px-4 text-yellow-100 text-lg bg-white/10 border border-white/60 hover:border-white focus-within:border-white backdrop-blur-md outline-none rounded-full duration-200"
            placeholder="Budget"
            disabled={isLoading}
          />
        </div> */}

        <hr className="mt-5 mb-3 border-white/20" />

        <div className="flex gap-x-4">
          <div className="w-1/2 flex flex-col">
            <label className="ml-2 text-base" htmlFor="start_date">
              Start date
            </label>
            <input
              type="date"
              id="start_date"
              className="mt-2 py-1.5 px-2 text-yellow-100 text-lg bg-white/10 border border-white/60 hover:border-white focus-within:border-white backdrop-blur-md outline-none rounded-full duration-200"
              placeholder="Start date"
              onChange={(event) => setStartDate(event.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label className="ml-2 text-base" htmlFor="end_date">
              End date
            </label>
            <input
              type="date"
              id="end_date"
              className="mt-2 py-1.5 px-2 text-yellow-100 text-lg bg-white/10 border border-white/60 hover:border-white focus-within:border-white backdrop-blur-md outline-none rounded-full duration-200"
              placeholder="End date"
              onChange={(event) => setStartDate(event.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            className="w-full font-semibold py-4 text-lg bg-green-600 hover:bg-green-500 rounded-full shadow-xl shadow-black/20 hover:shadow-black/40 disabled:bg-gray-500 duration-200"
            disabled={isLoading}
            onClick={generateTripPlan}
          >
            {!isLoading ? (
              <Fragment>
                <i className="fa-solid fa-wand-magic-sparkles fa-fw"></i>{" "}
                Generate Trip Plan
              </Fragment>
            ) : (
                <RandomTextLoading />
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-x-6">
        <Link
          to="/about"
          className="text-base text-white/80 hover:text-white hover:underline rounded"
        >
          about us
        </Link>
        <Link
          to="/"
          className="text-base text-white/80 hover:text-white hover:underline rounded"
        >
          destinations
        </Link>
      </div>
    </Fragment>
  );
}
