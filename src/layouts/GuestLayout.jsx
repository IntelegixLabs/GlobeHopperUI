import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TripDetailsContext } from '@contexts/TripDetailsContext.js';

export default function GuestLayout() {

  const [destination, setDestination] = useState('');
  const [tripDetails, setTripDetails] = useState({});
  const [destinationDetails, setDestinationDetails] = useState({});

  return (
    <TripDetailsContext.Provider value={{ destination, tripDetails, destinationDetails, setDestination, setTripDetails, setDestinationDetails }}>
      <Outlet />
    </TripDetailsContext.Provider>
  );
}
