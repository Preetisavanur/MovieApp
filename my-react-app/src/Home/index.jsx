import React from "react";
import { useNavigate } from "react-router-dom";
import useMovieFetch from "../Hooks/useMovieFetch";
import './index.css';

const Index = ({ url }) => {
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
                    onClick={() => navigate(`/movie/${item.id}`)}  // ✅ navigate works now
                    key={item.id}
                    height="300px"
                    width="250px"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title}
                />
            ))}
        </div>
    );
};

export default Index;
