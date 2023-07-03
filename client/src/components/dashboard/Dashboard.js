import { useState } from "react";
import Activity from "../activity/Activity";
import ActivityForm from "../activityForm/ActivityForm";
import useActivities from ".../hooks/useActivities";

function Dashboard() {
  const initialActivities = {
    "Pitch 1": [],
    "Pitch 2": [],
    "Pitch 3": [],
  };

  const { activities, addActivity, editActivity, removeActivity } = useActivities(initialActivities);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(false);

  const handleFormSubmit = (formData) => {
    if (editingActivity) {
      editActivity(formData, editingActivity);
    } else {
      addActivity(formData);
    }
    setIsFormOpen(false);
    setEditingActivity(false);
  };

  const handleEditActivity = (activity) => {
    setEditingActivity(activity);
    setIsFormOpen(true);
  };

  const allActivities = ["Pitch 1", "Pitch 2", "Pitch 3"].flatMap((pitch) =>
    activities[pitch].map((activity) => ({ ...activity, pitch }))
  );

  const timeNow = new Date();

  const filteredSortedList = allActivities
    .filter((activity) => Date.parse(activity.date) - timeNow > 0)
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  return (
    <div>
      {isFormOpen && (
        <ActivityForm
          onSubmit={handleFormSubmit}
          activity={editingActivity}
          closeForm={() => setIsFormOpen(false)}
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
        {filteredSortedList.map((activity, index) => (
          <Activity
            key={index}
            activity={activity.activity}
            date={activity.date}
            pitch={activity.pitch}
            performer={activity.performer}
            onEdit={() => handleEditActivity(activity)}
            onRemove={() => removeActivity(activity.pitch, activity.id)}
            id={activity.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;