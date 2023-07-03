export function dateFormatter(date) {
  const dateObj = new Date(date);
  // Returns the day of the month with ordinal suffix
  function getOrdinal(day) {
    return (
      day +
      (1 === day || 21 === day || 31 === day
        ? "st"
        : 2 === day || 22 === day
        ? "nd"
        : 3 === day || 23 === day
        ? "rd"
        : "th")
    );
  }

  const result = {
    // Format time as 2-digit hour and minute
    formatedTime: dateObj.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    // Format day with ordinal suffix
    formatedDay: getOrdinal(dateObj.getUTCDate()),
    // Format month as abbreviation
    formatedMonthShort: dateObj.toLocaleDateString("en-US", { month: "short" }),
    // Format month as full name
    formatedMonthLong: dateObj.toLocaleDateString("en-US", { month: "long" }),
    // Format year
    formatedYear: dateObj.getFullYear(),
    // Format date as 'day month'
    formatedDateShort: `${getOrdinal(
      dateObj.getUTCDate()
    )} ${dateObj.toLocaleDateString("en-US", { month: "short" })}`,
    // Format date and time as 'time - month day, year'
    formatedDateLong: `${dateObj.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })} - ${dateObj.toLocaleDateString("en-US", {
      month: "long",
    })} ${getOrdinal(dateObj.getUTCDate())}, ${dateObj.getFullYear()}`,
  };
  return result;
}
