import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "@views/Home.jsx";
import DestinationSearch from "@views/DestinationSearch.jsx";
import About from "@views/About.jsx";
import PlanTrip from "@views/PlanTrip.jsx";
import TripDetails from "@views/TripDetails.jsx";
import DestinationDetails from "@views/DestinationDetails.jsx";
import Error404 from "@views/Error404.jsx";

import GuestLayout from "@layouts/GuestLayout.jsx";
import FormLayout from "@layouts/FormLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    name: "GuestLayout",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        name: "Home",
        element: <Home />,
      },
      {
        path: "/",
        name: "FormLayout",
        element: <FormLayout />,
        children: [
          {
            path: "/destination-search",
            name: "Home",
            element: <DestinationSearch />,
          },
          {
            path: "/plan-trip",
            name: "PlanTrip",
            element: <PlanTrip />,
          },
        ],
      },
      {
        path: "/trip-details",
        name: "TripDetails",
        element: <TripDetails />,
      },
      {
        path: "/destination-details",
        name: "DestinationDetails",
        element: <DestinationDetails />,
      },
      {
        path: "/about",
        name: "About",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/products/:id",
  //   name: "Product",
  //   element: <Product />
  // }
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
