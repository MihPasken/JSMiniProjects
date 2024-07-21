import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchChar } from "../../../Redux/HeaderSlicer";

// Container component for the Header
const HeaderContainer = () => {
    // Initialize the useDispatch hook
    const dispatch = useDispatch();
    // Get the current search text from the Redux store
    let searchText = useSelector(state => state.Header.searchText);

    // Handler for changing the search text
    const onChangeSearch = (text) => {
        // Dispatch the updateSearchChar action with the new text
        dispatch(updateSearchChar(text));
    };

    // Render the Header component with props
    return <Header onChangeSearch={onChangeSearch} searchText={searchText} />;
}

// Export the HeaderContainer component as default
export default HeaderContainer;