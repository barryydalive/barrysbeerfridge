import React, { useState, } from 'react'
import EditBeer from './EditBeer'
import BeerCard from './BeerCard'

const BeerListItem = ({ beer, }) => {
  const [ editMode, setEditMode, ] = useState(false)

  const toggleEdit = () => {
    setEditMode((prevState) => !prevState)
  }
  if (editMode) { return <EditBeer beer={beer} toggleEdit={toggleEdit} /> }
  return (
    <li>
      <BeerCard beer={beer} />
      <button onClick={toggleEdit}>edit</button>
    </li>
  )
}

export default BeerListItem
