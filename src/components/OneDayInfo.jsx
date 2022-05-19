import React from "react";

export const OneDayInfo = ({ Date, Active, Deaths, Confirmed, Recovered }) => {

  // const topRecoveredDate = new Date().getDate() // здесь произошли сложности в выводе даты потому что имя конструктора совпадает с именем объекта, не успел разобраться
  // const topRecoveredMonth = new Date().getMonth(); // здесь то же самое
  return (
    <div className="one-day__item">
      <div className="one-day__item-date">{Date}</div>
      <div className="one-day__item-temp">
        <div className="one-day__item-temp__container">
          <p>Active:</p> <span>{Active}</span>
        </div>
        <div className="one-day__item-temp__container">
          <p>Deaths:</p> <span>{Deaths}</span>
        </div>
        <div className="one-day__item-temp__container">
          <p>Confirmed:</p> <span>{Confirmed}</span>
        </div>
        <div className="one-day__item-temp__container">
          <p>Recovered:</p> <span>{Recovered}</span>
        </div>
      </div>
    </div>
  );
};
