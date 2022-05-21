import React from "react";

export const OneDayInfo = (props) => {
  //здесь пришлось вытащить через props, потому что имя пропса совпадало с конструктором.
  const oneDayDate = new Date(props.Date).getDate(); // date of one day
  const oneDayMonth = new Date(props.Date).toLocaleString("eng", {
    month: "long",
  }); // month from Date

  return (
    <div className="one-day__item">
      <div className="one-day__item-date">
        {oneDayDate} {oneDayMonth}
      </div>
      <div className="one-day__item-temp">
        <div className="one-day__item-temp__info">
          <p>Active:</p> <span>{props.Active}</span>
        </div>
        <div className="one-day__item-temp__info">
          <p>Deaths:</p> <span>{props.Deaths}</span>
        </div>
        <div className="one-day__item-temp__info">
          <p>Confirmed:</p> <span>{props.Confirmed}</span>
        </div>
        <div className="one-day__item-temp__info">
          <p>Recovered:</p> <span>{props.Recovered}</span>
        </div>
      </div>
    </div>
  );
};
