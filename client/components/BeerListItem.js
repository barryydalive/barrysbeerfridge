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
    <>
      <BeerCard beer={beer} onClick={toggleEdit} />
    </>
  )
}

export default BeerListItem
