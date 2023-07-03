# Activity Scheduler 🌱🌦️

Welcome to Activity Scheduler, your new favorite tool for turf management! 🙌 This simple and easy-to-use web application is designed to help you schedule activities and stay updated with real-time weather data for your chosen location. No more weather surprises, stay one step ahead! 🌦️

## Features 💡

#### 📝 **Activities**

- Get organized! Schedule new activities like Mowing, Fertilisation, Irrigation, or Aeration - whatever your turf needs!
- Keep it flexible! Every activity can be associated with a date and time that suits you best
- Who's on duty? Assign each activity to a task performer
- One thing at a time! Each activity is associated with one of three Pitches (Pitch 1, 2, or 3) because multitasking is so yesterday. One pitch, one activity, one time 🕒
- Need to reschedule? No problem! Easily change the details of the activities whenever needed
- Change of plans? Just delete the activity. It's that simple!

#### 🌤️ **Weather**

- Get the current temperature and a heads-up on the expected rain or precipitation for the rest of the day

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

2. Next, navigate into the client folder:
   
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

WOOHOO! The application should be running now at [http://localhost:3000](http://localhost:3000).

Let's keep our turf happy and healthy with Activity Scheduler! 🌱🎉

## 🛠️ Built With

- [React](https://reactjs.org) - Frontend framework for building user interfaces
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [WeatherAPI](https://www.weatherapi.com/) - JSON and XML weather API and geolocation developer API

## Follow Up Question

### Implementation

1. What libraries did you use? What are they used for? Why did you choose them specifically?

   I used only **Axios** and **Math**.
   Axios, a promise-based HTTP client for browser and node.js, was my choice to handle the API requests. It makes API calls to be super easy with a few code lines.
   Math, built-in JavaScript library, for rounding numbers.
   At the begining I considered using Redux for state management. However, I found it unnecessary for this simple app, as its complexity outweighed its benefits.
   Other then that, My focus was on simplicity and efficiency, so I purposely avoided using extra libraries.

2. What improvements or new features would you add if you had more time to work on the problem?
- The ability to modify / add new tasks and performers

- Task prioritization: Users could rank tasks based on urgency or importanc

- Recurring tasks: allow users to set tasks that repeat on a daily, weekly, monthly, or custom schedule

- Pre-made turf maintenance plans: that should based on proffesional knowledge (which i don't have yet!)

- An option to toggling between current and old activities for comprehensive activity tracking (at the moment i filtered out the old activities)

- Display options: an ability to choose how visualize the activities: on a calendar, as a list, associated with either a pitch or a performer

- An export feature for integration with 3rd party tools like calendars or Excel

- Push notifications (by email as well) to remind users about upcoming activities or changes

- Search: search for tasks using different filters and keywords

- Analytics feature: to monitor productivity and task distribution

- A customizable user interface: coloring tasks, background etc

- Sharing activity and an option to invite pepole by email

- Offline mode

- Weather based on current location

- Sign up, Login and Authentication
3. Which parts did you find most difficult and which parts did you spend the most time with?

   In general, as a frontend developer, React might be a very friendly and flexible framework but at the same time could create a mess! therefore, i put in a lot of thought in planning the app stucture and its components, in order to make it modular and efficient but yet neat, DRY and clear. 

   In specific, Since this part is crucial for managing the state and operations related to activities in the app, building the useActivities custom hook took me the longest. first while planing it then to code it.

4. What are key things to consider when deploying this application for customer use/production?
- Testing: It's critical to make sure our app is well tested, covering both common and edge-case scenarios (unit and end to end)

- Security: making sure our app protects our clients data

- Optimization: to improve user experience and efficiency

- Data Management: we collect and keep user's private data so it's critical to make sure we work according to the regulations

- CI/CD pipelines

- Browser and device compatibility: run the app on different browsers and devices to make sure it runs smoothly

- Environment Switch: move from a development to a production environment. make sure that all environment-specific configurations (database connections, API keys etc) are set for the production environment

### Feedback

1. How did you find the challenge overall? Did you have any issues or have difficulties
   completing?

   First of all - I actually enjoyed it! I love building things with React, so it was a great opportunity to have some fun 😊

   The questions afterward got me thinking and researching more about the deployment process and some more DevOps tasks, which I have less experience with (but I'm on it! 🤩)

   This challenge made me even more motivated to join the team! So, I hope I made it!

   Luckily, I didn't have any technical issues 😊

2. We would love to hear any suggestions or improvements you have to make this
   challenge better!
- Limitations on performers: In real life, a single performer cannot be in two places at once. I'd suggest modifying the challenge rules to reflect this

- UI blueprint: Adding a UI requirements document or a blueprint to the challenge could make it closer to a Frontend developer work. It would provide a clearer vision of what's expected from a design perspective and add another dimension to the challenge

- Basic Backend and database understanding: While the challenge is for a frontend position, i think it's importent to check a basic understanding of Backend and database

#### That's all! thank you very much for the opportunity!!! 😊🤞🏽

## Author

Eldad Chidra 
[Github](https://github.com/eldadchb) - [LinkedIn](https://www.linkedin.com/in/eldad-chidra/)
