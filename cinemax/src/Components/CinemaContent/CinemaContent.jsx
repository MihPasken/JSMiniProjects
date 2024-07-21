import React from "react";
import styles from "./CinemaContent.module.css";

// Functional component to display cinema content
const CinemaContent = (props) => {
    return (
        <div className={styles["cinema-content"]}>
            {/* Container for the list of movies */}
            <div className={styles["movies"]}>
                {props.moviesArr}
            </div>    
        </div>
    );
};

// Export the CinemaContent component as default
export default CinemaContent;
