import { useState } from "react";

const CONFLICT_ALERT_MSG = "Error: There is already an activity scheduled on this pitch at this time";

function useActivities(initialActivities) {

  const [activities, setActivities] = useState(initialActivities);

  // Checks if there is a conflicting activity on the same pitch at the same time
  const hasConflict = (date, pitch, currentId) => {
    // Parsing for comparison
    const parsedDate = Date.parse(date); 
    // If there are activities for this pitch, check if any of them conflict with the given date
    if (activities[pitch]) {
      return activities[pitch].some(
        (activity) =>
          Date.parse(activity.date) === parsedDate && activity.id !== currentId
      );
    }
    // If there are no activities for this pitch, there is no conflict
    return false;
  };

  // Adds a new activity
  const addActivity = (formData) => {
    // Checks for conflict before adding
    if (hasConflict(formData.date, formData.pitch)) {
      alert(CONFLICT_ALERT_MSG);
      return false;
    }

    // Creates a new activity
    const newActivityId = Date.now();
    const newActivity = { ...formData, id: newActivityId };

    // Adds the new activity to the chosen pitch
    const updatedActivities = { ...activities };
    updatedActivities[formData.pitch] = updatedActivities[formData.pitch]
      ? [...updatedActivities[formData.pitch], newActivity]
      : [newActivity];

    // Updates the state with the new list
    setActivities(updatedActivities);
  };

  // Edits an existing activity
  const editActivity = (formData, activityToEdit) => {
    // Checks for conflict before editing
    if (hasConflict(formData.date, formData.pitch, activityToEdit.id)) {
      alert(CONFLICT_ALERT_MSG);
      return;
    }

    // Removes the activity from its original pitch
    const updatedActivities = { ...activities };
    updatedActivities[activityToEdit.pitch] = updatedActivities[
      activityToEdit.pitch
    ].filter((activity) => activity.id !== activityToEdit.id);

    // Adds the updated activity to the chosen pitch
    const updatedActivity = { ...formData, id: activityToEdit.id };
    updatedActivities[formData.pitch] = updatedActivities[formData.pitch]
      ? [...updatedActivities[formData.pitch], updatedActivity]
      : [updatedActivity];

    // Updates the state with the new list
    setActivities(updatedActivities);
  };

  // Removes an existing activity
  const removeActivity = (pitch, activityId) => {
    // Removes the activity from its pitch
    const updatedActivities = { ...activities };
    updatedActivities[pitch] = updatedActivities[pitch].filter(
      (activity) => activity.id !== activityId
    );

    // Updates the state with the new list
    setActivities(updatedActivities);
  };

  // Returns the state and the functions to manipulate it
  return { activities, addActivity, editActivity, removeActivity };
}

export default useActivities;
