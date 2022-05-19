import React from 'react';
import { useDispatch } from 'react-redux';
import { Content } from './components/Content';
import { SelectCountry } from './components/SelectCountry';
import { getDataCountries } from './features/slice/covidSlice';

function App() {
const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getDataCountries())
  }, [dispatch])


  return (
    <div className="wrapper">
      <div className="container">
        <SelectCountry />
        <Content/>
        </div>
    </div>
  );
}

export default App;
