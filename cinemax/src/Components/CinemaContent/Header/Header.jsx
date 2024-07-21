import React from "react";
import styles from "./Header.module.css";

// Functional component for the Header
const Header = (props) => {
    // Handler for the input change event
    const onChangeThis = (event) => {
        // Call the onChangeSearch prop with the input value
        props.onChangeSearch(event.target.value);
    };

    return (
        <header className={styles["header"]}>
            <div className={styles["header__content"]}>
                {/* Logo link */}
                <a href="index.html" className={styles["header__logo"]}> CineMAX </a>
                {/* Search form */}
                <form>
                    {/* Search input field */}
                    <input 
                        type="text" 
                        className={styles["header__search"]} 
                        onChange={onChangeThis} 
                        placeholder="search" 
                        value={props.searchText}
                    />
                </form>
            </div>
        </header>
    );
};

// Export the Header component as default
export default Header;
