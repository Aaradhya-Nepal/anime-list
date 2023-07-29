import { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard.jsx";

const AnimeListAndDetails = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://kitsu.io/api/edge/anime");
        const formattedData = response.data.data.map((eachData) => ({
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
        }));
        setAnimeList(formattedData);
      } catch (error) {
        console.error("Error fetching anime list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-black">
      <h2 className="text-4xl font-bold font-poppins">Anime List</h2>
      <div>
        {animeList.map((anime, index) => (
          <AnimeCard key={index} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeListAndDetails;
