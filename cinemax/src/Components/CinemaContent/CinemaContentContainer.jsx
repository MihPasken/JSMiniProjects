import React from "react";
import CinemaContent from "./CinemaContent";
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";

// Container component for CinemaContent
const CinemaContentContainer = () => {
    // Select movies from the Redux store
    let movies = useSelector(state => state.Cinema.movies);

    // Map the movie data to <Movie /> components
    let moviesArr = movies.map(movie => (
        <Movie 
            movieImg={movie.movieImg} 
            movieTitle={movie.movieInfo.movieTitle} 
            movieCategory={movie.movieInfo.movieCategory}
            movieRating={movie.movieInfo.movieRating}
        />
    ));

    return (
        <div className="cinema-content-container">
            {/* Pass the array of Movie components to CinemaContent */}
            <CinemaContent moviesArr={moviesArr} />
        </div>
    );
}

// Export the CinemaContentContainer component as default
export default CinemaContentContainer;
