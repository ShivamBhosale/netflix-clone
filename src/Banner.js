import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    console.log(movie);
    return (
        <header>
            <div
                className="banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: 'top center',
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons_head">
                        <button className="banner__buttons">Play</button>
                        <button className="banner__buttons">My List</button>
                    </div>
                    <h1 className="banner__description">{movie?.overview}</h1>
                    
                </div>
                
                
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
}

export default Banner;
