import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TripDetailsContext } from '@contexts/TripDetailsContext.js';

export default function GuestLayout() {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [destination, setDestination] = useState('');
  const [userDestinationQuery, setUserDestinationQuery] = useState('');
  const [userSelectedDestinations, setUserSelectedDestinations] = useState([]);
  const [userSelectedDestinationsDetails, setUserSelectedDestinationsDetails] = useState(null);
  const [tripDetails, setTripDetails] = useState({});
  const [destinationDetails, setDestinationDetails] = useState({});

  return (
    <TripDetailsContext.Provider
      value={{
        country,
        city,
        hotel,
        destination,
        tripDetails,
        destinationDetails,
        userDestinationQuery,
        userSelectedDestinations,
        userSelectedDestinationsDetails,
        setCountry,
        setCity,
        setHotel,
        setDestination,
        setTripDetails,
        setDestinationDetails,
        setUserDestinationQuery,
        setUserSelectedDestinations,
        setUserSelectedDestinationsDetails,
      }}
    >
      <Outlet />
    </TripDetailsContext.Provider>
  );
}
