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
  }, [params.id])
  console.log(results)
  // if (!loading) {
  //   const genres = results.genres.map(item => {
  //     return (
  //       <li key={item.id}>{item.name}</li>
  //     )
  //   })
  // }
  return (
    <div className="detail-cont" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${results.backdrop_path})`,
      backgroundSize: "cover"
    }}>
      <div className="detail-cont2">{/* opactiy */}
        <div className="detail-cont3">{/* small cont */}
          <h1>{results.title}</h1>
          <div className="detail-cont4">
            {/* {genres} */}
            <ul>
              {/* <li>{results.release_date.substring(0, 4)}</li> */}
              <li>2018</li>
              <li>Action</li>
              <li>Crime</li>
              <li>Thriller</li>
            </ul>
            <div className="imdb">
              <h4>7.9</h4>
            </div>
          </div>
          {/* <p>{results.overview}</p>*/}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolorum, dolor nihil ratione eos velit officia! Totam quos cum, saepe, repudiandae facere assumenda nostrum rerum suscipit dolore facilis neque aperiam!</p>
        </div>
      </div>
    </div>
  )
}
