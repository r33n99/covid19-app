import React from 'react'
import { useSelector } from 'react-redux';
import { OneDayInfo } from './OneDayInfo'

export const DayInfo = () => {
  const {lastCountries} = useSelector((state) => state.covid);
  console.log(lastCountries)
  return (
    <div className='one-day'>
      {lastCountries?.map((item, index) => (
        <OneDayInfo key={`${new Date()} + ${index}`} {...item} />
      ))}
    </div>
  )
}
