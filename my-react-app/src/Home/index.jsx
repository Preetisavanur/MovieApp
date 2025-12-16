import React from "react";
import { useNavigate } from "react-router-dom";
import useMovieFetch from "../Hooks/useMovieFetch";
import "./index.css";

const index = ({ url, title }) => {
  const navigate = useNavigate();
  const { data, loading } = useMovieFetch({ url });

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="card">
      {data.map((item) => (
        <img
          key={item.id}
          height="300px"
          width="250px"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt={item.title || item.name}
          onClick={() => navigate(`/movie/${item.id}`)}
        />
      ))}
    </div>
  );
};

export default index;
