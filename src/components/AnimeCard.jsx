import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="flex items-start border border-gray-400 rounded-md p-4 mb-4">
      <div className="flex flex-row">
        <div className="mr-4">
          <img
            src={anime.image}
            alt="anime-image"
            className="h-96 w-80 object-cover bg-center rounded-md"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
          <div className="flex gap-3 ">
            <div className="mb-2">
              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                <svg
                  className="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                <span>Start Date {anime.startDate}</span>
              </span>
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                <svg
                  className="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                <span>Updated Date {anime.updatedDate}</span>
              </span>
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                <svg
                  className="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                <span>
                  Status{" "}
                  <span className="font-bold text-green-500">
                    {anime.status}
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mb-2">
              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                <svg
                  className="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                <span>
                  Episodes{" "}
                  <span className="font-bold">{anime.episodeCount}</span>
                </span>
              </span>
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                <svg
                  className="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                <span>
                  Episode Length{" "}
                  <span className="text-bold">{anime.episodeLength}</span>
                </span>
              </span>
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                <svg
                  className="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                <span>
                  Total Length{" "}
                  <span className="text-bold ">{anime.totalLength}</span>
                </span>
              </span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4 mb-4">
            <span className="font-bold">Synopsis:</span>{" "}
            <p className="text-gray-700">{anime.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
