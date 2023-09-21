import React from 'react'
import { getTopRated } from '../utils/api';
import { Link } from 'react-router-dom';
export default function Popular({ type }) {
    const [results, setResults] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        async function loadTR() {
            setLoading(true)
            try {
                const data = await getTopRated()
                setResults(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadTR()
    },[])
    const cards = results.map(item => {
        // distinguishing between tv and movie as there is no cinema-type key in object ;) 
        const isMovie = 'original_title' in item && 'release_date' in item;
        const url = isMovie ? "movie" : "tv";
        const title = isMovie ? item.original_title : item.original_name;
        return (
            <Link key={item.id} to={`${url}/${item.id}`}>
                <div className="card" key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.id} height={225} />
                    <h4 key={item.id}>{title}</h4>
                </div>
            </Link>
        )
    })
    return (
        <section className="container4">
            {cards}
        </section>
    )
}
