import React from 'react'
import Results from './Results'
import { getCinema } from '../utils/api'
import PageCount from './PageCount'
export default function Search() {
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [page, setPage] = React.useState(1)
  React.useEffect(() => {
    async function loadResults() {
      setLoading(true)
      try {
        const data = await getCinema("movie",page)
        setResults(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadResults()
  }, [page])

  return (
    <div className='srchresults-cont1'>
      <Results results={results}/>
      <PageCount page= {page} setPage={setPage}/>
    </div>
  )
}
