import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Results.css'
import Rating from './Rating';
import SFContext from '../contexts/SFContext';

export default function Results({ results }) {
    const navigate = useNavigate()
    const handleClick = (id, url) => {
        navigate(`/${url}/${id}`) //replace the current url with this url
    };
    const { sort, filter } = useContext(SFContext)


    //filtering logic based on filter type and filter range
    const filteredResults = [...results].filter(item=> {
    
        return item[filter.type] >= filter.limits[0] && item[filter.type] <= filter.limits[1];
    
    })
    // Sorting logic based on sort type and sort order
    const displayedCards = filteredResults.sort((a, b) => {

        const AisMovie = 'original_title' in a && 'release_date' in a;
        const BisMovie = 'original_title' in b && 'release_date' in b;

        if (sort.order === 'asc') {
            if (sort.type === 'original_title') {
                if (!AisMovie && BisMovie) {

                    //as 'a' is tv show so here just compare original_name of 'a' and title of 'b'

                    if (a['original_name'] < b[sort.type]) return -1;
                    if (a['original_name'] > b[sort.type]) return 1;
                }
                else if (AisMovie && !BisMovie) {

                    //as 'b' is tv show so here just compare original_name of 'b' and title of 'a'

                    if (a[sort.type] < b['original_name']) return -1;
                    if (a[sort.type] > b['original_name']) return 1;
                }
                else if (!AisMovie && !BisMovie) {

                    //as 'a' and 'b'  are tv show so here just compare original_name of 'a' and 'b'

                    if (a['original_name'] < b['original_name']) return -1;
                    if (a['original_name'] > b['original_name']) return 1;
                }
                else {
                    // if 'a' and 'b' are movie

                    if (a[sort.type] < b[sort.type]) return -1;
                    if (a[sort.type] > b[sort.type]) return 1;
                }
            }
            else {

                //for sort.types other than 'title'
                if (a[sort.type] < b[sort.type]) return -1;
                if (a[sort.type] > b[sort.type]) return 1;
            }
            return 0;
        } else {

            if (sort.type === 'original_title') {
                if (!AisMovie && BisMovie) {

                    //as 'a' is tv show so here just compare original_name of 'a' and title of 'b'

                    if (a["original_name"] > b[sort.type]) return -1;
                    if (a["original_name"] < b[sort.type]) return 1;
                }
                else if (AisMovie && !BisMovie) {

                    //as 'b' is tv show so here just compare original_name of 'b' and title of 'a'

                    if (a[sort.type] > b["original_name"]) return -1;
                    if (a[sort.type] < b["original_name"]) return 1;
                }
                else if (!AisMovie && !BisMovie) {
                    //as 'a' and 'b'  are tv show so here just compare original_name of 'a' and 'b'

                    if (a["original_name"] > b["original_name"]) return -1;
                    if (a["original_name"] < b["original_name"]) return 1;
                }
                else {
                    // if 'a' and 'b' are movie

                    if (a[sort.type] > b[sort.type]) return -1;
                    if (a[sort.type] < b[sort.type]) return 1;
                }
            }
            else {

                //for sort.types other than 'title'

                if (a[sort.type] > b[sort.type]) return -1;
                if (a[sort.type] < b[sort.type]) return 1;

            }
            return 0;
        }
    });

    const cards = displayedCards.map(item => {
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
                        <Rating popularity={item.vote_average} />
                    </div>
                    <div className="bio">
                        <p>{item.overview ? item.overview : "No data available"}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {cards.length > 0 ? (
                <>
                    {cards}
                </>
            ) : (
                <h4 className='no-results'>Sorry... No results found.</h4>
            )}
        </>
    )
}
