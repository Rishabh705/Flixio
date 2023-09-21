import {React,createContext, useContext} from 'react'
const SearchContext = createContext();
export default function SearchContext() {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>SearchContext</div>
  )
}
