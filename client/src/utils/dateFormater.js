export function dateFormatter(date) {
  const dateObj = new Date(date);

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
    formatedTime: dateObj.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    formatedDay: getOrdinal(dateObj.getUTCDate()),
    formatedMonthShort: dateObj.toLocaleDateString("en-US", { month: "short" }),
    formatedMonthLong: dateObj.toLocaleDateString("en-US", { month: "long" }),
    formatedYear: dateObj.getFullYear(),
  };

  return result;
}
