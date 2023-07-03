import "./ActivityForm.css";
import { useState, useEffect } from "react";

function ActivityForm({ onSubmit, activity, closeForm }) {

  const [userInputs, setUserInputs] = useState({});

  // Updates userInputs state when activity's prop changes
  useEffect(() => {
    setUserInputs(activity || {});
  }, [activity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInputs);
  };

  // Options for the select inputs - CAN BE MODIFIED
  const pitchOptions = ["Pitch 1", "Pitch 2", "Pitch 3"];
  const activityOptions = ["Mowing", "Fertilisation", "Irrigation", "Aeration"];
  const performerOptions = ["John", "Tom", "Tony"];

  return (
    <div className="new-activity-form">
      <form onSubmit={handleSubmit}>
        <SelectInput
          label="Pitch"
          name="pitch"
          value={userInputs.pitch}
          handleChange={handleChange}
          options={pitchOptions}
        />

        <SelectInput
          label="Activity"
          name="activity"
          value={userInputs.activity}
          handleChange={handleChange}
          options={activityOptions}
        />

        <TextInput
          label="Date"
          name="date"
          type="datetime-local"
          value={userInputs.date}
          handleChange={handleChange}
        />

        <SelectInput
          label="Task Performer"
          name="performer"
          value={userInputs.performer}
          handleChange={handleChange}
          options={performerOptions}
        />

        <input
          type="submit"
          value="Save"
          disabled={
            !userInputs.performer || !userInputs.date || !userInputs.activity
          }
        />
        <input type="button" value="Cancel" onClick={closeForm} />
      </form>
    </div>
  );
}

// Subcomponent for select input fields
function SelectInput({ label, name, value, handleChange, options }) {
    return (
      <>
        <label>{label}</label>
        <select name={name} value={value || ""} onChange={handleChange}>
          <option value="">Choose {name}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  }
  
  // Subcomponent for text input fields
  function TextInput({ label, name, type, value, handleChange }) {
    return (
      <>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={handleChange}
        />
      </>
    );
  }

export default ActivityForm;
