import React from 'react'
import { Outlet } from "react-router-dom"
import '../styles/SearchLayout.css'
export default function HomeLayout() {
  return (
    <div className="srchlcont1">
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
                <li>Popular</li>
                <li>Rating</li>
                <li>Release date</li>
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
        <div className="srchlcont3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
