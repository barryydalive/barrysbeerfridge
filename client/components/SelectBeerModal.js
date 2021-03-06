import React, { useState, useContext, } from 'react'
import Modal from './styled/Modal'
import { useFormik, } from 'formik'
import addBeer from './utility/addBeer'
import { Redirect, } from 'react-router-dom'
import { BeerContext, } from '../context'
import getBeerImage from './utility/getBeerImage'

const SelectBeerModal = ({ modalOpen, setModalOpen, selectedBeer, }) => {
  const [ beerAdded, setBeerAdded, ] = useState(false)
  const { setBeers, } = useContext(BeerContext)
  const formik = useFormik({ initialValues: { quantity: 0, }, onSubmit: async (values) => {
    try {
      selectedBeer.amount = values.quantity
      selectedBeer.img = await getBeerImage(selectedBeer.untappdId)
      const addedBeer = await addBeer(selectedBeer)
      setBeerAdded(true)
      setBeers(prev => [ ...prev, addedBeer, ])
    } catch (err) {
      console.log(err)
    }
  }, })
  if (beerAdded) { return <Redirect to='/' /> }
  return (
    <Modal isOpen={modalOpen} toggle={setModalOpen}>
      <p>Add {selectedBeer.name} to fridge?</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='quantity'>quantity</label>
        <input
          id='quantity'
          name='quantity'
          type='number'
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
        <button type='submit'>Add</button>
      </form>
    </Modal>
  )
}
export default SelectBeerModal
