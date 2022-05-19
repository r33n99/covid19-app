import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDataFiveDays } from '../features/slice/covidSlice';

export const SelectCountry = () => {

  const {countries} = useSelector((state) => state.covid);
  const dispatch = useDispatch();
  console.log(countries)
  const [selectedCountry, setSelectedCountry] = React.useState('kyrgyzstan');
  const handleChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
  }
  React.useEffect(()=> {
    dispatch(getDataFiveDays(selectedCountry))
  }, [countries, selectedCountry, dispatch])
  return (
    <>
            <select onChange={handleChangeCountry} className='select-country' value={selectedCountry}>
                {countries.map((item, index) => (
               <option key={`${new Date()} + ${index}`}  className="select-country__item" value={item.Slug}>{item.Country}</option>
                ))}
            </select>
    </>
  )
}
