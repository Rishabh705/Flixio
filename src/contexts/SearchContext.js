import {React,createContext, useContext} from 'react'
import { useSearchParams } from 'react-router-dom';
const SearchContext = createContext();
export default function SearchContext() {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>SearchContext</div>
  )
}
