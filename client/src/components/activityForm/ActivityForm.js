import "./ActivityForm.css";
import { useState, useEffect } from "react";

function ActivityForm({ onSubmit, activity, closeForm }) {

  const [userInputs, setUserInputs] = useState({});

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

  const pitchOptions = ["Pitch 1", "Pitch 2", "Pitch 3"];
  const activityOptions = ["Mowing", "Fertilisation", "Irrigation", "Aeration"];
  const performerOptions = ["John", "Tom", "Tony"];

  return (
    <div className="new-event-form">
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

// Subcomponents SelectInput and TextInput
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
