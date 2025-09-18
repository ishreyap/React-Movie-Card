import React, { useState, useEffect } from 'react'
import movies from './Movies.json'

export default function Movies() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const filtered = movies.filter((movie) =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [searchTerm, movies]);

    return (
        <div>
            <input
                className="search"
                type="text"
                placeholder="Search Movies"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <h1>🍿🎥Movies </h1>
            {filteredMovies.map((renderMovie) => (
                <div className="movie-card" key={renderMovie.Title}>
                    <img src={renderMovie.Images[0]} alt={renderMovie.Title} />
                    <div className="movie-details">
                        <h2>{renderMovie.Title}</h2>
                        <h4>{renderMovie.Year}</h4>
                        <h4>{renderMovie.Genre}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}