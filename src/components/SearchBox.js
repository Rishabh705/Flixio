import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/SearchBox.css'
export default function SearchBox({link}) {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('search'))
    const [text, setText] = React.useState('');
    function handleChange(evt) {
        setText(prev => prev = evt.target.value)
    }
    return (
        <div className='search'>
            <div className="icon">
                <FaSearch />
            </div>
            <input type="text" className='search-box' placeholder='Enter your keywords...' value={text} onChange={handleChange} name='text' />
            <Link to={link}>
                <button onClick={() => setSearchParams(`?search=${text}`)}>
                    <FaArrowRight size={20} />
                </button>
            </Link>
        </div>
    )
}
