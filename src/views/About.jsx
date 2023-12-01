import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h1 className="font-bold text-4xl">About us</h1>
      <p className="mt-8 text-lg text-gray-700">
        We understand how stressful a travel planning is. One need to research,
        check out places to stay and find attractions.
      </p>

      <p className="mt-6 text-lg text-gray-700">
        <strong>{import.meta.env.VITE_APP_NAME}</strong>, your own personal AI
        travel planner is changing the way of stressful travel planning into
        joy. Discover the future of travel.
      </p>
      <p className="mt-6 text-lg text-gray-700">
        Let's hop around the globe with{" "}
        <strong>{import.meta.env.VITE_APP_NAME}</strong>!
      </p>

      <div className="mt-16 ">
      <Link
        className="pl-3 pr-5 py-3 text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-md"
        to="/"
      >
        <i className="fa-solid fa-arrow-left fa-fw"></i> back to home
      </Link>
      </div>
    </div>
  );
}
