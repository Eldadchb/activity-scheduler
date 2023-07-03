import "./Activity.css";
import { dateFormatter } from "../../utils/dateFormater";

function Activity({ activity, date, performer, pitch, onEdit, onRemove }) {
  const formatedDate = dateFormatter(date);

  return (
    <div className="activity-box">
      <div className="date-left-side">{formatedDate.formatedDateShort}</div>
      <div className="activity-info">
        <div className="activity-name">{activity}</div>
        <div className="activity-date">{formatedDate.formatedDateLong}</div>
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
