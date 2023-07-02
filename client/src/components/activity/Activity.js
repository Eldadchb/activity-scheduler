import "./Activity.css";
import { dateFormatter } from "../utils/dateFormater";

function Activity({ activity, date, performer, pitch, onEdit, onRemove }) {
  const formatedDate = dateFormatter(date);

  const formatedDateShort = `${formatedDate.formatedDay} ${formatedDate.formatedMonthShort}`;
  const formatedDateLong = `${formatedDate.formatedTime} - ${formatedDate.formatedMonthLong} ${formatedDate.formatedDay}, ${formatedDate.formatedYear}`;

  return (
    <div className="activity-box">
      <div className="date-left-side">{formatedDateShort}</div>
      <div className="activity-info">
        <div className="activity-name">{activity}</div>
        <div className="activity-date">{formatedDateLong}</div>
        <div className="activity-performer">{performer}</div>
        <div className="activity-pitch">{pitch}</div>
      </div>
      <div className="change-button">
        <input type="button" value="Edit" onClick={() => onEdit(activity.id)} />
        <input
          type="button"
          value="Remove"
          onClick={() => onRemove(activity.pitch, activity.id)}
        />
      </div>
    </div>
  );
}

export default Activity;
