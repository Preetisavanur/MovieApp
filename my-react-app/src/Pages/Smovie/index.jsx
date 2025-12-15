import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import useMovieFetch from "../../Hooks/useMovieFetch";
import { request } from "../../Request";
import './index.css';
import { axiosCreate } from "../../axios";
import { Button } from "../../Components/Button";
import Modal from "../../Components/Modal";
import Youtube from "react-youtube";

const Smovie = () => {
    const {id} = useParams();
    const {data: movie} = useMovieFetch({url: request.specificMovie(id)});
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        fetchCast();
    }, [id]);

    async function fetchCast() {
        const results = await axiosCreate.get(request.specificCast(id), {
            params: { api_key: '9d38b17f3deabed19968463267264754' }
        });
        setCast(results.data.cast || []);  // ✅ set cast properly
    }

    async function fetchTrailer() {
        const results = await axiosCreate.get(request.specificTrailer(id), {
            params: { api_key: '9d38b17f3deabed19968463267264754' }
        });

        if (results.data.results.length > 0) {
            setTrailer(results.data.results[0].key); // ✅ YouTube key
        } else {
            alert("Trailer not available");
        }
    }

    const handleTrailer = () => {
        fetchTrailer();
    }

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="sMovie-main-container">
            <div className="Smovie">
                <div className="smovie-left">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                </div>
                <div className="smovie-right">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                    <Button onClick={handleTrailer}>Play Trailer</Button>
                </div>
            </div>

            <div className="cast-container">
                {cast.slice(0,9).map((item,index) => (
                    <img key={index} height='100px' width='100px' src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name} />
                ))}
            </div>

            <Modal isOpen={trailer !== null} onClose={() => setTrailer(null)} title="Trailer">
                {trailer && <Youtube height='390' width='640' videoId={trailer} />}
            </Modal>
        </div>
    );
}

export default Smovie;
