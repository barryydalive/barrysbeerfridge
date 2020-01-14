import React, { useState, useContext, } from 'react'
import { Modal, } from './styled'
import QuantityForm from './QuantityForm'
import { FridgeContext, BeerContext, } from '../context'
import drinkABeer from './utility/drinkABeer'
import deleteBeer from './utility/deleteBeer'

const SingleBeerModal = ({ modalOpen, setModalOpen, }) => {
  const [ changeQuantityMode, setChangeQuantityMode, ] = useState(false)
  const { selectedBeer, setSelectedBeer, } = useContext(FridgeContext)
  const { setBeers, } = useContext(BeerContext)
  const beer = selectedBeer

  const removeBeer = () => { deleteBeer(beer); setBeers(prev => prev.filter(ele => ele.id !== beer.id)) }

  const handleDrinkABeer = async() => {
    const updatedBeer = await drinkABeer(beer)
    setBeers(prev => prev.map(ele => { if (ele.id === updatedBeer.id) { return updatedBeer } return ele }))
    setSelectedBeer(updatedBeer)
  }

  const toggleForm = () => { setChangeQuantityMode(prev => !prev) }

  return (
    <Modal isOpen={modalOpen} toggle={setModalOpen}>
      <div>
        <img src={beer.img} alt={beer.name} />
        <h1>{beer.name}</h1>
        <h3>{beer.brewery}</h3>
        <p>{beer.description}</p>
        <button onClick={removeBeer}>Remove From Fridge</button>
        {
          changeQuantityMode ?
            <QuantityForm toggleForm={toggleForm} /> :
            <div>quantity: {beer.amount} <button onClick={toggleForm}>change</button></div>
        }
        <button onClick={handleDrinkABeer}>Drink One</button>

      </div>
    </Modal>
  )
}

export default SingleBeerModal
