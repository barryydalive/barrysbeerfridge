import React from 'react'

const BeerListItem = ({ beer, }) => {
  const { name, ABV, type, img, brewery, amount, } = beer

  return (
    <li>
      <h3>{name}</h3>
      <p>{brewery}</p>
      <p>{ABV}%</p>
      <p>quantity: {amount}</p>
    </li>
  )
}

export default BeerListItem
