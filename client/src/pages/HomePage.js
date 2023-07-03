import Dashboard from "../components/dashboard/Dashboard";
import Weather from "../components/weather/Weather";

function HomePage() {
  console.log("RERENDERED!!!!");

  return (
    <>
      <div className="tool-bar">
        <h1>Activity Scheduler</h1>
        <Weather /> 
      </div>
      <div className="activities-container">
        <Dashboard />
      </div>
    </>
  );
}

export default HomePage;
