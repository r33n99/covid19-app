import React from "react";
import { useDispatch } from "react-redux";
import { Content } from "./components/Content";
import { SelectCountry } from "./components/SelectCountry";
import { getDataCountries } from "./features/slice/covidSlice";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDataCountries()); // get countries data
  }, [dispatch]);

  return (
    <div className="container">
      <SelectCountry />
      <Content />
    </div>
  );
}

export default App;
