import React, { useContext, useEffect } from 'react'
import { FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa'
import { TbBrandGoogleBigQuery } from 'react-icons/tb'
import { Outlet } from "react-router-dom"
import '../styles/SearchLayout.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SFContext from '../contexts/SFContext';



const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
];

export default function SearchLayout() {


  const { filter, setSort, setFilter } = useContext(SFContext);

  //controlled input for slider
  const handleChange = (event, newValue) => {
    setFilter(prev=>{
      return {
        ...prev,
        limits:newValue
      }
    })
  }


  //context work for updating sort object of SFcontext
  const updateSortOptions = (ord, typ) => {
    setSort((prev)=>{
      return {
        ...prev,
        order:ord,
        type:typ
      }
    })
  }


  //toggling visibilty of advanced search  in small screens
  useEffect(() => {
    const advsrch = document.querySelector(".advancedcont1")
    const advicon = document.querySelector(".right-arrow")
    function switchOn(evt) {
      advsrch.classList.toggle("show")
    }
    advicon.addEventListener("click", switchOn)
    return function () {
      advicon.removeEventListener("click", switchOn)
    }
  }, [])



  return (
    <div className="srchlcont1">
      <div className="left-nav">
        <TbBrandGoogleBigQuery color='#dd3b50' size={25} className='right-arrow' />
      </div>
      <div className="srchlcont2">
        <div className="advancedcont1">
          <div className="advanced-title">
            <h4>
              <span className="beautify">
                Advanced Search
              </span>
            </h4>
            <hr />
          </div>
          <div className="results">
            <div className="sortby">
              <p>Sort by</p>
              <ul>
                <li>
                  Title
                  <div className="buttons">
                    <div>
                      <FaSortAmountDownAlt onClick={() => updateSortOptions('asc', 'original_title')} />
                    </div>
                    <div>
                      <FaSortAmountDown onClick={() => updateSortOptions('desc', 'original_title')} />
                    </div>
                  </div>
                </li>
                <li>
                  Popular
                  <div className="buttons">
                    <div>
                      <FaSortAmountDownAlt onClick={() => updateSortOptions('asc', 'popularity')} />
                    </div>
                    <div>
                      <FaSortAmountDown onClick={() => updateSortOptions('desc', 'popularity')} />
                    </div>
                  </div>
                </li>
                <li>
                  Rating
                  <div className="buttons"><div>
                    <FaSortAmountDownAlt onClick={() => updateSortOptions('asc', 'vote_average')} />
                  </div>
                    <div>
                      <FaSortAmountDown onClick={() => updateSortOptions('desc', 'vote_average')} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="filterby">
              <p>Filter by</p>
              <ul>
                <li>
                  Rating
                  <div className="buttons"><div>
                    <Box sx={{ width: 180 }}>
                      <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={filter.limits}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={marks}
                        min={1}
                        max={10}
                      />
                    </Box>
                  </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="srchlcont3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
