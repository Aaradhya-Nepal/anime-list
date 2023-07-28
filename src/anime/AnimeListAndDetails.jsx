import { useEffect, useState } from "react";
import axios from "axios";
import "./animeList.css";

const AnimeListAndDetails = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("https://kitsu.io/api/edge/anime")
          .then((response) => {
            response.data.data.map((eachData) => {
              setAnimeList((prev) => [
                ...prev,
                {
                  title: eachData.attributes.abbreviatedTitles[0] || "No-Title",
                  startDate: eachData.attributes.createdAt.split("T")[0],
                  updatedDate: eachData.attributes.updatedAt.split("T")[0],
                  synopsis: eachData.attributes.synopsis,
                  description: eachData.attributes.description,
                  status: eachData.attributes.status,
                  image: eachData.attributes.posterImage.medium,
                  episodeCount: eachData.attributes.episodeCount,
                  episodeLength: eachData.attributes.episodeLength,
                  totalLength: eachData.attributes.totalLength,
                },
              ]);
            });
          });
      } catch (error) {
        console.error("Error fetching anime list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="title">Anime List</h2>
      <ul className="card-list">
        {animeList.map((anime, index) => (
          <div className="card-container" key={index}>
            <div className="card-title">{anime.title}</div>
            <div className="image">
              <img
                src={anime.image}
                alt="anime-image"
                height={200}
                width={200}
              />
            </div>
            <div className="date">
              <span className="start-date">{anime.startDate}</span>
              <span className="updated-date">{anime.updatedDate}</span>
            </div>
            <div className="status">{anime.status}</div>
            <div className="episode-count">{anime.episodeCount}</div>
            <div className="episode-length">{anime.episodeLength}</div>
            <div className="total-length">{anime.totalLength}</div>
            <div className="synopsis">{anime.synopsis}</div>
            <div className="synopsis">{anime.description}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AnimeListAndDetails;
