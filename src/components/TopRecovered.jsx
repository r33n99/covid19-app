import React from "react";
import { useSelector } from "react-redux";

export const TopRecovered = () => {
  const { lastFiveDaysCountries } = useSelector((state) => state.covid);  
  const topRecovered = lastFiveDaysCountries?.reduce(
    (acc, curr) => (acc.b > curr.b ? acc : curr),
    {}
  );   // get the country with the highest recovered cases
  const topRecoveredDate = new Date(topRecovered.Date).getDate();   // date of the top recovered country
  const topRecoveredMonth = new Date(topRecovered.Date).toLocaleString("eng", {
    month: "long",
  }); // month from Date

  return (
    <div className="top-recovered">
      <div className="top-recovered__title">Top recovered cases</div>
      <div
        key={`${new Date()} + ${topRecovered}`}
        className="top-recovered__count"
      >
        {topRecovered.Recovered ? topRecovered.Recovered : 0}
      </div>
      <div className="top-recovered__date">
        {topRecoveredDate ? topRecoveredDate : "Don't have date"}{" "}
        {topRecoveredMonth}
      </div>
    </div>
  );
};
