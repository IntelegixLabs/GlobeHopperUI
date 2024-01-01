import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TripDetailsContext } from "@contexts/TripDetailsContext.js";

import { cohereResponse } from "../samples/sampleData.js";

import {
  TBOSampleCountryList,
  TBOSampleCityList,
  TBOSampleHotelList,
} from "../samples/sampleDataTBO.js";
import { Api } from "@api/Api.js";
import { ApiTBO } from "@api/ApiTBO.js";
import { debounce } from "lodash";
import ReadMore from "../components/ReadMore.jsx";

export default function TBO() {
  const navigate = useNavigate();

  const { country, city, hotel, setCountry, setCity, setHotel } =
    useContext(TripDetailsContext);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [isCountriesLoading, setIsCountriesLoading] = useState(true);
  const [isCitiesLoading, setIsCitiesLoading] = useState(true);
  const [isHotelsLoading, setIsHotelsLoading] = useState(true);

  // Descriptions
  const [countryDescription, setCountryDescription] = useState("");
  const [cityDescription, setCityDescription] = useState("");
  const [isCountryDescriptionLoading, setIsCountryDescriptionLoading] =
    useState(true);
  const [isCityDescriptionLoading, setIsCityDescriptionLoading] =
    useState(true);

  // City Search vars
  const [searchCityName, setSearchCityName] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  // Hotel Search vars
  const [searchHotelName, setSearchHotelName] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    if (import.meta.env.VITE_APP_ENVIRONMENT !== "production") {
      setCountries(TBOSampleCountryList.CountryList);
      setTimeout(() => {
        setIsCountriesLoading(false);
      }, 3000);
    } else {
      await ApiTBO.get("/CountryList")
        .then((response) => {
          setCountries(response.data.CountryList);
          setIsCountriesLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsCountriesLoading(false);
        });
    }
  };

  const getCities = async (event, country) => {
    setIsCountryDescriptionLoading(true);
    setCountry(country);
    setIsCitiesLoading(true);

    if (import.meta.env.VITE_APP_ENVIRONMENT !== "production") {
      setCities(TBOSampleCityList.CityList);
      setTimeout(() => {
        setIsCitiesLoading(false);
      }, 3000);
    } else {
      const payload = {
        CountryCode: country.Code,
      };

      await ApiTBO.post("/CityList", payload)
        .then((response) => {
          setCities(response.data.CityList);
          setIsCitiesLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsCitiesLoading(false);
        });

      await Api.get(`/country-info/${country.Name}`).then((res) => {
        setCountryDescription(res.data.country_summary);
        setIsCountryDescriptionLoading(false);
      });
    }
  };

  const handleCitySearch = (e) => {
    setIsCitiesLoading(true);
    setSearchCityName(e.target.value.toLowerCase());

    debouncedCitySearch(searchCityName);
  };

  const debouncedCitySearch = debounce((searchCityName) => {
    const filteredCities = cities.filter((city) =>
      city.Name.toLowerCase().includes(searchCityName)
    );

    setFilteredCities(filteredCities);
    setIsCitiesLoading(false);
  }, 2000);

  const getHotels = async (event, city) => {
    setIsCityDescriptionLoading(true);
    setCity(city);
    setIsHotelsLoading(true);

    console.log("Hotels");

    if (import.meta.env.VITE_APP_ENVIRONMENT !== "production") {
      setHotels(TBOSampleHotelList.Hotels);
      setTimeout(() => {
        setIsHotelsLoading(false);
      }, 3000);
    } else {
      const payload = {
        CityCode: city.Code,
        IsDetailedResponse: "false",
      };

      await ApiTBO.post("/TBOHotelCodeList", payload)
        .then((response) => {
          setHotels(response.data.Hotels);
          setIsHotelsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsHotelsLoading(false);
        });

      await Api.get(`/country-info/${city.Name}`).then((res) => {
        setCityDescription(res.data.country_summary);
        setIsCityDescriptionLoading(false);
      });
    }
  };

  const handleHotelSearch = (e) => {
    setIsHotelsLoading(true);
    setSearchHotelName(e.target.value.toLowerCase());

    debouncedHotelSearch(searchHotelName);
  };

  const debouncedHotelSearch = debounce((searchHotelName) => {
    const filteredHotels = hotels.filter((hotel) =>
      hotel.HotelName.toLowerCase().includes(searchHotelName)
    );

    setFilteredHotels(filteredHotels);
    setIsHotelsLoading(false);
  }, 2000);

  const resetToStep = (stepNo) => {
    if (stepNo === 0) {
      setCity(null);
      setCountry(null);

      return;
    }

    if (stepNo === 1) {
      setCity(null);

      return;
    }

    return;
  };

  return (
    <Fragment>
      <h1 className="mt-4 font-bold text-5xl text-center">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <p className="mt-2 font-light text-center text-base">
        Your personal AI globe guide
      </p>

      {!country && (
        <Fragment>
          {isCountriesLoading && (
            <div className="mt-10 max-w-7xl mx-auto">
              <h6 className="text-center">Loading Countries...</h6>
            </div>
          )}

          {!isCountriesLoading && (
            <div className="mt-10 max-w-7xl mx-auto grid grid-cols-6 gap-4">
              {countries.length && (
                <Fragment>
                  {countries.map((country, index) => {
                    return (
                      <button
                        key={index}
                        className="p-4 bg-white/40 hover:scale-110 backdrop-blur-sm border rounded-md duration-100"
                        onClick={(event) => getCities(event, country)}
                      >
                        <img
                          src={`country_flags/${country.Code.toLowerCase()}.svg`}
                        />
                        <h6 className="mt-2 text-center">{country.Name}</h6>
                      </button>
                    );
                  })}
                </Fragment>
              )}
              {!countries.length && (
                <div className="mt-10 max-w-7xl mx-auto">
                  <h6 className="text-center">No Countries Available</h6>
                  <p className="It seems like you are facing a network issues or the countries are not available."></p>
                </div>
              )}
            </div>
          )}
        </Fragment>
      )}

      {country && (
        <div className="mt-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <ol className="flex items-center w-full space-x-2 text-sm font-medium text-gray-500 bg-white rounded-lg sm:text-base sm:space-x-4">
              <li
                className={`flex items-center cursor-pointer ${
                  country ? "text-blue-600" : "text-gray-500"
                }`}
                onClick={() => resetToStep(0)}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 me-2 text-xl border ${
                    country ? "border-blue-600" : "border-gray-500"
                  } rounded-full shrink-0`}
                >
                  1
                </span>
                <div className="flex flex-col text-sm">
                  <h6>Select Country</h6>
                  <h6>{country.Name}</h6>
                </div>
                <svg
                  className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                  />
                </svg>
              </li>
              <li
                className={`flex items-center cursor-pointer ${
                  city ? "text-blue-600" : "text-gray-500"
                }`}
                onClick={() => resetToStep(1)}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 me-2 text-xl border ${
                    city ? "border-blue-600" : "border-gray-500"
                  } rounded-full shrink-0`}
                >
                  2
                </span>
                <div className="flex flex-col text-sm">
                  <h6>Select City</h6>
                  <h6>{city ? city.Name : ""}</h6>
                </div>
                <svg
                  className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                  />
                </svg>
              </li>
              <li className="flex items-center">
                <span className="flex items-center justify-center w-10 h-10 me-2 text-xl border border-gray-500 rounded-full shrink-0">
                  3
                </span>
                <div className="flex flex-col text-sm">
                  <h6>Select Hotel</h6>
                  <h6>Hotel</h6>
                </div>
              </li>
            </ol>

            {country && !city && (
              <div className="px-1 py-1 border flex items-center justify-between rounded-full">
                <input
                  type="text"
                  className="pl-3 py-1 outline-none rounded-full"
                  placeholder="Search city..."
                  maxLength={50}
                  onChange={(e) => handleCitySearch(e)}
                />
                <button className="rounded-full bg-gray-100 hover:bg-gray-200 py-1 px-1.5">
                  <i className="fa-solid fa-magnifying-glass fa-fw"></i>
                </button>
              </div>
            )}

            {country && city && (
              <div className="px-1 py-1 border flex items-center justify-between rounded-full">
                <input
                  type="text"
                  className="pl-3 py-1 outline-none rounded-full"
                  placeholder="Search hotel..."
                  maxLength={50}
                  onChange={(e) => handleHotelSearch(e)}
                />
                <button className="rounded-full bg-gray-100 hover:bg-gray-200 py-1 px-1.5">
                  <i className="fa-solid fa-magnifying-glass fa-fw"></i>
                </button>
              </div>
            )}
          </div>
          <div className="mt-4 flex gap-4">
            <div className="w-2/6 overflow-hidden overflow-y-auto">
              <div className="border-r">
                <div className="mr-4 p-4 border rounded-md">
                  <h6 className="text-gray-400 text-sm">Country</h6>
                  <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-xl">{country.Name}</h6>
                    <img
                      className="w-12 h-8"
                      src={`country_flags/${country.Code.toLowerCase()}.svg`}
                      alt="country_flag"
                    />
                  </div>
                  <p className="my-4 text-gray-400 text-sm">
                    {isCountryDescriptionLoading ? (
                      <Fragment>
                        <div className="flex gap-1">
                          <div className="h-2 w-2/5 shimmer"></div>
                          <div className="h-2 w-1/5 shimmer"></div>
                          <div className="h-2 w-2/5 shimmer"></div>
                        </div>
                        <div className="mt-2 flex gap-1">
                          <div className="h-2 w-3/6 shimmer"></div>
                          <div className="h-2 w-2/6 shimmer"></div>
                        </div>
                        <div className="mt-2 flex gap-1">
                          <div className="h-2 w-2/5 shimmer"></div>
                          <div className="h-2 w-1/5 shimmer"></div>
                          <div className="h-2 w-2/5 shimmer"></div>
                        </div>
                      </Fragment>
                    ) : (
                      <ReadMore text={countryDescription} maxLength={200} />
                    )}
                  </p>
                </div>

                {city && (
                  <div className="mt-4 mr-4 p-4 border rounded-md">
                    <h6 className="text-gray-400 text-sm">City</h6>
                    <h6 className="mt-1 font-semibold text-xl">{city.Name}</h6>
                    <p className="my-4 text-gray-400 text-sm">
                      {isCityDescriptionLoading ? (
                        <Fragment>
                          <div className="flex gap-1">
                            <div className="h-2 w-2/5 shimmer"></div>
                            <div className="h-2 w-1/5 shimmer"></div>
                            <div className="h-2 w-2/5 shimmer"></div>
                          </div>
                          <div className="mt-2 flex gap-1">
                            <div className="h-2 w-3/6 shimmer"></div>
                            <div className="h-2 w-2/6 shimmer"></div>
                          </div>
                          <div className="mt-2 flex gap-1">
                            <div className="h-2 w-2/5 shimmer"></div>
                            <div className="h-2 w-1/5 shimmer"></div>
                            <div className="h-2 w-2/5 shimmer"></div>
                          </div>
                        </Fragment>
                      ) : (
                        <ReadMore text={cityDescription} maxLength={200} />
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="w-4/6">
              {country && !city && (
                <Fragment>
                  {isCitiesLoading && (
                    <div className="mt-10 max-w-7xl mx-auto">
                      <h6 className="text-center">Loading Cities...</h6>
                    </div>
                  )}

                  {!isCitiesLoading && (
                    <div className="grid grid-cols-3 gap-4">
                      {cities.length && !searchCityName && (
                        <Fragment>
                          {cities.map((city, index) => {
                            return (
                              <button
                                key={index}
                                className="p-4 bg-white/40 backdrop-blur-sm border rounded-md"
                                onClick={(e) => getHotels(e, city)}
                              >
                                <h6 className="text-center">{city.Name}</h6>
                              </button>
                            );
                          })}
                        </Fragment>
                      )}

                      {searchCityName && (
                        <Fragment>
                          {filteredCities.map((city, index) => {
                            return (
                              <button
                                key={index}
                                className="p-4 bg-white/40 backdrop-blur-sm border rounded-md"
                                onClick={(e) => getHotels(e, city)}
                              >
                                <h6 className="text-center">{city.Name}</h6>
                              </button>
                            );
                          })}
                        </Fragment>
                      )}
                    </div>
                  )}
                </Fragment>
              )}

              {country && city && (
                <Fragment>
                  {isHotelsLoading && (
                    <div className="mt-10 max-w-7xl mx-auto">
                      <h6 className="text-center">Loading Hotels...</h6>
                    </div>
                  )}

                  {!isHotelsLoading && (
                    <div className="grid grid-cols-3 gap-4">
                      {hotels.length && !searchHotelName && (
                        <Fragment>
                          {hotels.map((hotel, index) => {
                            return (
                              <button
                                key={index}
                                className="p-4 bg-white/40 backdrop-blur-sm border rounded-md"
                                onClick={(e) => getHotels(e, hotel)}
                              >
                                <h6 className="text-center">
                                  {hotel.HotelName}
                                </h6>
                              </button>
                            );
                          })}
                        </Fragment>
                      )}

                      {searchHotelName && (
                        <Fragment>
                          {filteredHotels.map((hotel, index) => {
                            return (
                              <button
                                key={index}
                                className="p-4 bg-white/40 backdrop-blur-sm border rounded-md"
                              >
                                <h6 className="text-center">
                                  {hotel.HotelName}
                                </h6>
                              </button>
                            );
                          })}
                        </Fragment>
                      )}
                    </div>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center gap-x-6">
        <Link
          to="/about"
          className="text-base text-white/80 hover:text-white hover:underline rounded"
        >
          about us
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
    </Fragment>
  );
}
