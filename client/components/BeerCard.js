import React from 'react'
import { Card, CardContainer, } from './styled'
const BeerCard = ({ beer, onClick, viewType, }) => {
  const { name, ABV, type, img, brewery, amount, } = beer

  return (
    <Card onClick={onClick}>
      <img src={img} alt={name} />
      <CardContainer >
        <h4><b>{name}</b></h4>
        <h4>{brewery}</h4>
        <p>{ABV}%</p>
        <p>{type}</p>
        {viewType !== 'search' && <p>quantity: {amount}</p> }
      </CardContainer>
    </Card>
  )
}

export default BeerCard
