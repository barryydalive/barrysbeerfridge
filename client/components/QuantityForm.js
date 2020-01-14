import React, { useContext, } from 'react'
import { useFormik, } from 'formik'
import { FridgeContext, BeerContext, } from '../context'
import axios from 'axios'

const QuantityForm = ({ toggleForm, }) => {

  const { selectedBeer, setSelectedBeer, } = useContext(FridgeContext)
  const { setBeers, } = useContext(BeerContext)
  const handleSubmit = async(values) => {
    const { amount, } = values
    const res = await axios.put(`/api/beers/${selectedBeer.id}`, { amount, })
    const updatedBeer = res.data
    console.log('updatedBeer:', updatedBeer)

    setSelectedBeer(updatedBeer)
    setBeers(prev => prev.map(ele => { if (ele.id === updatedBeer.id) { return updatedBeer };return ele }))
    toggleForm()
  }
  const formik = useFormik({ initialValues: { amount: selectedBeer.amount, }, onSubmit: handleSubmit, })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='amount'>Quantity:</label>
      <input
        id='amount'
        name='amount'
        type='number'
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default QuantityForm
