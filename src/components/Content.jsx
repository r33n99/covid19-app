import React from 'react'
import { DayInfo } from './DayInfo'
import { TopRecovered } from './TopRecovered'

export const Content = () => {
  return (
    <div className='content'>
        <DayInfo />
        <TopRecovered />
    </div>
  )
}
