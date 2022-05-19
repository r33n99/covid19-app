import React from "react";
import { useSelector } from "react-redux";

export const TopRecovered = () => {
  const { lastCountries } = useSelector((state) => state.covid);
  const topRecovered = lastCountries?.reduce(
    (acc, curr) => (acc.b > curr.b ? acc : curr),
    {}
  );
  const topRecoveredDate = new Date(topRecovered.Date).getDate();
  const topRecoveredMonth = new Date(topRecovered.Date).getMonth();
  const topRecoveredYear = new Date(topRecovered.Date).getFullYear();
  return (
    <div className="top-recovered">
      <div className="top-recovered__title">Top recovered cases</div>
      <div
        key={`${new Date()} + ${topRecovered}`}
        className="top-recovered__count"
      >
        {topRecovered.Recovered}
      </div>
      <div className="top-recovered__date">
        {topRecoveredDate ? topRecoveredDate : "haven't Date"}.
        {topRecoveredMonth < 10 ? 0 : ""}
        {topRecoveredMonth}.{topRecoveredYear}
      </div>
    </div>
  );
};
