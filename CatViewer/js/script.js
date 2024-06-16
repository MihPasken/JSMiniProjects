// Select the button and image elements
const button = document.querySelector(".btn");
const image = document.querySelector(".img_cat");

// Define the API URL (replace 'YOUR_API_KEY' with your actual API key)
const url = "https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY";

// Function to fetch a new cat image
async function fetchHandler() {
    try {
        // Fetch data from the API
        const response = await fetch(url);
        const data = await response.json();
        
        // Log the response data (optional, for debugging)
        console.log(data);

        // Set the src attribute of the image element to the new cat image URL
        image.src = data[0].url;
    } catch (error) {
        // Log any errors to the console
        console.log(error);
    }
}

// Add an event listener to the button to fetch a new cat image when clicked
button.addEventListener("click", () => {
    // Check if the current image is fully loaded
    let isLoaded = image.complete;

    // If the image is loaded, fetch a new image
    if (isLoaded) {
        fetchHandler();
    }
});
