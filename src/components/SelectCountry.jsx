import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFiveDays, selectCountry } from "../features/slice/covidSlice";

export const SelectCountry = () => {
  const { countries, selectedCountry } = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  const handleChangeCountry = (e) => {
    dispatch(selectCountry(e.target.value));
  }; // dispatch action to select country

  React.useEffect(() => {
    dispatch(getDataFiveDays(selectedCountry)); // get data for selected country
  }, [selectedCountry, dispatch]);
  return (
    <div className="select-country">
      <select
        onChange={handleChangeCountry}
        className="select-country__select"
        value={selectedCountry}
      >
        {countries.map((item, index) => (
          <option
            key={`${new Date()} + ${index}`}
            className="select__item"
            value={item.Slug}
          >
            {item.Country}
          </option>
        ))}
      </select>
    </div>
  );
};
