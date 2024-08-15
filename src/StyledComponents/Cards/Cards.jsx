import React from 'react'
import './Cards.css'
import Card from '../Card/Card'

const Cards = () => {
  const CardsData = [
    {
      title: "No of Staff",
      color: {
        backGround:
          " linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)",
        boxShadow: "0px 10px 20px #e0c6f5",
      },
      barValue:"25",
      value: "25,970",
    },
    {
      title: "No of Customers",
      color: {
        backGround: "lightBlue",
        boxShadow: "0px 19px 60px rgb(0 0 0 / 8%)",
      },
      barValue: "100",
      value: "27"
    },
    {
      title: "No of Pending Work",
      color: {
        backGround: "pink",
        boxShadow: "0px 19px 60px rgb(0 0 0 / 8%)",
      },
      barValue: "50",
      value: "25,97"
    },

  ]
  return (
    <div className='Cards'>

      {CardsData.map((card, id) => {
        return (
          <div className='parentContainer'>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards