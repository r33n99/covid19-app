import React from 'react'

export const OneDayInfo = ({Date,Active,Deaths,Confirmed,Recovered}) => {
  return (
    <div className='one-day__item'>
        <div className='one-day__item-date'>
            {Date}
        </div>
        <div className='one-day__item-temp'>
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
  )
}
