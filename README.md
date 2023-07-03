# Activity Scheduler 🌱🌦️

Welcome to Activity Scheduler, your new favorite tool for turf management! 🙌 This simple and easy-to-use web application is designed to help you schedule activities and stay updated with real-time weather data for your chosen location. No more weather surprises, stay one step ahead! 🌦️

## 💡 Features

#### 📝 **Activities**

- Get organized! Schedule new activities like Mowing, Fertilisation, Irrigation, or Aeration - whatever your turf needs!
- Keep it flexible! Every activity can be associated with a date and time that suits you best
- Who's on duty? Assign each activity to a task performer
- One thing at a time! Each activity is associated with one of three Pitches (Pitch 1, 2, or 3) because multitasking is so yesterday. One pitch, one activity, one time 🕒
- Need to reschedule? No problem! Easily change the details of the activities whenever needed
- Change of plans? Just delete the activity. It's that simple

#### 🌤️ **Weather**

- Get the current temperature and a heads-up on the expected rain or precipitation for the rest of the day

## 🛠️ Built With

- React
- Axios
- WeatherAPI

## 🚀 Getting Started

Want to join the turf management revolution? Here's how to get Activity Scheduler up and running locally:

### Prerequisites

- Node.js
- npm
- A WeatherAPI key. You can easily sign up here: [https://www.weatherapi.com/signup.aspx](https://www.weatherapi.com/signup.aspx)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/eldadchb/activity-scheduler.git
    ```

2. Next, navigate into your shiny new cloned repository:

    ```bash
    cd client
    ```

3. Now, let's install the dependencies:

    ```bash
    npm install
    ```

4. Before you start the application, you need to provide your WeatherAPI key. Save your key in a `.env` file at the root of your project with the following variable:

    ```bash
    REACT_APP_WEATHER_API_KEY=your_weather_api_key
    ```

    Replace `your_weather_api_key` with your actual WeatherAPI key.

5. You're all set! Let's start the application:

    ```bash
    npm start
    ```

WOOHOO! The application should now be running at [http://localhost:3000](http://localhost:3000). Welcome to your new turf management journey with Activity Scheduler!

Let's keep our turf happy and healthy with Activity Scheduler! 🌱🎉