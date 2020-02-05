import React, { useState, useContext, } from 'react'
import { Modal, BeerModal, BeerModalImg, } from './styled'
import QuantityForm from './QuantityForm'
import { FridgeContext, BeerContext, } from '../context'
import drinkABeer from './utility/drinkABeer'
import deleteBeer from './utility/deleteBeer'
import { BeerModalInfo, BeerModalButtonDiv, BeerModalButton, } from './styled/BeerModal'

const SingleBeerModal = ({ modalOpen, setModalOpen, }) => {
  const [ changeQuantityMode, setChangeQuantityMode, ] = useState(false)
  const { selectedBeer, setSelectedBeer, } = useContext(FridgeContext)
  const { setBeers, } = useContext(BeerContext)
  const [ confirmMode, setConfirmMode, ] = useState(false)
  const beer = selectedBeer

  const removeBeer = () => { deleteBeer(beer); setBeers(prev => prev.filter(ele => ele.id !== beer.id)) }

  const handleDrinkABeer = async () => {
    const updatedBeer = await drinkABeer(beer)
    setBeers(prev => prev.map(ele => { if (ele.id === updatedBeer.id) { return updatedBeer } return ele }))
    setSelectedBeer(updatedBeer)
  }

  const confirm = () => { setConfirmMode(true) }
  const toggleForm = () => { setChangeQuantityMode(prev => !prev) }
  console.log('confirmMode:', confirmMode)
  return (
    <Modal isOpen={modalOpen} toggle={setModalOpen}>

      <BeerModal>
        {confirmMode &&
        <Modal isOpen={confirmMode} toggle={setConfirmMode}>
          <h1>are you sure you want to remove {beer.name}</h1>
          <BeerModalButton onClick={deleteBeer}> Remove! </BeerModalButton>
        </Modal>}
        <BeerModalImg src={beer.img} alt={beer.name} />
        <BeerModalInfo>
          <h1>{beer.name}</h1>
          <h3>{beer.brewery}</h3>
          <p>{beer.description}</p>
        </BeerModalInfo>

        <BeerModalButtonDiv>
          <BeerModalButton onClick={confirm}>Remove From Fridge</BeerModalButton>
          {
            changeQuantityMode ?
              <QuantityForm toggleForm={toggleForm} /> :
              <div>quantity: {beer.amount} <button onClick={toggleForm}>change</button></div>
          }
          <BeerModalButton onClick={handleDrinkABeer}>Drink One</BeerModalButton>
        </BeerModalButtonDiv>

      </BeerModal>

    </Modal>
  )
}

export default SingleBeerModal
