import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import noImage from "./noimage.png";
import Footer from "./components/Footer";

const API_KEY = "5b6b87f8";

function App() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("man");

    const fetchMovies = async (searchQuery = "man") => {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
            );
            if (response.data && response.data.Search) {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        fetchMovies(searchQuery);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="App">
            <Header title="FinProHB" onSearch={handleSearch} />
            <div className="movies-container">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={
                                movie.Poster !== "N/A" ? movie.Poster : noImage
                            }
                        />
                    ))
                ) : (
                    <p>No Movies found. Try searching for something else!</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
