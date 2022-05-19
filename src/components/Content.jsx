import React from 'react'
import { useSelector } from 'react-redux'
import { DayInfo } from './DayInfo'
import { Preloader } from './Preloader'
import { TopRecovered } from './TopRecovered'

export const Content = () => {
  const {loading} = useSelector((state) => state.covid)
  return (
    <div className='content'>
        {loading ? <Preloader /> : <DayInfo />}
        <TopRecovered />
    </div>
  )
}
