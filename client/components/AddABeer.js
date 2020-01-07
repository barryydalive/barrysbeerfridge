import React, { useContext, } from 'react'
import { useFormik, } from 'formik'
import axios from 'axios'
import { BeerContext, } from '../context'

const addBeer = async (beer) => {
  const res = await axios.post('/api/beers', beer)
  return res.data
}

const defaultBeerValues = {
  name: '',
  ABV: 0.00,
  kind: '',
  img: '',
  brewery: '',
  amount: 0,
  untappdId: null,
}

const AddABeer = () => {
  const { setBeers, } = useContext(BeerContext)
  const formik = useFormik({
    initialValues: defaultBeerValues,
    onSubmit: async values => {
      values.type = values.kind
      const newBeer = await addBeer(values)
      setBeers(prevState => [ ...prevState, newBeer, ])
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor='brewery'>Brewery</label>
      <input
        id='brewery'
        name='brewery'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.brewery}
      />
      <label htmlFor='ABV'>ABV</label>
      <input
        id='ABV'
        name='ABV'
        type='number'
        onChange={formik.handleChange}
        value={formik.values.ABV}
      />
      <label htmlFor='img'>img</label>
      <input
        id='img'
        name='img'
        type='url'
        onChange={formik.handleChange}
        value={formik.values.img}
      />
      <label htmlFor='kind'>kind</label>
      <input
        id='kind'
        name='kind'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.kind}
      />
      <label htmlFor='amount'>amount</label>
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

export default AddABeer
