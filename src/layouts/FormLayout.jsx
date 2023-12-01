import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import BACKGROUND_VIDEO from "@assets/video.mp4";

export default function GuestLayout(props) {
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
        <div className="relative w-full max-w-md ml-10 text-2xl text-white bg-opacity-80 rounded-xl z-30">
          <h1 className="font-bold text-5xl text-center">
            {import.meta.env.VITE_APP_NAME}
          </h1>

          <Outlet />

        </div>
      </div>
    </Fragment>
  );
}
