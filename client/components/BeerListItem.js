import React, { useState, } from 'react'
import EditBeer from './EditBeer'

const BeerListItem = ({ beer, }) => {
  console.log('times')
  const { name, ABV, type, img, brewery, amount, } = beer
  const [ editMode, setEditMode, ] = useState(false)

  const toggleEdit = () => {
    setEditMode((prevState) => !prevState)
  }
  if (editMode) { return <EditBeer beer={beer} toggleEdit={toggleEdit} /> }
  return (
    <li>
      <h3>{name}</h3>
      <p>{brewery}</p>
      <p>{ABV}%</p>
      <p>quantity: {amount}</p>
      <p>type</p>
      <img alt={name}src={img}></img>
      <button onClick={toggleEdit}>edit</button>
    </li>
  )
}

export default BeerListItem
