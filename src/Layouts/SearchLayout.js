import React, { useContext, useEffect, useState } from 'react'
import { FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa'
import { TbBrandGoogleBigQuery } from 'react-icons/tb'
import { Outlet } from "react-router-dom"
import '../styles/SearchLayout.css'
import SFContext from '../contexts/SFContext';
export default function SearchLayout() {
  const { sortOrder, toggleSortOrder } = useContext(SFContext);
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    setVisible(prev => !prev);
  }
  return (
    <div className="srchlcont1">
      <div className="left-nav" onClick={toggleVisible}>
        <TbBrandGoogleBigQuery color='#dd3b50' size={25} className='right-arrow' />
      </div>
      <div className="srchlcont2">
        {
          visible && (
            <div className={`advancedcont1 ${visible ? 'show' : ''}`}>
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
                          <FaSortAmountDownAlt onClick={toggleSortOrder('title')} />
                        </div>
                        <div>
                          <FaSortAmountDown onClick={toggleSortOrder('title')} />
                        </div>
                      </div>
                    </li>
                    <li>
                      Popular
                      <div className="buttons">
                        <div>
                          <FaSortAmountDownAlt onClick={toggleSortOrder('popularity')} />
                        </div>
                        <div>
                          <FaSortAmountDown onClick={toggleSortOrder('popularity')} />
                        </div>
                      </div>
                    </li>
                    <li>
                      Rating
                      <div className="buttons"><div>
                        <FaSortAmountDownAlt onClick={toggleSortOrder('vote_average')} />
                      </div>
                        <div>
                          <FaSortAmountDown onClick={toggleSortOrder('vote_average')} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="filterby">
                  <p>Filter by</p>
                  <ul>
                    <li>Popular</li>
                    <li>Rating</li>
                    <li>Release date</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        <div className="srchlcont3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
