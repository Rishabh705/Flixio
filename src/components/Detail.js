import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getDetails } from '../utils/api'
import '../styles/Detail.css'
export default function Detail() {
  const params = useParams()
  const location = useLocation()
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    async function loadPopular() {
      setLoading(true)
      try {
        const type = location.pathname.includes('/movie/') ? 'movie' : 'tv'
        const data = await getDetails(type, params.id)
        setResults(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadPopular()
  }, [params.id,location.pathname])
  const isMovie = 'original_title' in results && 'release_date' in results
  const date = isMovie ? results.release_date : results.first_air_date
  const title = isMovie ? results.original_title : results.original_name
  return (
    <div className="detail-cont" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${results.backdrop_path})`,
      backgroundSize: "cover"
    }}>
      <div className="detail-cont2">{/* opactiy */}
        <div className="detail-cont3">{/* small cont */}
          <h1>{title}</h1>
          <div className="detail-cont4">
            <ul>
              <li>{!loading && date ? date.substring(0, 4) : <></>}</li>
              {!loading ?
                results?.genres?.map(item => {
                  return (
                    <li key={item.id}>{item.name}</li>
                  )
                })
                :
                <></>
              }
            </ul>
            <div className="imdb">
              <h4>{!loading && results.vote_average ? parseFloat(results.vote_average).toFixed(1): <></>}</h4>
            </div>
          </div>
          <p>{!loading && results.overview ? results.overview : "No data available"}</p>
        </div>
      </div>
    </div>
  )
}
