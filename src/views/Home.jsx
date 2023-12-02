import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TripDetailsContext } from "@contexts/TripDetailsContext.js";

import { cohereResponse } from "../samples/sampleData.js";
import { Api } from "@api/Api.js";

export default function Home() {

  const navigate = useNavigate();

  const { destination, setDestination, setDestinationDetails } =
    useContext(TripDetailsContext);

  const [isLoading, setIsLoading] = useState(false);

  const searchPlace = async () => {
    if (
      destination === "" ||
      destination === "undefined" ||
      destination === null
    ) {
      return;
    }

    setIsLoading(true);

    let data = {};

    if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
      const payload = {
        parameters: {
          destination: destination,
        },
      };

      do {
        data = {};
        await Api.post("/travel_planner", payload)
          .then((res) => {
            data = res.data;
            setDestinationDetails(data);
          })
          .catch((error) => {
            console.log(error);
          });

        if (typeof data === "object") {
          setIsLoading(false);
          navigate("/destination-details");
        }
      } while (typeof data === "string");

      return;
    }

    setTimeout(() => {
      setDestinationDetails(cohereResponse);
      setIsLoading(false);
      navigate("/destination-details");
    }, 3000);
  };

  return (
    <Fragment>
      <p className="mt-2 font-light text-center text-base">
        Your personal AI globe guide
      </p>
      <div className="mt-8 py-1 px-1.5 bg-white/10 backdrop-blur-md flex border border-white/60 hover:border-white focus-within:border-white rounded-full gap-2 duration-200">
        <input
          type="text"
          className="w-full pl-3 text-yellow-100 text-xl bg-transparent outline-none rounded-full"
          placeholder="Where you want to go?"
          onChange={(event) => setDestination(event.target.value)}
          value={destination}
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
          to="/plan-trip"
          className="text-base text-white/80 hover:text-white hover:underline rounded"
        >
          plan a trip
        </Link>
      </div>
    </Fragment>
  );
}
