import React from "react";
import useMovieFetch from "../../Hooks/useMovieFetch"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './index.css';

const index = ({ url }) => {
    const { data } = useMovieFetch({ Url: url }); 

    return (
        <div>
            <Carousel
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                >
                {data.map((item, index) => {
                    return (
                        <div className='header' style={{ height: "500px" }}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
                            <p className='legend'>
                                <h1>{item.title}</h1>
                                {item.overview} 
                            </p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default index