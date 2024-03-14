import { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full top-[25%] p-4 md:p-8 max-sm:top-[35%] max-sm:p-2">
            <h1 className="text-3xl md:text-5xl font-bold my-4">
              {movie?.title}
            </h1>
            <div>
              <button className="border bg-gray-300 text-black border-grey-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-grey-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Released: {movie?.release_date}
            </p>
            <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[35%] py-2">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
