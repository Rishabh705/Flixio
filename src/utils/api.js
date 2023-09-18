// fetch search results
export async function getResults(query,page) {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.results
}

// fetch popular movies/tv-shows
export async function getPopular(type) {
    const res = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.results
}

// fetch now playing movies/tv-shows
export async function getNowPlaying() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.results
}

// fetch top rated movies/tv-shows
export async function getTopRated() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.results
}

// fetch trending movies/tv-shows
export async function getTrending(time_window) {
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/${time_window}?api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.results
}

// fetch movies/tv-shows
export async function getCinema(type) {
    const res = await fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.results
}

// fetch a movie/tv-show
export async function getDetails(type,id) {
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=0edad4f6ba800be6e80aeedd54cafc01`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}
