import "./Dashboard.css";
import { useState } from "react";
import Activity from "../activity/Activity";
import ActivityForm from "../activityForm/ActivityForm";
import useActivities from "../../hooks/useActivities";

function Dashboard() {
  const initialActivities = {
    "Pitch 1": [],
    "Pitch 2": [],
    "Pitch 3": [],
  };

  // Custom hook to manipulate activities
  const { activities, addActivity, editActivity, removeActivity } =
    useActivities(initialActivities);

  // Form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Tracks of which activity is currently being edited
  const [editingActivity, setEditingActivity] = useState(false);

  const handleFormSubmit = (formData) => {
    // Checks if editing or adding a new activity
    if (editingActivity) {
      editActivity(formData, editingActivity);
    } else {
      addActivity(formData);
    }
    setIsFormOpen(false);
    setEditingActivity(false);
  };

  const handleEditActivity = (activityObj) => {
    setEditingActivity(activityObj);
    setIsFormOpen(true);
  };

  // Combine all activities (for rendering)
  const allActivities = ["Pitch 1", "Pitch 2", "Pitch 3"].flatMap((pitch) =>
    activities[pitch].map((activityObj) => ({ ...activityObj, pitch }))
  );

  const timeNow = new Date();

  // Filters out activities that have already occurred and sorts the remaining activities in ascending order by date
  const filteredSortedList = allActivities
    .filter((activity) => Date.parse(activity.date) - timeNow > 0) // If we want to show already occurred activities, we can take it out
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  return (
    <div className="Dashboard">
      {isFormOpen && (
        <ActivityForm
          onSubmit={handleFormSubmit}
          activity={editingActivity}
          closeForm={() => {
            setIsFormOpen(false);
            setEditingActivity(false);
          }}
        />
      )}

      {!isFormOpen && (
        <input
          type="button"
          value="New Activity"
          onClick={() => setIsFormOpen(true)}
        />
      )}

      <div className="activities-list">
        {filteredSortedList.map((activityObj, index) => (
          <Activity
            key={index}
            id={activityObj.id}
            activity={activityObj.activity}
            date={activityObj.date}
            pitch={activityObj.pitch}
            performer={activityObj.performer}
            onEdit={() => handleEditActivity(activityObj)}
            onRemove={() => removeActivity(activityObj.pitch, activityObj.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
