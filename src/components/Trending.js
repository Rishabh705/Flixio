import React from 'react'
import { getTrending } from '../utils/api';
import { Link } from 'react-router-dom';
export default function Trending({window}) {
    const [results, setResults] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        async function loadTrending() {
            setLoading(true)
            try {
                const data = await getTrending(window)
                setResults(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadTrending()
    }, [window])
    const cards = results.map(item => {
        const len = Object.keys(item).length
        const url = len === 13 ? "tv" : "movie"
        const title = item.original_name || item.original_title;
        return (
            <Link key={item.id} to={`${url}/${item.id}`}>
                <div className='cards'>
                    {
                        <div className="card" key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.id} height={225} />
                            <h4 key={item.id}>{title}</h4>
                        </div>
                    }
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
