import { createSlice } from "@reduxjs/toolkit";

// API key for accessing the movie API
const API_KEY = "4245b374-41f1-4962-ae9f-4e6f3d9044cc";

// URL of the movie API
const MOVIE_API_SRC = "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=2";

// Function to fetch movies from the API
async function getMovies(url) {
    try {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        });

        // Parse the response data
        const resp_data = await resp.json();
        return resp_data;

    } catch (error) {
        console.error("Error fetching and parsing data:", error);
    }
};

// Fetch movies and store the result
const APImovies = await getMovies(MOVIE_API_SRC).then(result => result);

// Extract the list of movies from the fetched data
const APImoviesList = APImovies.items;

// Define the initial state for the Redux slice
const initialState = {
    movies: APImoviesList.map(movie => (
        {
            movieImg: movie.posterUrl,
            movieInfo: {
                movieTitle: movie.nameRu,
                movieCategory: movie.genres[0].genre,
                movieRating: movie.ratingImdb,
            }
        }
    ))
    // Filter out movies that belong to the "музыка" or "фэнтези" categories
    .filter(item => item.movieInfo.movieCategory !== "музыка" && item.movieInfo.movieCategory !== "фэнтези"),
};

// Create a Redux slice for managing cinema-related state
const CinemaSlicer = createSlice({
    name: "CinemaSlicer",
    initialState,
    reducers: {
        // Reducer to retain the current state of movies
        nulling(state, action) {
            state.movies = state.movies; // The spare function
        }
    }
});

// Export the reducer function from the slice
export default CinemaSlicer.reducer;
