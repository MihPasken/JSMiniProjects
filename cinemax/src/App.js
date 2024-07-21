import './App.css';
import CinemaContentContainer from './Components/CinemaContent/CinemaContentContainer';
import HeaderContainer from './Components/CinemaContent/Header/HeaderContainer';


// Main App component
function App() {
  return (
    <div className="App">
        {/* Render the HeaderContainer component */}
        <HeaderContainer />
        {/* Render the CinemaContentContainer component */}
        <CinemaContentContainer />
    </div>
  );
}

// Export the App component as default
export default App;