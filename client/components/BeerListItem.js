import React, { useState, } from 'react'
import EditBeer from './EditBeer'
import BeerCard from './BeerCard'

const BeerListItem = ({ beer, onClick, }) => {
  const [ editMode, setEditMode, ] = useState(false)

  const toggleEdit = () => {
    setEditMode((prevState) => !prevState)
  }
  if (editMode) { return <EditBeer beer={beer} toggleEdit={toggleEdit} /> }
  return (
    <>
      <BeerCard beer={beer} onClick={onClick} />
    </>
  )
}

export default BeerListItem
