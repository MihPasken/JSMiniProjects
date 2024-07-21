import React from "react";
import styles from "./Movie.module.css";

// Functional component to display a single movie
const Movie = (props) => {
    let combinedClasses;

    // Determine the class to apply based on the movie rating
    if (props.movieRating > 7) {
        combinedClasses = ["movie__rating", "movie__rating-green"]
            .map(cls => styles[cls]).join(' ');
    } else if (props.movieRating < 7 && props.movieRating > 5) {
        combinedClasses = ["movie__rating", "movie__rating-yellow"]
            .map(cls => styles[cls]).join(' ');
    } else {
        combinedClasses = ["movie__rating", "movie__rating-red"]
            .map(cls => styles[cls]).join(' ');
    };

    return (
        <div className={styles["movie"]}>
            {/* Container for the movie cover */}
            <div className={styles["movie__cover-inner"]}>
                <img 
                    src={props.movieImg} 
                    alt="" 
                    className={styles["movie__cover"]} 
                />
                <div className={styles["movie__cover-darkened"]}></div>
            </div>
            {/* Container for the movie information */}
            <div className={styles["movie__info"]}>
                <div className={styles["movie__title"]}>{props.movieTitle}</div>
                <div className={styles["movie__category"]}>{props.movieCategory}</div>
                <div className={combinedClasses}>{props.movieRating}</div>
            </div>
        </div>
    );
};

// Export the Movie component as default
export default Movie;
