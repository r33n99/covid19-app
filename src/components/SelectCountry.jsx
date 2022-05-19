import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFiveDays, selectCountry } from "../features/slice/covidSlice";

export const SelectCountry = () => {
  const { countries, selectedCountry } = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  const handleChangeCountry = (e) => {
    dispatch(selectCountry(e.target.value));
  };

  React.useEffect(() => {
    dispatch(getDataFiveDays(selectedCountry));
  }, [selectedCountry, dispatch]);
  return (
    <>
      <select
        onChange={handleChangeCountry}
        className="select-country"
        value={selectedCountry}
      >
        {countries.map((item, index) => (
          <option
            key={`${new Date()} + ${index}`}
            className="select-country__item"
            value={item.Slug}
          >
            {item.Country}
          </option>
        ))}
      </select>
    </>
  );
};
