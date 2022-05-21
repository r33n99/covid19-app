import React from "react";
import { useSelector } from "react-redux";
import { OneDayInfo } from "./OneDayInfo";

export const DayInfo = () => {
  const { lastFiveDaysCountries } = useSelector((state) => state.covid);
  return (
    <div className="one-day">
      {lastFiveDaysCountries?.map((item) => (
        <OneDayInfo key={item.ID} {...item} />
      ))}
    </div>
  );
};
