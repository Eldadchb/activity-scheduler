import { useState } from "react";

const ALERT_MSG = "Error: There is already an activity scheduled on this pitch at this time";

function useActivities(initialActivities) {

  const [activities, setActivities] = useState(initialActivities);

  const addActivity = (formData) => {

    const newActivityId = Date.now();
    const newActivity = { ...formData, id: newActivityId };
    const conflictingActivity = activities[newActivity.pitch].find(
      (activity) => Date.parse(activity.date) === Date.parse(newActivity.date)
    );

    if (conflictingActivity) {
      alert(ALERT_MSG);
      return false;
    }

    setActivities({
      ...activities,
      [formData.pitch]: [...activities[formData.pitch], newActivity],
    });
  };

  const editActivity = (formData, activityToEdit) => {
    
    const conflictingActivity = activities[formData.pitch].find(
      (activity) =>
        Date.parse(activity.date) === Date.parse(formData.date) &&
        activity.id !== activityToEdit.id
    );

    if (conflictingActivity) {
      alert(ALERT_MSG);
      return;
    }

    const updatedActivities = activities[activityToEdit.pitch].map((activity) =>
      activity.id === activityToEdit.id
        ? { ...formData, id: activityToEdit.id }
        : activity
    );

    setActivities({
      ...activities,
      [activityToEdit.pitch]: updatedActivities,
    });
  };

  const removeActivity = (pitch, activityId) => {
    setActivities({
      ...activities,
      [pitch]: activities[pitch].filter(
        (activity) => activity.id !== activityId
      ),
    });
  };

  return { activities, addActivity, editActivity, removeActivity };
}
export default useActivities;
