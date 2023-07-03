import "./HomePage.css";
import Dashboard from "../components/dashboard/Dashboard";
import Weather from "../components/weather/Weather";

function HomePage() {
  return (
    <div className="home-page">
      <div className="tool-bar">
        <h1>Activity Scheduler</h1>
        <Weather />
      </div>
      <div className="activities-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default HomePage;
