import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TripDetailsContext } from '@contexts/TripDetailsContext.js';

export default function GuestLayout() {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [destination, setDestination] = useState('');
  const [tripDetails, setTripDetails] = useState({});
  const [destinationDetails, setDestinationDetails] = useState({});

  return (
    <TripDetailsContext.Provider value={{ country, city, hotel, destination, tripDetails, destinationDetails, setCountry, setCity, setHotel, setDestination, setTripDetails, setDestinationDetails }}>
      <Outlet />
    </TripDetailsContext.Provider>
  );
}
