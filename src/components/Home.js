import React, { useState } from 'react';
import '../styles/Home.css';
import SearchBox from './SearchBox';
import Popular from './Popular';
import NowPlaying from './NowPlaying'
import Toprated from './Toprated'
import Trending from './Trending';

export default function Home() {
  const [time_window, setTime_window] = useState('day');
  const [type, setType] = useState('tv');
  return (
    <div className="container1">
      <div className="background">
        <div className="container2">
          <p>Welcome to <span className="beautify"><b>FLIXIO</b></span></p>
          <SearchBox link={'search'} />
          <p>Dive into a world of captivating stories, unforgettable characters, and mesmerizing visuals. Discover a curated collection of the finest movies from various genres, spanning across decades of cinematic history. Stay in the loop with the hottest releases! From action-packed blockbusters to heartwarming dramas and thrilling adventures, we've got it all. Check out what's currently rocking the silver screen and get ready for an unforgettable viewing experience.</p>
        </div>
      </div>
      <main>
        <section className='container3'>
          <div className="cont5">
            <h2><span className="beautify">Now Playing</span></h2>
          </div>
          <NowPlaying />
        </section>
        <section className='container3'>
          <div className="cont5">
            <h2><span className="beautify">Popular</span></h2>
            <div className="slider">
              <h4 className={type === 'tv' ? 'slider-activate' : ''} onClick={() => setType('tv')}>TV</h4>
              <h4 className={type === 'movie' ? 'slider-activate' : ''} onClick={() => setType('movie')}>Movies</h4>
            </div>
          </div>
          <Popular type={type} />
        </section>
        <section className="container3">
          <div className="cont5">
            <h2><span className="beautify">Trending</span></h2>
            <div className="slider">
              <h4 className={time_window === 'day' ? 'slider-activate' : ''} onClick={() => setTime_window('day')}>Today</h4>
              <h4 className={time_window === 'week' ? 'slider-activate' : ''} onClick={() => setTime_window('week')}>This Week</h4>
            </div>
          </div>
          <Trending window={time_window} />
        </section>
        <section className="container3">
          <div className="cont5">
            <h2><span className="beautify">Top rated</span></h2>
          </div>
          <Toprated />
        </section>
      </main>
    </div>
  );
}
