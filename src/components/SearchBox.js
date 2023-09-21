import React from 'react';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/SearchBox.css';

export default function SearchBox() {
    const [text, setText] = React.useState('');
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search);
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            handleNext();
        }
    }

    const handleNext = () => {
        if (text.trim() !== '') {
            searchQuery.set('sq', text);
            navigate(`${location.pathname}search/?${searchQuery.toString()}`);
        }
    }

    return (
        <div className='search'>
            <div className="icon">
                <FaSearch />
            </div>
            <input 
                type="text" 
                className='search-box' 
                placeholder='Enter your keywords...' 
                value={text} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown} 
                name='text' 
            />
            <button 
                onClick={handleNext} 
                type='submit'
                disabled={!text.trim()} // Disable button if text is empty or only whitespace
            >
                <FaArrowRight size={20} color='black'/>
            </button>
        </div>
    )
}
