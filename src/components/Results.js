import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Results.css'
import Rating from './Rating';
export default function Results({ results }) {
    const navigate = useNavigate()
    const handleClick = (id, url) => {
        navigate(`/${url}/${id}`);
    };

    const cards = results.map(item => {
        // distinguishing between tv and movie as there is no cinema-type key in object ;) 
        const isMovie = 'original_title' in item && 'release_date' in item;
        const url = isMovie ? "movie" : "tv";
        const date = isMovie ? item.release_date : item.first_air_date;
        const title = isMovie ? item.original_title : item.original_name;
        if (!item.poster_path) {
            return null // Skip rendering if poster_path is not present
        }
        return (
            <div className="card2" key={item.id} onClick={() => handleClick(item.id, url)}>
                <div className="card-image">
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.id} height={225} />
                </div>
                <div className="card-text">
                    <div className="headings">
                        <div className="head">
                            <h4>{title}</h4>
                            <h5>{date}</h5>
                        </div>
                        <Rating popularity={item.popularity} />
                    </div>
                    <div className="bio">
                        {item.overview ? item.overview : "No data available"}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {cards}
        </>
    )
}
