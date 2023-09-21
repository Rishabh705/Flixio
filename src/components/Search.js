import React from 'react'
import Results from './Results'
import { getResults } from '../utils/api'
import PageCount from './PageCount';
import { useSearchParams } from 'react-router-dom'
export default function Search() {
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const [search] = useSearchParams()
  React.useEffect(() => {
    async function loadResults() {
      setLoading(true)
      try {
        const data = await getResults(search.get('sq'), page)
        setResults(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadResults()
  }, [search])
  return (
    <div className='srchresults-cont1'>
      <Results results={results}/>
      <PageCount page= {page} setPage={setPage}/>
    </div>
  )
}
