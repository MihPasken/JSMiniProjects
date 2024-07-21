import { createSlice } from "@reduxjs/toolkit";

// Initial state for the header slice
let initialState = {
    searchText: ""
};

// Create a slice for header-related state and actions
const HeaderSlicer = createSlice({
    name: "HeaderSlicer", // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Reducer to update the search text
        updateSearchChar(state, action) {
            state.searchText = action.payload; // Update the searchText with the payload
        }
    }
});

// Export the action creator for updateSearchChar
export const { updateSearchChar } = HeaderSlicer.actions;

// Export the reducer function for the header slice
export default HeaderSlicer.reducer;
